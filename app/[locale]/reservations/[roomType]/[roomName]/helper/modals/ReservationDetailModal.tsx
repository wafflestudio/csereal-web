'use client';

import { ReactNode } from 'react';

import {
  deleteAllRecurringReservation,
  deleteSingleReservation,
  getReservation,
} from '@/actions/reservation';

import LoginVisible from '@/components/common/LoginVisible';
import AlertModal from '@/components/modal/AlertModal';
import ModalFrame from '@/components/modal/ModalFrame';

import { Reservation } from '@/types/reservation';

import useModal from '@/utils/hooks/useModal';
import { refreshPage } from '@/utils/refreshPage';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import BasicButton from '../BasicButton';

type ReservationModalButtonProps = {
  id: number;
  height: string;
  top: string;
  children: ReactNode;
};

export default function ReservationModalButton({
  id,
  height,
  top,
  children,
}: ReservationModalButtonProps) {
  const { openModal } = useModal();

  const handleClick = async () => {
    const reservation = await getReservation(id);
    openModal(<ReservationDetailModal reservation={reservation} />);
  };

  return (
    <button
      className={`absolute flex w-full flex-col items-center bg-[#ff6914cc]`}
      style={{ height, top }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function ReservationDetailModal({ reservation }: { reservation: Reservation }) {
  const { closeModal } = useModal();

  const startTime = new Date(reservation.startTime);
  const reservationDateStr = [
    startTime.getFullYear() % 100,
    startTime.getMonth() + 1,
    startTime.getDate(),
  ]
    .map((x) => x.toString().padStart(2, '0'))
    .join('.');

  const formatTime = (date: Date) => `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;

  return (
    <ModalFrame onClose={closeModal}>
      <div className="min-w-[341px] border-b border-t-[3px] border-main-orange bg-neutral-100 p-7">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-neutral-800">{reservation.title}</h2>
          <span
            className="material-symbols-outlined cursor-pointer text-2xl font-light text-neutral-500 hover:text-neutral-800"
            onClick={closeModal}
          >
            close
          </span>
        </div>

        <div className="mb-[2.19rem] flex flex-col gap-6">
          <p className="text-neutral-800">{reservation.purpose ?? '예약 목적 미기입'}</p>

          <div className="flex flex-col gap-[6px]">
            <Row title="예약 날짜" body={reservationDateStr} />
            <Row title="시작 시간" body={formatTime(new Date(reservation.startTime))} />
            <Row title="종료 시간" body={formatTime(new Date(reservation.endTime))} />
            <Row title="매주 반복" body={reservation.recurringWeeks + '회'} />
          </div>

          <Row title="예약 위치" body={reservation.roomLocation} />

          <div className="flex flex-col gap-[6px]">
            <p className="text-md font-normal text-neutral-400">예약자 정보</p>
            <Row title="계정" body={hypenIfEmpty(reservation.userName)} />
            <Row title="이메일" body={hypenIfEmpty(reservation.contactEmail)} />
            <Row title="핸드폰" body={hypenIfEmpty(reservation.contactPhone)} />
          </div>
        </div>

        <LoginVisible>
          <DeleteButtons reservationId={reservation.id} recurrenceId={reservation.recurrenceId} />
        </LoginVisible>
      </div>
    </ModalFrame>
  );
}

const Row = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="flex gap-3">
      <p className="w-[4.0625rem] text-md text-neutral-500">{title}</p>
      <p className="text-md text-neutral-800">{body}</p>
    </div>
  );
};

const DeleteButtons = ({
  reservationId,
  recurrenceId,
}: {
  reservationId: number;
  recurrenceId: string;
}) => {
  const { openModal } = useModal();

  const handleDeleteAll = async () => {
    try {
      handleServerAction(await deleteAllRecurringReservation(recurrenceId));
      successToast('예약을 삭제했습니다.');
      refreshPage();
    } catch (error) {
      handleServerError(error);
    }
  };

  const handleDelete = async () => {
    try {
      handleServerAction(await deleteSingleReservation(reservationId));
      successToast('예약을 삭제했습니다.');
      refreshPage();
    } catch (error) {
      handleServerError(error);
    }
  };

  return (
    <div className="ml-[3.94rem] flex h-[1.875rem] gap-2">
      <BasicButton
        className="px-[.62rem] text-md"
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
        className="px-[.62rem] text-md"
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

const padZero = (x: number) => (x + '').padStart(2, '0');

const hypenIfEmpty = (str: string | null) => (str === '' || str === null ? '-' : str);

const handleServerError = (e: unknown) => {
  if (e instanceof Error) {
    if (e.message === '401') {
      errorToast('권한이 없습니다.');
    } else {
      errorToast(e.message);
    }
  } else {
    errorToast('알 수 없는 에러');
  }
};
