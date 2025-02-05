import { useState } from 'react';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';
import { LinkIcon } from '@/components/common/icon';
import { useParams } from 'react-router-dom';

interface InviteLinkProps {
  initialLink?: string;
}

const InviteLink: React.FC<InviteLinkProps> = ({ initialLink }) => {
  const [inviteLink, setInviteLink] = useState<string>(initialLink || '');
  const { channelId: strChannelId } = useParams();
  const { toast } = useToast();

  const channelId = Number(strChannelId);

  const handleGenerateLink = async () => {
    try {
      const response = await postCreateInviteLink({ channelId: channelId });
      setInviteLink(`${response.result.inviteLink}`);
    } catch (error) {
      console.error('초대 링크 생성 실패:', error);
    }
  };

  const handleCopyLink = () => {
    toast({
      title: '링크가 복사되었어요',
    });
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink);
    }
  };

  return (
    <div className='flex h-14 items-center justify-between gap-4 border-b-[1px] border-solid border-gray4 border-opacity-30 bg-white px-2 text-gray3 font-label'>
      {inviteLink ? (
        <>
          <LinkIcon className='fill-gray3' />
          <div className='min-w-0 flex-1 overflow-hidden'>
            <p className='truncate text-gray3'>{inviteLink}</p>
          </div>
          <button
            className='shrink-0 underline underline-offset-2 font-caption'
            onClick={handleCopyLink}
          >
            링크복사
          </button>
        </>
      ) : (
        <>
          <p className='flex-1'>유효한 초대 코드가 없습니다</p>
          <button
            onClick={handleGenerateLink}
            className='underline underline-offset-2 font-caption'
          >
            발급받기
          </button>
        </>
      )}
    </div>
  );
};

export default InviteLink;
