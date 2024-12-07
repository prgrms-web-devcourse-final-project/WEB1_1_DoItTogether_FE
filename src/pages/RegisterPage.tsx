import Button from '@/components/common/button/Button/Button';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import TitleCenter from '@/components/common/title/TitleCenter';
import RegisterNotice from '@/components/register/RegisterNotice';
import { INPUT_VALIDATION } from '@/constants/validation';
import { getMyInfo } from '@/services/user/getMyInfo';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getMyInfo();
        setName(response.result.nickName);
        setProfileUrl(response.result.profileImageUrl);
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSubmitButton = async () => {
    try {
      await patchMyInfo({ nickName: name });
      navigate('/survey-intro');
    } catch (error) {
      console.error('프로필 수정 및 초기 정보 받기 실패:', error);
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (
      value.length <= INPUT_VALIDATION.nickname.maxLength &&
      INPUT_VALIDATION.nickname.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={`flex h-screen w-full flex-col items-center justify-between px-5 pt-10`}>
      <div className='flex w-full flex-col items-center justify-between gap-4'>
        <TitleCenter title={`사용하실 닉네임과\n프로필을 설정해주세요`} />
        <ProfileImg imageUrl={profileUrl} />
        <div className='flex w-full flex-1 flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <InputWithLabel
              label='이름'
              value={name}
              handleChange={handleNameChange}
              placeholder='이름을 입력해주세요'
              disabled={false}
            />
            {error && (
              <p className='text-main font-caption'>{INPUT_VALIDATION.nickname.errorMessage}</p>
            )}
          </div>
          <RegisterNotice />
        </div>
      </div>
      <div className='sticky bottom-6 w-full'>
        <Button
          label='확인'
          variant='full'
          size='large'
          disabled={error}
          handleClick={handleSubmitButton}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
