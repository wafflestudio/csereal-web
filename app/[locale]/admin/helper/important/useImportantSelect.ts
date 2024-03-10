import { useReducer } from 'react';

import { ImportantCategory, ImportantPostIdentifier } from '@/types/admin';

export default function useImportantSelect() {
  const value = useReducer(reducer, []);
  return value;
}

type ReducerAction =
  | { type: 'ADD' | 'DELETE'; identifier: { id: number; category: ImportantCategory } }
  | { type: 'RESET' };

const reducer = (state: ImportantPostIdentifier[], action: ReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.identifier];
    case 'DELETE':
      return state.filter(
        (info) =>
          !(info.id === action.identifier.id && info.category === action.identifier.category),
      );
    case 'RESET':
      return [];
    default:
      throw new Error('undefined action');
  }
};
