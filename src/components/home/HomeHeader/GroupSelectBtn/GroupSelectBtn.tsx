import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';
import { HomeIcon } from '@/components/common/icon';

const GroupSelectBtn: React.FC = ({}) => {
  const { currentGroup, setIsGroupSelectSheetOpen } = useHomePageStore();

  return (
    <>
      <button
        className='flex items-center rounded-full bg-main px-3 py-2 text-12 text-white'
        onClick={() => setIsGroupSelectSheetOpen(true)}
      >
        <HomeIcon fillClass='text-white' />
        <div className='pl-2 font-caption'>{currentGroup.name}</div>
      </button>
    </>
  );
};

export default GroupSelectBtn;
