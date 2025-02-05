import { SelectedTime } from '@/hooks/useAddHouseWork';

/**
 * 12시간제 시간 객체를 24시간제 문자열로 변환합니다.
 *
 * @param time - 변환할 SelectedTime 객체 또는 null
 * @return 24시간제 형식의 시간 문자열 (예: "14:30") 또는 null
 */
export function convertStartTime(time: SelectedTime | null): string | null {
  if (!time) return null;

  let hour = parseInt(time.hour);
  if (time.ampm === 'PM' && hour !== 12) {
    hour += 12;
  } else if (time.ampm === 'AM' && hour === 12) {
    hour = 0;
  }

  return `${hour.toString().padStart(2, '0')}:${time.minute}`;
}

/**
 * 24시간제 시간 문자열을 12시간제 문자열로 변환합니다.
 *
 * @param time - 변환할 24시간제 시간 문자열 (예: "14:30")
 * @return 12시간제 형식의 문자열 (예: "오후 2:30")
 */
export function convertTimeTo12HourFormat(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? '오후' : '오전';
  const adjustedHours = hours % 12 === 0 ? 12 : hours % 12;

  return `${period} ${adjustedHours}:${minutes.toString().padStart(2, '0')}`;
}

/**
 * 24시간제 시간 문자열을 12시간제 SelectedTime 객체로 변환합니다.
 *
 * @param timeString - 변환할 24시간제 시간 문자열 (예: "14:30")
 * @return SelectedTime 객체 (예: { hour: "02", minute: "30", ampm: "PM" })
 */
export function convertTimeToObject(timeString: string): SelectedTime {
  // 입력된 시간 문자열을 분리합니다.
  const [hour, minute] = timeString.split(':').map(Number);

  // AM/PM 결정
  const ampm = hour < 12 ? 'AM' : 'PM';

  // 12시간제를 위한 조정
  const adjustedHour = hour % 12 || 12;

  return {
    hour: String(adjustedHour).padStart(2, '0'),
    minute: String(minute).padStart(2, '0'),
    ampm: ampm,
  };
}
