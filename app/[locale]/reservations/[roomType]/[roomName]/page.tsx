import { getWeeklyReservation, roomNameToId } from '@/apis/reservation';

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
