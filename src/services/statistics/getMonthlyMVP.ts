import { axiosInstance } from '@/services/axiosInstance';
import { GetMonthlyMVPReq, GetMonthlyMVPRes } from '@/types/apis/statisticsApi';

export const getMonthlyMVP = async (data: GetMonthlyMVPReq) => {
  const response = await axiosInstance.get<GetMonthlyMVPRes>(
    `/api/v1/channels/${data.channelId}/statistics/monthly/mvp`,
    {
      params: {
        targetMonth: data.targetMonth,
      },
    }
  );
  return response.data;
};
