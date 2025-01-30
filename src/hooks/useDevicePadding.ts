import { useDeviceStore } from '@/store/useDeviceStore';

const useDevicePadding = () => {
  const deviceType = useDeviceStore(state => state.deviceType);
  return deviceType === 'ios' ? 'pb-ios' : deviceType === 'android' ? 'pb-android' : '';
};

export default useDevicePadding;
