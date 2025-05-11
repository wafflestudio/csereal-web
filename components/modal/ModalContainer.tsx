'use client';

import { Fragment } from 'react';

import { useModalStore } from '@/stores/ModalStore';

export default function ModalContainer() {
  const modals = useModalStore((state) => state.modals);
  return modals.map((Modal, index) => <Fragment key={index}>{Modal}</Fragment>);

}
