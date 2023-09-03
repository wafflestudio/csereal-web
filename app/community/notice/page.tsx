import { getNoticePosts } from '@/apis/notice';

import NoticeContent from '@/components/notice/NoticeContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getNoticePosts(searchParams);
  return <NoticeContent data={data} />;
}
