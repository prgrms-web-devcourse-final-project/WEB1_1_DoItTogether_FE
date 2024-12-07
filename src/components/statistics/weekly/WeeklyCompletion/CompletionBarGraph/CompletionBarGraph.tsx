import React from 'react';
import { Progress } from '@/components/common/ui/progress';

interface CompletionBarGraphProps {
  completionRate: number;
}

const CompletionBarGraph: React.FC<CompletionBarGraphProps> = ({ completionRate }) => {
  // const total = completed + notCompleted;
  // const completionRate = total > 0 ? (completed / total) * 100 : 0; // 완료율 계산

  return (
    <div>
      <Progress value={completionRate} className='h-5' />
    </div>
  );
};

export default CompletionBarGraph;
