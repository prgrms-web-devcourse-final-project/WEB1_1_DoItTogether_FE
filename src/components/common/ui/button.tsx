import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none ',
  {
    variants: {
      variant: {
        full: 'bg-main text-white font-subhead border-2 border-main/50',
        secondary: 'bg-sub2 text-main font-subhead border-2 border-sub2/50 ',
        disabled: 'bg-gray4 text-white font-subhead',
        select:
          'border-b-2 border-solid border-gray4 border-opacity-30 font-body text-gray3 px-2 py-4 rounded-2xl',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-black',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        kakao: 'bg-kakao font-body',
        naver: 'bg-naver font-body',
        google: 'border-black border-solid border',
        group: 'border-b-[1px] border-solid border-gray4 border-opacity-30 bg-white !rounded-none',
        onboarding: 'rounded-2xl border-solid border-[1px] px-3 border-gray4 font-body text-gray3',
      },
      size: {
        small: 'h-12 w-full rounded-2xl ',
        large: 'h-14 w-full rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'full',
      size: 'small',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
