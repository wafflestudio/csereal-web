import Image from 'next/image';
import Link from 'next/link';

export interface SeminarListProps {
  title: string;
  author: string;
  company: string;
  date: Date;
  location: string;
  imageURL: string;
}

export default function SeminarList({
  title,
  author,
  company,
  date,
  location,
  imageURL,
}: SeminarListProps) {
  const dateStr = date.toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <article className="text-neutral-700 font-noto flex pb-4 border-b-[1px] border-neutral-200 items-center">
      <Link href="" className="h-[9.375rem] aspect-[4/3] relative">
        <Image
          alt="포스트 대표 이미지"
          src={imageURL}
          fill
          className="object-fill"
          sizes="12.5rem"
          priority
        />
      </Link>
      <div className="flex flex-col items-start flex-1 mr-[3.75rem] break-keep">
        <Link href="" className="hover:underline">
          <h3 className="text-md font-bold mb-[.69rem]">{title}</h3>
        </Link>
        <Link href="" className="hover:cursor-pointer">
          <p className="text-xs font-normal mb-[.69rem] line-clamp-3">{company}</p>
        </Link>
        <time className="self-end text-xs font-normal">{dateStr}</time>
      </div>
    </article>
  );
}
