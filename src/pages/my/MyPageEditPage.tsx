import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';
import Header from '@/components/common/header/Header';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import ProfileImg from '@/components/common/profile/ProfileImg';
import { INPUT_VALIDATION } from '@/constants/validation';
import { useMyEdit } from '@/hooks/useMyEdit';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

const MyPageEditPage = () => {
  const { imageUrl, username, isEdited, error, handleBack, handleChange, handleDone } = useMyEdit();
  const { channelId } = useParams();

  return (
    <>
      <MetaTags
        title={'두잇투게더 - 프로필 편집'}
        description={'등록된 프로필을 편집할 수 있습니다.'}
        url={`https://doit-together.vercel.app/main/${channelId}/my-page/edit/`}
      />
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
          {error && <ErrorMessage message={INPUT_VALIDATION.nickname.errorMessage} />}
        </div>
      </div>
    </>
  );
};

export default MyPageEditPage;
