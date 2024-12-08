import RangeBolded from '@/components/common/RangeBolded';
import { notice } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

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
      <time className="text-md font-medium leading-none text-main-orange hover:cursor-text">
        {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
      </time>
    </Link>
  );
}
