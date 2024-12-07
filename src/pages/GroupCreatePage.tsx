import Header from '@/components/common/header/Header';
import { Toaster } from '@/components/common/ui/toaster';
import GroupCreateStep1 from '@/components/group/create/GroupCreateStep1';
import GroupCreateStep2 from '@/components/group/create/GroupCreateStep2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateGroup } from '@/services/group/postCreateGroup';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';

type StepType = 'roomName' | 'invite';

/**
 * todo
 * 1. channelId를 전역으로 관리
 */

const GroupCreatePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepType>('roomName');
  const [roomName, setRoomName] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [channelId, setChannelId] = useState(-1);

  const handleNext = async () => {
    if (roomName.trim()) {
      const createResult = await postCreateGroup({ name: roomName });
      const createLink = await postCreateInviteLink({ channelId: createResult.result.channelId });
      setInviteLink(createLink.result.inviteLink);
      setChannelId(createResult.result.channelId);
      setStep('invite');
    }
  };

  const handleBack = () => {
    step === 'invite' ? setStep('roomName') : navigate('/group-select');
  };

  const handleSubmit = () => {
    navigate(`/main/${channelId}`);
  };

  return (
    <div className={`flex h-screen flex-col`}>
      <Header title='방만들기' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='flex-1'>
        {step === 'roomName' && (
          <GroupCreateStep1 handleNext={handleNext} roomName={roomName} setRoomName={setRoomName} />
        )}
        {step === 'invite' && (
          <GroupCreateStep2 inviteLink={inviteLink} onSubmit={handleSubmit} roomName={roomName} />
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default GroupCreatePage;
