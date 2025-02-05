import React from 'react';
import { ChartIcon, CheckFillIcon } from '@/components/common/icon';
import Completion from '@/components/statistics/monthly/Completion/Completion';
import { CompletionStatus, MonthlyDateScore } from '@/types/apis/statisticsApi';

interface CompletionTextProps {
  monthlyData: MonthlyDateScore[];
  currentMonth: string;
}

const CompletionText = React.memo(({ monthlyData, currentMonth }: CompletionTextProps) => {
  const calculateMonthStats = () => {
    if (!monthlyData.length) return { completionRate: 0, completedDays: 0 };

    const [year, monthStr] = currentMonth.split('-');
    const totalDaysInMonth = new Date(parseInt(year), parseInt(monthStr), 0).getDate();
    const completedDays = monthlyData.filter(
      task => task.status === CompletionStatus.ALL_DONE
    ).length;
    const completionRate = Math.round((completedDays / totalDaysInMonth) * 100);

    return { completionRate, completedDays };
  };

  const currentMonthStats = calculateMonthStats();

  return (
    <div className='flex items-center gap-1 text-black font-label'>
      이번달은
      <div className='flex items-center gap-1'>
        <div className='flex items-center text-main'>
          <Completion count={currentMonthStats.completionRate} icon={<ChartIcon />} />%
        </div>
        <div className='flex items-center text-main'>
          <Completion count={currentMonthStats.completedDays} icon={<CheckFillIcon />} />개
        </div>
      </div>
      작업을 완료했어요!
    </div>
  );
});

export default CompletionText;
