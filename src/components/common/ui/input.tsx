import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'text-base file:text-sm md:text-sm flex h-9 w-full rounded-md border-[1px] bg-transparent px-3 py-1 transition-colors',
          'file:border-0 file:bg-transparent file:font-medium file:text-foreground',
          'placeholder:text-muted-foreground',
          'focus:border-[1px] focus:border-main focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'border-gray3/30', // 기본 border 색상을 gray4로 변경
          'focus:border-[#1FCFBA]', // focus 시에만 민트 색상으로 변경
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
