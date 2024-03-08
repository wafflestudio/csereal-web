import Link from 'next/link';

import { SlideMain } from '@/types/main';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

import ImageWithFallback from '../common/ImageWithFallback';

interface SlideGroupsProps {
  currentIndex: number;
  slideGroups: SlideMain[][];
}

export default function SlideGroups({ currentIndex, slideGroups }: SlideGroupsProps) {
  return (
    <div className="relative h-[244px] w-[840.5px]">
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
      className={`absolute top-0 flex gap-[33.5px] ${
        show ? 'z-10 opacity-100' : 'opacity-0'
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
      <Link
        href={`${newsPath}/${slide.id}`}
        className="relative block h-[116px] w-[185px] overflow-hidden"
      >
        <ImageWithFallback
          src={slide.imageURL}
          alt={`${slide.title}_이미지`}
          fill
          className="object-cover"
        />
      </Link>
      <div className="border-neutral-150 flex h-[128px] flex-col items-end border-x border-b p-2.5">
        <h5 className=" mb-1.5 line-clamp-2 w-full text-xs font-bold">
          <Link href={`${newsPath}/${slide.id}`}>{slide.title}</Link>
        </h5>
        <p className=" line-clamp-3 h-11 w-full cursor-text text-[10px] font-light">
          {slide.description}
        </p>
        <Link
          href={`${newsPath}/${slide.id}`}
          className=" flex grow items-end text-[9px] font-light underline"
        >
          더보기
        </Link>
      </div>
    </article>
  );
}
