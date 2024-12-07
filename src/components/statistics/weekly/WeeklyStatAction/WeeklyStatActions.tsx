import React from 'react';
import WeeklyStatAction from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatAction';
import { WeeklyTotalCount } from '@/store/useWeeklyStatisticsStore';

const WeeklyStatActions: React.FC<Pick<WeeklyTotalCount, 'complimentCount' | 'pokeCount'>> = ({
  complimentCount,
  pokeCount,
}) => {
  return (
    <div className='mb-4 flex justify-between gap-3'>
      <WeeklyStatAction type='compliment' num={complimentCount} />
      <WeeklyStatAction type='tease' num={pokeCount} />
    </div>
  );
};

export default WeeklyStatActions;
