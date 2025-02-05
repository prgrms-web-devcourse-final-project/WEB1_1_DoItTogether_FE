import { axiosInstance } from '@/services/axiosInstance';
import { GetMonthlyScoreReq, GetMonthlyScoreRes } from '@/types/apis/statisticsApi';

export const getMonthlyScore = async (data: GetMonthlyScoreReq) => {
  const response = await axiosInstance.get<GetMonthlyScoreRes>(
    `/api/v1/channels/${data.channelId}/statistics/monthly/score`,
    {
      params: {
        targetMonth: data.targetMonth,
      },
    }
  );
  return response.data;
};
