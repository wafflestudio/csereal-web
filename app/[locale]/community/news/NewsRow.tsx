import { Link } from '@/navigation';

import Tags from '@/components/common/Tags';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

import ImageWithFallback from '../../../../components/common/ImageWithFallback';

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
      className={`text-neutral-700 flex pb-6 ${
        hideDivider ? '' : 'border-neutral-200 border-b-[1px]'
      }`}
    >
      <div className="flex flex-col flex-1 mr-[2.5rem] justify-between p-1">
        <Link href={href} className="hover:underline font-noto ">
          <h3 className="text-base font-bold mb-[.69rem]">{title}</h3>
        </Link>

        <Link href={href} className="hover:cursor-pointer grow">
          <p className="text-md leading-[160%] text-justify [text-align-last:left] font-normal text-neutral-500 mb-[.69rem] line-clamp-2 tracking-[0.01rem]">
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

        <div className="w-full flex justify-between items-center mt-auto">
          <Tags tags={tags} searchPath={newsPath} />
          <time className="text-md text-neutral-500">{dateStr}</time>
        </div>
      </div>

      <Link href={href} className="h-[9.375rem] aspect-[4/3] relative flex">
        <ImageWithFallback alt="포스트 대표 이미지" src={imageURL} fill className="object-cover" />
      </Link>
    </article>
  );
}
