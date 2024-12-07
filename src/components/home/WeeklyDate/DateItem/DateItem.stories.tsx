import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateItem from './DateItem';

const meta = {
  title: 'components/home/WeeklyDate/DateItem',
  component: DateItem,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'number' },
  },
} satisfies Meta<typeof DateItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '1',
    day: '월',
    pendingCnt: 1,
    solvedMatters: true,
    isActive: true,
    handleClick: action('DateItem clicked'),
  },
};
