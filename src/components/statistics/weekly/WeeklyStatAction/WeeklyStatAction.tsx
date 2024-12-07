import React from 'react';
import { Card } from '@/components/common/ui/card';
import { FingerIcon, HeartIcon } from '@/components/common/icon';

interface WeeklyStatActionProps {
  /** 칭찬, 찌르기 */
  type: 'compliment' | 'tease';
  /** 개수 */
  num: number;
}

const WeeklyStatAction: React.FC<WeeklyStatActionProps> = ({ type, num }) => {
  return (
    <Card
      className={`${type === 'compliment' ? 'bg-pink2/20' : 'bg-blue2/20'} flex w-full flex-col gap-2 border-none px-8 py-7 shadow-none`}
    >
      <div className='flex items-center justify-center gap-2'>
        {type === 'compliment' ? <HeartIcon /> : <FingerIcon />}
        <p className='text-black font-head'>{num}번</p>
      </div>
      <p className='text-center text-black font-label'>
        {type === 'compliment' ? '칭찬했어요!' : '찔렀어요!'}
      </p>
    </Card>
  );
};

export default WeeklyStatAction;
