import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, Messaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const messaging: Messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: import.meta.env.VITE_VAPID_KEY })
    .then((currentToken: string) => {
      if (currentToken) {
        return currentToken;
      } else {
        console.log('No registration token available. Request permission to generate one.');
        return null;
      }
    })
    .catch((err: Error) => {
      console.log('An error occurred while retrieving token - ' + err);
      return null;
    });
};

// 기기 유형 확인
const getPlatformType = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android/i.test(userAgent)) {
    return 'ANDROID';
  }
  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return 'IOS';
  }
  return 'PC';
};

export const setupPushNotifications = async (): Promise<{
  token: string | null;
  platformType: string;
} | null> => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const token = await requestForToken();
    const platformType = getPlatformType();
    return { token, platformType };
  }
  return null;
};
