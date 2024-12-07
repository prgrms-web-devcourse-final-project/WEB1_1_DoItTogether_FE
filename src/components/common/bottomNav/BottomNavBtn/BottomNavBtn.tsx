import React from 'react';

interface BottomNavBtnProps {
  icon: React.ReactNode;
  name: string;
  handleClick?: () => void;
  isActive: boolean;
}

const BottomNavBtn: React.FC<BottomNavBtnProps> = ({
  /** 아이콘 */
  icon,
  /** menu name */
  name,
  /** click */
  handleClick,
  /** active */
  isActive,
}) => {
  return (
    <button className='flex flex-col items-center gap-1 px-3' onClick={handleClick}>
      {icon}
      <p className={`font-caption ${isActive ? 'text-black' : 'text-gray3'}`}>{name}</p>
    </button>
  );
};

export default BottomNavBtn;
