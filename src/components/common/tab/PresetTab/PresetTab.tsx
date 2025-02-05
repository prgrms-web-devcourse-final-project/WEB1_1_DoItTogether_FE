import { memo } from 'react';
import PresetItem from '@/components/common/preset/PresetItem';
import PresetTabItem from '@/components/common/tab/PresetTab/PresetTabItem';
import { Tabs, TabsContent, TabsList } from '@/components/common/ui/tabs';
import { Category as PresetCategory } from '@/constants';
import { NoHouseWorkIcon } from '@/components/common/icon';

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

interface PresetTabProps {
  presetData: PresetList[];
  cateActiveTab?: string;
  setCateActiveTab?: (cateActiveTab: string) => void;
  isPresetSettingCustom?: boolean;
  deleteButtonStates?: Record<number, boolean>;
  isBottomSheet?: boolean;
  selectedItem?: number | null;
  handleDeleteClick?: (presetCategoryId: number, itemId: number) => void;
  handleClick?: (id: number, description: string, category: string) => void;
}

const PresetTab = ({
  presetData,
  cateActiveTab,
  setCateActiveTab,
  isPresetSettingCustom = false,
  deleteButtonStates = {},
  handleDeleteClick,
  isBottomSheet = false,
  handleClick,
  selectedItem,
}: PresetTabProps) => {
  const allPresetData = {
    category: PresetCategory.ALL,
    items: presetData.flatMap(categoryList =>
      categoryList.presetItemList.map(item => ({
        ...item,
        category: categoryList.category,
        presetCategoryId: categoryList.presetCategoryId,
      }))
    ),
  };

  return (
    <Tabs defaultValue={PresetCategory.ALL} value={cateActiveTab} onValueChange={setCateActiveTab}>
      <TabsList className='flex h-full w-full justify-start gap-4 overflow-x-auto bg-white p-0 px-5 no-scrollbar'>
        <PresetTabItem name={allPresetData.category} value={allPresetData.category} />
        {presetData.map(categoryList => (
          <PresetTabItem
            key={categoryList.presetCategoryId}
            name={categoryList.category}
            value={categoryList.category}
          />
        ))}
      </TabsList>
      <TabsContent
        key={allPresetData.category}
        value={allPresetData.category}
        className={`${isBottomSheet ? 'h-[250px]' : 'h-auto'} overflow-y-auto no-scrollbar`}
      >
        {allPresetData.items.length ? (
          <>
            {allPresetData.items.map(item => (
              <div key={item.presetItemId}>
                <PresetItem
                  category={item.category}
                  housework={item.name}
                  handleSelectClick={() =>
                    handleClick && handleClick(item.presetItemId, item.name, item.category)
                  }
                  isBottomSheet={isBottomSheet}
                  isPresetSettingCustom={isPresetSettingCustom}
                  isShowDeleteBtn={deleteButtonStates[item.presetItemId]} //각 아이템의 boolean값이 들어간다.
                  handleDeleteClick={
                    handleDeleteClick &&
                    (() => handleDeleteClick(item.presetCategoryId, item.presetItemId))
                  }
                  isSelected={selectedItem === item.presetItemId}
                />
              </div>
            ))}
          </>
        ) : (
          <div
            className={`${isBottomSheet ? 'h-[calc(100vh-400px)]' : 'h-[calc(100vh-320px)]'} flex items-center justify-center`}
          >
            <div className='flex flex-col items-center whitespace-pre-line'>
              <NoHouseWorkIcon />
              <p className='text-center text-gray3 font-subhead'>{`현재 집안일 목록이 없어요\n 새로운 목록을 만들어보세요`}</p>
            </div>
          </div>
        )}
      </TabsContent>

      {presetData.map(categoryList => (
        <TabsContent
          key={categoryList.presetCategoryId}
          value={categoryList.category}
          className={`${isBottomSheet ? 'h-[250px]' : 'h-auto'} overflow-y-auto no-scrollbar`}
        >
          {categoryList.presetItemList.length ? (
            categoryList.presetItemList.map(item => (
              <div key={item.presetItemId}>
                <PresetItem
                  category={categoryList.category}
                  housework={item.name}
                  handleSelectClick={() =>
                    handleClick && handleClick(item.presetItemId, item.name, categoryList.category)
                  }
                  isBottomSheet={isBottomSheet}
                  isPresetSettingCustom={isPresetSettingCustom}
                  isShowDeleteBtn={deleteButtonStates[item.presetItemId]}
                  handleDeleteClick={
                    handleDeleteClick &&
                    (() => handleDeleteClick(categoryList.presetCategoryId, item.presetItemId))
                  }
                  isSelected={selectedItem === item.presetItemId}
                />
              </div>
            ))
          ) : (
            <div
              className={`${isBottomSheet ? 'h-[calc(100vh-400px)]' : 'h-[calc(100vh-320px)]'} flex items-center justify-center`}
            >
              <div className='flex flex-col items-center whitespace-pre-line'>
                <NoHouseWorkIcon />
                <p className='text-center text-gray3 font-subhead'>{`현재 집안일 목록이 없어요\n 새로운 목록을 만들어보세요`}</p>
              </div>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default memo(PresetTab);
