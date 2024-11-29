'use client';

import { useSearchParams } from 'next/navigation';
import { ComponentProps } from 'react';

import { Link } from '@/i18n/routing';

export default function PaginatedLink(
  props: Omit<ComponentProps<typeof Link>, 'href'> & { href: string },
) {
  const pageNum = useSearchParams().get('pageNum');

  const [pathStr, paramStr] = props.href.split('?');
  const param = new URLSearchParams(paramStr);

  if (pageNum) {
    param.set('pageNum', pageNum);
  }

  const href = `${pathStr}?${param.toString()}`;

  return <Link {...props} href={href} />;
}
