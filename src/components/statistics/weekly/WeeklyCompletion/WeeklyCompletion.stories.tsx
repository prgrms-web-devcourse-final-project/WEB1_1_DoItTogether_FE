import type { Meta, StoryObj } from '@storybook/react';
import WeeklyCompletion from '@/components/statistics/weekly/WeeklyCompletion/WeeklyCompletion';

const meta = {
  title: 'components/statistics/weekly/WeeklyCompletion',
  component: WeeklyCompletion,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyCompletion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    channelName: '우리집',
    completeCount: 2,
    unCompletedCount: 2,
  },
};
