import { getNoticePosts } from '@/actions/noticeServer';

import NoticePageContent from '@/app/[locale]/community/notice/NoticePageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getNoticePosts(searchParams);
  return <NoticePageContent data={data} />;
}
