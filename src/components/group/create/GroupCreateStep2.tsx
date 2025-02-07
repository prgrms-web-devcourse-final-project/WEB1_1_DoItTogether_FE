import Button from '@/components/common/button/Button/Button';
import InputBox from '@/components/common/input/InputBox';
import InviteLinkWithLabel from '@/components/setting/groupSetting/InviteLink/InviteLinkWithLabel';
import useDevicePadding from '@/hooks/useDevicePadding';
import React from 'react';

interface GroupCreateStep2Props {
  inviteLink: string;
  onSubmit: () => void;
  roomName: string;
}

const GroupCreateStep2: React.FC<GroupCreateStep2Props> = ({ inviteLink, onSubmit, roomName }) => {
  const paddingClass = useDevicePadding();
  return (
    <div className='flex h-full flex-col justify-between p-5'>
      <div className='flex flex-col gap-4'>
        <InputBox value={roomName} disabled={true} />
        <InviteLinkWithLabel initialLink={inviteLink} />
      </div>
      <div className={`sticky bottom-6 ${paddingClass}`}>
        <Button
          label='입장하기'
          size='large'
          variant='full'
          className='mb-0'
          handleClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default GroupCreateStep2;
