import ManagerItems from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItems';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { User } from '@/types/apis/groupApi';

const meta = {
  title: 'components/housework/ManagerSelectSheet/ManagerItem/ManagerItems',
  component: ManagerItems,
  tags: ['autodocs'],
  argTypes: {
    selectedValue: {
      description: '선택된 멤버',
      control: 'number',
    },
    setSelectedValue: {
      description: '멤버 선택 시 호출되는 함수',
    },
    members: {
      description: '멤버 목록',
    },
  },
} satisfies Meta<typeof ManagerItems>;

export default meta;

// 더미 데이터
const dummyMembers: User[] = [
  {
    userId: 1,
    email: 'member1@example.com',
    nickName: '멤버1',
    role: 'PARTICIPANT',
    currentUser: false,
  },
  {
    userId: 2,
    email: 'member2@example.com',
    nickName: '멤버2',
    role: 'ADMIN',
    currentUser: false,
  },
  {
    userId: 3,
    email: 'member3@example.com',
    nickName: '멤버3',
    role: 'PARTICIPANT',
    currentUser: true,
  },
];

const ManagerSelectWithState = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <ManagerItems
      selectedValue={selectedMember}
      setSelectedValue={setSelectedMember}
      members={dummyMembers}
    />
  );
};

type Story = StoryObj<typeof ManagerItems>;

export const Default: Story = {
  render: () => <ManagerSelectWithState />,
};
