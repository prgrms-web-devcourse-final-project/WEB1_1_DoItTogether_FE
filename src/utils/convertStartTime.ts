import { SelectedTime } from '@/pages/HouseWorkStepOnePage';

export const convertStartTime = (time: SelectedTime | null) => {
  if (!time) return null;

  let hour = parseInt(time.hour);
  if (time.ampm === 'PM' && hour !== 12) {
    hour += 12;
  } else if (time.ampm === 'AM' && hour === 12) {
    hour = 0;
  }

  return `${hour.toString().padStart(2, '0')}:${time.minute}`;
};
