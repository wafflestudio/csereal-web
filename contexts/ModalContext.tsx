'use client';

import React, {
  createContext,
  ElementType,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Modal {
  Component: ElementType;
  props?: object;
}

interface ModalSetterContextData {
  open: (Component: ElementType, props?: object) => void;
  close: () => void;
}

const ModalStateContext = createContext<Modal[]>([]);
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
  const [openedModals, setOpenedModals] = useState<Modal[]>([]);

  const open = (Component: ElementType, props?: object) => {
    setOpenedModals((modals) => [...modals, { Component, props }]);
  };

  const close = () => {
    setOpenedModals((modals) => {
      modals.pop();
      return [...modals];
    });
  };

  const setter = useMemo(() => ({ open, close }), []);

  return (
    <ModalSetterContext.Provider value={setter}>
      <ModalStateContext.Provider value={openedModals}>{children}</ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}
