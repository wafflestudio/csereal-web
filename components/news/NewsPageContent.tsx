'use client';

import Link from 'next/link';

import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import NewsRow from '@/components/news/NewsRow';

import { NewsTags } from '@/constants/tag';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { NewsPreviewList } from '@/types/news';
import { news } from '@/types/page';

import { getPath } from '@/utils/page';

import AdminFeatures from './AdminFeatures';
import LoginStaffVisible from '../common/LoginStaffVisible';

const POST_LIMIT = 10;
const newsPath = getPath(news);

export default function NewsPageContent({
  data: { searchList, total },
}: {
  data: NewsPreviewList;
}) {
  const { page, keyword, tags, setSearchParams } = useCustomSearchParams();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big" titleMargin="mb-6">
      <SearchBox
        key={tags + ''}
        tags={NewsTags}
        initTags={tags}
        initKeyword={keyword ?? ''}
        setSearchParams={setSearchParams}
      />
      <div className="flex flex-col gap-4 mt-10 mb-8 mx-2.5">
        {searchList.length > 0 ? (
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
        ) : (
          <p className="mt-6 mb-8 mx-2.5">검색 결과가 존재하지 않습니다.</p>
        )}
      </div>
      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POST_LIMIT}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
      <LoginStaffVisible>
        <AdminFeatures />
      </LoginStaffVisible>
    </PageLayout>
  );
}
