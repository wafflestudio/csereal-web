import Image from 'next/image';

import { news } from '@/types/page';

import Tags from '../common/Tags';

export interface NewsRowProps {
  title: string;
  description: string;
  tags: string[];
  date: Date;
  imageURL: string;
}

export default function NewsRow({ title, description, tags, date, imageURL }: NewsRowProps) {
  const dateStr = date.toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  return (
    <article className="text-neutral-700 font-noto flex pb-4 border-b-[1px] border-neutral-300 items-center">
      <div className="flex flex-col flex-1 mr-[3.75rem] break-keep">
        <a href="">
          <h3 className="text-md font-bold mb-[.69rem] hover:underline">{title}</h3>
        </a>
        <p className="text-xs font-normal mb-[.69rem] line-clamp-3">{description}</p>
        <Tags margin="mb-[.69rem]" tags={tags} page={news} />
        <time className="self-end text-xs font-normal">{dateStr}</time>
      </div>
      <div className="h-[9.375rem] aspect-[4/3] relative">
        <Image alt="포스트 대표 이미지" src={imageURL} fill className="object-fill" />
      </div>
    </article>
  );
}
