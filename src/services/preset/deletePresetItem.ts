import { axiosInstance } from '@/services/axiosInstance';
import { DeletePresetItemReq, DeletePresetItemRes } from '@/types/apis/presetApi';

export const deletePresetItem = async (data: DeletePresetItemReq) => {
  const response = await axiosInstance.delete<DeletePresetItemRes>(
    `/api/v1/channels/${data.channelId}/presets/categories/${data.presetCategoryId}/items/${data.presetItemId}`
  );
  return response.data;
};
