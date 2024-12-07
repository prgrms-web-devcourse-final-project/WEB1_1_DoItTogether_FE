import { BaseRes } from '@/types/apis/baseResponse';
import { Common } from '@/types/apis/commonApi';

/** 프리셋 카테고리 정보 */
export interface PresetCategory {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 카테고리 이름 */
  category: string;
}

/** 프리셋 카테고리 생성 */
export interface CreatePresetCategoryReq extends Pick<Common, 'channelId'> {
  /** 카테고리 이름 */
  category: string;
}
export interface CreatePresetCategoryRes extends BaseRes {
  result: PresetCategory;
}

/** 프리셋 카테고리 삭제 */
export interface DeletePresetCategoryReq extends Pick<Common, 'channelId'> {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
}

export interface DeletePresetCategoryRes extends BaseRes {
  result: {
    /** 프리셋 카테고리 아이디 */
    presetCategoryId: number;
  };
}

/** 모든 프리셋 카테고리 이름 조회 */
export interface GetAllPresetCategoryReq extends Pick<Common, 'channelId'> {}
export interface GetAllPresetCategoryRes extends BaseRes {
  result: {
    /** 카테고리 이름 리스트 */
    categoryList: Array<PresetCategory>;
  };
}

/** 프리셋 키워드 리스트 정보 */
export interface PresetKeywordList {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 카테고리 이름 */
  category: string;
  /** 프리셋 아이템 아이디 */
  // TODO 백엔드 키값 수정되면 여기도 수정 'presetItemId'
  presetId: number;
  /** 프리셋 아이템 이름 */
  // TODO 백엔드 키값 수정되면 여기도 수정 'name'
  value: string;
}

/** 전체 프리셋 키워드(카테고리-아이템) 리스트 조회 */
export interface GetAllPresetKeywordListReq extends Pick<Common, 'channelId'> {}
export interface GetAllPresetKeywordListRes extends BaseRes {
  result: {
    /** 프리셋 키워드(카테고리-아이템) 리스트 */
    presetKeywordList: Array<PresetKeywordList>;
  };
}

/** 프리셋 아이템 정보 */
export interface PresetItem {
  /** 프리셋 아이템 아이디 */
  presetItemId: number;
  /** 프리셋 아이템 이름 */
  name: string;
}

/** 특정 프리셋 카테고리의 프리셋 아이템 리스트 조회 */
export interface GetSinglePresetListReq extends Pick<Common, 'channelId'> {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
}
export interface GetSinglePresetListRes extends BaseRes {
  result: {
    /** 프리셋 카테고리 아이디 */
    presetCategoryId: number;
    /** 프리셋 카테고리 이름 */
    category: string;
    /** 프리셋 아이템 리스트 */
    presetList: Array<PresetItem>;
  };
}

/** 프리셋 아이템 생성 */
export interface CreatePresetItemReq extends Pick<Common, 'channelId'> {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 아이템 이름 */
  name: string;
}
export interface CreatePresetItemRes extends BaseRes {
  result: {
    /** 프리셋 카테고리 아이디 */
    presetCategoryId: number;
    /** 프리셋 아이템 아이디 */
    presetItemId: number;
    /** 프리셋 아이템 카테고리 */
    category: string;
  };
}

/** 프리셋 아이템 삭제 */
export interface DeletePresetItemReq extends Pick<Common, 'channelId'> {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 아이템 아이디 */
  presetItemId: number;
}
export interface DeletePresetItemRes extends BaseRes {
  result: {
    /** 프리셋 아이템 아이디 */
    presetItemId: number;
  };
}

/** 프리셋 리스트 정보 */
export interface PresetList {
  /** 프리셋 카테고리 아이디 */
  presetCategoryId: number;
  /** 프리셋 카테고리 이름 */
  category: string;
  presetItemList: Array<PresetItem>;
}

/** 전체 프리셋 카테고리와 해당 아이템 리스트 조회 */
export interface GetAllPresetListReq extends Pick<Common, 'channelId'> {}
export interface GetAllPresetListRes extends BaseRes {
  result: {
    presetCategoryList: Array<PresetList>;
  };
}
