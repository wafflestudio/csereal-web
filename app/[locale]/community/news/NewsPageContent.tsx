import { notFound } from 'next/navigation';

import { getNewsPosts } from '@/apis/news';

import NewsRow from '@/app/[locale]/community/news/helper/NewsRow';

import NoSearchResult from '@/components/common/NoSearchResult';
import Pagination from '@/components/common/Pagination';

import { PostSearchQueryParams } from '@/types/post';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';
import { validatePageNum } from '@/utils/validatePageNum';

const POST_LIMIT = 10;
const newsPath = getPath(news);

export default async function NewsPageContent({
  searchParams,
}: {
  searchParams: PostSearchQueryParams;
}) {
  if (searchParams.pageNum && !validatePageNum(searchParams.pageNum)) {
    notFound();
  }

  const { searchList, total } = await getNewsPosts(searchParams);

  if (searchList.length === 0) return <NoSearchResult />;

  return (
    <>
      <div className="mb-8 mt-10 flex flex-col gap-5 sm:mx-10">
        {searchList.map((post) => (
          <NewsRow
            key={post.id}
            href={`${newsPath}/${post.id}`}
            title={post.title}
            description={post.description}
            tags={post.tags}
            date={new Date(post.createdAt)}
            imageURL={post.imageURL}
          />
        ))}
      </div>
      <Pagination totalPostsCount={total} postsCountPerPage={POST_LIMIT} />
    </>
  );
}
