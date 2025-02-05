import React, { Suspense, lazy } from 'react';
import { useHomePage } from '@/hooks/useHomePage';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

const GroupSelectSheet = lazy(() => import('@/components/home/GroupSelectSheet/GroupSelectSheet'));
const HomeHeader = lazy(() => import('@/components/home/HomeHeader/HomeHeader'));
const HouseworkList = lazy(() => import('@/components/home/HouseworkList/HouseworkList'));
const NoList = lazy(() => import('@/components/home/NoList/NoList'));
const WeeklyDateAndTab = lazy(() => import('@/components/home/WeeklyDateAndTab'));

const HomePage: React.FC = () => {
  const {
    chargers,
    activeTab,
    setActiveTab,
    filteredHouseworks,
    handleAction,
    handleEdit,
    handleDelete,
  } = useHomePage();
  const { channelId } = useParams();

  return (
    <>
      <MetaTags
        title={'두잇투게더 - 메인'}
        description={'등록된 집안일을 확인하고 관리해보세요.'}
        url={`https://doit-together.vercel.app/main/${channelId}/`}
      />

      <Suspense fallback={<div></div>}>
        <HomeHeader />
        <WeeklyDateAndTab
          activeTab={activeTab}
          handleSetActiveTab={setActiveTab}
          chargers={chargers}
        />
        {!filteredHouseworks || filteredHouseworks.length === 0 ? (
          <NoList />
        ) : (
          <HouseworkList
            items={filteredHouseworks}
            handleAction={handleAction}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
        <GroupSelectSheet />
      </Suspense>
    </>
  );
};

export default HomePage;
