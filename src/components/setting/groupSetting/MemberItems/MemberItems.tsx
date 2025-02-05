import MemberItem from '@/components/setting/groupSetting/MemberItems/MemberItem';
import { User } from '@/types/apis/groupApi';
import React from 'react';

interface MemberItemsProps {
  leader: boolean;
  members: User[];
  currentUser: User | null;
  handleClick?: (member: User) => void;
}

const MemberItems: React.FC<MemberItemsProps> = ({ leader, members, currentUser, handleClick }) => {
  return (
    <div className='flex flex-col'>
      <p className='pb-2 text-black font-label'>그룹원 관리</p>
      <div className='flex flex-col'>
        {members.map(member => (
          <MemberItem
            key={member.userId}
            leader={leader}
            nickName={member.nickName}
            isCurrentUser={currentUser ? member.userId === currentUser.userId : false}
            handleClick={() => handleClick?.(member)}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MemberItems);
