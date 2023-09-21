export const dynamic = 'force-dynamic';

import { getNoticePosts } from '@/apis/notice';

import NoticePageContent from '@/components/notice/NoticePageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getNoticePosts(searchParams);
  return <NoticePageContent data={data} />;
}
