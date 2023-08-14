import Image from 'next/image';
import Link from 'next/link';

import Tags from '@/components/common/Tags';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

export interface NewsRowProps {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date: Date;
  imageURL: string;
}

const newsPath = getPath(news);

export default function NewsRow({ href, title, description, tags, date, imageURL }: NewsRowProps) {
  description += '...'; // clip이 안될정도로 화면이 좌우로 긴 경우 대비

  const dateStr = date.toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <article className="text-neutral-700 font-noto flex pb-4 border-b-[1px] border-neutral-200 items-center">
      <div className="flex flex-col items-start flex-1 mr-[3.75rem] break-keep">
        <Link href={href} className="hover:underline">
          <h3 className="text-md font-bold mb-[.69rem]">{title}</h3>
        </Link>
        <Link href={href} className="hover:cursor-pointer">
          <p className="text-xs font-normal mb-[.69rem] line-clamp-3">{description}</p>
        </Link>
        <Tags margin="mb-[.69rem]" tags={tags} searchPath={newsPath} />
        <time className="self-end text-xs font-normal">{dateStr}</time>
      </div>
      <Link href={href} className="h-[9.375rem] aspect-[4/3] relative">
        <Image
          alt="포스트 대표 이미지"
          src={imageURL}
          fill
          className="object-fill"
          sizes="12.5rem"
          priority
        />
      </Link>
    </article>
  );
}
