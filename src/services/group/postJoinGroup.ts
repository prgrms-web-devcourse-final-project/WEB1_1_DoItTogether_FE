import { axiosInstance } from '@/services/axiosInstance';
import { JoinGroupReq, JoinGroupRes } from '@/types/apis/groupApi';

export const postJoinGroup = async ({ inviteLink }: JoinGroupReq) => {
  const response = await axiosInstance.post<JoinGroupRes>(`/api/v1/channels/join/${inviteLink}`);
  return response.data;
};
