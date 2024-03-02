import { getNewsPosts } from '@/actions/newsServer';

import NewsPageContent from '@/components/news/NewsPageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NewsPage({ searchParams }: NewsPageParams) {
  const data = await getNewsPosts(searchParams);
  return <NewsPageContent data={data} />;
}
