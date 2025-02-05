import ManagerItem from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItem';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { User } from '@/types/apis/groupApi';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';

interface ManagerItemsProps {
  // isAiCardOpen: boolean;
  setSelectedValue: Dispatch<SetStateAction<number | null>>;
  selectedValue: number | null;
  members: User[];
}

const ManagerItems: React.FC<ManagerItemsProps> = ({
  // isAiCardOpen,
  setSelectedValue,
  selectedValue,
  members,
}) => {
  const { setNickName } = useAddHouseWorkStore();

  const createHandleClick = useCallback(
    (id: number, nickname: string) => () => {
      if (selectedValue === id) {
        setSelectedValue(null);
        setNickName('');
      } else {
        setSelectedValue(id);
        setNickName(nickname);
      }
    },
    [selectedValue, setSelectedValue, setNickName]
  );

  return (
    <ul className='my-4 flex h-[220px] flex-col overflow-y-auto pt-2 no-scrollbar'>
      {members.map(member => (
        <ManagerItem
          key={member.userId}
          name={member.nickName}
          handleClick={createHandleClick(member.userId, member.nickName)}
          selectState={selectedValue === member.userId ? 'selected' : 'default'}
        />
      ))}
    </ul>
  );
};

export default ManagerItems;
