import { CheckIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { User } from '@/types/apis/groupApi';

interface OpenSheetBtnWithLabelProps {
  /**선택된 value */
  selected: string | number;
  /** 클릭하는 이벤트 */
  handleClick: () => void;
  members?: User[];
  icon?: React.ReactNode;
}

const OpenSheetBtnWithLabel: React.FC<OpenSheetBtnWithLabelProps> = ({
  selected,
  handleClick,
  members,
  icon,
}: OpenSheetBtnWithLabelProps) => {
  const { nickname } = useAddHouseWorkStore();

  const displayValue =
    members && typeof selected === 'number'
      ? members.find(member => member.userId === selected)?.nickName || nickname
      : selected;

  return (
    <div>
      <Button
        variant='group'
        size='large'
        className='text-gray justify-between bg-white px-3'
        onClick={handleClick}
      >
        <div className='flex items-center gap-x-4 font-body'>
          <div>{icon}</div>
          {displayValue}
        </div>
        <CheckIcon />
      </Button>
    </div>
  );
};

export default OpenSheetBtnWithLabel;
