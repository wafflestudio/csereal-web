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
      className="bg-neutral-900 w-[185px]"
      style={{ clipPath: 'polygon(calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%, 0 0)' }}
    >
      <Link href={`${newsPath}/${slide.id}`}>
        <div className="h-[116px]">
          <div className="bg-main-orange h-full">image</div>
        </div>
        <div className="p-3">
          <h5 className="mb-2 font-bold text-neutral-50 text-xs">제목</h5>
          <p className="text-neutral-50 text-[10px]">슬라이드 내용</p>
          <span className="inline-block w-full text-right text-neutral-50 text-[9px]">더보기</span>
        </div>
      </Link>
    </article>
  );
}
