import { getNoticePosts } from '@/apis/noticeServer';

import NoticePageContent from '@/components/notice/NoticePageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getNoticePosts(searchParams);
  return <NoticePageContent data={data} />;
}
