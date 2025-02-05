import { forwardRef } from 'react';
import { OutIcon } from '@/components/common/icon';
import { ArrowRightIcon } from '@/components/common/icon';

interface AccountMenuItemProps {
  label: string;
  state?: string;
  iconType?: string;
  handleClick?: () => void;
}

const AccountMenuItem = forwardRef<HTMLDivElement, AccountMenuItemProps>(
  ({ label, state, iconType, handleClick }, ref) => {
    return (
      <div ref={ref} className='w-full border-b border-solid border-gray4/30'>
        <div className='flex h-12 items-center justify-between px-5'>
          <p className='text-gray1 font-body'>{label}</p>
          {state && <p className='text-gray1 font-label'>{state}</p>}
          {iconType === '로그아웃' && (
            <div className='' onClick={handleClick}>
              <OutIcon className={'text-gray3'} />
            </div>
          )}
          {iconType === '탈퇴' && (
            <div className='' onClick={handleClick}>
              <ArrowRightIcon className='text-gray3' />
            </div>
          )}
          {(iconType === 'terms' || iconType === 'course') && (
            <div className='' onClick={handleClick}>
              <ArrowRightIcon className='text-gray3' />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default AccountMenuItem;
