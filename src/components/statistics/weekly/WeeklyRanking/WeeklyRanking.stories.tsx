import type { Meta, StoryObj } from '@storybook/react';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking',
  component: WeeklyRanking,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyRanking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DUMMY_RANKING = [
  {
    nickName: '엄마',
    profileImageUrl: '',
    completeCount: 8,
  },
  {
    nickName: '아빠',
    profileImageUrl: '',
    completeCount: 6,
  },
  {
    nickName: '첫째',
    profileImageUrl: '',
    completeCount: 4,
  },
  {
    nickName: '둘째',
    profileImageUrl: '',
    completeCount: 2,
  },
];

export const Default: Story = {
  args: {
    rankings: DUMMY_RANKING,
  },
  render: args => <WeeklyRanking {...args} />,
};
