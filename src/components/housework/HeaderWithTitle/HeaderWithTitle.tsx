import BackBtn, { BackBtnProps } from '@/components/common/button/BackBtn/BackBtn';
import React from 'react';

export interface HeaderWithTitleProps extends BackBtnProps {
  /** 타이틀 */
  title: React.ReactNode;
}

const HeaderWithTitle = ({ title, handleClick }: HeaderWithTitleProps) => {
  return (
    <div className='mt-5 flex flex-col gap-5'>
      <BackBtn handleClick={handleClick} />
      <p className='whitespace-pre-line pt-2 text-black font-title'>{title}</p>
    </div>
  );
};

export default React.memo(HeaderWithTitle);
