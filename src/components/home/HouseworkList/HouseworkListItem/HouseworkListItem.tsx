import React from 'react';
import ListActionBtn from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown from '@/components/home/ControlDropdown/ControlDropdown';
import { Housework } from '@/types/apis/houseworkApi';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import convertTimeTo12HourFormat from '@/utils/convertTime';
import { ClockIcon } from '@/components/common/icon';
import useHomePageStore from '@/store/useHomePageStore';

export interface HouseworkListItemProps extends Housework {
  handleAction: (houseworkId: number) => void;
  handleEdit: (houseworkId: number) => void;
  handleDelete: (houseworkId: number) => void;
}

const HouseworkListItem: React.FC<HouseworkListItemProps> = ({
  houseworkId,
  category,
  task,
  startTime,
  isAllDay,
  assignee,
  userId,
  status,
  handleAction,
  handleEdit,
  handleDelete,
}) => {
  const { myInfo } = useHomePageStore();
  const newStatus =
    userId !== myInfo?.userId
      ? status === HOUSEWORK_STATUS.COMPLETE
        ? HOUSEWORK_STATUS.HEART
        : HOUSEWORK_STATUS.FINGER
      : status;

  return (
    <li
      className={`relative flex list-none items-center overflow-hidden rounded-2xl ${status === HOUSEWORK_STATUS.COMPLETE ? `bg-gray4` : `bg-white`} p-4 px-3`}
    >
      <ListActionBtn
        status={newStatus}
        handleAction={() => handleAction(houseworkId)}
        id={houseworkId}
      />
      <div className='flex w-full flex-col justify-between gap-1 pl-2'>
        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <p
              className={`!font-semibold text-black font-label xs:font-subhead ${status === HOUSEWORK_STATUS.COMPLETE && 'text-gray2 line-through'}`}
            >
              {task}
            </p>
            <HouseworkCategoryTag
              category={category}
              variant={status === HOUSEWORK_STATUS.COMPLETE ? 'disabled' : 'primary'}
            />
          </div>
          <ControlDropdown
            id={houseworkId}
            handleEdit={() => handleEdit(houseworkId)}
            handleDelete={() => handleDelete(houseworkId)}
          />
        </div>
        <div className='flex justify-between'>
          <p className={`text-gray2 font-caption`}>{assignee}</p>
          <div className='z-100 flex items-center gap-1'>
            <ClockIcon
              fillClass='fill-gray2'
              circleStrokeClass='stroke-gray2'
              handStrokeClass='stroke-white'
              width={16}
              height={16}
            />
            <p className='text-gray2 font-caption'>
              {isAllDay ? '하루 종일' : convertTimeTo12HourFormat(startTime!)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HouseworkListItem;
