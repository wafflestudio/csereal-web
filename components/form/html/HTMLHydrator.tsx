'use client';

import { useLayoutEffect } from 'react';

export default function HTMLHydrator() {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll('[data-style]');
    elements.forEach((el) => {
      const style = el.getAttribute('data-style');
      if (style) (el as HTMLElement).style.cssText = style;
    });
  }, []);

  return null;
}
