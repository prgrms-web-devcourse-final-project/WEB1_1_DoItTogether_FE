import { PostPersonalKeywordReq, PostPersonalKeywordRes } from './../../types/apis/onBoarding';
import { axiosInstance } from '@/services/axiosInstance';

export const postPersonalKeyword = async ({ surveyResultText }: PostPersonalKeywordReq) => {
  const response = await axiosInstance.post<PostPersonalKeywordRes>(`api/v1/personalities`, {
    surveyResultText,
  });
  return response.data;
};
