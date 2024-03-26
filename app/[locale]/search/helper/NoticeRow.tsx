import { Link } from '@/navigation';

import RangeBolded from '@/components/common/RangeBolded';

import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

interface NoticeRowProps {
  id: number;
  title: string;
  partialDescription: string;
  boldStartIndex: number;
  boldEndIndex: number;
  dateStr: string;
}

const noticePath = getPath(notice);

export default function NoticeRow({ id, title, dateStr, ...description }: NoticeRowProps) {
  const date = new Date(dateStr);

  return (
    <Link className="flex flex-col gap-[.62rem]" href={`${noticePath}/${id}`}>
      <h3 className="text-base font-bold leading-none text-neutral-950">{title}</h3>
      <RangeBolded {...description} />
      <time className="text-md font-medium leading-none text-main-orange">
        {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
      </time>
    </Link>
  );
}
