import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import AccountSetBtn from '@/components/my/AccountSetBtn/AccountSetBtn';
import React from 'react';

interface HeaderProps {
  title: string;
  isNeededDoneBtn: boolean;
  isNeededSettingBtn?: boolean;
  handleBack?: () => void;
  handleDone?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  isNeededDoneBtn,
  handleBack,
  handleDone,
  isNeededSettingBtn,
}) => {
  return (
    <div className='flex items-center justify-between border-b-[1px] border-solid border-gray4/40 bg-white px-5 py-4'>
      <div className='flex-1'>{handleBack && <BackBtn handleClick={handleBack} />}</div>
      <div className='flex-1 text-center text-black font-subhead'>{title}</div>
      <div className='flex flex-1 justify-end'>
        {isNeededDoneBtn ? (
          <button className='text-gray2 font-label' onClick={handleDone}>
            완료
          </button>
        ) : (
          isNeededSettingBtn && <AccountSetBtn />
        )}
      </div>
    </div>
  );
};

export default Header;
