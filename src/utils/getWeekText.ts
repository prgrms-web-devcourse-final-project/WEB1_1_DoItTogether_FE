export default function getWeekText(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0부터 시작하므로 11월은 10
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // 한 주의 시작이 일요일부터 시작되도록 함
  const adjustedDay = date.getDate() + firstDayOfWeek; // 날짜 + 첫 주의 시작 위치 보정
  const weekNumber = Math.ceil(adjustedDay / 7);

  const weekLabels: { [key: number]: string } = {
    1: '첫째 주',
    2: '둘째 주',
    3: '셋째 주',
    4: '넷째 주',
    5: '다섯째 주',
  };

  return `${year}년 ${new Intl.DateTimeFormat('ko-KR', { month: 'long' }).format(date)} ${weekLabels[weekNumber]}`;
}
