import { axiosInstance } from '@/services/axiosInstance';
import { GetMyGroupRes } from '@/types/apis/groupApi';
import { GetPageParams } from '@/types/apis/pageApi';

export const getMyGroup = async (params: GetPageParams = { page: 0, size: 20 }) => {
  const response = await axiosInstance.get<GetMyGroupRes>(`/api/v1/channels/my`, { params });
  return response.data;
};
