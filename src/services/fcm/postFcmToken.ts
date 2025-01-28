import { axiosInstance } from '@/services/axiosInstance';
import { PostTokenToServerReq, PostTokenToServerRes } from '@/types/apis/fcmApi';

export const postFcmPush = async ({ token, platformType }: PostTokenToServerReq) => {
  const response = await axiosInstance.post<PostTokenToServerRes>(`/api/v1/fcms/token`, {
    token,
    platformType,
  });
  return response.data;
};
