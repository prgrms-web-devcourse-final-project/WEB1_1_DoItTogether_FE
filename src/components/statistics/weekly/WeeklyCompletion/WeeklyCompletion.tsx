import TextTag from '@/components/common/tag/TextTag/TextTag';
import CompletionText from '@/components/statistics/weekly/WeeklyCompletion/CompletionText/CompletionText';
import CompletionBarGraph from '@/components/statistics/weekly/WeeklyCompletion/CompletionBarGraph/CompletionBarGraph';
import { Card } from '@/components/common/ui/card';
import { WeeklyTotalCount } from '@/store/useWeeklyStatisticsStore';
import { WEEKLY_STAT_STEP } from '@/constants';

const WeeklyCompletion = ({
  channelName,
  completeCount,
  unCompletedCount,
}: Pick<WeeklyTotalCount, 'channelName' | 'completeCount' | 'unCompletedCount'>) => {
  const totalCount = completeCount + unCompletedCount;
  const completionRate = totalCount > 0 ? (completeCount / totalCount) * 100 : 0; // 완료율 계산

  const currentStep = WEEKLY_STAT_STEP.find(
    step => completionRate >= step.range[0] && completionRate <= step.range[1]
  );

  return (
    <Card className='mb-4 border-none px-5 shadow-none'>
      <div className='flex w-full items-center justify-between py-5 pl-5'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <TextTag
              type='grayfill'
              className='bg-gray1 px-1.5 py-1 text-white'
              label={channelName}
            />
            <p className='text-black font-subhead'>단계는?</p>
          </div>
          <p className='text-main font-head'>{currentStep?.name}</p>
          <div className='flex gap-2'>
            <CompletionText completedText='완료' num={completeCount} />
            <CompletionText completedText='미완료' num={unCompletedCount} />
          </div>
        </div>
        {currentStep?.icon && <currentStep.icon />}
      </div>
      <div className='pb-4'>
        <CompletionBarGraph completionRate={completionRate} />
      </div>
    </Card>
  );
};

export default WeeklyCompletion;
