import type { Meta, StoryObj } from '@storybook/react';
import CompletionBarGraph from '@/components/statistics/weekly/WeeklyCompletion/CompletionBarGraph/CompletionBarGraph';

const meta = {
  title: 'components/statistics/weekly/WeeklyCompletion/CompletionBarGraph',
  component: CompletionBarGraph,
  tags: ['autodocs'],
} satisfies Meta<typeof CompletionBarGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { completionRate: 75 },
};
