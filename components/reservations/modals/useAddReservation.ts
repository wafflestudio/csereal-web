import { useReducer, useState, FormEventHandler } from 'react';

import { NetworkError } from '@/apis';

import { postReservation } from '@/apis/reservation';

import { ReservationPostBody } from '@/types/reservation';

import { isSameDay } from '@/utils/date';
import { refreshPage } from '@/utils/refreshPage';
import { infoToast, errorToast } from '@/utils/toast';

import getOptimalEndTime from './getOptimalEndTime';

export default function useAddReservation(roomId: number) {
  const [privacyChecked, togglePrivacyChecked] = useReducer((x) => !x, false);
  const [body, _setBody] = useState<ReservationPostBody>(getDefaultBodyValue(roomId));

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const canSubmit =
      privacyChecked &&
      body.title !== '' &&
      body.contactEmail !== '' &&
      body.professor !== '' &&
      body.purpose !== '';

    if (!canSubmit) {
      infoToast('모든 필수 정보를 입력해주세요');
      return;
    }
    try {
      await postReservation(body);
      // TODO: revalidate같은거 써서 좀 더 예쁘게
      refreshPage();
    } catch (e) {
      if (e instanceof NetworkError) {
        if (e.statusCode === 409) {
          errorToast('해당 위치에 이미 예약이 존재합니다.');
        } else {
          errorToast(e.message);
        }
      } else if (e instanceof Error) {
        errorToast(e.message);
      } else {
        errorToast('알 수 없는 에러');
      }
    }
  };

  const setBody = <T extends keyof ReservationPostBody>(key: T, value: ReservationPostBody[T]) =>
    _setBody((body) => ({ ...body, [key]: value }));

  // 날짜 선택 모달용
  const setDate = (date: Date) => {
    let newStartTime = new Date(body.startTime);
    newStartTime.setFullYear(date.getFullYear());
    newStartTime.setMonth(date.getMonth());
    newStartTime.setDate(date.getDate());

    // 오늘을 선택헀으면 예약 불가 시간 필터링
    if (isSameDay(newStartTime, new Date())) {
      newStartTime = convertToFastestStartTime(newStartTime);
    }

    const endTime = getOptimalEndTime(
      new Date(body.startTime),
      new Date(body.endTime),
      newStartTime,
    );

    setBody('startTime', newStartTime.toISOString());
    setBody('endTime', endTime.toISOString());
  };

  return { handleSubmit, body, setBody, setDate, privacyChecked, togglePrivacyChecked };
}

const getDefaultBodyValue = (roomId: number): ReservationPostBody => {
  const startTime = convertToFastestStartTime(new Date());

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
  };
};

// date 이후 시점 중 가장 빠른 유효 startTime을 반환
const convertToFastestStartTime = (date: Date) => {
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
