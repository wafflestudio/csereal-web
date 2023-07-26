import { SegmentNode } from '@/types/page';
import { useState } from 'react';

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

export default function useNavbar() {
  const [state, setState] = useState<State>(getStateFromLocalStorage());

  function setStateAndSave(state: State) {
    setState(state);
    saveStateToLocalStorage(state);
  }

  return [state, setStateAndSave] as const;
}

const key = 'NavbarState';

function getStateFromLocalStorage(): State {
  return localStorage.getItem(key) === 'expanded' ? { type: 'expanded' } : { type: 'closed' };
}

function saveStateToLocalStorage(state: State) {
  localStorage.setItem(key, state.type === 'closed' ? 'closed' : 'expanded');
}
