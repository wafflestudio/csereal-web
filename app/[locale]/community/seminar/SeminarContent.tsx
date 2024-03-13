'use client';

import SeminarRow from '@/app/[locale]/community/seminar/helper/SeminarRow';
import SeminarSearchBar from '@/app/[locale]/community/seminar/helper/SeminarSearchBar';
import SeminarYear from '@/app/[locale]/community/seminar/helper/SeminarYear';

import LoginVisible from '@/components/common/LoginVisible';
import NoSearchResult from '@/components/common/NoSearchResult';
import Pagination from '@/components/common/Pagination';

import { SeminarList } from '@/types/seminar';

import AdminFeatures from './helper/AdminFeatures';

const POSTS_COUNT_PER_PAGE = 10;

export default function SeminarContent({ data: { searchList, total } }: { data: SeminarList }) {
  return (
    <>
      <div className="flex flex-row items-center gap-6">
        <SeminarSearchBar />
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

      <Pagination totalPostsCount={total} postsCountPerPage={POSTS_COUNT_PER_PAGE} />

      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </>
  );
}
