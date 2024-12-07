import React from 'react';
import WeeklyPodium from '@/components/statistics/weekly/WeeklyRanking/WeeklyPodium/WeeklyPodium';
import WeeklyOthers from '@/components/statistics/weekly/WeeklyRanking/WeeklyOthers/WeeklyOthers';
import { Card } from '@/components/common/ui/card';
import { WeeklyMemberScore } from '@/store/useWeeklyStatisticsStore';
interface WeeklyRankingProps {
  rankings: Array<WeeklyMemberScore>;
}

const WeeklyRanking: React.FC<WeeklyRankingProps> = ({ rankings }) => {
  const podiumData = [
    rankings[0] || { nickName: '-', completeCount: '-' },
    rankings[1] || { nickName: '-', completeCount: '-' },
    rankings[2] || { nickName: '-', completeCount: '-' },
  ];

  return (
    <Card className='flex flex-col justify-center gap-8 border-none p-8 shadow-none'>
      <p className='text-center text-gray2 font-subhead'>이번주 완료 개수 랭킹</p>
      <div className='flex items-center justify-between font-body'>
        {podiumData.map((ranker, index) => (
          <WeeklyPodium
            key={index}
            rank={index + 1}
            nickName={ranker.nickName}
            profileImageUrl={ranker.profileImageUrl}
            completeCount={ranker.completeCount}
          />
        ))}
      </div>
      <div className='flex flex-col justify-center gap-2'>
        {rankings.slice(3).map((ranker, index) => (
          <WeeklyOthers key={index + 3} rank={index + 4} {...ranker} />
        ))}
      </div>
    </Card>
  );
};

export default WeeklyRanking;
