import Link from 'next/link';

import { SlideMain } from '@/types/main';
import { news } from '@/types/page';

import { getPath } from '@/utils/page';

import ImageWithFallback from '../common/ImageWithFallback';

interface SlideGroupsProps {
  currentIndex: number;
  slideGroups: SlideMain[][];
}

export default function SlideGroups({ currentIndex, slideGroups }: SlideGroupsProps) {
  return (
    <div className="relative">
      {slideGroups.map((slides, i) => (
        <SlideGroup key={i} slides={slides} show={i === currentIndex} />
      ))}
    </div>
  );
}

interface SlideGroupProps {
  slides: SlideMain[];
  show?: boolean;
}

function SlideGroup({ slides, show }: SlideGroupProps) {
  return (
    <div
      className={`flex gap-[33.5px] ${
        show ? 'opacity-100' : 'absolute top-0 opacity-0'
      } transition-opacity duration-700`}
    >
      {slides.map((slide) => (
        <Slide slide={slide} key={slide.id} />
      ))}
    </div>
  );
}

interface SlideProps {
  slide: SlideMain;
}

const newsPath = getPath(news);

function Slide({ slide }: SlideProps) {
  return (
    <article
      className="w-[185px]"
      style={{ clipPath: 'polygon(calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%, 0 0)' }}
    >
      <Link href={`${newsPath}/${slide.id}`} className="block w-[185px] h-[116px] relative">
        <ImageWithFallback src={slide.imageURL} alt={`${slide.title}_이미지`} fill />
      </Link>
      <div className="flex flex-col items-end p-2.5 h-[128px] border-x border-b border-neutral-150">
        <h5 className="w-full font-noto mb-1.5 font-bold text-xs line-clamp-2">
          <Link href={`${newsPath}/${slide.id}`}>{slide.title}</Link>
        </h5>
        <p className="w-full font-noto font-light text-[10px] h-11 line-clamp-3 cursor-text">
          {slide.description}
        </p>
        <Link
          href={`${newsPath}/${slide.id}`}
          className="grow flex items-end font-noto font-light text-[9px] underline"
        >
          더보기
        </Link>
      </div>
    </article>
  );
}
