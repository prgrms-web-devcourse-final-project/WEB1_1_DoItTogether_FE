import { create } from 'zustand';
import { Group } from '@/types/apis/groupApi';
import getFormattedDate from '@/utils/getFormattedDate';

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

  homePageNumber: number;
  setHomePageNumber: (newPage: number) => void;

  activeTab: string;
  setActiveTab: (newActiveTab: string) => void;
}

const useHomePageStore = create<HomePageState>(set => ({
  currentGroup: { channelId: 0, name: '기본 그룹명' },
  setCurrentGroup: group => set({ currentGroup: group }),

  isGroupSelectSheetOpen: false,
  setIsGroupSelectSheetOpen: isOpen => set({ isGroupSelectSheetOpen: isOpen }),

  groups: [{ channelId: 0, name: '기본 그룹명' }],
  setGroups: groups => set({ groups: groups }),

  weekText: '',
  setWeekText: weekText => set({ weekText: weekText }),

  activeDate: getFormattedDate(new Date()),
  setActiveDate: newDate => set({ activeDate: newDate }),

  homePageNumber: 0,
  setHomePageNumber: newPageNumber => set({ homePageNumber: newPageNumber }),

  activeTab: '전체',
  setActiveTab: newActiveTab => set({ activeTab: newActiveTab }),
}));

export default useHomePageStore;
