import Button from '@/components/common/button/Button/Button';
import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import TitleCenter from '@/components/common/title/TitleCenter';
import RegisterNotice from '@/components/register/RegisterNotice';
import { INPUT_VALIDATION } from '@/constants/validation';
import { useRegister } from '@/hooks/useRegister';
import MetaTags from '@/components/common/metaTags/MetaTags';
import useDevicePadding from '@/hooks/useDevicePadding';

const RegisterPage = () => {
  const { name, profileUrl, error, handleNameChange, handleSubmitButton } = useRegister();

  const paddingClass = useDevicePadding();

  return (
    <div className={`flex h-screen w-full flex-col items-center justify-between px-5 pt-10`}>
      <MetaTags
        title={'두잇투게더 - 회원가입'}
        description={'두잇투게더에 가입해보세요.'}
        url={`https://doit-together.vercel.app/register/`}
      />
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
            {error && <ErrorMessage message={INPUT_VALIDATION.nickname.errorMessage} />}
          </div>
          <RegisterNotice />
        </div>
      </div>
      <div className={`sticky bottom-6 ${paddingClass} w-full`}>
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
