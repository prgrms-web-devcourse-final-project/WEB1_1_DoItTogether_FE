import GroupOption from '@/components/GroupOptionContainer/GroupOption/GroupOption';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/GroupOptionContainer/GroupOption',
  component: GroupOption,
  tags: ['autodocs'],
} satisfies Meta<typeof GroupOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupName: '우리집',
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    groupName: '우리집',
    isSelected: true,
  },
};