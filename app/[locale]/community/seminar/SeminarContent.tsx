'use client';

import SeminarRow from '@/app/[locale]/community/seminar/helper/SeminarRow';
import SeminarSearchBar from '@/app/[locale]/community/seminar/helper/SeminarSearchBar';
import SeminarYear from '@/app/[locale]/community/seminar/helper/SeminarYear';

import LoginVisible from '@/components/common/LoginVisible';
import NoSearchResult from '@/components/common/NoSearchResult';
import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SeminarList } from '@/types/seminar';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import useResponsive from '@/utils/hooks/useResponsive';

import AdminFeatures from './helper/AdminFeatures';

const POSTS_COUNT_PER_PAGE = 10;

export default function SeminarContent({ data: { searchList, total } }: { data: SeminarList }) {
  const { page, keyword, setSearchParams } = useCustomSearchParams();
  const { screenType } = useResponsive();
  const pageLimit = screenType == 'desktop' ? 10 : 5;

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big">
      <div className="flex flex-row items-center gap-6">
        <SeminarSearchBar keyword={keyword} setSearchParams={setSearchParams} />
      </div>

      <div className="mb-8 mt-10 flex flex-col border-b-[1px] border-neutral-200">
        {searchList.length === 0 ? (
          <NoSearchResult />
        ) : (
          searchList.map((post, index) => (
            <div key={post.id}>
              {post.isYearLast && <SeminarYear index={index} startDate={post.startDate} />}
              <SeminarRow seminar={post} hideDivider={false} />
            </div>
          ))
        )}
      </div>

      <Pagination
        totalPostsCount={total}
        postsCountPerPage={POSTS_COUNT_PER_PAGE}
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
