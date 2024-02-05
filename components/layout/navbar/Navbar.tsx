'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { main } from '@/types/page';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

export default function Navbar() {
  const { navbarState, setNavbarState } = useNavbarContext();
  const node = useCurrentSegmentNode();

  const handleMouseLeave = () => {
    if (node === main) setNavbarState({ type: 'expanded' });
    else setNavbarState({ type: 'closed' });
  };

  return (
    <div className={`absolute h-[100vh] flex z-50`} onMouseLeave={handleMouseLeave}>
      <NavbarRoot state={navbarState} setState={setNavbarState} />
      {navbarState.type === 'hovered' && <NavbarDetail segmentNode={navbarState.segmentNode} />}
    </div>
  );
}
