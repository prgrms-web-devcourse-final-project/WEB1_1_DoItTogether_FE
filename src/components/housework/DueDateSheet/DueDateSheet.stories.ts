import type { Meta, StoryObj } from '@storybook/react';
import DueDateSheet from '@/components/housework/DueDateSheet/DueDateSheet';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/housework/DueDateSheet/DueDateSheet',
  component: DueDateSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof DueDateSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setOpen: action('setOpen'),
    setStartDate: action('hello'),
  },
};
