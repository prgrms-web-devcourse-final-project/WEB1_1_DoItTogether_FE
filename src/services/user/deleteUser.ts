import { axiosInstance } from '@/services/axiosInstance';
import { DeleteMyInfoRes } from '@/types/apis/userApi';

export const deleteUser = async () => {
  try {
    const response = await axiosInstance.delete<DeleteMyInfoRes>(`/api/v1/users/my`);
    return response.data;
  } catch (error) {
    console.error('회원 탈퇴 실패:', error);
    throw error;
  }
};
