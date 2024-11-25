import { action } from '@storybook/addon-actions';
import ManagerSelectItem from '@/components/ManagerSelectContainer/ManagerSelectItem/ManagerSelectItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/ManagerSelectContainer/ManagerSelectItem',
  component: ManagerSelectItem,
  tags: ['autodocs'],
  /**컴포넌트의 props에 대한 추가적인 정보와 컨트롤을 정의 */
  argTypes: {
    name: {
      description: '멤버 이름',
      control: 'text',
    },
    selectState: {
      description: '선택 상태',
      control: 'select',
      options: ['default', 'person', 'ai'],
      defaultValue: 'default',
    },
    handleClick: {
      description: '클릭 함수',
    },
  },
} satisfies Meta<typeof ManagerSelectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '김민수',
    selectState: 'default',
    handleClick: action('i cliked'),
  },
};

export const SelectedByPerson: Story = {
  args: {
    name: '김민수',
    selectState: 'person',
    handleClick: action('i cliked'),
  },
};

export const SelectedByAI: Story = {
  args: {
    name: '김민수',
    selectState: 'ai',
    handleClick: action('i cliked'),
  },
};
