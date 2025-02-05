import { useCallback, useEffect, useState } from 'react';
import { UserBase } from '@/types/apis/userApi';
import { getMyInfo } from '@/services/user/getMyInfo';

export const useMy = () => {
  const [myInfo, setMyInfo] = useState<UserBase>({
    userId: 0,
    nickName: '',
    email: '',
    socialId: '',
    profileImageUrl: '',
    provider: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchMyInfo = useCallback(async () => {
    try {
      const response = await getMyInfo();
      setMyInfo(response.result);
    } catch (error) {
      console.error('내 정보 조회 실패:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMyInfo();
  }, [fetchMyInfo]);

  return { myInfo, isLoading };
};
