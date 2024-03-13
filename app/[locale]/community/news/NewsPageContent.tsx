'use client';

import NewsRow from '@/app/[locale]/community/news/helper/NewsRow';

import LoginVisible from '@/components/common/LoginVisible';
import NoSearchResult from '@/components/common/NoSearchResult';
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
  const { page, setSearchParams } = useCustomSearchParams();
  const { screenType } = useResponsive();
  const pageLimit = screenType === 'desktop' ? 10 : 5;

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big" bodyStyle={{ width: 'fit-content' }}>
      <SearchBox tags={NEWS_TAGS} />
      <div className="mb-8 mt-10 flex flex-col gap-5 sm:mx-10">
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
