import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';
import { Group } from '@/types/apis/groupApi';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@/components/common/icon';

interface GroupOptionProps {
  /** 그룹(방)  */
  group: Group;
  /** 선택 여부 */
  isSelected?: boolean;
}

const GroupOption: React.FC<GroupOptionProps> = ({ group, isSelected }) => {
  const { setCurrentGroup, setIsGroupSelectSheetOpen, setActiveTab } = useHomePageStore();
  const navigate = useNavigate();

  const handleClick = (group: Group) => {
    setCurrentGroup(group);
    setActiveTab('전체');
    setIsGroupSelectSheetOpen(false);
    navigate(`/main/${group.channelId}`);
  };

  return (
    <li className='flex cursor-pointer items-center gap-x-2' onClick={() => handleClick(group)}>
      <HomeIcon width={24} height={24} fillClass={isSelected ? 'text-main' : 'text-gray1'} />
      <div className={`font-label ${isSelected ? 'text-gray1' : 'text-gray2'}`}>{group.name}</div>
    </li>
  );
};

export default GroupOption;
