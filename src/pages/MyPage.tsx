import Header from '@/components/common/header/Header';
import ProfileImg from '@/components/common/profile/ProfileImg';
import AccountInfo from '@/components/my/AccountInfo/AccountInfo';
import ProfileEditBtn from '@/components/my/ProfileEditBtn/ProfileEditBtn';
import SurveyAgainBtn from '@/components/my/SurveyAgainBtn/SurveyAgainBtn';
import { getMyInfo } from '@/services/user/getMyInfo';
import { useEffect, useState } from 'react';
import { UserBase } from '@/types/apis/userApi';

const MyPage = () => {
  const [myInfo, setMyInfo] = useState<UserBase>({
    userId: 0,
    nickName: '',
    email: '',
    socialId: '',
    profileImageUrl: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await getMyInfo();
        setMyInfo(response.result);
      } catch (error) {
        console.error('내 정보 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyInfo();
  }, []);

  if (isLoading) {
    return <></>;
  }
  return (
    <div>
      <Header title='마이페이지' isNeededDoneBtn={false} isNeededSettingBtn={true} />
      <div className='px-5 pb-2 pt-8'>
        <ProfileImg classname='w-20 h-20' imageUrl={myInfo.profileImageUrl} />
      </div>
      <div className='flex justify-between px-5 pb-3 pt-2'>
        <AccountInfo nickname={myInfo.nickName} account={myInfo.email} />
        <ProfileEditBtn nickname={myInfo.nickName} imageUrl={myInfo.profileImageUrl} />
      </div>
      <div className='px-5'>
        <div className='mb-6 mt-2 h-[1px] w-full bg-gray5' />
      </div>

      <SurveyAgainBtn />
    </div>
  );
};

export default MyPage;
