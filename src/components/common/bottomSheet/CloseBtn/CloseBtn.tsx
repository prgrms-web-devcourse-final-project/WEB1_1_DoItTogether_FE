import React from 'react';
import { PlusIcon } from '@/components/common/icon';

interface CloseBtnProps {
  /** 모달 닫는 액션 */
  handleClick: () => void;
}

const CloseBtn = ({ handleClick }: CloseBtnProps) => {
  return (
    <button
      className='absolute right-1/2 top-[-70px] z-50 flex h-12 w-12 translate-x-1/2 rotate-45 items-center justify-center rounded-full bg-gray1/15 text-white'
      onClick={handleClick}
    >
      <PlusIcon className='text-white' />
    </button>
  );
};

export default React.memo(CloseBtn);
