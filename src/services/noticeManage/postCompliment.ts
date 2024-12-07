import { axiosInstance } from '@/services/axiosInstance';
import { ComplimentReq, ComplimentRes } from '@/types/apis/noticeManage';

export const postCompliment = async ({ channelId, targetUserId, reactDate }: ComplimentReq) => {
  try {
    const response = await axiosInstance.post<ComplimentRes>(
      `/api/v1/channels/${channelId}/reactions/compliment`,
      { targetUserId, reactDate }
    );
    return response.data;
  } catch (error) {
    throw new Error('칭찬하기에 실패했습니다.');
  }
};
