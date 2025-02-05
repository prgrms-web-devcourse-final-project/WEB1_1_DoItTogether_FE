import { ArrowRightIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';

interface PresetSettingBtnProps {
  handleClick: () => void;
}

const PresetSettingBtn: React.FC<PresetSettingBtnProps> = ({ handleClick }) => {
  return (
    <div className='flex flex-col gap-2 pb-6'>
      <p className='text-black font-label'>프리셋 관리</p>
      <Button variant='group' size='large' onClick={handleClick} className='!justify-between px-2'>
        <p className='text-gray1 font-body'>프리셋 수정하기</p>
        <ArrowRightIcon className='text-main' />
      </Button>
    </div>
  );
};

export default PresetSettingBtn;
