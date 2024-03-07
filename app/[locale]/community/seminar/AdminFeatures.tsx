import Link from 'next/link';

import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

const seminarPath = getPath(seminar);

export default function AdminFeatures() {
  return (
    <div className="flex justify-end">
      <Link
        href={`${seminarPath}/create`}
        className="ml-4 rounded-[0.0625rem] bg-neutral-200 px-[0.875rem] py-2 text-xs font-bold tracking-[0.02em] hover:bg-neutral-300"
      >
        새 게시글
      </Link>
    </div>
  );
}
