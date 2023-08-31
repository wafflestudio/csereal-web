import PageLayout from '@/components/layout/pageLayout/PageLayout';

interface RoomReservationProps {
  params: { roomType: string; roomName: string };
}

export default function RoomReservation({ params }: RoomReservationProps) {
  const id = isValidRoomName(params.roomName) ? roomNameToId[params.roomName] : undefined;

  return (
    <PageLayout titleType="big" titleMargin="mb-[2.25rem]">
      {id + ''}
    </PageLayout>
  );
}

const isValidRoomName = (roomName: string): roomName is keyof typeof roomNameToId => {
  return Object.keys(roomNameToId).findIndex((x) => x === roomName) !== -1;
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
