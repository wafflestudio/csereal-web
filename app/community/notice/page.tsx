import { getMockNoticePosts } from '@/data/notice';

import { getNoticePosts } from '@/apis/notice';

import NoticePageContent from '@/components/notice/NoticePageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getMockNoticePosts(searchParams);
  return <NoticePageContent data={data} />;
}
