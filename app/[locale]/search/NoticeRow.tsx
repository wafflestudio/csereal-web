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
      <h3 className="text-neutral-700 font-noto text-md font-bold leading-none">{title}</h3>
      <p className="text-neutral-700 text-xs font-normal line-clamp-1">
        {description.content.slice(0, description.boldStartIndex)}
        <span className="font-bold">
          {description.content.slice(description.boldStartIndex, description.boldEndIndex)}
        </span>
        {description.content.slice(description.boldEndIndex)}
      </p>
      <time className="text-main-orange font-yoon text-xs font-bold leading-none">
        {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
      </time>
    </Link>
  );
}
