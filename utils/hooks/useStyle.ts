import { useLayoutEffect, useRef } from 'react';

const useStyle = <T extends HTMLElement>(
  setStyle: (style: CSSStyleDeclaration) => void,
  deps: unknown[],
) => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setStyle(ref.current.style);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  return { ref };
};

export default useStyle;
