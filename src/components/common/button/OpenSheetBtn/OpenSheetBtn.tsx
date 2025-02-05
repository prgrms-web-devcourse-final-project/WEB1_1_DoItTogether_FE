import { ArrowRightIcon, HomeIcon, PlusIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';
import React from 'react';

interface OpenSheetBtnProps {
  /** 셀렉트 버튼 title*/
  text: string;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
  type: string;
  icon?: React.ReactNode;
}

const ICONS = {
  HOME: <HomeIcon width={24} height={24} />,
  PLUS: <PlusIcon width={20} height={20} className='text-gray3' />,
  ARROW_RIGHT: <ArrowRightIcon className='text-main' />,
} as const;

const OpenSheetBtn: React.FC<OpenSheetBtnProps> = ({
  text,
  handleClick,
  type,
  icon,
}: OpenSheetBtnProps) => {
  return (
    <Button
      variant='group'
      size='large'
      className='items-center !justify-between bg-white px-3'
      onClick={handleClick}
    >
      <div className='flex items-center gap-x-4'>
        {type === 'housework' ? '' : ICONS.HOME}
        {type === 'housework' && icon}
        <div className='text-gray3 font-body'>{text}</div>
      </div>

      <div>{type === 'housework' ? ICONS.PLUS : ICONS.ARROW_RIGHT}</div>
    </Button>
  );
};

export default React.memo(OpenSheetBtn);
