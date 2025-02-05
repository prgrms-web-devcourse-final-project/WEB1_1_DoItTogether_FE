import { CompletionText, MonthlyGoodBad, MonthlyGrass } from '@/components/statistics/monthly';
import useMonthlyStatistics from '@/hooks/useMonthlyStatistics';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

const MonthlyStatisticsPage = () => {
  const { mvpData, handleMonthChange, handleDataChange, monthlyData, currentMonth } =
    useMonthlyStatistics();
  const { channelId } = useParams();

  return (
    <div className='flex flex-col gap-4'>
      <MetaTags
        title={'두잇투게더 - 월간 통계'}
        description={'그룹의 월간 통계를 확인해보세요.'}
        url={`https://doit-together.vercel.app/main/${channelId}/statistics/monthly/`}
      />
      <MonthlyGrass onMonthChange={handleMonthChange} onDataChange={handleDataChange} />
      <CompletionText monthlyData={monthlyData} currentMonth={currentMonth} />
      <div className='flex gap-3 py-2'>
        <MonthlyGoodBad type='good' name={mvpData?.complimentMVPNickName} />
        <MonthlyGoodBad type='bad' name={mvpData?.pokeMVPNickName} />
      </div>
    </div>
  );
};

export default MonthlyStatisticsPage;
