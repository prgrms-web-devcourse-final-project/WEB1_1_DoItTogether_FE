import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';

export interface WeeklyMemberScore {
  /** 닉네임 */
  nickName: string;
  /** 프로필 이미지 URL */
  profileImageUrl: string;
  /** 완료 개수 */
  completeCount: number;
}
export interface GetWeeklyScoreReq extends Pick<Common, 'channelId'> {
  /** 선택 날짜 (YYYY-MM-DD) */
  targetDate: string;
}
export interface GetWeeklyScoreRes extends BaseRes {
  result: {
    completeScoreSortedResponse: Array<WeeklyMemberScore>;
  };
}

export interface GetWeeklyTotalCountReq extends Pick<Common, 'channelId'> {
  /** 선택 날짜 (YYYY-MM-DD) */
  targetDate: string;
}
export interface GetWeeklyTotalCountRes extends BaseRes {
  result: {
    /** 그룹명*/
    channelName: string;
    /** 완료 개수 */
    completeCount: number;
    /** 미완료 개수 */
    unCompletedCount: number;
    /** 칭찬 개수 */
    complimentCount: number;
    /** 찌르기 개수 */
    pokeCount: number;
  };
}

export enum CompletionStatus {
  ALL_DONE = 'ALL_DONE',
  INCOMPLETE_REMAINING = 'INCOMPLETE_REMAINING',
  NO_HOUSEWORK = 'NO_HOUSEWORK',
}

export interface MonthlyDateScore {
  /** 날짜 (YYYY-MM-DD) */
  date: string;
  /** 전체 할 일 개수 */
  totalTasks: number;
  /** 완료한 일의 개수 */
  completedTasks: number;
  /** 상태 */
  status: CompletionStatus;
}

export interface GetMonthlyScoreReq extends Pick<Common, 'channelId'> {
  /** 선택 월 (YYYY-MM) */
  targetMonth: string;
}
export interface GetMonthlyScoreRes extends BaseRes {
  result: {
    monthlyStatistics: Array<MonthlyDateScore>;
  };
}

export interface GetMonthlyMVPReq extends Pick<Common, 'channelId'> {
  /** 선택 월 (YYYY-MM) */
  targetMonth: string;
}
export interface GetMonthlyMVPRes extends BaseRes {
  result: {
    /** 칭찬 MVP user ID */
    complimentMVPUserId: string;
    /** 칭찬 MVP */
    complimentMVPNickName: string;
    /** 칭찬 MVP count */
    complimentMVPCount: string;
    /** 찌르기 MVP user ID */
    pokeMVPUserId: string;
    /** 찌르기 MVP */
    pokeMVPNickName: string;
    /** 찌르기 MVP count*/
    pokeMVPCount: string;
  };
}
