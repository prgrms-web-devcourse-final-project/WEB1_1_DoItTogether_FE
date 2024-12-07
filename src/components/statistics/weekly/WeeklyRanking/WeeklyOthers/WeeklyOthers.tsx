import React from 'react';
import { WeeklyMemberScore } from '@/store/useWeeklyStatisticsStore';
import { ProfileDefaultIcon } from '@/components/common/icon';

interface WeeklyOthersProps extends WeeklyMemberScore {
  rank: number;
}

const WeeklyOthers: React.FC<WeeklyOthersProps> = ({
  rank,
  nickName,
  profileImageUrl,
  completeCount,
}) => {
  return (
    <div className='flex items-center justify-between text-gray3 font-body'>
      <div className='flex items-center gap-2'>
        <p>{rank}</p>
        <div className='flex h-8 w-8 items-center justify-center overflow-hidden rounded-full'>
          {profileImageUrl ? (
            <img
              className='h-full w-full rounded-full object-cover'
              src={profileImageUrl}
              alt='프로필 이미지'
            />
          ) : (
            <ProfileDefaultIcon />
          )}
        </div>
        <p className='text-gray3 font-body'>{nickName}</p>
      </div>
      <p>{completeCount}개</p>
    </div>
  );
};

export default WeeklyOthers;
