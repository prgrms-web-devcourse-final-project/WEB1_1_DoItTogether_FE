import { axiosInstance } from '@/services/axiosInstance';
import { GetGroupUserReq, GetGroupUserRes } from '@/types/apis/groupApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getGroupUser = async (
  { channelId }: GetGroupUserReq,
  params: GetPageParams = { page: 0, size: 20 }
) => {
  const response = await axiosInstance.get<GetGroupUserRes>(`/api/v1/channels/${channelId}/users`, {
    params,
  });
  return response.data;
};
