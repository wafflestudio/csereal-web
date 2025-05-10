import { create } from 'zustand';
import { SegmentNode } from '@/constants/segmentNode';

export type NavbarState =
  | { type: 'closed' }
  | { type: 'expanded' }
  | { type: 'hovered'; segmentNode: SegmentNode };

interface NavbarStore {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  navbarState: { type: 'closed' }, // 기본값
  setNavbarState: (state) => set({ navbarState: state }),
}));
