import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import { Fragment } from 'react';

import { SeminarPreviewList } from '@/apis/types/seminar';
import SeminarRow from '@/app/[locale]/community/seminar/components/SeminarRow';
import SeminarSearchBar from '@/app/[locale]/community/seminar/components/SeminarSearchBar';
import SeminarYear from '@/app/[locale]/community/seminar/components/SeminarYear';
import NoSearchResult from '@/components/common/NoSearchResult';
import Pagination from '@/components/common/Pagination';

const POSTS_COUNT_PER_PAGE = 10;

export default function SeminarContent({
  data: { searchList, total },
}: {
  data: SeminarPreviewList;
}) {
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
            <Fragment key={post.id}>
              {post.isYearLast && <SeminarYear index={index} startDate={post.startDate} />}
              <div
                className={`border-neutral-200 py-[1.2rem] ${!post.isYearLast ? 'border-t' : null}`}
              >
                <SeminarRow seminar={post} />
              </div>
            </Fragment>
          ))
        )}
      </div>

      <Pagination totalPostsCount={total} postsCountPerPage={POSTS_COUNT_PER_PAGE} />
    </>
  );
}
