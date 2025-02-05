import { axiosInstance } from '@/services/axiosInstance';
import { CreatePresetItemReq, CreatePresetItemRes } from './../../types/apis/presetApi';

export const postCreatePresetItem = async ({
  channelId,
  presetCategoryId,
  name,
}: CreatePresetItemReq) => {
  const response = await axiosInstance.post<CreatePresetItemRes>(
    `/api/v1/channels/${channelId}/presets/categories/${presetCategoryId}/items`,
    { name }
  );
  return response.data;
};
