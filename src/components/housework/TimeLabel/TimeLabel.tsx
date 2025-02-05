import { ClockIcon } from '@/components/common/icon';
import { Label } from '@/components/common/ui/label';
import React from 'react';

interface TimeLabelProps {
  isAllday: boolean;
}

const ICONS = {
  CLOCK: {
    DEFAULT: <ClockIcon />,
    ACTIVE: (
      <ClockIcon
        fillClass='fill-main'
        circleStrokeClass='stroke-main'
        handStrokeClass='stroke-white'
      />
    ),
  },
} as const;

const TimeLabel = ({ isAllday }: TimeLabelProps) => {
  return (
    <Label
      htmlFor='time-mode'
      className={`flex items-center gap-4 ${!isAllday ? 'text-gray' : ''}`}
    >
      {isAllday ? ICONS.CLOCK.ACTIVE : ICONS.CLOCK.DEFAULT}
      <p>{isAllday ? '하루종일 하기' : '시작시간이 언제인가요?'}</p>
    </Label>
  );
};

export default React.memo(TimeLabel);
