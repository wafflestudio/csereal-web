import { CurvedNode } from '@/components/Node';
import PageTitle from '@/components/PageTitle';

import { Location, PAGES } from '@/types/common';

export default function LatestNewsPage() {
  const locationLog: Location[] = [PAGES.communication, PAGES.notice];

  return <PageTitle locationLog={locationLog}></PageTitle>;
}

function Title({ title }: { title: string }) {
  return <h2>{title}</h2>;
}
