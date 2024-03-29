import { Suspense } from 'react';

import ReservationCalendar from '@/app/[locale]/reservations/[roomType]/[roomName]/helper/ReservationCalendar';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

interface RoomReservationProps {
  params: { roomType: string; roomName: string };
  searchParams: { selectedDate?: string };
}

// TODO: 에러 처리 페이지 디자인
export default async function RoomReservationPage({ params, searchParams }: RoomReservationProps) {
  const roomId = roomNameToId[params.roomName];
  if (roomId === undefined) {
    return <PageLayout titleType="big">존재하지 않는 시설 아이디입니다.</PageLayout>;
  }

  const date = searchParams.selectedDate ? new Date(searchParams.selectedDate) : new Date();
  if (isNaN(date.valueOf())) {
    return <PageLayout titleType="big">유효하지 않은 날짜입니다.</PageLayout>;
  }

  return (
    <PageLayout titleType="big">
      <Suspense>
        <ReservationCalendar roomId={roomId} selectedDate={date} />
      </Suspense>
    </PageLayout>
  );
}

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
