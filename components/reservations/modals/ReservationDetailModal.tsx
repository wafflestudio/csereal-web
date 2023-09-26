'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import useSWR from 'swr';

import { getRequest } from '@/apis';

import { deleteAllRecurringReservation, deleteSingleReservation } from '@/apis/reservation';

import LoginStaffVisible from '@/components/common/LoginStaffVisible';
import AlertModal from '@/components/modal/AlertModal';
import ModalFrame from '@/components/modal/ModalFrame';

import useModal from '@/hooks/useModal';

import { Reservation } from '@/types/reservation';

import { refreshPage } from '@/utils/refreshPage';
import { errorToast, successToast } from '@/utils/toast';

import BasicButton from '../BasicButton';

export default function ReservationDetailModal({ reservationId }: { reservationId: number }) {
  const { data: reservation } = useSWR<Reservation>(`/reservation/${reservationId}`, getRequest);

  const { closeModal } = useModal();

  if (reservation === undefined) return <></>;

  const dateStr = new Date(reservation.startTime).toLocaleString('ko-kr', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  });

  const formatTime = (date: Date) => `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;

  return (
    <ModalFrame onClose={closeModal}>
      <div className="relative bg-white font-noto w-[24.4rem] text-neutral-700 px-5 py-6 text-sm font-normal border-[#32B40A] border-t-[3px] border-b">
        <h2 className="font-bold mb-5 text-[1.25rem]">{reservation.title}</h2>
        <div className="flex flex-col gap-6">
          <p>{reservation.purpose ?? ''}</p>
          <div className="flex flex-col gap-1">
            <p>예약 날짜: {dateStr}</p>
            <div className="flex gap-6">
              <p>시작 시간: {formatTime(new Date(reservation.startTime))}</p>
              <p>종료 시간: {formatTime(new Date(reservation.endTime))}</p>
            </div>
            <p>매주 반복: {reservation.recurringWeeks}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>세미나실: {reservation.roomLocation}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p>예약자 계정: {reservation.userName}</p>
            <p>이메일: {reservation.contactEmail}</p>
            <p>핸드폰: {reservation.contactPhone}</p>
          </div>
          <LoginStaffVisible>
            <DeleteButtons reservationId={reservation.id} recurrenceId={reservation.recurrenceId} />
          </LoginStaffVisible>
        </div>
        <span
          className="absolute top-3 right-3 material-symbols-outlined text-base cursor-pointer"
          onClick={closeModal}
        >
          close
        </span>
      </div>
    </ModalFrame>
  );
}

const DeleteButtons = ({
  reservationId,
  recurrenceId,
}: {
  reservationId: number;
  recurrenceId: string;
}) => {
  const [submitting, setSubmitting] = useState(false);
  const { openModal } = useModal();

  console.log(reservationId, recurrenceId);

  const handleDeleteAll = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await deleteAllRecurringReservation(recurrenceId);
      successToast('예약을 삭제했습니다.');
      refreshPage();
    } catch (error) {
      toastError(error);
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await deleteSingleReservation(reservationId);
      successToast('예약을 삭제했습니다.');
      refreshPage();
    } catch (error) {
      toastError(error);
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-end gap-2 h-[1.875rem]">
      <BasicButton
        className="px-[.62rem]"
        onClick={() =>
          openModal(
            <AlertModal
              message="반복 예약을 모두 삭제하시겠습니까?"
              confirmText="삭제"
              onConfirm={handleDeleteAll}
            />,
          )
        }
      >
        반복 예약 전체 삭제
      </BasicButton>
      <BasicButton
        className="px-[.62rem]"
        onClick={() =>
          openModal(
            <AlertModal
              message="해당 예약을 삭제하시겠습니까?"
              confirmText="삭제"
              onConfirm={handleDelete}
            />,
          )
        }
      >
        해당 예약만 삭제
      </BasicButton>
    </div>
  );
};

export const ReservationDetailModalButton = ({
  reservationId,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  reservationId: number;
}) => {
  const { openModal } = useModal();

  return (
    <button
      {...props}
      onClick={() => openModal(<ReservationDetailModal reservationId={reservationId} />)}
    />
  );
};

const padZero = (x: number) => (x + '').padStart(2, '0');

const toastError = (error: any) => {
  if (error instanceof Error) {
    errorToast(error.message);
  } else {
    errorToast('알 수 없는 문제가 발생했습니다.');
  }
};
