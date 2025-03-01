import { axiosInstance } from '@/services/axiosInstance';
import { AddHouseworkReq, AddHouseworkRes } from './../../types/apis/houseworkApi';

export const postHousework = async ({
  channelId,
  category,
  startDate,
  task,
  startTime,
  userId,
  status,
}: AddHouseworkReq) => {
  const response = await axiosInstance.post<AddHouseworkRes>(
    `api/v1/channels/${channelId}/houseworks`,
    {
      category,
      task,
      startDate,
      startTime,
      userId,
      status,
    }
  );
  return response.data;
};
