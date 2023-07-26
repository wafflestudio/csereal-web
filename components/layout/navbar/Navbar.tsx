'use client';

import { useState } from 'react';

import { SegmentNode } from '@/types/page';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

export type State =
  | {
      // 접힌 상태
      type: 'closed';
    }
  | {
      // 펼쳐진 상태
      type: 'expanded';
    }
  | {
      // 세부 페이지 보이는 상태
      type: 'hovered';
      segmentNode: SegmentNode;
    };

export default function Navbar() {
  const [state, setState] = useState<State>({ type: 'closed' });

  const handleMouseLeave = () => {
    // 세부 페이지가 보이고 있다면 닫기
    state.type === 'hovered' && setState({ type: 'expanded' });
  };

  return (
    <nav className="row-span-full bg-main-orange flex" onMouseLeave={handleMouseLeave}>
      <NavbarRoot state={state} setState={setState} />
      {state.type === 'hovered' && <NavbarDetail />}
    </nav>
  );
}
