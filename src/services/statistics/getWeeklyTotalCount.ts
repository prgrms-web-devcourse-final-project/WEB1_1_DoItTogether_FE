import { axiosInstance } from '@/services/axiosInstance';
import { GetWeeklyTotalCountReq, GetWeeklyTotalCountRes } from '@/types/apis/statisticsApi';

export const getWeeklyTotalCount = async ({ channelId, targetDate }: GetWeeklyTotalCountReq) => {
  try {
    const response = await axiosInstance.get<GetWeeklyTotalCountRes>(
      `/api/v1/channels/${channelId}/statistics/weekly/totalCount`,
      { params: { targetDate } }
    );
    return response.data;
  } catch (error) {
    console.error('주간 통계 개수 조회 실패: ', error);
    throw error;
  }
};
