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
  /** 오늘 여부 */
  isToday: boolean;
  /** 클릭 이벤트 */
  handleClick: () => void;
}

const DateItem = ({
  date,
  day,
  pendingCnt,
  solvedMatters,
  isActive,
  isToday,
  handleClick,
}: DateItemProps) => {
  const getBackgroundColor = () => {
    if (isActive) return 'bg-main';
    return 'bg-white';
  };

  const getTextColor = (defaultColor: string, activeColor: string) => {
    if (isActive) return activeColor;
    return defaultColor;
  };

  return (
    <div
      onClick={handleClick}
      className={`relative flex h-[72px] w-10 flex-col items-center justify-center overflow-hidden rounded-full px-3 py-1 ${getBackgroundColor()}`}
    >
      <span className={`font-caption ${getTextColor('text-gray2', 'text-sub')}`}>{date}</span>
      <span className={`font-subhead ${getTextColor('text-black', 'text-white')}`}>{day}</span>
      {solvedMatters ? (
        <CheckIcon width={16} height={16} className={getTextColor('text-main', 'text-white')} />
      ) : (
        <span className={`font-caption ${getTextColor('text-main', 'text-white')} z-10`}>
          +{pendingCnt}
        </span>
      )}

      {isActive && <span className={`absolute -bottom-[10px] h-9 w-9 rounded-full bg-sub`}></span>}
      {isToday && !isActive && (
        <span className='absolute top-0.5 h-1 w-1 rounded-full bg-main'></span>
      )}
    </div>
  );
};

export default DateItem;
