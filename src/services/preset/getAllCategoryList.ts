import { axiosInstance } from '@/services/axiosInstance';
import { GetAllPresetListReq, GetAllPresetListRes } from '@/types/apis/presetApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getAllCategoryList = async (
  data: GetAllPresetListReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  const response = await axiosInstance.get<GetAllPresetListRes>(
    `/api/v1/channels/${data.channelId}/presets/categories/items`,
    { params }
  );
  return response.data;
};
