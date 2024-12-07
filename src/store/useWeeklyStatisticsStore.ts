import { create } from 'zustand';

export interface WeeklyTotalCount {
  /** 그룹명 */
  channelName: string;
  /** 완료 개수 */
  completeCount: number;
  /** 미완료 개수 */
  unCompletedCount: number;
  /** 칭찬 개수 */
  complimentCount: number;
  /** 찌르기 개수 */
  pokeCount: number;
}
export interface WeeklyMemberScore {
  /** 닉네임 */
  nickName: string;
  /** 프로필 이미지 URL */
  profileImageUrl: string;
  /** 완료 개수 */
  completeCount: number;
}

interface WeeklyState {
  /** 선택 날짜 */
  currentDate: Date;
  setCurrentDate: (updater: (prevDate: Date) => Date) => void;
  /** 완료, 미완료, 칭찬, 찌르기 카운트 데이터 */
  totalCountData: WeeklyTotalCount;
  setTotalCountData: (data: WeeklyTotalCount) => void;
  /** 랭킹 카운트 데이터 */
  scoreCountData: Array<WeeklyMemberScore>;
  setScoreCountData: (data: Array<WeeklyMemberScore>) => void;
}

const useWeeklyStateStore = create<WeeklyState>(set => ({
  currentDate: new Date(),
  setCurrentDate: updater => set(state => ({ currentDate: updater(state.currentDate) })),
  totalCountData: {
    channelName: '',
    completeCount: 0,
    unCompletedCount: 0,
    complimentCount: 0,
    pokeCount: 0,
  },
  setTotalCountData: data => set(() => ({ totalCountData: data })),
  scoreCountData: [],
  setScoreCountData: data => set(() => ({ scoreCountData: data })),
}));

export default useWeeklyStateStore;
