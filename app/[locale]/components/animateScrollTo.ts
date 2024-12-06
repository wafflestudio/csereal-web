import BezierEasing from 'bezier-easing';

// ease-in-out 함수
// https://www.w3.org/TR/css-easing-1/#cubic-bezier-easing-functions
const easing = BezierEasing(0.42, 0, 0.58, 1);
const EASE_IN_OUT_DURATION_MS = 700;

export const animateScrollLeft = (element: HTMLElement, offsetEnd: number) => {
  const offsetStart = element.scrollLeft;
  const offsetDelta = offsetEnd - offsetStart;
  const startMS = Date.now();

  const animateScroll = () => {
    const msDelta = Date.now() - startMS;

    if (msDelta < EASE_IN_OUT_DURATION_MS) {
      element.scrollLeft = offsetStart + offsetDelta * easing(msDelta / EASE_IN_OUT_DURATION_MS);

      const id = requestAnimationFrame(animateScroll);
      return () => cancelAnimationFrame(id);
    } else {
      element.scrollLeft = offsetEnd;
    }
  };

  return animateScroll();
};
