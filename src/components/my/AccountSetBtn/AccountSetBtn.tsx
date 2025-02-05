import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SettingIcon } from '@/components/common/icon';

const AccountSetBtn = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const handleClick = () => {
    navigate(`/my-page/account-manage/${channelId}`);
  };
  return (
    <button onClick={handleClick} className='flex items-center'>
      <SettingIcon width={20} height={20} className='text-gray1' />
    </button>
  );
};

export default AccountSetBtn;
