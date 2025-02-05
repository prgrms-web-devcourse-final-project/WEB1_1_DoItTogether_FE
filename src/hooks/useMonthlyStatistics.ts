import { getMonthlyMVP } from '@/services/statistics/getMonthlyMVP';
import { MonthlyDateScore } from '@/types/apis/statisticsApi';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const useMonthlyStatistics = () => {
  const calculatePreviousMonth = () => {
    const today = new Date();
    const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 1);
    return `${lastDayPreviousMonth.getFullYear()}-${String(lastDayPreviousMonth.getMonth() + 1).padStart(2, '0')}`;
  };

  const previousMonth = useMemo(() => calculatePreviousMonth(), []);

  const [currentMonth, setCurrentMonth] = useState<string>(previousMonth);
  const [monthlyData, setMonthlyData] = useState<MonthlyDateScore[]>([]);
  const [mvpData, setMvpData] = useState<any>(null);
  const { channelId } = useParams();

  useEffect(() => {
    fetchMonthlyMVP();
  }, [currentMonth, channelId]);

  const fetchMonthlyMVP = useCallback(async () => {
    try {
      const response = await getMonthlyMVP({
        channelId: Number(channelId),
        targetMonth: currentMonth,
      });
      setMvpData(response.result);
    } catch (error) {
      console.error('MVP 데이터 조회 실패:', error);
    }
  }, [channelId, currentMonth]);

  const handleMonthChange = useCallback(
    async (monthKey: string) => {
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
    },
    [channelId]
  );

  const handleDataChange = useCallback((data: MonthlyDateScore[]) => {
    setMonthlyData(data);
  }, []);

  return {
    currentMonth,
    monthlyData,
    mvpData,
    handleMonthChange,
    handleDataChange,
  };
};

export default useMonthlyStatistics;
