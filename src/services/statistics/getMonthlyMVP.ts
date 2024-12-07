import { axiosInstance } from '@/services/axiosInstance';
import { GetMonthlyMVPReq, GetMonthlyMVPRes } from '@/types/apis/statisticsApi';

export const getMonthlyMVP = async (data: GetMonthlyMVPReq) => {
  try {
    const response = await axiosInstance.get<GetMonthlyMVPRes>(
      `/api/v1/channels/${data.channelId}/statistics/monthly/mvp`,
      {
        params: {
          targetMonth: data.targetMonth,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('월간 통계 MVP 조회 실패: ', error);
    throw error;
  }
};
