import React from 'react';
import { WeeklyMemberScore } from '@/store/useWeeklyStatisticsStore';
import { ProfileDefaultIcon } from '@/components/common/icon';

interface WeeklyPodiumProps extends WeeklyMemberScore {
  rank: number;
}

const WeeklyPodium: React.FC<WeeklyPodiumProps> = ({
  rank,
  nickName,
  completeCount,
  profileImageUrl,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${rank === 2 && 'order-first'}`}
    >
      <div
        className={`relative ${rank === 1 ? 'h-24 w-24' : 'h-16 w-16'} flex items-center justify-center rounded-full`}
      >
        {profileImageUrl ? (
          <img
            src={profileImageUrl}
            alt='profile'
            className='h-full w-full rounded-full object-cover'
          />
        ) : (
          <ProfileDefaultIcon />
        )}
        <div
          className={`absolute ${rank === 1 ? '-left-0' : '-left-2'} top-0 flex h-6 w-6 items-center justify-center rounded-full ${
            rank === 1 ? 'bg-rank1' : rank === 2 ? 'bg-rank2' : rank === 3 ? 'bg-rank3' : 'bg-gray3'
          } text-white font-label`}
        >
          {rank}
        </div>
      </div>
      <p className='text-black font-body'>{nickName}</p>
      <p className='rounded-full bg-main px-3 py-1 text-white font-label'>
        {nickName === '-' ? '-' : `${completeCount}개`}
      </p>
    </div>
  );
};

export default WeeklyPodium;
