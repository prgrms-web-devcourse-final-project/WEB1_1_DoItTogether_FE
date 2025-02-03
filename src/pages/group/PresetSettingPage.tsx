import Header from '@/components/common/header/Header';
// import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
// import Tab from '@/components/common/tab/Tab/Tab';
// import PresetAddInput from '@/components/setting/presetSetting/PresetAddInput';
import { PresetTabName } from '@/constants';
import { convertTabNameToChargers } from '@/utils/convertUtils';
import usePresetSetting from '@/hooks/usePresetSetting';
import usePresetSettingStore from '@/store/usePresetSettingStore';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';
import { useMemo, lazy, Suspense } from 'react';

const PresetTab = lazy(() => import('@/components/common/tab/PresetTab/PresetTab'));
const Tab = lazy(() => import('@/components/common/tab/Tab/Tab'));
const PresetAddInput = lazy(() => import('@/components/setting/presetSetting/PresetAddInput'));

const PresetSettingPage = () => {
  const { categoryList, activeTab, cateActiveTab, deleteButtonStates, presetData } =
    usePresetSettingStore();
  const { handleSelectClick, handleDeleteClick, handleBack, handleTabChange, handleCateTabChange } =
    usePresetSetting();
  const { channelId } = useParams();

  return (
    <div className={`flex h-screen flex-col`}>
      <MetaTags
        title={'두잇투게더 - 프리셋 설정'}
        description={'사용자정의 프리셋을 추가하고 삭제할 수 있습니다.'}
        url={`https://doit-together.vercel.app/group-setting/${channelId}/preset-setting/`}
      />
      <div className='sticky top-0 z-10 bg-[#fff]'>
        <Header title='프리셋 관리' isNeededDoneBtn={false} handleBack={handleBack} />
        <Suspense fallback={<div></div>}>
          <Tab
            activeTab={activeTab}
            handleSetActiveTab={handleTabChange}
            chargers={useMemo(() => convertTabNameToChargers(PresetTabName), [])}
          />
        </Suspense>
      </div>
      {activeTab === PresetTabName.USER_DATA ? (
        <>
          <div className='mt-5 flex-1'>
            <Suspense fallback={<div></div>}>
              <PresetTab
                presetData={presetData}
                cateActiveTab={cateActiveTab}
                setCateActiveTab={handleCateTabChange}
                isPresetSettingCustom={true}
                deleteButtonStates={deleteButtonStates}
                handleDeleteClick={handleDeleteClick}
                handleClick={handleSelectClick}
              />
            </Suspense>
          </div>
          <div className='sticky bottom-0 bg-[#fff]'>
            <Suspense fallback={<div></div>}>
              <PresetAddInput categoryList={categoryList} />
            </Suspense>
          </div>
        </>
      ) : (
        <div className='mt-5 flex-1'>
          <Suspense fallback={<div></div>}>
            <PresetTab presetData={presetData} isPresetSettingCustom={false} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default PresetSettingPage;
