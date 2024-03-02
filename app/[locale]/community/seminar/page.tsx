import { getSeminarPosts } from '@/actions/seminarServer';

import SeminarContent from '@/app/[locale]/community/seminar/SeminarPageContent';

import { PostSearchQueryParams } from '@/types/post';

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  const data = await getSeminarPosts(searchParams);
  return <SeminarContent data={data} />;
}
