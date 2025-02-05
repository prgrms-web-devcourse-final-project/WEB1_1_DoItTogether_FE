import { ArrowLeftIcon, ArrowRightIcon } from '@/components/common/icon';
import { memo } from 'react';
import { getWeekText } from '@/utils/dateUtils';

export interface WeeklyStatDateProps {
  /** 현재 날짜 */
  currentDate: Date;
  /** 이전 주 */
  handlePrevWeek: () => void;
  /** 다음 주 */
  handleNextWeek: () => void;
}

const WeeklyStatDate = ({ currentDate, handlePrevWeek, handleNextWeek }: WeeklyStatDateProps) => {

  // 다음 주로 이동 금지 조건 (오늘 날짜 기준으로 바로 비활성화)
  const isNextWeekDisabled = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return currentDate >= today;
  };

  return (
    <div className='mb-4 flex items-center justify-center gap-8'>
      <button onClick={handlePrevWeek}>
        <ArrowLeftIcon className='text-gray2' />
      </button>
      <span className='w-44 text-center text-gray2 font-subhead'>{getWeekText(currentDate)}</span>
      <button onClick={handleNextWeek} disabled={isNextWeekDisabled()}>
        <ArrowRightIcon className={`text-gray2 ${isNextWeekDisabled() && 'opacity-30'}`} />
      </button>
    </div>
  );
};

export default memo(WeeklyStatDate);
