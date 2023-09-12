import { SlideMain } from '@/types/main';

import Slide from './Slide';

interface SlideScreenProps {
  slides: SlideMain[];
}

export default function SlideScreen({ slides }: SlideScreenProps) {
  return (
    <div className="flex gap-9">
      {slides.map((slide) => (
        <Slide slide={slide} key={slide.id} />
      ))}
    </div>
  );
}
