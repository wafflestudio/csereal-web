import { getWeeklyReservation } from '@/apis/reservation';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ReservationCalendar from '@/components/reservations/ReservationCalendar';

interface RoomReservationProps {
  params: { roomType: string; roomName: string };
  searchParams: { startDate?: string };
}

export default async function RoomReservation({ params, searchParams }: RoomReservationProps) {
  const roomId = isValidRoomName(params.roomName) ? roomNameToId[params.roomName] : undefined;
  const date = parseDate(searchParams.startDate || todayYMDStr());

  if (roomId === undefined) {
    return (
      <PageLayout titleType="big" titleMargin="mb-[2.25rem]">
        존재하지 않는 시설 아이디입니다.
      </PageLayout>
    );
  }

  if (date === undefined) {
    return (
      <PageLayout titleType="big" titleMargin="mb-[2.25rem]">
        유효하지 않은 날짜입니다.
      </PageLayout>
    );
  }

  const reservations = await getWeeklyReservation(roomId, date.year, date.month, date.day);

  return (
    <PageLayout titleType="big" titleMargin="mb-[2.25rem]">
      <ReservationCalendar reservations={reservations} />
    </PageLayout>
  );
}

const isValidRoomName = (roomName: string): roomName is keyof typeof roomNameToId => {
  return Object.keys(roomNameToId).findIndex((x) => x === roomName) !== -1;
};

const todayYMDStr = () => {
  const date = new Date();
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((x) => (x + '').padStart(2, '0'))
    .join('-');
};

// yyyy-mm-dd 형식의 date의 유효성 검증
const parseDate = (dateString: string) => {
  // First check for the pattern
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return undefined;

  const [year, month, day] = dateString.split('-').map((x) => +x);

  if (year < 1000 || year > 3000 || month == 0 || month > 12) return undefined;

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 윤년
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  if (day > 0 && day <= monthLength[month - 1]) {
    return { year, month, day };
  } else {
    return undefined;
  }
};

const roomNameToId = {
  // 세미나실
  '301-417': 0,
  '301-521': 1,
  '301-551-4': 2,
  '301-552-1': 3,
  '301-552-2': 4,
  '301-552-3': 5,
  '301-552-6': 6,
  '301-317': 7,
  '301-308': 8,
  '301-309-1': 9,
  '301-309-2': 10,
  '301-309-3': 11,
  //   실습실
  '302-311-1': 12,
  '302-310-2': 13,
  // 공과대학 강의실
  '302-208': 14,
  '302-209': 15,
} as const;
