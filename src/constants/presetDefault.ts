import { Category } from '@/constants';

interface PresetItem {
  // 프리셋 아이템 아이디
  presetItemId: number;
  // 프리셋 아이템 이름
  name: string;
}
interface PresetList {
  // 프리셋 카테고리 아이디
  presetCategoryId: number;
  // 프리셋 카테고리 이름
  category: string;
  // 프리셋 아이템 리스트
  presetItemList: Array<PresetItem>;
}

export const PresetDefault: PresetList[] = [
  {
    presetCategoryId: 1,
    category: Category.LIVING_ROOM,
    presetItemList: [
      { presetItemId: 101, name: '정리정돈' },
      { presetItemId: 102, name: '쓰레기통 비우기' },
      { presetItemId: 103, name: '먼지 닦기' },
      { presetItemId: 104, name: '진공청소기 돌리기' },
      { presetItemId: 105, name: '바닥 걸레질' },
      { presetItemId: 106, name: '창문 청소' },
      { presetItemId: 107, name: '카펫 청소' },
      { presetItemId: 108, name: '러그 청소' },
    ],
  },
  {
    presetCategoryId: 2,
    category: Category.BED_ROOM,
    presetItemList: [
      { presetItemId: 201, name: '침구 정리' },
      { presetItemId: 202, name: '진공청소기 돌리기' },
      { presetItemId: 203, name: '바닥 걸레질' },
      { presetItemId: 204, name: '침구 교체' },
      { presetItemId: 205, name: '옷장 정리' },
      { presetItemId: 206, name: '창문 청소' },
      { presetItemId: 207, name: '매트리스 청소' },
    ],
  },
  {
    presetCategoryId: 3,
    category: Category.KITCHEN,
    presetItemList: [
      { presetItemId: 301, name: '설거지' },
      { presetItemId: 302, name: '조리대 닦기' },
      { presetItemId: 303, name: '싱크대 닦기' },
      { presetItemId: 304, name: '쓰레기통 비우기' },
      { presetItemId: 305, name: '냉장고 정리' },
      { presetItemId: 306, name: '오븐 청소' },
      { presetItemId: 307, name: '전자레인지 청소' },
      { presetItemId: 308, name: '바닥 진공청소기 돌리기' },
      { presetItemId: 309, name: '바닥 걸레질' },
      { presetItemId: 310, name: '찬장 정리' },
      { presetItemId: 311, name: '서랍 정리' },
      { presetItemId: 312, name: '환풍기 필터 청소' },
    ],
  },
  {
    presetCategoryId: 4,
    category: Category.BATH_ROOM,
    presetItemList: [
      { presetItemId: 401, name: '세면대 닦기' },
      { presetItemId: 402, name: '거울 닦기' },
      { presetItemId: 403, name: '변기 청소' },
      { presetItemId: 404, name: '샤워기 물기 닦기' },
      { presetItemId: 405, name: '욕조 물기 닦기' },
      { presetItemId: 406, name: '바닥 청소' },
      { presetItemId: 407, name: '타일 청소' },
      { presetItemId: 408, name: '샤워 커튼 청소' },
      { presetItemId: 409, name: '욕조 청소' },
      { presetItemId: 410, name: '휴지통 비우기' },
      { presetItemId: 411, name: '배수구 청소' },
      { presetItemId: 412, name: '환풍기 필터 청소' },
    ],
  },
  {
    presetCategoryId: 5,
    category: Category.ETC,
    presetItemList: [
      { presetItemId: 501, name: '쓰레기 분리수거' },
      { presetItemId: 502, name: '강아지 산책' },
      { presetItemId: 503, name: '화분 물 주기' },
      { presetItemId: 504, name: '자동차 세차' },
    ],
  },
];
