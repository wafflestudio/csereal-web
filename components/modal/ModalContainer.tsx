'use client';

import { useModalStateContext } from '@/contexts/ModalContext';

export default function ModalContainer() {
  const openedModals = useModalStateContext();
  return openedModals;
}
