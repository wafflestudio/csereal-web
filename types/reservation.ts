export interface Reservation {
  id: number;
  recurrenceId: string;

  startTime: Date;
  endTime: Date;
  recurringWeeks: number;

  title: string;
  professor: string;
  purpose?: string;
  // 영어 이름
  roomName: string;
  // 방 주소
  roomLocation: string;

  userName: string;
  contactEmail: string;
  contactPhone: string;
}

export interface ReservationPostBody {
  roomId: number;

  startTime: Date;
  endTime: Date;
  recurringWeeks: number;

  title: string;
  contactEmail: string;
  contactPhone: string;
  professor: string;
  purpose?: string;
}
