import Image from 'next/image';
import Link from 'next/link';

import { SlideMain } from '@/types/main';
import { news } from '@/types/page';

import { getPath } from '@/utils/page';

interface SlideProps {
  slide: SlideMain;
}

const newsPath = getPath(news);

export default function Slide({ slide }: SlideProps) {
  return (
    <article
      className="w-[185px]"
      style={{ clipPath: 'polygon(calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%, 0 0)' }}
    >
      <Link href={`${newsPath}/${slide.id}`} className="block w-[185px] h-[110px] relative">
        <Image src={slide.imageURL} alt={`${slide.title}_이미지`} fill />
      </Link>
      <div className="flex flex-col items-end p-2.5 h-[128px] text-neutral-900 border-x border-b border-[#000]">
        <h5 className="w-full font-noto mb-1.5 font-bold text-xs line-clamp-2">
          <Link href={`${newsPath}/${slide.id}`}>{slide.title}</Link>
        </h5>
        <p className="w-full font-noto font-light text-[10px] h-11 line-clamp-3">
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
