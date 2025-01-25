import { getMyInfo } from '@/services/user/getMyInfo';
import { useEffect, useState } from 'react';

const useUserName = (currentStep: string) => {
  const [username, setUserName] = useState<string>('사용자');

  useEffect(() => {
    if (currentStep !== '설문결과') return;

    const fetchMyInfo = async () => {
      try {
        const response = await getMyInfo();
        setUserName(response.result.nickName);
      } catch (error) {
        console.error('내 정보 조회 실패:', error);
      }
    };

    fetchMyInfo();
  }, [currentStep]);
  return { username };
};

export default useUserName;
