'use client';

import NewsRow from '@/app/[locale]/community/news/helper/NewsRow';

import LoginVisible from '@/components/common/LoginVisible';
import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NEWS_TAGS } from '@/constants/tag';

import { NewsPreviewList } from '@/types/news';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import useResponsive from '@/utils/hooks/useResponsive';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

import AdminFeatures from './helper/AdminFeatures';

const POST_LIMIT = 10;
const newsPath = getPath(news);

export default function NewsPageContent({
  data: { searchList, total },
}: {
  data: NewsPreviewList;
}) {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();
  const { screenType } = useResponsive();
  const pageLimit = screenType === 'desktop' ? 10 : 5;

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big">
      <SearchBox
        tags={NEWS_TAGS}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <div className="mb-8 mt-10 flex flex-col gap-5 sm:mx-16">
        {searchList.length === 0 ? (
          <NoSearchResult />
        ) : (
          searchList.map((post) => (
            <NewsRow
              key={post.id}
              href={`${newsPath}/${post.id}`}
              title={post.title}
              description={post.description}
              tags={post.tags}
              date={new Date(post.createdAt)}
              imageURL={post.imageURL}
            />
          ))
        )}
      </div>
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        pageLimit={pageLimit}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />

      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </PageLayout>
  );
}

const NoSearchResult = () => <p className="mx-2.5 mb-8 mt-6">검색 결과가 존재하지 않습니다.</p>;
