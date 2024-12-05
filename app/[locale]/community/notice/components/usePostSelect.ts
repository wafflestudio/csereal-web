'use client';

import { useReducer } from 'react';

export type PostSelectAction = { type: 'TOGGLE'; id: number } | { type: 'RESET' };

const reducer = (state: Set<number>, action: PostSelectAction) => {
  const nextState = new Set(state);

  switch (action.type) {
    case 'TOGGLE':
      if (nextState.has(action.id)) nextState.delete(action.id);
      else nextState.add(action.id);
      break;
    case 'RESET':
      nextState.clear();
      break;
  }

  return nextState;
};

export const usePostSelect = () => {
  const [selectedIds, dispatchIds] = useReducer(reducer, new Set<number>());
  const [editMode, _toggleEditMode] = useReducer((x) => !x, false);

  const toggleEditMode = () => {
    dispatchIds({ type: 'RESET' });
    _toggleEditMode();
  };

  return { selectedIds, dispatchIds, editMode, toggleEditMode };
};
