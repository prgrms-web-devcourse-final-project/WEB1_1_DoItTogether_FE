import { axiosInstance } from '@/services/axiosInstance';
import { DeletePresetCategoryReq, DeletePresetCategoryRes } from '@/types/apis/presetApi';

// 현재 호출부 없음
// 프리셋 카테고리 삭제
export const deleteCategory = async (data: DeletePresetCategoryReq) => {
  const response = await axiosInstance.delete<DeletePresetCategoryRes>(
    `/api/v1/channels/${data.channelId}/presets/categories/${data.presetCategoryId}`
  );
  return response.data;
};
