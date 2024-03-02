import { Link } from '@/navigation';

import Tags from '@/components/common/Tags';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';


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
      className={`text-neutral-700 flex pb-4 ${
        hideDivider ? '' : 'border-neutral-200 border-b-[1px]'
      }`}
    >
      <div className="flex flex-col flex-1 mr-[3.75rem] break-keep justify-between">
        <div className="flex flex-col items-start">
          <Link href={href} className="hover:underline font-noto ">
            <h3 className="text-md font-bold mb-[.69rem]">{title}</h3>
          </Link>

          <Link href={href} className="hover:cursor-pointer">
            <p className="text-xs font-normal text-neutral-500 mb-[.69rem] line-clamp-3">
              {descriptionBold ? (
                <>
                  {description.slice(0, descriptionBold.startIndex)}
                  <span className="font-noto font-bold">
                    {description.slice(descriptionBold.startIndex, descriptionBold.endIndex)}
                  </span>
                  {description.slice(descriptionBold.endIndex)}
                </>
              ) : (
                description
              )}
            </p>
          </Link>

          <Tags margin="mb-[.69rem]" tags={tags} searchPath={newsPath} />
        </div>

        <time className="self-end text-xs text-neutral-500">{dateStr}</time>
      </div>

      <Link href={href} className="h-[9.375rem] aspect-[4/3] relative flex">
        <ImageWithFallback alt="포스트 대표 이미지" src={imageURL} fill className="object-cover" />
      </Link>
    </article>
  );
}
