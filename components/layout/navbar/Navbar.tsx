'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';

import { main } from '@/types/page';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

export default function Navbar() {
  const { navbarState, setNavbarState } = useNavbarContext();

  const handleMouseLeave = () => {
    // 세부 페이지가 보이고 있다면 닫기
    navbarState.type === 'hovered' && setNavbarState({ type: 'expanded' });
  };

  return (
    <div
      className="relative flex overflow-y-hidden overflow-x-scroll"
      onMouseLeave={handleMouseLeave}
    >
      <NavbarRoot state={navbarState} setState={setNavbarState} />
      <NavbarDetail segmentNode={main.children[0]} />
    </div>
  );
}
