import PresetCategory from '@/components/setting/presetSetting/PresetCategory';
import React, { useEffect } from 'react';
import { Category } from '@/constants';
import usePresetSettingStore from '@/store/usePresetSettingStore';
import EnterIcon from '@/components/common/icon/EnterIcon';
import { INPUT_VALIDATION } from '@/constants/validation';

interface Category {
  presetCategoryId: number;
  category: string;
}
interface PresetAddInputProps {
  categoryList: Category[];
  handleAddInput: (inputVal: string, categoryId: number) => void;
}

const PresetAddInput: React.FC<PresetAddInputProps> = ({ categoryList, handleAddInput }) => {
  const {
    inputVal,
    setInputVal,
    activeInputCate,
    setActiveInputCate,
    activeInputCateId,
    setActiveInputCateId,
  } = usePresetSettingStore();

  // 첫번째 카테고리 활성화
  useEffect(() => {
    setActiveInputCate(categoryList[0].category);
    setActiveInputCateId(categoryList[0].presetCategoryId);
  }, [categoryList, setActiveInputCate, setActiveInputCateId]);

  const handleInputCateClick = (cate: string, cateId: number) => {
    setActiveInputCate(cate);
    setActiveInputCateId(cateId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= INPUT_VALIDATION.preset.maxLength) {
      setInputVal(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      handleAddInput(inputVal, activeInputCateId);
      setInputVal('');
    }
  };

  const handleIconClick = () => {
    if (inputVal.trim()) {
      handleAddInput(inputVal, activeInputCateId);
      setInputVal('');
    }
  };

  return (
    <div className='flex flex-col gap-4 rounded-t-2xl bg-gray5 px-5 pb-8 pt-3 text-white shadow-[0_0px_6px_-1px_rgba(0,0,0,0.1)] font-body'>
      <PresetCategory
        categoryList={categoryList}
        activeCate={activeInputCate}
        handleCateClick={handleInputCateClick}
      />
      <div className='relative text-gray1'>
        <input
          className='h-12 w-full rounded-lg border-[1px] border-gray3_30 px-2 py-4 pr-10 transition-colors font-label focus:border-main focus:outline-none'
          placeholder='집안일을 입력해주세요 (최대 13글자)'
          value={inputVal}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div onClick={handleIconClick}>
          <EnterIcon
            className={`${inputVal ? 'text-sub' : 'text-gray4'} absolute right-2 top-1/2 -translate-y-1/2`}
          />
        </div>
      </div>
    </div>
  );
};

export default PresetAddInput;
