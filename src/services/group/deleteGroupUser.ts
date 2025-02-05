import { axiosInstance } from '@/services/axiosInstance';
import { LeaveGroupReq, LeaveGroupRes } from '@/types/apis/groupApi';

export const deleteGroupUser = async ({ channelId }: LeaveGroupReq) => {
  const response = await axiosInstance.delete<LeaveGroupRes>(`/api/v1/channels/${channelId}/leave`);
  return response.data;
};
