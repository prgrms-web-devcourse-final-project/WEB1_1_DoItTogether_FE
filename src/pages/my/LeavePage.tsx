import Button from '@/components/common/button/Button/Button';
import Header from '@/components/common/header/Header';
import LeaveGuide from '@/components/my/LeaveGuide/LeaveGuide';
import { useLeave } from '@/hooks/useLeave';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';
import useDevicePadding from '@/hooks/useDevicePadding';

const LeavePage = () => {
  const { isChecked, handleBack, handleCheckboxChange, handleDone } = useLeave();
  const { channelId } = useParams();
  const paddingClass = useDevicePadding();

  return (
    <div className={`flex h-screen flex-col gap-6 ${paddingClass}`}>
      <MetaTags
        title={'두잇투게더 - 탈퇴'}
        description={'두잇투게더에서 탈퇴할 수 있습니다.'}
        url={`https://doit-together.vercel.app/my-page/leave/${channelId}/`}
      />
      <Header title='탈퇴하기' handleBack={handleBack} isNeededDoneBtn={false} />
      <LeaveGuide handleCheckboxChange={handleCheckboxChange} />
      <div className='px-5 pb-5'>
        <Button
          label='확인'
          variant='full'
          size='large'
          handleClick={handleDone}
          disabled={!isChecked}
        />
      </div>
    </div>
  );
};

export default LeavePage;
