import { useModalSetterContext } from '@/contexts/ModalContext';

export default function useModal() {
  const { open, close } = useModalSetterContext();

  const openModal = ({ Component, props }: { Component: React.ElementType; props?: object }) => {
    open(Component, props);
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}
