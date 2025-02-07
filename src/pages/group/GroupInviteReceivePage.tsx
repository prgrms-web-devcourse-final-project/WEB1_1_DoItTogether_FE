import Button from '@/components/common/button/Button/Button';
import Header from '@/components/common/header/Header';
import InputBox from '@/components/common/input/InputBox';
import MetaTags from '@/components/common/metaTags/MetaTags';
import useDevicePadding from '@/hooks/useDevicePadding';
import { useGroupInvite } from '@/hooks/useGroupInvite';

const GroupInviteReceivePage = () => {
  const { inviteLink, setInviteLink, handleBack, handleGoIn } = useGroupInvite();

  const paddingClass = useDevicePadding();

  return (
    <div className={`flex h-screen flex-col`}>
      <MetaTags
        title={'두잇투게더 - 그룹 초대'}
        description={'초대 코드를 입력하고 그룹에 참여하세요.'}
        url={'https://doit-together.vercel.app/group/invite-receive/'}
      />
      <Header title='초대받기' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='flex-1 p-5'>
        <InputBox
          placeholder='공유받은 링크를 입력해주세요'
          disabled={false}
          value={inviteLink}
          handleChange={setInviteLink}
        />
      </div>
      <div className={`sticky bottom-6 ${paddingClass} px-5`}>
        <Button
          label='입장하기'
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleGoIn}
          disabled={!inviteLink.trim()}
        />
      </div>
    </div>
  );
};

export default GroupInviteReceivePage;
