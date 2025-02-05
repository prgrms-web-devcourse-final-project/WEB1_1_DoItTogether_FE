import { axiosInstance } from '@/services/axiosInstance';
import { PatchMyInitStateRes } from '@/types/apis/userApi';

export const patchMyInitState = async () => {
  const response = await axiosInstance.patch<PatchMyInitStateRes>(`/api/v1/users/my/profile/setup`);
  return response.data;
};
