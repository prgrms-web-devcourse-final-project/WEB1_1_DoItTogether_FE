import { useEffect } from 'react';
import { getAllCategoryName, postCreatePresetItem } from '@/services/setting/preset';
import usePresetSettingStore from '@/store/usePresetSettingStore';
import { useNavigate } from 'react-router-dom';
import { mockData } from '@/mock/mockPresetSettingPage';
import { PresetDefault, PresetTabName } from '@/constants';
import useHomePageStore from '@/store/useHomePageStore';

const usePresetSetting = () => {
  const navigate = useNavigate();
  const { setCategoryList, setDeleteButtonStates, activeTab } = usePresetSettingStore();
  const { currentGroup } = useHomePageStore();
  const channelId = currentGroup.channelId;

  useEffect(() => {
    initCategoryList();
  }, []);

  const initCategoryList = async () => {
    try {
      const response = await getAllCategoryName({ channelId });
      const categoryListData = response.result.categoryList;
      setCategoryList(categoryListData);
    } catch (error) {
      console.error('카테고리 초기화 오류: ', error);
    }
  };

  const handleAddInput = async (name: string, presetCategoryId: number) => {
    try {
      const response = await postCreatePresetItem({
        channelId,
        presetCategoryId,
        name,
      });
      console.log(response);
    } catch (error) {
      console.error('프리셋 아이템 추가 오류: ', error);
    }
  };

  const handleSettingClick = (itemId: number) => {
    setDeleteButtonStates(prev => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleDeleteClick = (itemId: number) => {
    setDeleteButtonStates(prev => ({
      ...prev,
      [itemId]: false,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getPresetData = () => {
    return activeTab === PresetTabName.USER_DATA ? mockData.userData : PresetDefault;
  };

  return {
    handleAddInput,
    handleSettingClick,
    handleDeleteClick,
    handleBack,
    getPresetData,
  };
};

export default usePresetSetting;
