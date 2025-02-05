import { axiosInstance } from '@/services/axiosInstance';
import { DeleteMyInfoRes } from '@/types/apis/userApi';

export const deleteUser = async () => {
  const response = await axiosInstance.delete<DeleteMyInfoRes>(`/api/v1/users/my`);
  return response.data;
};
