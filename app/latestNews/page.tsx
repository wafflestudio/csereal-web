import PageTitle from '@/components/PageTitle';

import { Location, PAGES } from '@/types/common';

export default function NoticePage() {
  const locationLog: Location[] = [PAGES.communication, PAGES.notice];

  return (
    <PageTitle
      locationLog={locationLog}
      title="푸른등대 2023gkrsuseh 2학기 학위논문제출기한 단순연장 학위논문제출기한"
    />
  );
}
