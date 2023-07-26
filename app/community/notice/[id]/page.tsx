import Tags from '@/components/common/Tags';

import { notice } from '@/types/page';

export default function NoticePostPage() {
  const tags = ['연구', '장학'];

  const filterByTag = (tag: string) => {};

  return <Tags tags={tags} page={notice} />;
}
