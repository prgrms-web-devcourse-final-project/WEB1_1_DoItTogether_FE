import React from 'react';
import { Progress } from '@/components/common/ui/progress';

interface CompletionBarGraphProps {
  completionRate: number;
}

const CompletionBarGraph: React.FC<CompletionBarGraphProps> = ({ completionRate }) => {
  return (
    <div>
      <Progress value={completionRate} className='h-6' />
    </div>
  );
};

export default CompletionBarGraph;
