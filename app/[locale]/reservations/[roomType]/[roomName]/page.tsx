import { getWeeklyReservation, roomNameToId } from '@/apis/reservation';

import LoginUserVisible from '@/components/common/LoginUserVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ReservationCalendar from '@/components/reservations/ReservationCalendar';

interface RoomReservationProps {
  params: { roomType: string; roomName: string };
  searchParams: { selectedDate?: string };
}

export default function RoomReservationPage({ params, searchParams }: RoomReservationProps) {
  return (
    <LoginUserVisible fallback={<p>로그인 후 사용할 수 있는 페이지입니다.</p>}>
      <LoginedRoomReservationPage params={params} searchParams={searchParams} />
    </LoginUserVisible>
  );
}

export async function LoginedRoomReservationPage({ params, searchParams }: RoomReservationProps) {
  const roomId = isValidRoomName(params.roomName) ? roomNameToId[params.roomName] : undefined;
  const date = parseDate(searchParams.selectedDate || todayYMDStr());

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

  const startOfWeek = getStartOfWeek(date);

  const reservations = await getWeeklyReservation({
    roomId,
    year: startOfWeek.getFullYear(),
    month: startOfWeek.getMonth() + 1,
    day: startOfWeek.getDate(),
  });

  return (
    <PageLayout titleType="big" titleMargin="mb-[2.25rem]">
      <ReservationCalendar
        startDate={startOfWeek}
        selectedDate={date}
        reservations={reservations}
      />
    </PageLayout>
  );
}

const isValidRoomName = (roomName: string): roomName is keyof typeof roomNameToId => {
  return Object.keys(roomNameToId).findIndex((x) => x === roomName) !== -1;
};

// 오늘 날짜는 yyyy-mm-dd 형식으로 변환
const todayYMDStr = () => {
  const date = new Date();
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((x) => (x + '').padStart(2, '0'))
    .join('-');
};

// yyyy-mm-dd 형식의 date의 유효성 검증
const parseDate = (dateString: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return undefined;
  }

  const [year, month, day] = dateString.split('-').map((x) => +x);

  if (year < 1000 || year > 3000 || month == 0 || month > 12) {
    return undefined;
  }

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 윤년
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  if (day > 0 && day <= monthLength[month - 1]) {
    return new Date(year, month - 1, day);
  } else {
    return undefined;
  }
};

// 일주일의 시작을 월요일로 간주
const getStartOfWeek = (date: Date) => {
  const ret = new Date(date);
  const diff = (date.getDay() || 7) - 1;
  ret.setDate(ret.getDate() - diff);
  return ret;
};
