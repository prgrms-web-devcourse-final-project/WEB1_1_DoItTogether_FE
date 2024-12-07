import { ArrowLeftIcon, ArrowRightIcon } from '@/components/common/icon';
import React from 'react';
import getWeekText from '@/utils/getWeekText';

export interface WeeklyStatDateProps {
  /** 현재 날짜 */
  currentDate: Date;
  /** 이전 주 */
  handlePrevWeek: () => void;
  /** 다음 주 */
  handleNextWeek: () => void;
}

const WeeklyStatDate: React.FC<WeeklyStatDateProps> = ({
  currentDate,
  handlePrevWeek,
  handleNextWeek,
}) => {
  // 다음 주로 이동 금지 조건 (오늘 날짜 기준으로 바로 비활성화)
  const isNextWeekDisabled = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간 초기화 (날짜 비교만)

    const nextWeekStart = new Date(today);
    nextWeekStart.setDate(today.getDate() + 7); // 오늘 기준 다음 주의 시작

    return currentDate >= today; // 오늘 이후 날짜로 넘어갈 수 없도록
  };

  return (
    <div className='mb-4 flex items-center justify-center gap-8'>
      <button onClick={handlePrevWeek}>
        <ArrowLeftIcon className='text-gray2' />
      </button>
      <span className='w-44 text-center text-gray2 font-subhead'>{getWeekText(currentDate)}</span>
      <button onClick={handleNextWeek} disabled={isNextWeekDisabled()}>
        <ArrowRightIcon className={`text-gray2 ${isNextWeekDisabled() ? 'opacity-30' : ''}`} />
      </button>
    </div>
  );
};

export default WeeklyStatDate;
