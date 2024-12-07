import type { Meta, StoryObj } from '@storybook/react';
import BottomNavBtn from './BottomNavBtn';

const meta = {
  title: 'components/common/bottomNav/BottomNavBtn',
  component: BottomNavBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: '버튼에 표시될 아이콘',
    },
    name: {
      control: 'text',
      description: '버튼 아래에 표시될 텍스트',
    },
  },
} satisfies Meta<typeof BottomNavBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: '',
    name: '홈',
    isActive: true,
  },
};

export const Statistics: Story = {
  args: {
    icon: '',
    name: '통계',
    isActive: true,
  },
};

export const Settings: Story = {
  args: {
    icon: '',
    name: '설정',
    isActive: false,
  },
};

export const My: Story = {
  args: {
    icon: '',
    name: '마이',
    isActive: false,
  },
};
