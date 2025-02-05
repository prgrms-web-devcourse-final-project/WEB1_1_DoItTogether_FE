import React from 'react';
import { Group } from '@/types/apis/groupApi';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import { NoGroupIcon } from '@/components/common/icon';

interface GroupListProps {
  groups: Group[];
  handleClick: (group: Group) => void;
}

const GroupList: React.FC<GroupListProps> = React.memo(({ groups, handleClick }) => {
  if (groups.length === 0) {
    return (
      <div className='flex flex-1 flex-col items-center justify-center gap-4 whitespace-pre-line text-center text-gray3'>
        <NoGroupIcon />
        <p className='font-subhead'>{'현재 방이 없어요\n새로운 방을 만들어보세요'}</p>
      </div>
    );
  }

  return (
    <>
      {groups.map(group => (
        <OpenSheetBtn
          key={group.channelId}
          text={group.name}
          handleClick={() => handleClick(group)}
          type='groupSelect'
        />
      ))}
    </>
  );
});

export default GroupList;
