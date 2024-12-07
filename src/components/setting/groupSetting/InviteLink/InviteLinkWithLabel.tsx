import InviteLink from '@/components/setting/groupSetting/InviteLink/InviteLink';
import React from 'react';

interface InviteLinkWithLabelProps {
  initialLink?: string;
}

const InviteLinkWithLabel: React.FC<InviteLinkWithLabelProps> = ({ initialLink }) => {
  return (
    <div className='flex flex-col'>
      <p className='pb-2 text-black font-label'>방 초대 링크</p>
      <InviteLink initialLink={initialLink} />
    </div>
  );
};

export default InviteLinkWithLabel;
