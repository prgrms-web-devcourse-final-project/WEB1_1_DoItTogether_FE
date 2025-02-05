import { axiosInstance } from '@/services/axiosInstance';
import { GetWeeklyIncompleteReq, GetWeeklyIncompleteRes } from '@/types/apis/houseworkApi';

export const getWeeklyIncomplete = async ({ channelId, targetDate }: GetWeeklyIncompleteReq) => {
  const response = await axiosInstance.get<GetWeeklyIncompleteRes>(
    `/api/v1/channels/${channelId}/houseworks/daily/incomplete`,
    {
      params: {
        targetDate,
      },
    }
  );
  return response.data;
};
