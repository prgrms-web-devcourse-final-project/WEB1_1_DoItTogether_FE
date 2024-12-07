import Button from '@/components/common/button/Button/Button';
import Error404Icon from '@/components/common/icon/Error404Icon';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.getItem('access_token') ? navigate('/group-select') : navigate('/');
  };
  return (
    <div className={`flex h-screen flex-col items-center justify-between pb-6`}>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <Error404Icon />
        <div className='text-gray3 font-label'>요청하신 페이지를 찾을 수 없습니다</div>
      </div>
      <div className='w-full px-5'>
        <Button label='돌아가기' variant='full' size='large' handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ErrorPage;
