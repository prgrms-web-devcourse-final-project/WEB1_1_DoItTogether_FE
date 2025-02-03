import { axiosInstance } from '@/services/axiosInstance';
import { PushNotificationReq, PushNotificationRes } from '@/types/apis/fcmApi';

export const postFcmPush = async ({
  targetUserId,
  reactDate,
  notificationRequest,
}: PushNotificationReq) => {
  const response = await axiosInstance.post<PushNotificationRes>(`/api/v1/fcms/push`, {
    targetUserId,
    reactDate,
    notificationRequest,
  });
  return response.data;
};
