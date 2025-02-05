import { axiosInstance } from '@/services/axiosInstance';
import { CreateInviteLinkReq, CreateInviteLinkRes } from '@/types/apis/groupApi';

export const postCreateInviteLink = async ({ channelId }: CreateInviteLinkReq) => {
  const response = await axiosInstance.post<CreateInviteLinkRes>(
    `/api/v1/channels/${channelId}/invite-link`
  );
  return response.data;
};
