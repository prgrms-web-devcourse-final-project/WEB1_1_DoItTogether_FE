import { axiosInstance } from '@/services/axiosInstance';
import { KickUserReq, KickUserRes } from '@/types/apis/groupApi';

export const postBanUser = async ({ channelId, email }: KickUserReq) => {
  try {
    const response = await axiosInstance.post<KickUserRes>(`/api/v1/channels/${channelId}/kick`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error('멤버 추방 실패:', error);
    throw error;
  }
};
