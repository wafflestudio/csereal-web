import { useModalSetterContext } from '@/contexts/ModalContext';

export default function useModal() {
  const { open, close } = useModalSetterContext();

  const openModal = (Component: React.ElementType, props?: { [key: string]: unknown }) => {
    open(Component, props);
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}
