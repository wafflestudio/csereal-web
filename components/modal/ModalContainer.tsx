'use client';

import { useModalStateContext } from '@/contexts/ModalContext';

import AlertModal, { AlertModalProps } from './AlertModal';
import CserealModal, { CserealModalProps } from './CserealModal';

export const modals = {
  getAlert: (props: AlertModalProps) => ({ Component: AlertModal, props }),
  getCsereal: (props: CserealModalProps) => ({ Component: CserealModal, props }),
};

export default function ModalContainer() {
  const openedModals = useModalStateContext();

  return openedModals.map(({ Component, props }, i) => <Component key={i} {...props} />);
}
