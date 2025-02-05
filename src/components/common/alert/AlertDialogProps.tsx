import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/common/ui/alert-dialog';
import React from 'react';

interface AlertDialogPropsProps {
  title: string;
  trigger: React.ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AlertDialogProps = ({
  title,
  trigger,
  onConfirm,
  confirmText = '확인',
  cancelText = '취소',
  open,
  onOpenChange,
}: AlertDialogPropsProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-body'>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className='font-body'>
          <div className='flex items-center justify-center gap-4'>
            <AlertDialogCancel className='m-0 border-none bg-sub2 text-main'>
              {cancelText}
            </AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogProps;
