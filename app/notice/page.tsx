import PageTitle from '@/components/PageTitle';

import { Location, PAGES } from '@/types/common';

export default function NoticePage() {
  const locationLog: Location[] = [PAGES.community, PAGES.notice];

  return (
    <PageTitle locationLog={locationLog}>
      <h3 className="text-lg font-bold break-keep font-yoon">
        푸른등대 2023gkrsuseh 2학기 학위논문제출기한 단순연장 학위논문제출기한
      </h3>
    </PageTitle>
  );
}
