import BottomNav from '@/components/common/bottomNav/BottomNav';
import { Outlet } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();
  const { channelId } = useParams();

  return (
    <div className='flex min-h-screen flex-col'>
      <div className={`flex-1 ${location.pathname === `/main/${channelId}` && 'bg-gray5'}`}>
        <Outlet />
      </div>
      <div
        className={`sticky bottom-0 w-full ${location.pathname === `/main/${channelId}` && 'bg-gray5'}`}
      >
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
