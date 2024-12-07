// PresetTab.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import PresetTab from '@/components/common/tab/PresetTab/PresetTab';
import { Category } from '@/constants';

interface PresetItem {
  presetItemId: number;
  name: string;
}
interface PresetList {
  presetCategoryId: number;
  category: string;
  presetItemList: Array<PresetItem>;
}

const mockData: PresetList[] = [
  {
    presetCategoryId: 1,
    category: Category.LIVING_ROOM,
    presetItemList: [
      { presetItemId: 101, name: '정리정돈' },
      { presetItemId: 102, name: '쓰레기통 비우기' },
      { presetItemId: 103, name: '먼지 닦기' },
      { presetItemId: 104, name: '진공청소기 돌리기' },
    ],
  },
  {
    presetCategoryId: 2,
    category: Category.KITCHEN,
    presetItemList: [
      { presetItemId: 201, name: '설거지' },
      { presetItemId: 202, name: '조리대 및 싱크대 닦기' },
      { presetItemId: 203, name: '쓰레기통 비우기' },
      { presetItemId: 204, name: '냉장고 정리' },
    ],
  },
  {
    presetCategoryId: 3,
    category: Category.BED_ROOM,
    presetItemList: [
      { presetItemId: 301, name: '침구 정리' },
      { presetItemId: 302, name: '침구 교체' },
      { presetItemId: 303, name: '옷장 정리' },
    ],
  },
];

const meta = {
  title: 'components/common/tab/PresetTab/PresetTab',
  component: PresetTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PresetTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LivingRoom: Story = {
  args: {
    presetData: mockData.filter(data => data.presetCategoryId === 1),
  },
};

export const Kitchen: Story = {
  args: {
    presetData: mockData.filter(data => data.presetCategoryId === 2),
  },
};

export const BedRoom: Story = {
  args: {
    presetData: mockData.filter(data => data.presetCategoryId === 3),
  },
};

export const WithContainer: Story = {
  decorators: [
    Story => (
      <div className='max-w-2xl w-full rounded-lg border p-4'>
        <Story />
      </div>
    ),
  ],
  args: {
    presetData: [mockData[0]],
  },
};
