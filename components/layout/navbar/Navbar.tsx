'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { main } from '@/utils/segmentNode';

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
    <div className={`absolute bottom-0 top-0 z-50 hidden sm:flex`} onMouseLeave={handleMouseLeave}>
      <NavbarRoot state={navbarState} setState={setNavbarState} />
      {navbarState.type === 'hovered' && <NavbarDetail segmentNode={navbarState.segmentNode} />}
    </div>
  );
}
