import { getNewsPosts } from '@/apis/news';

import NewsContent from '@/components/news/NewsContent';

import { PostSearchQueryParams } from '@/types/post';

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NewsPage({ searchParams }: NewsPageParams) {
  const data = await getNewsPosts(searchParams);
  return <NewsContent data={data} />;
}
