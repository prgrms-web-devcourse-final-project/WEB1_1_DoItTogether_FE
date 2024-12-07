import { axiosInstance } from '@/services/axiosInstance';
import { GetWeeklyScoreReq, GetWeeklyScoreRes } from '@/types/apis/statisticsApi';

export const getWeeklyScore = async ({ channelId, targetDate }: GetWeeklyScoreReq) => {
  try {
    const response = await axiosInstance.get<GetWeeklyScoreRes>(
      `/api/v1/channels/${channelId}/statistics/weekly/score`,
      { params: { targetDate } }
    );
    return response.data;
  } catch (error) {
    console.error('주간 통계 랭킹 조회 실패: ', error);
    throw error;
  }
};
