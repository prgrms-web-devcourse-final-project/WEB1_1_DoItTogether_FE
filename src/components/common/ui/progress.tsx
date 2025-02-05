'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';

const Progress = React.memo(
  React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
  >(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative h-1 w-full overflow-hidden rounded-full bg-gray5', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className='h-full w-full flex-1 rounded-full bg-main transition-all duration-1000 ease-in-out'
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )),
  (prevProps, nextProps) => prevProps.value === nextProps.value
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
