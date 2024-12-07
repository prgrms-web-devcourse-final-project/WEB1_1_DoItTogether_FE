// hooks/useDeviceHeight.ts
import { useEffect, useState } from 'react';

const useDevice = () => {
  const [customHeightClass, setCustomHeightClass] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isIPhone = /iPhone/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);
    const isPC = !isIPhone && !isAndroid; // PC로 간주

    if (isIPhone) {
      setCustomHeightClass('h-[calc(100vh-100px)]'); // 아이폰일 경우
    } else if (isAndroid) {
      setCustomHeightClass('h-[calc(100vh-56px)]'); // 안드로이드일 경우
    } else if (isPC) {
      setCustomHeightClass('h-screen'); // PC일 경우
    }
  }, []);

  return customHeightClass;
};

export default useDevice;
