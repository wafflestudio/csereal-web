import { useEffect, RefObject } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutClickAlerter = (ref: RefObject<HTMLElement>, f: () => void) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current === null) return;
      if (e.target instanceof Node === false) return;
      if (ref.current.contains(e.target) === false) f();
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [ref, f]);
};
