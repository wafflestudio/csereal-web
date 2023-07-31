export const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const formatDate = (
  date: Date,
  option?: { includeDay?: boolean; includeTime?: boolean },
) => {
  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  let dateString = `${yyyy}/${mm}/${dd}`; // e.g. 2023-08-01
  if (option?.includeDay) dateString += ` (${DAYS[date.getDay()]})`; // e.g. 2023-08-01 (화)
  if (option?.includeTime) dateString += ` ${formatTime(date)}`; // e.g. 2023-08-01 오후 4:01 or 2023-08-01 (화) 오후 4:01

  return `${yyyy}/${mm}/${dd}`;
};

export const formatTime = (date: Date) => {
  let half;
  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');

  if (hour < 12) {
    if (hour === 0) hour = 12;
    half = '오전';
  } else {
    if (hour !== 12) hour -= 12;
    half = '오후';
  }

  return `${half} ${hour}:${minute}`; // e.g. 오후 4:01
};
