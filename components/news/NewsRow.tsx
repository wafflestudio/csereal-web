import { Link } from '@/navigation';

import Tags from '@/components/common/Tags';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

import ImageWithFallback from '../common/ImageWithFallback';

export interface NewsRowProps {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date: Date;
  imageURL: string | null;

  descriptionBold?: {
    startIndex: number;
    endIndex: number;
  };
  hideDivider?: boolean;
}

const newsPath = getPath(news);

export default function NewsRow({
  href,
  title,
  description,
  tags,
  date,
  imageURL,
  descriptionBold,
  hideDivider,
}: NewsRowProps) {
  description += '...'; // clip이 안될정도로 화면이 좌우로 긴 경우 대비

  const dateStr = date.toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <article
      className={`text-neutral-700 flex flex-col-reverse sm:flex-row pb-5 ${
        hideDivider ? '' : 'border-neutral-100 border-b'
      }`}
    >
      <div className="flex flex-col flex-1 mr-[3.75rem] break-keep justify-between">
        <time className="mt-5 mb-2.5 sm:hidden text-md text-neutral-800">{dateStr}</time>

        <div className="flex flex-col items-start">
          <Link href={href} className="hover:underline">
            <h3 className="text-base font-bold mb-2.5">{title}</h3>
          </Link>

          <Link href={href} className="hover:cursor-pointer">
            <p className="text-md font-normal text-neutral-500 mb-3 sm:mb-8 line-clamp-3">
              {descriptionBold ? (
                <>
                  {description.slice(0, descriptionBold.startIndex)}
                  <span className="font-bold">
                    {description.slice(descriptionBold.startIndex, descriptionBold.endIndex)}
                  </span>
                  {description.slice(descriptionBold.endIndex)}
                </>
              ) : (
                description
              )}
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-start sm:gap-2.5">
          <Tags tags={tags} searchPath={newsPath} />
          <time className="hidden sm:inline self-end text-sm mb-0.5 text-neutral-800 whitespace-nowrap">
            {dateStr}
          </time>
        </div>
      </div>

      <Link href={href} className="h-[280px] sm:h-[9.375rem] aspect-[4/3] relative flex">
        <ImageWithFallback
          alt="포스트 대표 이미지"
          src={imageURL}
          fill
          className="object-fill"
          sizes="12.5rem"
        />
      </Link>
    </article>
  );
}
