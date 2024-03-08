import { Link } from '@/navigation';

import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

interface NoticeRowProps {
  id: number;
  title: string;
  description: {
    content: string;
    boldStartIndex: number;
    boldEndIndex: number;
  };
  dateStr: string;
}

const noticePath = getPath(notice);

export default function NoticeRow({ id, title, description, dateStr }: NoticeRowProps) {
  const date = new Date(dateStr);
  return (
    <Link className="flex flex-col gap-[.69rem]" href={`${noticePath}/${id}`}>
      <h3 className="font-noto text-md font-bold leading-none text-neutral-700">{title}</h3>
      <p className="line-clamp-1 text-xs font-normal text-neutral-700">
        {description.content.slice(0, description.boldStartIndex)}
        <span className="font-bold">
          {description.content.slice(description.boldStartIndex, description.boldEndIndex)}
        </span>
        {description.content.slice(description.boldEndIndex)}
      </p>
      <time className="font-yoon text-xs font-bold leading-none text-main-orange">
        {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
      </time>
    </Link>
  );
}
