import { PlusIcon } from '@/components/common/icon';
import React from 'react';

interface AddHouseWorkBtnProps {
  handleClick?: () => void;
}

const AddHouseWorkBtn: React.FC<AddHouseWorkBtnProps> = ({ handleClick }) => {
  return (
    <button
      className='flex h-12 w-12 items-center justify-center rounded-full bg-main text-white'
      onClick={handleClick}
    >
      <PlusIcon className='text-white' />
    </button>
  );
};

export default AddHouseWorkBtn;
