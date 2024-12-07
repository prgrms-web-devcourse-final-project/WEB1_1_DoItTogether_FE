import React from 'react';
import { CheckEmptyIcon, CheckFillIcon, FingerIcon, HeartIcon } from '@/components/common/icon';
import { HOUSEWORK_STATUS } from '@/constants/homePage';

export interface ListActionBtnProps {
  /** 상태 */
  status: string;
  /** 액션 */
  handleAction: (id: number) => void;
  /** 아이디 */
  id: number;
}

const ListActionBtn: React.FC<ListActionBtnProps> = ({ status, handleAction, id }) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-[4px]`}
      onClick={() => handleAction(id)}
    >
      {status === HOUSEWORK_STATUS.COMPLETE && <CheckFillIcon width={32} height={32} />}
      {status === HOUSEWORK_STATUS.UN_COMPLETE && (
        <CheckEmptyIcon width={32} height={32} className={'text-gray5'} />
      )}
      {status === HOUSEWORK_STATUS.FINGER && (
        <FingerIcon width={32} height={32} fillColor={'fill-blue1'} />
      )}
      {status === HOUSEWORK_STATUS.HEART && (
        <HeartIcon width={32} height={32} fillColor={'fill-pink1'} />
      )}
    </div>
  );
};

export default ListActionBtn;
