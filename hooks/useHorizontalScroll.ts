import { useEffect, useRef } from 'react';

export default function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollDiv = scrollRef.current;

    if (scrollDiv) {
      const onWheel = (e: WheelEvent) => {
        const isTouchpad = -e.deltaY ? -e.deltaY === -3 * e.deltaY : e.deltaMode === 0;
        if (isTouchpad) return; // enable touchpad horizontal scroll
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
