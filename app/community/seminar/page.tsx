import { getSeminarPosts } from '@/apis/seminar';

import SeminarPageContent from '@/components/seminar/SeminarPageContent';

import { PostSearchQueryParams } from '@/types/post';

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  const data = await getSeminarPosts(searchParams);
  return <SeminarPageContent data={data} />;
}
