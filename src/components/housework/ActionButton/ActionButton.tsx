import Button from '@/components/common/button/Button/Button';
import { BUTTON_TITLES } from '@/constants/addHousework';
import React from 'react';

interface ActionButtonProps {
  step: number;
  isLoading: boolean;
  isDisabled: boolean;
  handleNextClick: () => void;
}

const ActionButton = ({ step, isLoading, isDisabled, handleNextClick }: ActionButtonProps) => {
  if (isLoading) return null;

  return (
    <Button
      variant='full'
      size='large'
      label={BUTTON_TITLES[step as 1 | 2]}
      handleClick={handleNextClick}
      disabled={isDisabled}
      className='sticky bottom-6 mb-6'
    />
  );
};

export default React.memo(ActionButton);
