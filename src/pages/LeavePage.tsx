import Button from '@/components/common/button/Button/Button';
import Header from '@/components/common/header/Header';
import { Checkbox } from '@/components/common/ui/checkbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LogoIcon from '@/components/common/icon/LogoIcon';
import { deleteUser } from '@/services/user/deleteUser';

const LeavePage = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const [isChecked, setIsChecked] = useState(false);

  const handleBack = () => {
    navigate(`/my-page/account-manage/${channelId}`);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDone = async () => {
    try {
      await deleteUser();
      localStorage.removeItem('access_token');
      navigate('/');
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
    }
  };

  return (
    <div className={`flex h-screen flex-col gap-6`}>
      <Header title='탈퇴하기' handleBack={handleBack} isNeededDoneBtn={false} />
      <div className='flex flex-1 flex-col gap-4 px-5'>
        <div className='flex h-24 w-full items-center justify-center'>
          <LogoIcon width={125} height={40} />
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <p className='font-body'>두잇투게더 탈퇴 전 꼭 확인하세요</p>
          <div className='flex flex-col items-center justify-center text-gray3 font-caption'>
            <p>계정 탈퇴 시 개인 정보를 비롯한 이용 중인 모든 기록이 삭제됩니다.</p>
            <p>이전 기록에 대한 어떠한 사후처리도 도와드릴 수 없게 됩니다</p>
          </div>
        </div>
        <div className='rounded-lg bg-gray4/30 p-4'>
          <ul className='flex list-disc flex-col gap-2 rounded-lg pl-5 text-gray1 font-caption'>
            <li>개인과 관련된 모든 계정 정보가 삭제됩니다</li>
            <li>집안일 담당업무 및 저장 내역도 모두 삭제되니 탈퇴 전 다시 확인해주세요</li>
          </ul>
        </div>
        <div className='my-4 flex items-center gap-2 font-caption'>
          <Checkbox id='check' onCheckedChange={handleCheckboxChange} />
          <label htmlFor='check' className='text-gray3 underline'>
            모두 확인하였으며, 계속 진행합니다.
          </label>
        </div>
      </div>
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
