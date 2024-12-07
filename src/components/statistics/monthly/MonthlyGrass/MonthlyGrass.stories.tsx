import type { Meta, StoryObj } from '@storybook/react';
import MonthlyGrass from './MonthlyGrass';
import { CompletionStatus, MonthlyDateScore } from '@/types/apis/statisticsApi';

const meta = {
  title: 'Components/Statistics/Monthly/MonthlyGrass',
  component: MonthlyGrass,
  parameters: {
    layout: 'centered',
    reactRouter: {
      routePath: '/channel/:channelId/statistics',
      routeParams: { channelId: '1' },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onMonthChange: {
      action: 'monthChanged',
      description: '월이 변경될 때 호출되는 함수',
    },
    onDataChange: {
      action: 'dataChanged',
      description: '데이터가 변경될 때 호출되는 함수',
    },
  },
} satisfies Meta<typeof MonthlyGrass>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: MonthlyDateScore[] = [
  { date: '2024-11-01', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  { date: '2024-11-02', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  { date: '2024-11-03', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  {
    date: '2024-11-04',
    totalTasks: 3,
    completedTasks: 2,
    status: CompletionStatus.INCOMPLETE_REMAINING,
  },
  { date: '2024-11-05', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  {
    date: '2024-11-06',
    totalTasks: 3,
    completedTasks: 1,
    status: CompletionStatus.INCOMPLETE_REMAINING,
  },
  { date: '2024-11-07', totalTasks: 0, completedTasks: 0, status: CompletionStatus.NO_HOUSEWORK },
];

export const Default: Story = {
  args: {
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
    onDataChange: (data: MonthlyDateScore[]) => console.log('Data changed:', data),
  },
  parameters: {
    docs: {
      description: {
        story: '기본 캘린더 뷰입니다.',
      },
    },
  },
};

export const WithMockData: Story = {
  args: {
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
    onDataChange: (data: MonthlyDateScore[]) => console.log('Data changed:', data),
  },
  parameters: {
    docs: {
      description: {
        story: '목업 데이터가 있는 캘린더 뷰입니다.',
      },
    },
    mockData: {
      result: {
        monthlyStatistics: sampleData,
      },
    },
  },
};
