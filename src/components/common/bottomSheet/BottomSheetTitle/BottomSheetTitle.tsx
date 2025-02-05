import React from 'react';

interface BottomSheetTitleProps {
  title: string;
}

const BottomSheetTitle = ({ title }: BottomSheetTitleProps) => {
  return (
    <div className='flex items-center justify-center gap-2 border-gray4 py-5 text-center text-gray1 font-subhead'>
      {title}
    </div>
  );
};

export default React.memo(BottomSheetTitle);
