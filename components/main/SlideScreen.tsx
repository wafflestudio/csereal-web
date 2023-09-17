'use client';

import { useCallback, useEffect, useState } from 'react';

import { SlideMain } from '@/types/main';

import Indicator from './Indicator';
import SlideGroups from './SlideGroups';

interface SlideScreenProps {
  slides: SlideMain[];
}

export default function SlideScreen({ slides }: SlideScreenProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const result = chunkSlides(slides);

  const moveAutomatically = useCallback(() => {
    setCurrIndex((prev) => (prev === result.length - 1 ? 0 : prev + 1));
  }, [result.length]);

  const moveToNextSlide = () => {
    const nextIndex = currIndex === result.length - 1 ? 0 : currIndex + 1;
    setCurrIndex(nextIndex);
    const interval = setInterval(moveAutomatically, 4000);
    setIntervalId(interval);
  };

  const moveToPrevSlide = () => {
    const prevIndex = currIndex === 0 ? result.length - 1 : currIndex - 1;
    setCurrIndex(prevIndex);
    const interval = setInterval(moveAutomatically, 4000);
    setIntervalId(interval);
  };

  useEffect(() => {
    let interval = intervalId ? intervalId : setInterval(moveAutomatically, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [intervalId, moveAutomatically]);

  return (
    <section className="flex flex-col gap-5 items-center">
      <div className="flex items-center">
        <DoubleArrowButton direction="left" onClick={moveToPrevSlide} />
        <SlideGroups currentIndex={currIndex} slideGroups={result} />
        <DoubleArrowButton direction="right" onClick={moveToNextSlide} />
      </div>
      <Indicator total={result.length} currentIndex={currIndex} changeIndex={setCurrIndex} />
    </section>
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
