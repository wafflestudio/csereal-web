import { ReactNode } from 'react';

import { useModalStore } from '@/stores/ModalStore';

export default function useModal() {
  const open = useModalStore((state) => state.open);
  const close = useModalStore((state) => state.close);

  const openModal = (component: ReactNode) => open(component);
  const closeModal = () => close();

  return { openModal, closeModal };
}