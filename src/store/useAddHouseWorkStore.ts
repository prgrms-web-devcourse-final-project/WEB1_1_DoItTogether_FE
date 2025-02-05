import { Housework } from '@/types/apis/houseworkApi';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/apis/groupApi';

interface AddHouseWorkState {
  userId: number | null;
  selectedItem: number | null;
  nickname: string;
  targetHousework: Housework | undefined;
  members: User[];
  isMemberLoading: boolean;
}

interface AddHouseWorkActions {
  setUserId: (id: number | null) => void;
  setSelectedItem: (itemId: number | null) => void;
  setNickName: (nickname: string) => void;
  setTargetHousework: (targetHousework: Housework | undefined) => void;
  setMembers: (members: User[]) => void;
  setIsMemberLoading: (isMemberLoading: boolean) => void;
  reset: () => void;
}

const initialState: AddHouseWorkState = {
  userId: null,
  selectedItem: null,
  nickname: '',
  targetHousework: undefined,
  members: [],
  isMemberLoading: true,
};

type State = AddHouseWorkState & AddHouseWorkActions;
type PersistedState = Pick<AddHouseWorkState, 'targetHousework'>;

const useAddHouseWorkStore = create<State>()(
  persist(
    set => ({
      ...initialState,
      setUserId: userId => set({ userId }),
      setSelectedItem: selectedItem => set({ selectedItem }),
      setNickName: nickname => set({ nickname }),
      setTargetHousework: targetHousework => set({ targetHousework }),
      setMembers: members => set({ members }),
      setIsMemberLoading: isMemberLoading => set({ isMemberLoading }),
      reset: () => set(initialState),
    }),
    {
      name: 'housework-storage',
      partialize: (state): PersistedState => ({
        targetHousework: state.targetHousework,
      }),
    }
  )
);

export default useAddHouseWorkStore;
