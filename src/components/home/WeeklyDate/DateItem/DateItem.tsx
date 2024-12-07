import { CheckIcon } from '@/components/common/icon';

interface DateItemProps {
  /** 날짜 */
  date: string;
  /** 요일 */
  day: string;
  /** 미완료 집안일 개수 */
  pendingCnt: number;
  /** 일간 완료 상태 */
  solvedMatters: boolean;
  /** 활성화 상태 */
  isActive: boolean;
  /** 클릭 이벤트 */
  handleClick: () => void;
}

const DateItem = ({
  date,
  day,
  pendingCnt,
  solvedMatters,
  isActive,
  handleClick,
}: DateItemProps) => {
  return (
    // TODO rounded, font-weight 공통변수로 수정할 예정
    <div
      onClick={handleClick}
      className={`relative flex h-[72px] w-10 flex-col items-center justify-center overflow-hidden rounded-full px-3 py-1 ${isActive ? 'bg-main' : 'bg-white'} `}
    >
      <span className={`${isActive ? 'text-sub' : 'text-gray2'} font-caption`}>{date}</span>
      <span className={`font-subhead ${isActive ? 'text-white' : 'text-black'}`}>{day}</span>
      {solvedMatters ? (
        <CheckIcon width={16} height={16} className={`${isActive ? 'text-white' : 'text-main'}`} />
      ) : (
        <span className={`font-caption ${isActive ? 'text-white' : 'text-main'} z-10`}>
          +{pendingCnt}
        </span>
      )}

      {isActive && <span className={`absolute -bottom-[10px] h-9 w-9 rounded-full bg-sub`}></span>}
    </div>
  );
};

export default DateItem;
