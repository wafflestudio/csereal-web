'use client';

import Pagination from '@/components/common/Pagination';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import SeminarSearchBar from '@/components/seminar/SearchBar';
import SeminarRow from '@/components/seminar/SeminarRow';
import SeminarYear from '@/components/seminar/SeminarYear';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { SeminarList } from '@/types/seminar';

import AdminFeatures from './AdminFeatures';
import LoginStaffVisible from '../common/LoginStaffVisible';

const postsCountPerPage = 10;

export default function SeminarContent({ data: { searchList, total } }: { data: SeminarList }) {
  const { page, keyword, setSearchParams } = useCustomSearchParams();

  const setCurrentPage = (pageNum: number) => {
    setSearchParams({ purpose: 'navigation', pageNum });
  };

  return (
    <PageLayout titleType="big" titleMargin="mb-6">
      <div className="flex flex-row items-center gap-6">
        <SeminarSearchBar keyword={keyword} setSearchParams={setSearchParams} />
      </div>
      <div className="flex flex-col mt-10 mb-8 border-neutral-200 border-b-[1px]">
        {searchList.length > 0 ? (
          searchList.map((post, index) => (
            <div key={post.id}>
              {post.isYearLast && <SeminarYear index={index} startDate={post.startDate} />}
              <SeminarRow
                id={post.id}
                title={post.title}
                host={post.name}
                company={post.affiliation}
                date={new Date(post.startDate)}
                location={post.location}
                imageURL={post.imageURL}
                isYearLast={post.isYearLast}
              />
            </div>
          ))
        ) : (
          <p className="mt-6 mb-8 mx-2.5">검색 결과가 존재하지 않습니다.</p>
        )}
      </div>
      <Pagination
        totalPostsCount={total ?? 0}
        postsCountPerPage={postsCountPerPage}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
      <LoginStaffVisible>
        <AdminFeatures />
      </LoginStaffVisible>
    </PageLayout>
  );
}
