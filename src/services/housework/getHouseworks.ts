import { axiosInstance } from '@/services/axiosInstance';
import { GetHouseworkReq, GetHouseworkRes } from '@/types/apis/houseworkApi';

export const getHouseworks = async ({
  channelId,
  targetDate,
  pageNumber,
  pageSize,
}: GetHouseworkReq) => {
  const params = { targetDate, pageNumber, pageSize };
  const response = await axiosInstance.get<GetHouseworkRes>(
    `/api/v1/channels/${channelId}/houseworks/${targetDate}/${pageNumber}/${pageSize}`,
    { params }
  );
  return response.data;
};
