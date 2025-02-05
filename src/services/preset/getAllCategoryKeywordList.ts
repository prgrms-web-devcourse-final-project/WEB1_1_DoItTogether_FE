import { axiosInstance } from '@/services/axiosInstance';
import { GetAllPresetKeywordListReq, GetAllPresetKeywordListRes } from '@/types/apis/presetApi';
import { GetPageParams } from '@/types/apis/pageApi';

// 현재 호출부 없음
// 프리셋 전체 키워드 리스트 조회
export const getAllCategoryKeywordList = async (
  data: GetAllPresetKeywordListReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  const response = await axiosInstance.get<GetAllPresetKeywordListRes>(
    `/api/v1/channels/${data.channelId}/presets/keywords`,
    { params }
  );
  return response.data;
};
