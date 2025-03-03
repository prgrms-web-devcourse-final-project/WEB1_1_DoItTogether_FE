import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import ManagerSelectSheet from '@/components/housework/ManagerSelectSheet/ManagerSelectSheet';

const meta = {
  title: 'components/housework/ManagerSelectSheet/ManagerSelectSheet',
  component: ManagerSelectSheet,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '시트 오픈 여부',
      control: 'boolean',
    },
    setIsOpen: {
      description: '바텀시트 여는 set함수',
    },
    selectedValue: {
      description: '선택된 멤버',
      control: 'number',
    },
  },
} satisfies Meta<typeof ManagerSelectSheet>;

export default meta;

const BottomSheetWithManager = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} title='담당자 고르기'>
        <div>바텀시트 내용</div>
      </BottomSheet>
    </>
  );
};

type Story = StoryObj<typeof ManagerSelectSheet>;

export const Default: Story = {
  render: () => <BottomSheetWithManager />,
};
