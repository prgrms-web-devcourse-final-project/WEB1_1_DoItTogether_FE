import { axiosInstance } from '@/services/axiosInstance';
import { ChangeGroupNameReq, ChangeGroupNameRes } from '@/types/apis/groupApi';

export const putChangeGroupName = async ({ channelId, name }: ChangeGroupNameReq) => {
  const response = await axiosInstance.put<ChangeGroupNameRes>(
    `/api/v1/channels/${channelId}/name`,
    { name }
  );
  return response.data;
};
