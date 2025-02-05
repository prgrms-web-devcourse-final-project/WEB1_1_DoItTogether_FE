import { useEffect } from 'react';
import { useDeviceStore } from '@/store/useDeviceStore';

const useDevice = () => {
  const setDeviceType = useDeviceStore(state => state.setDeviceType);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('ios');
    } else if (/android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('pc');
    }
  }, [setDeviceType]);
};

export default useDevice;
