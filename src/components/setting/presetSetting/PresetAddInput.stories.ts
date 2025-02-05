import PresetAddInput from '@/components/setting/presetSetting/PresetAddInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PresetAddInput> = {
  title: 'components/setting/presetSetting/PresetAddInput',
  component: PresetAddInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PresetAddInput>;

const mockCategoryList = [
  { presetCategoryId: 1, category: '거실' },
  { presetCategoryId: 2, category: '주방' },
  { presetCategoryId: 3, category: '욕실' },
  { presetCategoryId: 4, category: '침실' },
  { presetCategoryId: 5, category: '기타' },
];

export const Default: Story = {
  args: {
    categoryList: mockCategoryList,
  },
};
