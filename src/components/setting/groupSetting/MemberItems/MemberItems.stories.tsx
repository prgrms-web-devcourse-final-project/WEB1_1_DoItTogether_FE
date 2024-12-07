import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import type { Meta, StoryObj } from '@storybook/react';
import { User } from '@/types/apis/groupApi';

const meta = {
  title: 'Components/Setting/GroupSetting/MemberItems',
  component: MemberItems,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    leader: {
      control: 'boolean',
      description: '리더 여부',
    },
    members: {
      control: 'object',
      description: '그룹 멤버 목록',
    },
    currentUser: {
      control: 'object',
      description: '현재 로그인한 사용자',
    },
    handleClick: {
      action: 'clicked',
      description: '멤버 클릭 시 실행되는 함수',
    },
  },
} satisfies Meta<typeof MemberItems>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyUsers: User[] = [
  { userId: 1, email: 'minjae@example.com', nickName: '민재', role: 'ADMIN', currentUser: true },
  {
    userId: 2,
    email: 'seojun@example.com',
    nickName: '서준',
    role: 'PARTICIPANT',
    currentUser: false,
  },
  {
    userId: 3,
    email: 'jiwoo@example.com',
    nickName: '지우',
    role: 'PARTICIPANT',
    currentUser: false,
  },
  {
    userId: 4,
    email: 'hyunwoo@example.com',
    nickName: '현우',
    role: 'PARTICIPANT',
    currentUser: false,
  },
  {
    userId: 5,
    email: 'doyun@example.com',
    nickName: '도윤',
    role: 'PARTICIPANT',
    currentUser: false,
  },
  {
    userId: 6,
    email: 'juwon@example.com',
    nickName: '주원',
    role: 'PARTICIPANT',
    currentUser: false,
  },
];

export const LeaderView: Story = {
  args: {
    leader: true,
    members: dummyUsers.slice(0, 3),
    currentUser: dummyUsers[0],
  },
  parameters: {
    docs: {
      description: {
        story: '리더 권한으로 보는 멤버 목록입니다.',
      },
    },
  },
};

export const MemberView: Story = {
  args: {
    leader: false,
    members: dummyUsers.slice(0, 3),
    currentUser: dummyUsers[0],
  },
  parameters: {
    docs: {
      description: {
        story: '일반 멤버 권한으로 보는 멤버 목록입니다.',
      },
    },
  },
};

export const SingleMember: Story = {
  args: {
    leader: false,
    members: [dummyUsers[0]],
    currentUser: dummyUsers[0],
  },
  parameters: {
    docs: {
      description: {
        story: '멤버가 한 명인 경우입니다.',
      },
    },
  },
};

export const ManyMembers: Story = {
  args: {
    leader: true,
    members: dummyUsers,
    currentUser: dummyUsers[0],
  },
  parameters: {
    docs: {
      description: {
        story: '멤버가 여러 명인 경우입니다.',
      },
    },
  },
};

export const EmptyMembers: Story = {
  args: {
    leader: false,
    members: [],
    currentUser: dummyUsers[0],
  },
  parameters: {
    docs: {
      description: {
        story: '멤버가 없는 경우입니다.',
      },
    },
  },
};
