import { memo } from 'react';

interface Category {
  presetCategoryId: number;
  category: string;
}
interface PresetCategoryProps {
  activeCate: string;
  categoryList: Category[];
  handleCateClick: (cate: string, categoryId: number) => void;
}

const PresetCategory = ({ activeCate, handleCateClick, categoryList }: PresetCategoryProps) => {
  return (
    <div className='flex gap-1'>
      {categoryList.map(item => (
        <button
          key={item.presetCategoryId}
          className={`rounded-lg px-2 py-[6px] font-label ${activeCate === item.category ? 'bg-gray3 text-white' : 'text-gray2'}`}
          onClick={() => handleCateClick(item.category, item.presetCategoryId)}
        >
          {item.category}
        </button>
      ))}
    </div>
  );
};

export default memo(PresetCategory);
