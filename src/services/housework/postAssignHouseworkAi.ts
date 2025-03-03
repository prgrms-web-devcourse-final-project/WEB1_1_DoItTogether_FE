import { axiosInstance } from '@/services/axiosInstance';
import {
  PostAssignHouseworkAIReq,
  PostAssignHouseworkAIRes,
} from './../../types/apis/houseworkApi';

export const postAssignHouseworkAi = async ({
  channelId,
  houseworkName,
}: PostAssignHouseworkAIReq) => {
  const response = await axiosInstance.post<PostAssignHouseworkAIRes>(
    `api/v1/channels/${channelId}/houseworks/assignHouseworkAi`,
    {
      channelId,
      houseworkName,
    }
  );
  return response.data;
};
