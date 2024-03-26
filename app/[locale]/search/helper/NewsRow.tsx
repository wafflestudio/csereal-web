import { Link } from '@/navigation';

import ImageWithFallback from '@/components/common/ImageWithFallback';

export interface NewsRowProps {
  href: string;
  title: string;
  date: Date;
  imageURL: string | null;

  description: {
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  };
}

export default function NewsRow({
  href,
  title,
  description: { partialDescription, boldEndIndex, boldStartIndex },
  date,
  imageURL,
}: NewsRowProps) {
  const dateStr = date.toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <article className="flex gap-6">
      <Link href={href} className="relative flex aspect-[4/3] h-[9.375rem]">
        <ImageWithFallback
          alt="포스트 대표 이미지"
          src={imageURL}
          fill
          className="object-cover"
          sizes="12.5rem"
        />
      </Link>
      <div className="mr-8 flex flex-col justify-between">
        <div className="flex flex-col items-start">
          <Link href={href} className="hover:underline">
            <h3 className="mb-2.5 text-base font-bold">{title}</h3>
          </Link>

          <Link
            href={href}
            className="mb-3 line-clamp-3 break-all text-md font-normal leading-[1.6] text-neutral-500 hover:cursor-pointer"
          >
            <p className="line-clamp-2 text-md font-normal text-neutral-700">
              {partialDescription.slice(0, boldStartIndex)}
              <span className="font-semibold text-neutral-950">
                {partialDescription.slice(boldStartIndex, boldEndIndex)}
              </span>
              {partialDescription.slice(boldEndIndex)}
            </p>
          </Link>
        </div>

        <time className="whitespace-nowrap text-sm leading-[26px] text-neutral-800">{dateStr}</time>
      </div>
    </article>
  );
}
