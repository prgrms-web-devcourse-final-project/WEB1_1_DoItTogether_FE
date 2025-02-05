import { Switch } from '@/components/common/ui/switch';
import TimePicker from '@/components/housework/TimeControl/TimePicker/TimePicker';
import { cn } from '@/lib/utils';
import TimeLabel from '@/components/housework/TimeLabel/TimeLabel'; // TimeLabel 컴포넌트 import
import React from 'react';

interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

interface TimeControlProps {
  setTime: React.Dispatch<React.SetStateAction<SelectedTime | null>>;
  time: SelectedTime | null;
  isAllday: boolean;
  setIsAllday: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeControl = ({ setTime, time, isAllday, setIsAllday }: TimeControlProps) => {
  const handleSwitchChange = () => {
    if (!isAllday) {
      setIsAllday(true);
      setTime(null);
    } else {
      setIsAllday(false);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col justify-center gap-2 !rounded-none border-b-[1px] border-solid border-gray4 border-opacity-30 bg-white px-3',
        isAllday ? 'h-14' : 'h-auto py-4'
      )}
    >
      <div className='flex items-center justify-between text-black font-body'>
        <TimeLabel isAllday={isAllday} />
        <Switch
          id='time-mode'
          checked={isAllday}
          onCheckedChange={handleSwitchChange}
          className='border data-[state=checked]:border-sub2 data-[state=checked]:bg-main'
        />
      </div>
      {!isAllday && <TimePicker initialTime={time} setTime={setTime} />}
    </div>
  );
};

export default React.memo(TimeControl);
