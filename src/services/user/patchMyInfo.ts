import { axiosInstance } from '@/services/axiosInstance';
import { PatchMyProfileReq, PatchMyProfileRes } from '@/types/apis/userApi';

export const patchMyInfo = async ({ nickName }: PatchMyProfileReq) => {
  const response = await axiosInstance.patch<PatchMyProfileRes>(`/api/v1/users/my/profile`, {
    nickName,
  });
  return response.data;
};
