import { memo } from 'react';
import {
  BathRoomIcon,
  BedRoomIcon,
  EtcIcon,
  HomeIcon,
  KitchenIcon,
  LivingRoomIcon,
} from '@/components/common/icon';
import { TabsTrigger } from '@/components/common/ui/tabs';
import { Category } from '@/constants';

interface PresetTabItemProps {
  name: string;
  value: string;
}

const ICONS = {
  [Category.ALL]: <HomeIcon />,
  [Category.LIVING_ROOM]: <LivingRoomIcon />,
  [Category.BATH_ROOM]: <BathRoomIcon />,
  [Category.BED_ROOM]: <BedRoomIcon />,
  [Category.KITCHEN]: <KitchenIcon />,
  [Category.ETC]: <EtcIcon />,
} as const;

const PresetTabItem = ({ name, value }: PresetTabItemProps) => {
  return (
    <TabsTrigger
      value={value}
      className='flex gap-2 rounded-xl px-2 py-2 font-label data-[state=active]:bg-black data-[state=inactive]:bg-gray5 data-[state=active]:text-white data-[state=inactive]:text-black'
    >
      <div className='flex h-5 items-center justify-center'>
        {ICONS[name as keyof typeof ICONS]}
      </div>
      <span className='flex items-center'>{name}</span>
    </TabsTrigger>
  );
};

export default memo(PresetTabItem);
