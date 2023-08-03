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
    <article className="text-neutral-700 font-noto flex mb-4 pb-4 border-b-2 border-neutral-300">
      <div className="flex flex-col flex-1 mr-[3.75rem]">
        <h3 className="text-md font-bold mb-[.69rem]">{title}</h3>
        <p className="text-xs font-normal mb-[.69rem] break-keep">{description}</p>
        <Tags margin="mb-[.69rem]" tags={tags} page={news} />
        <time className="self-end text-xs font-normal">{dateStr}</time>
      </div>
      <div className="w-[12.5rem] aspect-[4/3] relative">
        <Image alt="포스트 대표 이미지" src={imageURL} fill className="object-fill" />
      </div>
    </article>
  );
}
