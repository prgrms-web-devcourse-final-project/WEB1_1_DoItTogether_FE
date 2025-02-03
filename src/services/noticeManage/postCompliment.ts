import { axiosInstance } from '@/services/axiosInstance';
import { ComplimentReq, ComplimentRes } from '@/types/apis/noticeManage';

export const postCompliment = async ({
  channelId,
  targetUserId,
  reactDate,
  notificationRequest,
}: ComplimentReq) => {
  const response = await axiosInstance.post<ComplimentRes>(
    `/api/v1/channels/${channelId}/reactions/compliment`,
    { targetUserId, reactDate, notificationRequest }
  );
  return response.data;
};
