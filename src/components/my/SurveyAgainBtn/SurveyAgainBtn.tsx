import Button from '@/components/common/button/Button/Button';
import Broomstick from '@/components/common/icon/Broomstick';
import { useNavigate } from 'react-router-dom';

const SurveyAgainBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/survey-intro');
  };

  return (
    <div className='relative cursor-pointer overflow-hidden px-5' onClick={handleClick}>
      <Button
        variant='full'
        size='large'
        className={'h-28 justify-between px-4'}
        label={'내 성향 다시 분석하기'}
      />
      <div className='absolute -top-8 right-5'>
        <Broomstick />
      </div>
    </div>
  );
};

export default SurveyAgainBtn;
