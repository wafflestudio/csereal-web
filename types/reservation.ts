export interface ReservationPreview {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
}

export interface Reservation {
  id: number;
  recurrenceId: string;

  startTime: string;
  endTime: string;
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

  startTime: string;
  endTime: string;
  recurringWeeks: number;

  title: string;
  contactEmail: string;
  contactPhone: string;
  professor: string;
  purpose: string;
}
