import { axiosInstance } from '@/services/axiosInstance';
import { GetHouseworkByIdReq, GetHouseworkByIdRes } from '@/types/apis/houseworkApi';

// 현재 호출부 없음
// 집안일 id별 상세 정보 조회
export const getHouseworkById = async ({ channelId, houseworkId }: GetHouseworkByIdReq) => {
  const response = await axiosInstance.get<GetHouseworkByIdRes>(
    `/api/v1/channels/${channelId}/houseworks/${houseworkId}`
  );
  return response.data;
};
