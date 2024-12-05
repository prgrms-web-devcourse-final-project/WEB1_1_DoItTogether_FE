import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';
import StatisticsLayout from '@/layout/StatisticsLayout';

import ErrorPage from '@/pages/ErrorPage';
import LandingPage from '@/pages/LandingPage';
import RegisterPage from '@/pages/RegisterPage';
import SurveyIntroPage from '@/pages/SurveyIntroPage';
import SurveyPage from '@/pages/SurveyPage';
import GroupCreatePage from '@/pages/GroupCreatePage';
import GroupSelectPage from '@/pages/GroupSelectPage';
import GroupSettingPage from '@/pages/GroupSettingPage';
import HomePage from '@/pages/HomePage';
import WeeklyStatisticsPage from '@/pages/WeeklyStatisticsPage';
import MonthlyStatisticsPage from '@/pages/MonthlyStatisticsPage';
import PresetSettingPage from '@/pages/PresetSettingPage';
import MyPage from '@/pages/MyPage';
import MyPageEditPage from '@/pages/MyPageEditPage';
import AccountManagePage from '@/pages/AccountManagePage';
import LeavePage from '@/pages/LeavePage';
import HouseWorkStepOnePage from '@/pages/HouseWorkStepOnePage';
import HouseWorkStepTwoPage from '@/pages/HouseWorkStepTwoPage';
import GroupInviteReceivePage from '@/pages/GroupInviteReceivePage';
import ScrollToTop from '@/components/common/scroll/ScrollToTop';
import { Toaster } from '@/components/common/ui/toaster';
import { AnimatePresence, motion } from 'framer-motion';

const RootLayout = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 40 }} // x값을 약간 줄임
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80, // 강성을 낮춤 (더 부드러워짐)
            damping: 17, // 감쇠를 조정
            mass: 0.8, // 질량 추가 (더 자연스러운 움직임)
            duration: 0.4, // 지속시간 약간 증가
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Toaster />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/survey-intro',
        element: <SurveyIntroPage />,
      },
      {
        path: '/survey',
        element: <SurveyPage />,
      },
      {
        path: '/group-select',
        element: <GroupSelectPage />,
      },
      {
        path: '/group/create',
        element: <GroupCreatePage />,
      },
      {
        path: '/group/invite-receive',
        element: <GroupInviteReceivePage />,
      },
      {
        path: '/main/:channelId',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'statistics',
            element: <StatisticsLayout />,
            children: [
              {
                index: true, // 기본 리다이렉트
                element: <WeeklyStatisticsPage />,
              },
              {
                path: 'weekly',
                element: <WeeklyStatisticsPage />,
              },
              {
                path: 'monthly',
                element: <MonthlyStatisticsPage />,
              },
            ],
          },
          {
            path: 'group-setting',
            element: <GroupSettingPage />,
          },
          {
            path: 'my-page',
            element: <MyPage />,
          },
          {
            path: 'my-page/edit',
            element: <MyPageEditPage />,
          },
        ],
      },
      {
        path: 'my-page/account-manage/:channelId',
        element: <AccountManagePage />,
      },
      {
        path: 'my-page/leave/:channelId',
        element: <LeavePage />,
      },
      {
        path: '/group-setting/:channelId/preset-setting',
        element: <PresetSettingPage />,
      },
      {
        path: '/add-housework/:channelId/step1',
        element: <HouseWorkStepOnePage />,
      },
      {
        path: '/add-housework/edit/:channelId/:houseworkId/step1/',
        element: <HouseWorkStepOnePage />,
      },
      {
        path: '/add-housework/:channelId/step2',
        element: <HouseWorkStepTwoPage />,
      },
      {
        path: '/add-housework/edit/:channelId/:houseworkId/step2/',
        element: <HouseWorkStepTwoPage />,
      },
    ],
  },
]);
