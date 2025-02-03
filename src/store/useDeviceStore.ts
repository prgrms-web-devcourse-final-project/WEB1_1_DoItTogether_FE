import { create } from 'zustand';

type DeviceType = 'ios' | 'android' | 'pc';

interface DeviceStore {
  deviceType: DeviceType;
  setDeviceType: (type: DeviceType) => void;
}

export const useDeviceStore = create<DeviceStore>(set => ({
  deviceType: 'pc',
  setDeviceType: type => set({ deviceType: type }),
}));
