'use client';

import SeminarSearchBar from '@/app/[locale]/community/seminar/SearchBar';
import SeminarRow from '@/app/[locale]/community/seminar/SeminarRow';
import SeminarYear from '@/app/[locale]/community/seminar/SeminarYear';

import LoginVisible from '@/components/common/LoginVisible';
import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SeminarList } from '@/types/seminar';

import { useCustomSearchParams } from '@/utils/hooks/useCustomSearchParams';
import useResponsive from '@/utils/hooks/useResponsive';

import AdminFeatures from './AdminFeatures';

const postsCountPerPage = 10;

export default function SeminarContent({ data: { searchList, total } }: { data: SeminarList }) {
  const { page, keyword, setSearchParams } = useCustomSearchParams();
  const { screenType } = useResponsive();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big">
      <div className="flex flex-row items-center gap-6">
        <SeminarSearchBar keyword={keyword} setSearchParams={setSearchParams} />
      </div>
      <div className="mb-8 mt-10 flex flex-col border-b-[1px] border-neutral-200">
        {searchList.length > 0 ? (
          searchList.map((post, index) => (
            <div key={post.id}>
              {post.isYearLast && <SeminarYear index={index} startDate={post.startDate} />}
              <SeminarRow seminar={post} hideDivider={false} />
            </div>
          ))
        ) : (
          <p className="mx-2.5 mb-8 mt-6">검색 결과가 존재하지 않습니다.</p>
        )}
      </div>
      <Pagination
        totalPostsCount={total ?? 0}
        postsCountPerPage={postsCountPerPage}
        pageLimit={screenType == 'desktop' ? 10 : 5}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </PageLayout>
  );
}
