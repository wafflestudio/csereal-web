export const isSameDay = (lhs: Date, rhs: Date) => {
  return (
    lhs.getFullYear() === rhs.getFullYear() &&
    lhs.getMonth() === rhs.getMonth() &&
    lhs.getDate() === rhs.getDate()
  );
};

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

/** e.g. 2023/08/01 (화) 오후 5:09 */
export const formatPostDateStr = (str: string) => {
  const date = new Date(str);

  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const day = DAYS[date.getDay()];

  const hour24 = date.getHours();
  const isAM = hour24 < 12;
  const half = isAM ? '오전' : '오후';
  const hour12 = [0, 12].includes(hour24) ? 12 : isAM ? hour24 : hour24 - 12;
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const time = `${half} ${hour12}:${minute}`;

  return `${yyyy}/${mm}/${dd} (${day}) ${time}`;
};

export const formatNewsPostDateStr = (str: string) => {
  const date = new Date(str);

  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.toLocaleString('ko-KR', { weekday: 'long' })}`;
};

export const formatSeminarDateStr = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  return `${month}/${day} (${DAYS[dayOfWeek]}) ${padZero(date.getHours())}:${padZero(
    date.getMinutes(),
  )}`;
};

const padZero = (str: number) => (str + '').padStart(2, '0');
