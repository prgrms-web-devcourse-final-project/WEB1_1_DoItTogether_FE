import React from 'react';
import NoListIcon from '@/components/common/icon/NoListIcon';

interface NoListProps {}

const NoList: React.FC<NoListProps> = ({}) => {
  return (
    <div className='flex h-[calc(100vh-280px)] flex-1 flex-col items-center justify-center gap-[48px] whitespace-pre-line text-center text-gray3'>
      <NoListIcon />
      <p className='text-gray6 font-subhead'>
        {'현재 일정이 없어요\n +버튼을 눌러 일정을 만들어보세요'}
      </p>
    </div>
  );
};

export default NoList;
