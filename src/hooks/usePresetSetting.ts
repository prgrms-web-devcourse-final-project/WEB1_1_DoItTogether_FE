import { useEffect } from 'react';
import {
  deletePresetItem,
  getAllCategoryName,
  postCreatePresetItem,
  getAllCategoryList,
} from '@/services/preset';
import usePresetSettingStore from '@/store/usePresetSettingStore';
import { useNavigate, useParams } from 'react-router-dom';
import { Category, PresetDefault, PresetTabName } from '@/constants';

const usePresetSetting = () => {
  const navigate = useNavigate();
  const {
    setCategoryList,
    setDeleteButtonStates,
    activeTab,
    setActiveTab,
    setPresetData,
    selectedItem,
    setSelectedItem,
    setCateActiveTab,
  } = usePresetSettingStore();
  const { channelId: strChannelId } = useParams();
  const channelId = Number(strChannelId);

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

  useEffect(() => {
    getPresetData();
    setCateActiveTab(Category.ALL);
  }, [activeTab]);

  const getPresetData = async () => {
    setPresetData([]);
    if (activeTab === PresetTabName.USER_DATA) {
      try {
        const response = await getAllCategoryList({ channelId });
        setPresetData(response.result.presetCategoryList);
      } catch (error) {
        console.error('프리셋 리스트 조회 오류: ', error);
      }
    } else {
      setPresetData(PresetDefault);
    }
  };

  const handleAddInput = async (name: string, presetCategoryId: number) => {
    try {
      await postCreatePresetItem({
        channelId,
        presetCategoryId,
        name,
      });
      // 업데이트된 아이템 리스트 조회
      await getPresetData();
      setCateActiveTab(Category.ALL);
    } catch (error) {
      console.error('프리셋 아이템 추가 오류: ', error);
    }
  };

  const handleSelectClick = (presetItemId: number) => {
    const isDeselecting = selectedItem === presetItemId;
    setSelectedItem(isDeselecting ? null : presetItemId);
    setDeleteButtonStates(isDeselecting ? null : presetItemId);
  };

  const handleDeleteClick = async (presetCategoryId: number, presetItemId: number) => {
    setDeleteButtonStates(null);

    try {
      await deletePresetItem({ channelId, presetCategoryId, presetItemId });
      // 업데이트된 아이템 리스트 조회
      await getPresetData();
    } catch (error) {
      console.error('프리셋 아이템 삭제 오류: ', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.scrollTo({
      top: 0,
    });
  };

  const handleCateTabChange = (value: string) => {
    setCateActiveTab(value);
    window.scrollTo({
      top: 0,
    });
  };

  return {
    handleAddInput,
    handleSelectClick,
    handleDeleteClick,
    handleBack,
    handleTabChange,
    handleCateTabChange,
  };
};

export default usePresetSetting;
