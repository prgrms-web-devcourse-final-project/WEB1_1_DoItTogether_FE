import React, { useState } from 'react';

interface StepProps<T> {
  children: React.ReactNode;
  name: T;
}

type FunnelProps<T> = {
  children: React.ReactElement<StepProps<T>>[] | React.ReactElement<StepProps<T>>;
};

type FunnelComponent<T> = React.FC<FunnelProps<T>> & {
  Step: React.FC<StepProps<T>>;
};

const useFunnel = <T extends string>(initialStep: T) => {
  const [step, setStep] = useState<T>(initialStep);

  const Step = (props: StepProps<T>) => {
    return <>{props.children}</>;
  };

  const Funnel: FunnelComponent<T> = Object.assign(
    ({ children }: FunnelProps<T>) => {
      const targetStep = React.Children.toArray(children).find(
        childStep => (childStep as React.ReactElement).props.name === step
      );
      return targetStep as React.ReactElement;
    },
    { Step }
  );

  return [Funnel, setStep, step] as const;
};

export default useFunnel;
