import { axiosInstance } from '@/services/axiosInstance';
import { DeletePresetItemReq, DeletePresetItemRes } from '@/types/apis/presetApi';

export const deletePresetItem = async (data: DeletePresetItemReq) => {
  try {
    const response = await axiosInstance.delete<DeletePresetItemRes>(
      `/api/v1/channels/${data.channelId}/presets/categories/${data.presetCategoryId}/items/${data.presetItemId}`
    );
    return response.data;
  } catch (error) {
    console.error('프리셋 아이템 삭제 실패:', error);
    throw error;
  }
};
