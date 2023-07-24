import PageTitle from '@/components/PageTitle';

import { Location, PAGES } from '@/types/common';

export default function LatestNewsPage() {
  const locationLog: Location[] = [PAGES.communication, PAGES.notice];

  return (
    <PageTitle locationLog={locationLog}>
      <Title title="김선 교수 연구진이 네트워크 사이언스와 머신러닝을 결합하여 약물에 적합한 질병을 예측" />
    </PageTitle>
  );
}

function Title({ title }: { title: string }) {
  return <h2 className="text-[1.125rem] font-yoon font-medium">{title}</h2>;
}
