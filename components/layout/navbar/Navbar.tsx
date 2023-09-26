'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

export default function Navbar() {
  const { navbarState, setNavbarState } = useNavbarContext();

  const handleMouseLeave = () => {
    // 세부 페이지가 보이고 있다면 닫기
    navbarState.type === 'hovered' && setNavbarState({ type: 'expanded' });
  };

  return (
    <div className="relative bg-main-orange flex" onMouseLeave={handleMouseLeave}>
      <NavbarRoot state={navbarState} setState={setNavbarState} />
      {navbarState.type === 'hovered' && <NavbarDetail segmentNode={navbarState.segmentNode} />}
    </div>
  );
}
