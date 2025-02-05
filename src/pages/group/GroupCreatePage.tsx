import Header from '@/components/common/header/Header';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useGroupCreate } from '@/hooks/useGroupCreate';
import GroupCreateStep1 from '@/components/group/create/GroupCreateStep1';
import GroupCreateStep2 from '@/components/group/create/GroupCreateStep2';

const GroupCreatePage = () => {
  const { step, roomName, setRoomName, inviteLink, handleNext, handleBack, handleSubmit } =
    useGroupCreate();

  return (
    <div className={`flex h-screen flex-col`}>
      <MetaTags
        title={'두잇투게더 - 그룹 생성'}
        description={'새로운 그룹을 만들어 가사를 분담하세요.'}
        url={'https://doit-together.vercel.app/group/create/'}
      />
      <Header title='방만들기' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='flex-1'>
        {step === 'roomName' && (
          <GroupCreateStep1 handleNext={handleNext} roomName={roomName} setRoomName={setRoomName} />
        )}
        {step === 'invite' && (
          <GroupCreateStep2 inviteLink={inviteLink} onSubmit={handleSubmit} roomName={roomName} />
        )}
      </div>
    </div>
  );
};

export default GroupCreatePage;
