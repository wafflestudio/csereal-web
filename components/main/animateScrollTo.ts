import BezierEasing from 'bezier-easing';

// ease-in-out
// https://www.w3.org/TR/css-easing-1/#cubic-bezier-easing-functions
const easing = BezierEasing(0.42, 0, 0.58, 1);

export const animateScrollTo = (element: HTMLElement, to: number, durationMS: number) => {
  const start = element.scrollLeft;
  const change = to - start;
  const startDate = Date.now();

  const animateScroll = () => {
    const currentDate = Date.now();
    const currentTime = currentDate - startDate;
    element.scrollLeft = start + change * easing(currentTime / durationMS);
    if (currentTime < durationMS) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollLeft = to;
    }
  };

  animateScroll();
};
