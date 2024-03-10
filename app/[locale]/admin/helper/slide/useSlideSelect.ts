import { useReducer } from 'react';

export default function useSlideSelect() {
  const value = useReducer(reducer, new Set<number>());
  return value;
}

type ReducerAction = { type: 'ADD' | 'DELETE'; id: number } | { type: 'RESET' };

const reducer = (state: Set<number>, action: ReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return new Set<number>(state.add(action.id));
    case 'DELETE':
      state.delete(action.id);
      return new Set<number>(state);
    case 'RESET':
      return new Set<number>();
    default:
      throw new Error('undefined action');
  }
};
