import Image from 'next/image';
import Link from 'next/link';

import { MainNews } from '@/types/main';
import { formatMainNewsDateStr } from '@/utils/date';

import { CARD_WIDTH_REM } from './constants';

export default function NewsCard({ news }: { news: MainNews }) {
  return (
    <Link
      href={`/community/news/${news.id}`}
      style={{ width: `${CARD_WIDTH_REM}rem` }}
      className="flex h-[19rem] shrink-0 flex-col bg-neutral-50 shadow-[0_0_31.9px_0_rgba(0,0,0,0.07)]"
    >
      <div className="relative h-[6.25rem] w-full">
        <Image src={encodeURI(news.imageURL)} fill alt="" className="object-cover" sizes="220w" />
      </div>

      <div className="px-[0.87rem] pt-[0.88rem]">
        <h3 className="line-clamp-2 text-[0.9375rem] font-semibold text-neutral-900">
          {news.title}
        </h3>
        <time className="mt-3 block text-sm font-normal text-neutral-500">
          {formatMainNewsDateStr(news.createdAt)}
        </time>
        <p className="mt-3 line-clamp-4 text-sm font-normal leading-[150%] text-neutral-500">
          {news.description}
        </p>
      </div>
    </Link>
  );
}
