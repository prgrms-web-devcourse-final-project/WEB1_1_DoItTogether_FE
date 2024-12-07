import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import Button from '@/components/common/button/Button/Button';
import { Calendar } from '@/components/housework/DueDateSheet/Calendar/Calendar';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';

interface DueDateSheetProps {
  /** 바텀시트 오픈 여부 */
  isOpen: boolean;
  /** isOpen 바꾸는 set함수 */
  setOpen: (isOpen: boolean) => void;
}

const DueDateSheet = ({ isOpen, setOpen }: DueDateSheetProps) => {
  const { setStartDate, selectedDate, setSelectedDate } = useAddHouseWorkStore();
  const handleDoneClick = () => {
    if (selectedDate) {
      //string으로 전역저장(2024년 11월 30일)
      const formattedDate = selectedDate
        .toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        .split(' ')
        .join('')
        .replace('년', '년 ')
        .replace('월', '월 ');
      setStartDate(formattedDate);
    } else {
      setStartDate('');
    }

    setOpen(false);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} title='날짜 선택'>
      <div className='flex min-h-96 flex-col gap-y-6 pb-6'>
        <section aria-label='집안일 할당 바텀 시트' className='flex flex-1 flex-col gap-6'>
          <Calendar mode='single' selected={selectedDate} onSelect={handleDateSelect} />
        </section>
        <div className='px-5'>
          <Button label='확인' variant='full' size='large' handleClick={handleDoneClick} />
        </div>
      </div>
    </BottomSheet>
  );
};

export default DueDateSheet;
