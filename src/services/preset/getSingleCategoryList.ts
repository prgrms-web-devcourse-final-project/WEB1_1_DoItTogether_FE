import { axiosInstance } from '@/services/axiosInstance';
import { GetSinglePresetListReq, GetSinglePresetListRes } from '@/types/apis/presetApi';
import { GetPageParams } from '@/types/apis/pageApi';

// 현재 호출부 없음
// 프리셋 특정 카테고리 조회
export const getSingleCategoryList = async (
  data: GetSinglePresetListReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  const response = await axiosInstance.get<GetSinglePresetListRes>(
    `/api/v1/channels/${data.channelId}/presets/categories/${data.presetCategoryId}/items`,
    { params }
  );
  return response.data;
};
