import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJoinGroup } from '@/services/group/postJoinGroup';
import { useToast } from '@/hooks/use-toast';

export const useGroupInvite = () => {
  const [inviteLink, setInviteLink] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBack = () => {
    navigate('/group-select');
  };

  const handleGoIn = async () => {
    try {
      const joinResult = await postJoinGroup({ inviteLink });
      navigate(`/main/${joinResult.result.channelId}`);
    } catch (error) {
      toast({ title: '코드를 다시 확인해주세요' });
      console.error('그룹 입장 실패:', error);
    }
  };

  return {
    inviteLink,
    setInviteLink,
    handleBack,
    handleGoIn,
  };
};
