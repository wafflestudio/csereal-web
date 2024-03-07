import Link from 'next/link';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

const newsPath = getPath(news);

export default function AdminFeatures() {
  return (
    <div className="flex justify-end">
      <Link
        href={`${newsPath}/create`}
        className="ml-4 rounded-[0.0625rem] bg-neutral-200 px-[0.875rem] py-2 text-xs font-bold tracking-[0.02em] hover:bg-neutral-300"
      >
        새 게시글
      </Link>
    </div>
  );
}
