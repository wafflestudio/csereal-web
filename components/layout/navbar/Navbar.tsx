'use client';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';
import useNavbar from './useNavbar';

export default function Navbar() {
  const [state, setState] = useNavbar();

  const handleMouseLeave = () => {
    // 세부 페이지가 보이고 있다면 닫기
    state.type === 'hovered' && setState({ type: 'expanded' });
  };

  return (
    <nav className="relative row-span-full bg-main-orange flex" onMouseLeave={handleMouseLeave}>
      <NavbarRoot state={state} setState={setState} />
      {state.type === 'hovered' && <NavbarDetail segmentNode={state.segmentNode} />}
    </nav>
  );
}
