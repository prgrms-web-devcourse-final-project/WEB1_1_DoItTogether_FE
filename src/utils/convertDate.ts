export const formatDateToISO = (date: string) => {
  return date.replace(/(\d{4})년 (\d{1,2})월 (\d{1,2})일/, (_, year, month, day) => {
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
  });
};
