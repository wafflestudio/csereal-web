import Tags from '@/components/common/Tags';

export default function NoticePost() {
  const tags = ['연구', '장학'];

  const filterByTag = (tag: string) => {};
  return <Tags tags={tags} page="notice" />;
}
