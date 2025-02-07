import React, { useMemo, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import AddHouseWorkBtn from './AddHouseWorkBtn/AddHouseWorkBtn';
import BottomNavBtn from './BottomNavBtn/BottomNavBtn';
import { ChartIcon, GroupIcon, HomeIcon, ProfileIcon } from '@/components/common/icon';
import useDevicePadding from '@/hooks/useDevicePadding';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const { pathname: currentPath } = useLocation();

  const handleClick = useCallback((path: string) => () => navigate(path), [navigate]);

  const navItems = useMemo(
    () => [
      {
        name: '홈',
        icon: (
          <HomeIcon
            width={24}
            height={24}
            fillClass={currentPath === `/main/${channelId}` ? 'text-main' : 'text-gray3'}
          />
        ),
        path: `/main/${channelId}`,
        isActive: currentPath === `/main/${channelId}`,
      },
      {
        name: '통계',
        icon: (
          <ChartIcon className={currentPath.includes('statistics') ? 'text-main' : 'text-gray3'} />
        ),
        path: `/main/${channelId}/statistics/weekly`,
        isActive: currentPath.includes('statistics'),
      },
      {
        name: '그룹',
        icon: (
          <GroupIcon
            className={currentPath.includes('group-setting') ? 'text-main' : 'text-gray3'}
          />
        ),
        path: `/main/${channelId}/group-setting`,
        isActive: currentPath.includes('group-setting'),
      },
      {
        name: '마이',
        icon: (
          <ProfileIcon className={currentPath.includes('my-page') ? 'text-main' : 'text-gray3'} />
        ),
        path: `/main/${channelId}/my-page`,
        isActive: currentPath.includes('my-page'),
      },
    ],
    [currentPath, channelId]
  );

  const paddingClass = useDevicePadding();

  return (
    <div
      className={`${paddingClass} flex w-full max-w justify-between rounded-tl-4xl rounded-tr-4xl bg-white px-5 py-2`}
    >
      {navItems.slice(0, 2).map(item => (
        <div key={item.name} className='flex flex-1 justify-center'>
          <BottomNavBtn
            icon={item.icon}
            name={item.name}
            handleClick={handleClick(item.path)}
            isActive={item.isActive}
          />
        </div>
      ))}
      <div className='flex flex-1 justify-center'>
        <AddHouseWorkBtn handleClick={handleClick(`/add-housework/${channelId}`)} />
      </div>
      {navItems.slice(2).map(item => (
        <div key={item.name} className='flex flex-1 justify-center'>
          <BottomNavBtn
            icon={item.icon}
            name={item.name}
            handleClick={handleClick(item.path)}
            isActive={item.isActive}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(BottomNav);
