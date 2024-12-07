import { create } from 'zustand';
import { Category, PresetTabName } from '@/constants';

interface Category {
  // 프리셋 카테고리 아이디
  presetCategoryId: number;
  // 프리셋 카테고리 이름
  category: string;
}

interface PresetItem {
  // 프리셋 아이템 아이디
  presetItemId: number;
  // 프리셋 아이템 이름
  name: string;
}
interface PresetList extends Category {
  presetItemList: Array<PresetItem>;
}

interface PresetState {
  // 카테고리 리스트
  categoryList: Category[];
  setCategoryList: (categories: Category[]) => void;
  // 활성화 탭 (사용자정의 | 프리셋)
  activeTab: string;
  setActiveTab: (activeTab: string | ((prevState: string) => string)) => void;
  // 카테고리 활성화 탭
  cateActiveTab: string;
  setCateActiveTab: (cateActiveTab: string) => void;
  // input 값
  inputVal: string;
  setInputVal: (inputVal: string) => void;
  // input 활성화 카테고리
  activeInputCate: string;
  setActiveInputCate: (activeInputTab: string) => void;
  // input 활성화 카테고리 id
  activeInputCateId: number;
  setActiveInputCateId: (activeInputTabId: number) => void;
  // 삭제버튼
  deleteButtonStates: Record<number, boolean>;
  setDeleteButtonStates: (activeItemId: number | null) => void;
  // 프리셋 리스트 데이터
  presetData: PresetList[];
  setPresetData: (presetData: PresetList[]) => void;
  // 선택한 아이템
  selectedItem: number | null;
  setSelectedItem: (itemId: number | null) => void;
}

const usePresetSettingStore = create<PresetState>(set => ({
  categoryList: [],
  setCategoryList: categoryList => set({ categoryList }),
  activeTab: PresetTabName.PRESET_DATA,
  // TODO 공통 Tab컴포넌트 Props 타입을 맞추기위함으로 불필요하다면 Tab컴포넌트 Props 변경필요
  setActiveTab: activeTab =>
    set(state => ({
      activeTab: typeof activeTab === 'function' ? activeTab(state.activeTab) : activeTab,
    })),
  cateActiveTab: Category.ALL,
  setCateActiveTab: cateActiveTab => set({ cateActiveTab }),
  inputVal: '',
  setInputVal: inputVal => set({ inputVal }),
  activeInputCate: '',
  setActiveInputCate: activeInputCate => set({ activeInputCate }),
  activeInputCateId: 0,
  setActiveInputCateId: activeInputCateId => set({ activeInputCateId }),
  deleteButtonStates: {},
  setDeleteButtonStates: activeItemId =>
    set(() => ({
      deleteButtonStates: activeItemId ? { [activeItemId]: true } : {},
    })),
  presetData: [],
  setPresetData: (presetData: PresetList[]) => set({ presetData }),
  selectedItem: null,
  setSelectedItem: selectedItem => set({ selectedItem }),
}));

export default usePresetSettingStore;
