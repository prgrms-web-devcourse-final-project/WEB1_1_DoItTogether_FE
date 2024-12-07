import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/common/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center pb-4',
        caption_label: 'text-sm font-body text-gray',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          // buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 mb-0'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-gray1 rounded-full w-8 font-normal text-[0.8rem] w-full font-caption',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-gray1 font-body focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-white [&:has([aria-selected].day-outside)]:bg-white [&:has([aria-selected].day-range-end)]:rounded-r-full w-full',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full'
            : '[&:has([aria-selected])]:rounded-full'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 mb-0 rounded-full'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-main text-primary-foreground hover:bg-main hover:text-primary-foreground focus:bg-main focus:text-primary-foreground rounded-full',
        day_today: 'bg-gray5',
        day_outside: 'day-outside text-gray3 aria-selected:bg-main aria-selected:text-white',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({}) => <ChevronLeft className='h-4 w-4' />,
        IconRight: ({}) => <ChevronRight className='h-4 w-4' />,
      }}
      formatters={{
        formatCaption: date => {
          return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
        },
        formatWeekdayName: date => {
          return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][date.getDay()];
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
