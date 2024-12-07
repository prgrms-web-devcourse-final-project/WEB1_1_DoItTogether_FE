import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'font-caption inline-flex items-center rounded-lg px-1.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white',
        secondary: 'bg-main text-white',
        disabled: 'bg-gray3 bg-opacity-50 text-white',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        darkfill: 'border-transparent bg-black text-white px-4 py-2 rounded-lg font-medium',
        grayfill: 'border-transparent bg-black text-white px-4 py-2 rounded-lg font-medium',
        noselected: 'bg-sub2 text-sub1',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
