import { useState, FormEventHandler } from 'react';

import { postReservation } from '@/actions/reservation';

import { ReservationPostBody } from '@/types/reservation';

import { isSameDay } from '@/utils/date';
import { refreshPage } from '@/utils/refreshPage';
import { handleServerAction } from '@/utils/serverActionError';
import { infoToast, errorToast } from '@/utils/toast';

import getOptimalEndTime from './getOptimalEndTime';

export type SetReservationBody = <T extends keyof ReservationPostBody>(
  key: T,
  value: ReservationPostBody[T],
) => void;

export default function useAddReservation(roomId: number) {
  const [body, _setBody] = useState<ReservationPostBody>(() => getDefaultBodyValue(roomId));
  const canSubmit = checkSubmit(body);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!canSubmit) {
      infoToast('모든 필수 정보를 입력해주세요');
      return;
    }

    try {
      handleServerAction(await postReservation(body));
      // TODO: revalidate같은거 써서 좀 더 예쁘게
      refreshPage();
    } catch (e) {
      handleError(e);
    }
  };

  const setBody: SetReservationBody = (key, value) =>
    _setBody((body) => ({ ...body, [key]: value }));

  // 날짜 선택시 시작 시간과 끝나는 시간을 업데이트
  const setDate = (date: Date) => {
    let newStart = new Date(body.startTime);
    newStart.setFullYear(date.getFullYear());
    newStart.setMonth(date.getMonth());
    newStart.setDate(date.getDate());

    // 오늘을 선택헀으면 예약 불가 시간 필터링
    if (isSameDay(newStart, new Date())) {
      newStart = getEarliestStartTimeFrom(newStart);
    }

    const endTime = getOptimalEndTime({
      prevStart: new Date(body.startTime),
      prevEnd: new Date(body.endTime),
      newStart,
    });

    setBody('startTime', newStart.toISOString());
    setBody('endTime', endTime.toISOString());
  };

  return {
    handleSubmit,
    body,
    setBody,
    setDate,
    canSubmit,
  };
}

const getDefaultBodyValue = (roomId: number): ReservationPostBody => {
  const startTime = getEarliestStartTimeFrom(new Date());

  const endTime = new Date(startTime);
  endTime.setTime(endTime.getTime() + 30 * 60 * 1000);

  return {
    roomId,
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
    recurringWeeks: 1,
    title: '',
    contactEmail: '',
    contactPhone: '',
    professor: '',
    purpose: '',
    agreed: false,
  };
};

const checkSubmit = (body: ReservationPostBody) => {
  return (
    body.agreed &&
    body.title !== '' &&
    body.contactEmail !== '' &&
    body.professor !== '' &&
    body.purpose !== ''
  );
};

const handleError = (e: unknown) => {
  if (e instanceof Error) {
    if (e.message === '409') {
      errorToast('해당 위치에 이미 예약이 존재합니다.');
    } else if (e.message === '401') {
      errorToast('관리자만 예약을 추가할 수 있습니다.');
    } else {
      errorToast(e.message);
    }
  } else {
    errorToast('알 수 없는 에러');
  }
};

// date 이후 시점 중 가장 빠른 유효 startTime을 반환
const getEarliestStartTimeFrom = (date: Date) => {
  let startTime = new Date(date);

  // 과거면 현재로 변경
  const now = new Date();
  if (startTime < now) startTime = now;

  startTime.setSeconds(0);
  startTime.setMilliseconds(0);

  // 가장 가까운 30분 혹은 0분으로 올림
  if (30 < startTime.getMinutes()) {
    startTime = new Date(startTime.getTime() + 30 * 60 * 1000);
    startTime.setMinutes(0);
  } else {
    startTime.setMinutes(30);
  }

  // 가장 늦은 시작 시간인 오후 10시 30분보다 늦다면 다음날 8시로 설정
  if (
    startTime.getHours() < 8 ||
    23 <= startTime.getHours() ||
    (startTime.getHours() === 22 && 30 < startTime.getMinutes())
  ) {
    startTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000);
    startTime.setHours(8);
    startTime.setMinutes(0);
  }
  return startTime;
};
