import Link from 'next/link';

import { seminar } from '@/types/page';

import { getPath } from '@/utils/page';

const seminarPath = getPath(seminar);

export default function AdminFeatures() {
  return (
    <div className="flex justify-end">
      <Link
        href={`${seminarPath}/create`}
        className="ml-4 px-[0.875rem] py-2 rounded-[0.0625rem] bg-neutral-200 hover:bg-neutral-300 text-xs tracking-[0.02em] font-bold"
      >
        새 게시글
      </Link>
    </div>
  );
}
