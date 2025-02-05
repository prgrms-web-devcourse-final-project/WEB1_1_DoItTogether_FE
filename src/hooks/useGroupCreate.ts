import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateGroup } from '@/services/group/postCreateGroup';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';

type StepType = 'roomName' | 'invite';

export const useGroupCreate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepType>('roomName');
  const [roomName, setRoomName] = useState('');
  const [groupInfo, setGroupInfo] = useState<{ inviteLink: string; channelId: number } | null>(
    null
  );

  const handleNext = useCallback(async () => {
    if (!roomName.trim()) return;

    try {
      const createResult = await postCreateGroup({ name: roomName });
      const { channelId } = createResult.result;

      const createLink = await postCreateInviteLink({ channelId });
      const { inviteLink } = createLink.result;

      setGroupInfo({ inviteLink, channelId });
      setStep('invite');
    } catch (error) {
      console.error('그룹 생성 또는 초대 링크 생성 실패:', error);
    }
  }, [roomName]);

  const handleBack = () => {
    step === 'invite' ? setStep('roomName') : navigate('/group-select');
  };

  const handleSubmit = () => {
    if (groupInfo) {
      navigate(`/main/${groupInfo.channelId}`);
    }
  };

  return {
    step,
    roomName,
    setRoomName,
    inviteLink: groupInfo?.inviteLink || '',
    handleNext,
    handleBack,
    handleSubmit,
  };
};
