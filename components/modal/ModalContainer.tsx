'use client';

import { useModalStore } from '@/stores/ModalStore';
import { Fragment } from 'react';

export default function ModalContainer() {
  const modals = useModalStore((state) => state.modals);
  return modals.map((Modal, index) => <Fragment key={index}>{Modal}</Fragment>);

}
