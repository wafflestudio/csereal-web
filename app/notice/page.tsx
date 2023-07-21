import PageTitle from '@/components/PageTitle';

import { Location } from '@/types/common';

export default function NoticePage() {
  const locationLog: Location[] = [
    { name: '소식', path: '' },
    { name: '공지', path: '/notice' },
  ];

  return (
    <PageTitle
      locationLog={locationLog}
      title="푸른등대 2023gkrsuseh 2학기 학위논문제출기한 단순연장 학위논문제출기한"
    />
  );
}
