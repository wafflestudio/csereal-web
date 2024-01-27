'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

export default function Navbar() {
  const { navbarState, setNavbarState } = useNavbarContext();

  const handleMouseLeave = () => setNavbarState({ type: 'closed' });

  return (
    <div className="absolute h-[100vh] z-50 bg-[#323235] flex" onMouseLeave={handleMouseLeave}>
      <NavbarRoot state={navbarState} setState={setNavbarState} />
      {navbarState.type === 'hovered' && <NavbarDetail segmentNode={navbarState.segmentNode} />}
    </div>
  );
}
