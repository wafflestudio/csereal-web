'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { main } from '@/utils/segmentNode';

import NavbarDetail from './NavbarDetail';
import NavbarRoot, { NAVBAR_CLOSED_WIDTH_REM } from './NavbarRoot';

// 네비바 컴포넌트들은 모두 interactivity가 크므로 CSR 처리합니다.
export default function Navbar() {
  const { setNavbarState } = useNavbarContext();
  const node = useCurrentSegmentNode();

  const handleMouseLeave = () => {
    setNavbarState({ type: node === main ? 'expanded' : 'closed' });
  };

  return (
    <div className={`sticky bottom-0 top-0 z-50 shrink-0 sm:w-[${NAVBAR_CLOSED_WIDTH_REM}rem]`}>
      <div
        className={`absolute bottom-0 left-0 top-0 hidden sm:flex`}
        onMouseLeave={handleMouseLeave}
      >
        <NavbarRoot />
        <NavbarDetail />
      </div>
    </div>
  );
}
