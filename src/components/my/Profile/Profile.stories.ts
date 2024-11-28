import Profile from '@/components/my/Profile/Profile';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/my/Profile/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
