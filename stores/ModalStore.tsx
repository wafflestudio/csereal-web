import { ReactNode } from 'react';
import { create } from 'zustand';

interface ModalStore {
  modals: ReactNode[];
  open: (modal: ReactNode) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],
  open: (modal) => set((state) => ({ modals: [...state.modals, modal] })),
  close: () => set((state) => ({ modals: state.modals.slice(0, -1) })),
}));
