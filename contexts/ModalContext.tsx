'use client';

import { createContext, PropsWithChildren, ReactNode, useContext, useMemo, useState } from 'react';

interface ModalSetterContextData {
  open: (Component: ReactNode) => void;
  close: () => void;
}

const ModalStateContext = createContext<ReactNode[]>([]);
const ModalSetterContext = createContext<ModalSetterContextData>({
  open: () => {
    throw new Error('ModalContext not provided');
  },
  close: () => {
    throw new Error('ModalContext not provided');
  },
});

export const useModalStateContext = () => useContext(ModalStateContext);
export const useModalSetterContext = () => useContext(ModalSetterContext);

export default function ModalContextProvider({ children }: PropsWithChildren) {
  const [openedModals, setOpenedModals] = useState<ReactNode[]>([]);

  const open = (Component: ReactNode) => {
    setOpenedModals((modals) => [...modals, Component]);
  };

  const close = () => {
    setOpenedModals((modals) => modals.slice(0, -1));
  };

  const setter = useMemo(() => ({ open, close }), []);

  return (
    <ModalSetterContext.Provider value={setter}>
      <ModalStateContext.Provider value={openedModals}>{children}</ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}
