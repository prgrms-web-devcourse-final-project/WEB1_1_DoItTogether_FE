import { axiosInstance } from '@/services/axiosInstance';
import { GetWeeklyIncompleteReq, GetWeeklyIncompleteRes } from '@/types/apis/houseworkApi';

export const getWeeklyIncomplete = async ({ channelId, targetDate }: GetWeeklyIncompleteReq) => {
  try {
    const response = await axiosInstance.get<GetWeeklyIncompleteRes>(
      `/api/v1/channels/${channelId}/houseworks/daily/incomplete`,
      {
        params: {
          targetDate,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('주간 미완료율을 가져오는 데에 실패했습니다.');
  }
};
