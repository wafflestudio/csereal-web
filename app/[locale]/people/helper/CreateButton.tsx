import { Link } from '@/navigation';

import { BlackButton } from '@/components/common/Buttons';

import { FacultyStatus } from '@/types/people';

export default function CreateButton({
  pathname,
  status,
}: {
  pathname: string;
  status?: FacultyStatus;
}) {
  return (
    <div className="mb-9 max-w-[768px] text-right">
      <Link href={{ pathname, query: { status } }} className="inline-block">
        <BlackButton title="추가하기" />
      </Link>
    </div>
  );
}
