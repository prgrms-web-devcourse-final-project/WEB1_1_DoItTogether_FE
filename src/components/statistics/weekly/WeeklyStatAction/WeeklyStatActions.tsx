import TextTag from '@/components/common/tag/TextTag/TextTag';
import WeeklyStatAction from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatAction';
import { WeeklyTotalCount } from '@/store/useWeeklyStatisticsStore';

const WeeklyStatActions = ({
  channelName,
  complimentCount,
  pokeCount,
}: Pick<WeeklyTotalCount, 'channelName' | 'complimentCount' | 'pokeCount'>) => {
  return (
    <>
      <div className='mb-4 flex items-center justify-center gap-2'>
        <TextTag type='grayfill' className='bg-gray1 px-1.5 py-1 text-white' label={channelName} />
        <p className='text-gray2 font-subhead'>칭찬/찌르기 현황</p>
      </div>
      <div className='mb-4 flex justify-between gap-3'>
        <WeeklyStatAction type='compliment' num={complimentCount} />
        <WeeklyStatAction type='tease' num={pokeCount} />
      </div>
    </>
  );
};

export default WeeklyStatActions;
