import { Link } from '@/navigation';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import Tags from '@/components/common/Tags';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

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
      className={`flex flex-col-reverse pb-5 sm:flex-row ${
        hideDivider ? '' : 'border-b border-neutral-100'
      }`}
    >
      <div className="mr-8 flex flex-1 flex-col justify-between break-keep">
        <time className="mb-2.5 mt-5 text-md text-neutral-800 sm:hidden">{dateStr}</time>

        <div className="flex flex-col items-start">
          <Link href={href} className="hover:underline">
            <h3 className="mb-2.5 text-base font-bold">{title}</h3>
          </Link>

          <Link href={href} className="hover:cursor-pointer">
            <p className="mb-3 line-clamp-3 text-md font-normal leading-[1.6] text-neutral-500 sm:mb-8">
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
        <div className="flex items-center justify-between sm:gap-2.5">
          <Tags tags={tags} searchPath={newsPath} />
          <time className="hidden self-end whitespace-nowrap text-sm leading-[26px] text-neutral-800 sm:inline">
            {dateStr}
          </time>
        </div>
      </div>

      <Link href={href} className="relative flex aspect-[4/3] h-[280px] sm:h-[9.375rem]">
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
