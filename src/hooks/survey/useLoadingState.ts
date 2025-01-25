import { useState } from 'react';

const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return { isLoading, setIsLoading, isCompleted, setIsCompleted };
};

export default useLoadingState;
