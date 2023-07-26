'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const path = usePathname();
  return <p>{'404 ' + path}</p>;
}
