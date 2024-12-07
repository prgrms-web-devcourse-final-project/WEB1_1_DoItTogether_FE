import Header from '@/components/common/header/Header';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { INPUT_VALIDATION } from '@/constants/validation';

const MyPageEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const nickName = location.state?.nickname;

  const [username, setUserName] = useState<string>(nickName); // 수정

  const { channelId } = useParams();
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const handleBack = () => {
    navigate(`/main/${channelId}/my-page`);
  };

  const handleChange = (value: string) => {
    setUserName(value);
    setIsEdited(true);
    if (
      value.length <= INPUT_VALIDATION.nickname.maxLength &&
      INPUT_VALIDATION.nickname.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDone = async () => {
    try {
      await patchMyInfo({ nickName: username });
      navigate(`/main/${channelId}/my-page`);
      toast({
        title: '프로필이 변경되었어요',
      });
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  return (
    <>
      <Header
        title='프로필 편집'
        isNeededDoneBtn={isEdited && !error}
        handleBack={handleBack}
        handleDone={handleDone}
      />
      <div className='mt-10 flex flex-col gap-12 px-5'>
        <div className='m-auto'>
          <ProfileImg imageUrl={imageUrl} />
        </div>
        <div className='flex flex-col gap-1'>
          <InputWithLabel
            label='이름'
            value={username}
            disabled={false}
            handleChange={handleChange}
          />
          {error && (
            <p className='text-main font-caption'>{INPUT_VALIDATION.nickname.errorMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPageEditPage;
