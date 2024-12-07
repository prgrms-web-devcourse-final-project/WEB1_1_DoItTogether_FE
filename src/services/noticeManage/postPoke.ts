import { axiosInstance } from '@/services/axiosInstance';
import { PokeReq, PokeRes } from '@/types/apis/noticeManage';

export const postPoke = async ({ channelId, targetUserId, reactDate }: PokeReq) => {
  try {
    const response = await axiosInstance.post<PokeRes>(
      `/api/v1/channels/${channelId}/reactions/poke`,
      { targetUserId, reactDate }
    );
    return response.data;
  } catch (error) {
    throw new Error('찌르기에 실패했어요.');
  }
};
