import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { seminar } from '@/utils/segmentNode';

const seminarPath = getPath(seminar);

export default function AdminFeatures() {
  return (
    <div className="mt-[40px] flex justify-end">
      <Link href={`${seminarPath}/create`}>
        <button
          type="button"
          className="ml-4 h-[2.1875rem] rounded-[0.0625rem] bg-neutral-800 px-3 text-md font-semibold leading-loose tracking-wider text-white enabled:hover:bg-neutral-500 disabled:opacity-30"
        >
          새 게시글
        </button>
      </Link>
    </div>
  );
}
