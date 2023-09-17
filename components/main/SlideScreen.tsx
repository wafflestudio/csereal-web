'use client';

import { useState } from 'react';

import { SlideMain } from '@/types/main';

import Indicator from './Indicator';
import SlideGroups from './SlideGroups';

interface SlideScreenProps {
  slides: SlideMain[];
}

export default function SlideScreen({ slides }: SlideScreenProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const result = chunkSlides(slides);

  const moveNext = () => {
    const nextIndex = currIndex < result.length - 1 ? currIndex + 1 : 0;
    setCurrIndex(nextIndex);
  };

  const movePrev = () => {
    const prevIndex = currIndex === 0 ? result.length - 1 : currIndex - 1;
    setCurrIndex(prevIndex);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex items-center">
        <DoubleArrowButton direction="left" onClick={movePrev} />
        <SlideGroups currentIndex={currIndex} slideGroups={result} />
        <DoubleArrowButton direction="right" onClick={moveNext} />
      </div>
      <Indicator total={result.length} currentIndex={currIndex} changeIndex={setCurrIndex} />
    </div>
  );
}

interface DoubleArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

function DoubleArrowButton({ direction, onClick }: DoubleArrowButtonProps) {
  return (
    <button onClick={onClick} className="h-fit">
      <span className="material-symbols-outlined text-[60px] font-extralight text-main-orange">
        {`keyboard_double_arrow_${direction}`}
      </span>
    </button>
  );
}

const chunkSlides = (slides: SlideMain[]) => {
  const result = [];
  for (let i = 0; i < slides.length; i += 4) {
    result.push(slides.slice(i, i + 4));
  }
  return result;
};
