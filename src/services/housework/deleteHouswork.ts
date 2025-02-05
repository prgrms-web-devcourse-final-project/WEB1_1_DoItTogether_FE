import { axiosInstance } from '@/services/axiosInstance';
import { DeleteHouseworkReq, DeleteHouseworkRes } from '@/types/apis/houseworkApi';

export const deleteHousework = async ({ channelId, houseworkId }: DeleteHouseworkReq) => {
  const response = await axiosInstance.delete<DeleteHouseworkRes>(
    `/api/v1/channels/${channelId}/houseworks/${houseworkId}`
  );
  return response.data;
};
