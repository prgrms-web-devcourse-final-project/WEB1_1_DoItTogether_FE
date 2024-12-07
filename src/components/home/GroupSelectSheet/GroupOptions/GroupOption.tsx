import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';
import { Group } from '@/types/apis/groupApi';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@/components/common/icon';
import { useToast } from '@/hooks/use-toast';

interface GroupOptionProps {
  /** 그룹(방)  */
  group: Group;
  /** 선택 여부 */
  isSelected?: boolean;
}

const GroupOption: React.FC<GroupOptionProps> = ({ group, isSelected }) => {
  const { currentGroup, setCurrentGroup, setIsGroupSelectSheetOpen, setActiveTab } =
    useHomePageStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClick = (group: Group) => {
    if (currentGroup.channelId === group.channelId) {
      toast({ title: '같은 그룹으로는 변경할 수 없어요!' });
    } else {
      setCurrentGroup(group);
      setActiveTab('전체');
      setIsGroupSelectSheetOpen(false);
      navigate(`/main/${group.channelId}`);
      toast({ title: '공간이 변경되었어요' });
    }
  };

  return (
    <li className='flex cursor-pointer items-center gap-x-2' onClick={() => handleClick(group)}>
      <HomeIcon width={24} height={24} fillClass={isSelected ? 'text-main' : 'text-gray3'} />
      <div className={`font-label ${isSelected ? 'text-gray1' : 'text-gray3'}`}>{group.name}</div>
    </li>
  );
};

export default GroupOption;
