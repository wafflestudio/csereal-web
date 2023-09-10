import { useEffect, useRef } from 'react';

export default function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollDiv = scrollRef.current;

    if (scrollDiv) {
      const onWheel = (e: WheelEvent) => {
        // https://stackoverflow.com/a/74597327
        const isMouse = e.deltaY && !Number.isInteger(e.deltaY);
        if (!isMouse) return;
        e.preventDefault(); // prevent vertical scrolling while scrolling horizontally
        scrollDiv.scrollTo({
          left: scrollDiv.scrollLeft + e.deltaY * 2,
          behavior: 'smooth',
        });
      };

      scrollDiv.addEventListener('wheel', onWheel);

      return () => scrollDiv.removeEventListener('wheel', onWheel);
    }
  }, []);

  return { scrollRef };
}
