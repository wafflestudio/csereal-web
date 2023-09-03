'use client';

import { Fragment } from 'react';

import { useModalStateContext } from '../../contexts/ModalContext';

export default function ModalContainer() {
  const openedModals = useModalStateContext();
  return openedModals.map((modal, idx) => <Fragment key={idx}>{modal}</Fragment>);
}
