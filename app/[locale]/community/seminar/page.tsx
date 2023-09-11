export const dynamic = 'force-dynamic';

import { getSeminarPosts } from '@/apis/seminar';

import SeminarContent from '@/components/seminar/SeminarPageContent';

import { PostSearchQueryParams } from '@/types/post';

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  const data = await getSeminarPosts(searchParams);
  return <SeminarContent data={data} />;
}
