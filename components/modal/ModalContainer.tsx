'use client';

import { useModalStateContext } from '@/contexts/ModalContext';

import AlertModal from './AlertModal';
import CserealModal from './CserealModal';

export const MODALS = {
  alert: AlertModal,
  csereal: CserealModal,
};

export default function ModalContainer() {
  const openedModals = useModalStateContext();

  return openedModals.map(({ Component, props }, i) => <Component key={i} {...props} />);
}
