import { SelectedTime } from '@/hooks/useAddHouseWork';

export default function convertTimeToObject(timeString: string): SelectedTime {
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
