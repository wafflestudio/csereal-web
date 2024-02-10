import { getWeeklyReservation } from '@/apis/reservation';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ReservationCalendar from '@/components/reservations/ReservationCalendar';

interface RoomReservationProps {
  params: { roomType: string; roomName: string };
  searchParams: { selectedDate?: string };
}

const TITLE_BOTTOM_MARGIN = 'mb-[2.75rem]';

// TODO: 에러 처리 페이지 디자인
export default async function RoomReservationPage({ params, searchParams }: RoomReservationProps) {
  const roomId = roomNameToId[params.roomName];
  if (roomId === undefined) {
    return (
      <PageLayout titleType="big" titleMargin={TITLE_BOTTOM_MARGIN}>
        존재하지 않는 시설 아이디입니다.
      </PageLayout>
    );
  }

  const date = searchParams.selectedDate ? new Date(searchParams.selectedDate) : new Date();
  if (isNaN(date.valueOf())) {
    return (
      <PageLayout titleType="big" titleMargin={TITLE_BOTTOM_MARGIN}>
        유효하지 않은 날짜입니다.
      </PageLayout>
    );
  }

  const startOfWeek = getStartOfWeek(date);

  const reservations = await getWeeklyReservation({
    roomId,
    year: startOfWeek.getFullYear(),
    month: startOfWeek.getMonth() + 1,
    day: startOfWeek.getDate(),
  });

  return (
    <PageLayout titleType="big" titleMargin={TITLE_BOTTOM_MARGIN}>
      <ReservationCalendar
        startDate={startOfWeek}
        selectedDate={date}
        reservations={reservations}
        roomId={roomId}
      />
    </PageLayout>
  );
}

/** 일주일의 시작을 월요일로 간주 */
const getStartOfWeek = (date: Date) => {
  const ret = new Date(date);
  const diff = (date.getDay() || 7) - 1;
  ret.setDate(ret.getDate() - diff);
  return ret;
};

const roomNameToId: { [roomName: string]: number } = {
  // 세미나실
  '301-417': 1,
  '301-521': 2,
  '301-551-4': 3,
  '301-552-1': 4,
  '301-552-2': 5,
  '301-552-3': 6,
  '301-553-6': 7,
  '301-317': 8,
  '302-308': 9,
  '302-309-1': 10,
  '302-309-2': 11,
  '302-309-3': 12,
  //   실습실
  '302-311-1': 13,
  '302-310-2': 14,
  // 공과대학 강의실
  '302-208': 15,
  '302-209': 16,
};
