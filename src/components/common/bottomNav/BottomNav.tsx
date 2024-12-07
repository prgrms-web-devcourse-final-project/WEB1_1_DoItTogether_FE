import { useNavigate } from 'react-router-dom';
import AddHouseWorkBtn from './AddHouseWorkBtn/AddHouseWorkBtn';
import BottomNavBtn from './BottomNavBtn/BottomNavBtn';
import { useParams } from 'react-router-dom';
import { ChartIcon, GroupIcon, HomeIcon, ProfileIcon } from '@/components/common/icon';
import { useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      name: '홈',
      icon: (
        <HomeIcon
          width={24}
          height={24}
          fillClass={currentPath === `/main/${channelId}` ? 'text-main' : 'text-gray3'}
        />
      ),
    },
    {
      name: '통계',
      icon: (
        <ChartIcon className={currentPath.includes('statistics') ? 'text-main' : 'text-gray3'} />
      ),
    },
    {
      name: '그룹',
      icon: (
        <GroupIcon className={currentPath.includes('group-setting') ? 'text-main' : 'text-gray3'} />
      ),
    },
    {
      name: '마이',
      icon: (
        <ProfileIcon className={currentPath.includes('my-page') ? 'text-main' : 'text-gray3'} />
      ),
    },
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className='flex w-full max-w justify-between rounded-tl-4xl rounded-tr-4xl bg-white px-5 py-2'>
      <div className='flex flex-1 justify-center'>
        <BottomNavBtn
          icon={navItems[0].icon}
          name={navItems[0].name}
          handleClick={() => handleClick(`/main/${channelId}`)}
          isActive={currentPath === `/main/${channelId}`}
        />
      </div>
      <div className='flex flex-1 justify-center'>
        <BottomNavBtn
          icon={navItems[1].icon}
          name={navItems[1].name}
          handleClick={() => handleClick(`/main/${channelId}/statistics/weekly`)}
          isActive={currentPath.includes('statistics')}
        />
      </div>
      <div className='flex flex-1 justify-center'>
        <AddHouseWorkBtn handleClick={() => handleClick(`/add-housework/${channelId}/step1`)} />
      </div>
      <div className='flex flex-1 justify-center'>
        <BottomNavBtn
          icon={navItems[2].icon}
          name={navItems[2].name}
          handleClick={() => handleClick(`/main/${channelId}/group-setting`)}
          isActive={currentPath.includes('group-setting')}
        />
      </div>
      <div className='flex flex-1 justify-center'>
        <BottomNavBtn
          icon={navItems[3].icon}
          name={navItems[3].name}
          handleClick={() => handleClick(`/main/${channelId}/my-page`)}
          isActive={currentPath.includes('my-page')}
        />
      </div>
    </div>
  );
};

export default BottomNav;
