import { ReactNode } from 'react';

import { useModalSetterContext } from '@/contexts/ModalContext';

export default function useModal() {
  const { open, close } = useModalSetterContext();

  const openModal = (Component: ReactNode) => {
    open(Component);
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}
