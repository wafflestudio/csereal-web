'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const path = usePathname();
  return (
    <div className="flex flex-col items-start mx-[3.75rem] mt-3">
      <p className="text-lg">{path}는 존재하지 않는 경로입니다.</p>
      <Link href="/" className="text-sm underline text-link">
        메인으로 가기
      </Link>
    </div>
  );
}
