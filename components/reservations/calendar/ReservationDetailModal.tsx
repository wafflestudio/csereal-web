'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import useModal from '@/hooks/useModal';

import ModalFrame from '../../modal/ModalFrame';

export default function ReservationDetailModal() {
  const { closeModal } = useModal();

  return <ModalFrame onClose={closeModal}>asd</ModalFrame>;
}

export const ReservationDetailModalButton = (
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  const { openModal } = useModal();
  return <button {...props} onClick={() => openModal(<ReservationDetailModal />)} />;
};
