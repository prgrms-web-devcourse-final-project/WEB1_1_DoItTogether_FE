import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyInitState } from '@/services/user/getMyInitState';

export const useLanding = () => {
  const navigate = useNavigate();

  const handleLogin = (provider: 'kakao' | 'google' | 'naver') => {
    if (sessionStorage.getItem('access_token')) {
      navigate('/group-select');
      return;
    }
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/oauth2/authorization/${provider}`;
  };

  useEffect(() => {
    const checkInitialState = async () => {
      const accessToken = new URLSearchParams(location.search).get('access_token');
      if (accessToken) {
        sessionStorage.setItem('access_token', accessToken);
        try {
          const initState = await getMyInitState();
          initState.result ? navigate('/group-select') : navigate('/register');
        } catch (error) {
          console.error('초기 상태 확인 실패:', error);
        }
      }
    };

    checkInitialState();
  }, [navigate]);

  return { handleLogin };
};
