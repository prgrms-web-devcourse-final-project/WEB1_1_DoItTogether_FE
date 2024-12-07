import { BaseRes } from '@/types/apis/baseResponse';

// 공통 유저 타입 정의
export interface UserBase {
  /** userId */
  userId: number;
  /** user 닉네임 */
  nickName: string;
  /** user 이메일 */
  email: string;
  /** OAuth 소셜 ID */
  socialId: string;
  /** user 프로필 이미지 */
  profileImageUrl: string;
}

/** 특정 회원 조회 req */
export interface GetSpecificUserReq extends Pick<UserBase, 'userId'> {}

/** 특정 회원 조회 res */
export interface GetSpecificUserRes extends BaseRes {
  result: UserBase;
}

/** 내 정보 조회 res */
export interface GetMyInfoRes extends BaseRes {
  result: UserBase;
}

/** 내 프로필 수정 req */
export interface PatchMyProfileReq extends Pick<UserBase, 'nickName'> {}

/** 내 프로필 수정 res */
export interface PatchMyProfileRes extends BaseRes {
  result: Pick<UserBase, 'userId'>;
}

/** 초기 설정 상태 여부 조회 res */
export interface GetMyInitStateRes extends BaseRes {
  /** 설정 true false */
  result: boolean;
}

/** 나의 초기 설정 상태 수정 res */
export interface PatchMyInitStateRes extends BaseRes {}

/** 회원 탈퇴 res */
export interface DeleteMyInfoRes extends BaseRes {}
