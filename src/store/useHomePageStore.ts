import { create } from 'zustand';
import { Group } from '@/types/apis/groupApi';
import { getFormattedDate, getWeekText } from '@/utils/dateUtils';
import { UserBase } from '@/types/apis/userApi';
import { IncompleteScoreResponse } from '@/types/apis/houseworkApi';

interface WeeklyDates extends IncompleteScoreResponse {
  day: string;
}

interface HomePageState {
  currentGroup: Group;
  setCurrentGroup: (group: Group) => void;

  isGroupSelectSheetOpen: boolean;
  setIsGroupSelectSheetOpen: (isOpen: boolean) => void;

  groups: Array<Group>;
  setGroups: (groups: Array<Group>) => void;

  weekText: string;
  setWeekText: (weekText: string) => void;

  activeDate: string;
  setActiveDate: (newDate: string) => void;

  activeWeek: Date;
  setActiveWeek: (date: Date) => void;

  homePageNumber: number;
  setHomePageNumber: (newPage: number) => void;

  activeTab: string;
  setActiveTab: (newActiveTab: string) => void;

  myInfo: UserBase | null;
  setMyInfo: (newMyInfo: UserBase) => void;

  currWeek: WeeklyDates[];
  setCurrWeek: (newWeek: WeeklyDates[]) => void;
}

const useHomePageStore = create<HomePageState>(set => ({
  currentGroup: { channelId: 0, name: '기본 그룹명' },
  setCurrentGroup: group => set({ currentGroup: group }),

  isGroupSelectSheetOpen: false,
  setIsGroupSelectSheetOpen: isOpen => set({ isGroupSelectSheetOpen: isOpen }),

  groups: [{ channelId: 0, name: '기본 그룹명' }],
  setGroups: groups => set({ groups: groups }),

  activeWeek: new Date(),
  setActiveWeek: date => set({ activeWeek: date }),

  weekText: getWeekText(new Date()),
  setWeekText: weekText => set({ weekText: weekText }),

  activeDate: getFormattedDate(new Date()),
  setActiveDate: newDate => set({ activeDate: newDate }),

  homePageNumber: 0,
  setHomePageNumber: newPageNumber => set({ homePageNumber: newPageNumber }),

  activeTab: '전체',
  setActiveTab: newActiveTab => set({ activeTab: newActiveTab }),

  myInfo: null,
  setMyInfo: newMyInfo => set({ myInfo: newMyInfo }),

  currWeek: [],
  setCurrWeek: newWeek => set({ currWeek: newWeek }),
}));

export default useHomePageStore;
