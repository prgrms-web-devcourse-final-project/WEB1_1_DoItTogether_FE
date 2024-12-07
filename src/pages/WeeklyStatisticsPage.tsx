import React from 'react';
import WeeklyStatDate from '@/components/statistics/weekly/WeeklyStatDate/WeeklyStatDate';
import WeeklyCompletion from '@/components/statistics/weekly/WeeklyCompletion/WeeklyCompletion';
import WeeklyStatActions from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatActions';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';
import useWeeklyStateStore from '@/store/useWeeklyStatisticsStore';
import useWeeklyStatistics from '@/hooks/useWeeklyStatistics';

const WeeklyStatisticsPage: React.FC = () => {
  const { currentDate, totalCountData, scoreCountData } = useWeeklyStateStore();
  const { handlePrevWeek, handleNextWeek } = useWeeklyStatistics();

  return (
    <>
      <WeeklyStatDate
        currentDate={currentDate}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
      />
      <WeeklyCompletion
        channelName={totalCountData.channelName}
        completeCount={totalCountData.completeCount}
        unCompletedCount={totalCountData.unCompletedCount}
      />
      <WeeklyStatActions
        complimentCount={totalCountData.complimentCount}
        pokeCount={totalCountData.pokeCount}
      />
      <WeeklyRanking rankings={scoreCountData} />
    </>
  );
};

export default WeeklyStatisticsPage;
