import Tags from '@/components/common/Tags';

import { PageNames } from '@/types/common';

export default function NoticePost() {
  const tags = ['연구', '장학'];

  const filterByTag = (tag: string) => {};
  return <Tags tags={tags} page={PageNames.notice} />;
}
