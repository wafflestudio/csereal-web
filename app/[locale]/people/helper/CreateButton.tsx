import { Link } from '@/navigation';

import { BlackButton } from '@/components/common/Buttons';

export default function CreateButton({ href }: { href: string }) {
  return (
    <div className="mb-9 max-w-[768px] text-right">
      <Link href={href} className="inline-block">
        <BlackButton title="추가하기" />
      </Link>
    </div>
  );
}
