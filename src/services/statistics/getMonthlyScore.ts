import { axiosInstance } from '@/services/axiosInstance';
import { GetMonthlyScoreReq, GetMonthlyScoreRes } from '@/types/apis/statisticsApi';

export const getMonthlyScore = async (data: GetMonthlyScoreReq) => {
  try {
    const response = await axiosInstance.get<GetMonthlyScoreRes>(
      `/api/v1/channels/${data.channelId}/statistics/monthly/score`,
      {
        params: {
          targetMonth: data.targetMonth,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('월간 통계 캘린더 조회 실패: ', error);
    throw error;
  }
};
