'use client';

import Pagination from '@/components/common/Pagination';
import SearchForm from '@/components/common/search/SearchForm';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import NewsRow from '@/components/news/NewsRow';

import { NewsTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';
import { useQueryString } from '@/hooks/useQueryString';

import { NewsPreviewList } from '@/types/news';
import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const POST_LIMIT = 10;
const newsPath = getPath(news);

export default function NewsPageContent({
  data: { searchList, total },
}: {
  data: NewsPreviewList;
}) {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const queryString = useQueryString();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', page: pageNum });
  };

  return (
    <PageLayout titleType="big" titleMargin="mb-6">
      <SearchForm
        key={tags + ''}
        tags={NewsTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <div className="flex flex-col gap-4 mt-10 mb-8 mx-2.5">
        {searchList.map((post) => (
          <NewsRow
            key={post.id}
            href={`${newsPath}/${post.id}${queryString}`}
            title={post.title}
            description={post.description}
            tags={post.tags}
            date={new Date(post.createdAt)}
            imageURL={post.imageURL}
          />
        ))}
      </div>
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
    </PageLayout>
  );
}
