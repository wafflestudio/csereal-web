'use client';

import { useModalStore } from '@/stores/ModalStore';

export default function ModalContainer() {
  const modals = useModalStore((state) => state.modals);

  return (
    <>
      {modals.map((Modal, index) => (
        <div key={index}>{Modal}</div>
      ))}
    </>
  );
}
