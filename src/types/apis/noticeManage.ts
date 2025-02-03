import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';
import { PushNotificationReq } from '@/types/apis/fcmApi';

export interface ComplimentReq extends Pick<Common, 'channelId'>, PushNotificationReq {}

export interface ComplimentRes extends BaseRes {
  result: {};
}

export interface PokeReq extends Pick<Common, 'channelId'>, PushNotificationReq {}

export interface PokeRes extends BaseRes {
  result: {};
}
