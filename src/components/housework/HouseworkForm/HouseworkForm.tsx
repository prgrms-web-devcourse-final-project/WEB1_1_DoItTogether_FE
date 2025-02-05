import React from 'react';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import OpenSheetBtnWithLabel from '@/components/common/button/OpenSheetBtn/OpenSheetBtnWithLabel';
import TimeControl from '@/components/housework/TimeControl/TimeControl';
import { DateIcon, EtcIcon } from '@/components/common/icon';
import { SelectedTime } from '@/hooks/useAddHouseWork';

interface HouseworkFormProps {
  task: string;
  startDate: string;
  handleHouseWorkClick: () => void;
  handleDueDateClick: () => void;
  setTime: React.Dispatch<React.SetStateAction<SelectedTime | null>>;
  time: SelectedTime | null;
  isAllday: boolean;
  setIsAllday: React.Dispatch<React.SetStateAction<boolean>>;
}

const ICONS = {
  ETC: {
    DEFAULT: <EtcIcon />,
    GRAY: <EtcIcon fillOneClass='fill-gray2' fillTwoClass='fill-gray3' />,
  },
  DATE: {
    DEFAULT: <DateIcon className='text-main' />,
    GRAY: <DateIcon className='text-gray3' />,
  },
} as const;

const HouseworkForm: React.FC<HouseworkFormProps> = ({
  task,
  startDate,
  handleHouseWorkClick,
  handleDueDateClick,
  setTime,
  time,
  isAllday,
  setIsAllday,
}) => {
  return (
    <section className='flex flex-1 flex-col gap-4' aria-label='집안일 추가 컨텐츠'>
      {task ? (
        <OpenSheetBtnWithLabel
          selected={task}
          handleClick={handleHouseWorkClick}
          icon={ICONS.ETC.DEFAULT}
        />
      ) : (
        <OpenSheetBtn
          text='어떤 집안일인가요?'
          handleClick={handleHouseWorkClick}
          type='housework'
          icon={ICONS.ETC.GRAY}
        />
      )}
      {startDate ? (
        <OpenSheetBtnWithLabel
          selected={startDate}
          handleClick={handleDueDateClick}
          icon={ICONS.DATE.DEFAULT}
        />
      ) : (
        <OpenSheetBtn
          text='언제 해야 하나요?'
          handleClick={handleDueDateClick}
          type='housework'
          icon={ICONS.DATE.GRAY}
        />
      )}
      <TimeControl setTime={setTime} time={time} isAllday={isAllday} setIsAllday={setIsAllday} />
    </section>
  );
};

export default HouseworkForm;
