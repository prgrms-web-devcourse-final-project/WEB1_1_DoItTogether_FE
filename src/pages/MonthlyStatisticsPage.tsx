import { ChartIcon, CheckFillIcon } from '@/components/common/icon';
import Completion from '@/components/statistics/monthly/Completion/Completion';
import MonthlyGoodBad from '@/components/statistics/monthly/MonthlyGoodBad/MonthlyGoodBad';
import MonthlyGrass from '@/components/statistics/monthly/MonthlyGrass/MonthlyGrass';
import { getMonthlyMVP } from '@/services/statistics/getMonthlyMVP';
import { CompletionStatus, MonthlyDateScore } from '@/types/apis/statisticsApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MonthlyStatisticsPage = () => {
  const getPreviousMonth = () => {
    const today = new Date();
    const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 1);
    return `${lastDayPreviousMonth.getFullYear()}-${String(lastDayPreviousMonth.getMonth() + 1).padStart(2, '0')}`;
  };

  const [currentMonth, setCurrentMonth] = useState<string>(getPreviousMonth());
  const [monthlyData, setMonthlyData] = useState<MonthlyDateScore[]>([]);
  const [mvpData, setMvpData] = useState<any>(null);
  const { channelId } = useParams();

  useEffect(() => {
    const fetchMonthlyMVP = async () => {
      try {
        const response = await getMonthlyMVP({
          channelId: Number(channelId),
          targetMonth: currentMonth,
        });
        setMvpData(response.result);
      } catch (error) {
        console.error('MVP 데이터 조회 실패:', error);
      }
    };

    fetchMonthlyMVP();
  }, [currentMonth, channelId]);

  const handleMonthChange = async (monthKey: string) => {
    setCurrentMonth(monthKey);
    try {
      const response = await getMonthlyMVP({
        channelId: Number(channelId),
        targetMonth: monthKey,
      });
      setMvpData(response.result);
    } catch (error) {
      console.error('MVP 데이터 조회 실패:', error);
    }
  };

  const handleDataChange = (data: MonthlyDateScore[]) => {
    setMonthlyData(data);
  };

  // 통계 완료율, 완료일 계산
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
    <div className='flex flex-col gap-4'>
      <MonthlyGrass onMonthChange={handleMonthChange} onDataChange={handleDataChange} />
      <div className='flex items-center gap-3 text-black font-label'>
        이번달에는
        <div className='flex items-center gap-3'>
          <div className='flex items-center text-main'>
            <Completion count={currentMonthStats.completionRate} icon={<ChartIcon />} />%
          </div>
          <div className='flex items-center text-main'>
            <Completion count={currentMonthStats.completedDays} icon={<CheckFillIcon />} />
            개의
          </div>
        </div>
        작업을 완료했어요!
      </div>
      <div className='flex gap-3 py-2'>
        <MonthlyGoodBad type='good' name={mvpData?.complimentMVPNickName} />
        <MonthlyGoodBad type='bad' name={mvpData?.pokeMVPNickName} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
