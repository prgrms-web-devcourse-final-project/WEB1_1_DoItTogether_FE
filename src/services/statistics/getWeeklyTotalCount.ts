import { axiosInstance } from '@/services/axiosInstance';
import { GetWeeklyTotalCountReq, GetWeeklyTotalCountRes } from '@/types/apis/statisticsApi';

export const getWeeklyTotalCount = async ({ channelId, targetDate }: GetWeeklyTotalCountReq) => {
  const response = await axiosInstance.get<GetWeeklyTotalCountRes>(
    `/api/v1/channels/${channelId}/statistics/weekly/totalCount`,
    { params: { targetDate } }
  );
  return response.data;
};
