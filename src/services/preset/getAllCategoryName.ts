import { axiosInstance } from '@/services/axiosInstance';
import { GetAllPresetCategoryReq, GetAllPresetCategoryRes } from '@/types/apis/presetApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getAllCategoryName = async (
  { channelId }: GetAllPresetCategoryReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  const response = await axiosInstance.get<GetAllPresetCategoryRes>(
    `/api/v1/channels/${channelId}/presets/categories/names`,
    { params }
  );
  return response.data;
};
