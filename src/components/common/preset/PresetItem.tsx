import { BinIcon } from '@/components/common/icon';
import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import { memo } from 'react';

export interface PresetItemProps extends HouseworkCategoryTagProps {
  housework: string;
  isPresetSettingCustom?: boolean;
  isShowDeleteBtn?: boolean;
  isSelected?: boolean;
  isBottomSheet?: boolean;
  handleSelectClick?: () => void;
  handleSettingClick?: () => void;
  handleDeleteClick?: () => void;
}

const PresetItem = ({
  category,
  housework,
  isPresetSettingCustom,
  isShowDeleteBtn,
  isSelected,
  isBottomSheet,
  handleSelectClick,
  handleDeleteClick,
}: PresetItemProps) => {
  return (
    <li
      className={`flex flex-1 cursor-pointer list-none items-center justify-between border-b-[1px] border-solid border-white pl-5 ${
        isBottomSheet ? 'p-5' : 'p-4'
      } ${!isBottomSheet && isShowDeleteBtn ? 'box-border bg-sub2' : ''}`}
      onClick={handleSelectClick}
    >
      <div className='flex items-center'>
        <HouseworkCategoryTag
          category={category}
          variant={isSelected ? 'secondary' : 'noselected'}
        />
        <p className='pl-4 text-gray1 font-body'>{housework}</p>
      </div>
      {isPresetSettingCustom && (
        <div className='flex items-center'>
          {isShowDeleteBtn && (
            <button onClick={handleDeleteClick}>
              <BinIcon />
            </button>
          )}
        </div>
      )}
    </li>
  );
};

export default memo(PresetItem);
