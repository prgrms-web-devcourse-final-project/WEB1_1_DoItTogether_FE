import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyInitState } from '@/services/user/getMyInitState';
import { setupPushNotifications } from '@/utils/fcm';
import { postFcmToken } from '@/services/fcm/postFcmToken';

export const useLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkInitialState = async () => {
      const accessToken = new URLSearchParams(location.search).get('access_token');
      if (accessToken) {
        sessionStorage.setItem('access_token', accessToken);
        initNotification();

        try {
          const initState = await getMyInitState();
          initState.result ? navigate('/group-select') : navigate('/register');
        } catch (error) {
          console.error('초기 상태 확인 실패:', error);
        }
      }
    };

    if (sessionStorage.getItem('access_token')) {
      navigate('/group-select');
      return;
    }
    checkInitialState();
  }, [navigate]);

  const handleLogin = (provider: 'kakao' | 'google' | 'naver') => {
    window.location.href = `${
      import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PROD_SERVER_URL
        : import.meta.env.VITE_DEV_SERVER_URL
    }/oauth2/authorization/${provider}`;
  };

  const initNotification = async () => {
    const notificationResult = await setupPushNotifications();
    if (notificationResult) {
      const { token, platformType } = notificationResult;
      try {
        await postFcmToken({ token, platformType });
      } catch (error) {
        console.error('Error posting FCM token:', error);
      }
    }
  };
  return { handleLogin };
};
