import { BaseRes } from '@/types/apis/baseResponse';

/** 푸시 알림 전송 */
export interface PushNotificationReq {
  /** 알림을 받는 유저 ID */
  targetUserId: number;
  /** 알림을 보내는 날짜 (2025-01-01) */
  reactDate: string;
  /** 알림 내용 */
  notificationRequest: {
    title: string;
    content: string;
  };
}

export interface PushNotificationRes extends BaseRes {
  result: {};
}

/** FCM 토큰 저장 */
export interface PostTokenToServerReq {
  /** 토큰 값 */
  token: string;
  /** PC, ANDROID, IOS */
  platformType: string;
}

export interface PostTokenToServerRes extends BaseRes {
  result: {};
}
