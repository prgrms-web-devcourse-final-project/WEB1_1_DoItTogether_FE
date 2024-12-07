import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/common/ui/toast';
import { CheckIcon } from '@/components/common/icon';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={1250}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && (
                <div className='flex items-center gap-x-1'>
                  <CheckIcon />
                  <ToastTitle>{title}</ToastTitle>
                </div>
              )}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
