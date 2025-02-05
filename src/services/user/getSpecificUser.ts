import { axiosInstance } from '@/services/axiosInstance';
import { GetSpecificUserReq, GetSpecificUserRes } from '@/types/apis/userApi';

// 현재 호출부 없음
// 특정 유저 정보 조회
export const getSpecificUser = async ({ userId }: GetSpecificUserReq) => {
  const response = await axiosInstance.get<GetSpecificUserRes>(`/api/v1/users/${userId}`);
  return response.data;
};
