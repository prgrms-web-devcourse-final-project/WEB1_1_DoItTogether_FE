/**
 * TabName 객체를 Charger 타입 배열로 변환합니다.
 * 주어진 TabName 객체의 값들을 기반으로 Tab 컴포넌트에서 사용할 chargers 배열을 생성합니다.
 *
 * @param TabName - 탭 이름을 포함한 객체 (key-value 형식)
 * @returns Charger 타입 배열 (각 탭 이름을 포함한 객체 배열)
 */
export const convertTabNameToChargers = (TabName: Record<string, string>) => {
  return Object.values(TabName).map(value => ({ name: value }));
};
