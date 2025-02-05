import { axiosInstance } from '@/services/axiosInstance';
import { GetMyInitStateRes } from '@/types/apis/userApi';

export const getMyInitState = async () => {
  const response = await axiosInstance.get<GetMyInitStateRes>(`/api/v1/users/my/profile/setup`);
  return response.data;
};
