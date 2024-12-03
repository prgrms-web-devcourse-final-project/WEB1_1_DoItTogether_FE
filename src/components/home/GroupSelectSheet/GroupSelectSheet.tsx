import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import GroupOptions from '@/components/home/GroupSelectSheet/GroupOptions/GroupOptions';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHomePageStore from '@/store/useHomePageStore';
import Button from '@/components/common/button/Button/Button';

const GroupSelectSheet: React.FC = ({}) => {
  const navigate = useNavigate();
  const { isGroupSelectSheetOpen, setIsGroupSelectSheetOpen } = useHomePageStore();

  const handleClick = () => {
    navigate('/group-select');
    setIsGroupSelectSheetOpen(false);
  };

  const handleClose = () => {
    setIsGroupSelectSheetOpen(false);
  };

  return (
    <BottomSheet title='그룹 변경' isOpen={isGroupSelectSheetOpen} setOpen={handleClose}>
      <GroupOptions />
      <div className='px-5 py-6'>
        <Button
          label={'방 안내 페이지로 돌아가기'}
          variant='secondary'
          size='large'
          handleClick={handleClick}
        />
      </div>
    </BottomSheet>
  );
};

export default GroupSelectSheet;
