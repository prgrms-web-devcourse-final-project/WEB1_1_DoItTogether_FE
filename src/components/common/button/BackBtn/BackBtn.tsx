import { ArrowLeftIcon } from '@/components/common/icon';
import React from 'react';

export interface BackBtnProps {
  /** 뒤로가기 */
  handleClick?: () => void;
  fill?: string;
}

const BackBtn = ({ handleClick, fill = 'text-gray1' }: BackBtnProps) => {
  return (
    <div onClick={handleClick}>
      <ArrowLeftIcon className={`${fill} cursor-pointer`} />
    </div>
  );
};

export default React.memo(BackBtn);
