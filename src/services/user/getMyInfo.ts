import { axiosInstance } from '@/services/axiosInstance';
import { GetMyInfoRes } from '@/types/apis/userApi';

export const getMyInfo = async () => {
  const response = await axiosInstance.get<GetMyInfoRes>(`/api/v1/users/my`);
  return response.data;
};
