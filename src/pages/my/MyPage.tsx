import Header from '@/components/common/header/Header';
import Line from '@/components/common/line/Line';
import ProfileImg from '@/components/common/profile/ProfileImg';
import AccountInfo from '@/components/my/AccountInfo/AccountInfo';
import ProfileEditBtn from '@/components/my/ProfileEditBtn/ProfileEditBtn';
import SurveyAgainBtn from '@/components/my/SurveyAgainBtn/SurveyAgainBtn';
import { useMy } from '@/hooks/useMy';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

const MyPage = () => {
  const { myInfo, isLoading } = useMy();
  const { channelId } = useParams();

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <MetaTags
        title={'두잇투게더 - 마이'}
        description={'등록된 내 정보를 확인할 수 있습니다.'}
        url={`https://doit-together.vercel.app/main/${channelId}/my-page/`}
      />
      <Header title='마이페이지' isNeededDoneBtn={false} isNeededSettingBtn={true} />
      <div className='px-5 pb-2 pt-8'>
        <ProfileImg classname='w-20 h-20' imageUrl={myInfo.profileImageUrl} />
      </div>
      <div className='flex justify-between px-5 pb-3 pt-2'>
        <AccountInfo nickname={myInfo.nickName} account={myInfo.email} />
        <ProfileEditBtn nickname={myInfo.nickName} imageUrl={myInfo.profileImageUrl} />
      </div>
      <Line />
      <SurveyAgainBtn />
    </>
  );
};

export default MyPage;
