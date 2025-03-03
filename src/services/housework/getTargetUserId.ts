import { axiosInstance } from '@/services/axiosInstance';
import { GetTargetUserIdReq, GetTargetUserIdRes } from '@/types/apis/houseworkApi';

export const getTargetUserId = async ({ targetUserId }: GetTargetUserIdReq) => {
  const response = await axiosInstance.get<GetTargetUserIdRes>(
    `/api/v1/personalities/${targetUserId}`
  );
  return response.data;
};
