import { getSeminarPosts } from '@/actions/seminarServer';

import { getNewsSearch, getNoticeSearch } from '@/apis/search';

import SearchPageContent from './SearchPageContent';

interface SearchPageProps {
  searchParams: {
    keyword: string;
  };
}

export default async function SearchPage({ searchParams: { keyword } }: SearchPageProps) {
  const [noticeSearchResult, newsSearchResult, seminarSearchResult] = await Promise.all([
    getNoticeSearch({ keyword, number: 2 }),
    getNewsSearch({ keyword, number: 2 }),
    getSeminarPosts({ keyword, pageNum: 1 }),
  ]);

  return (
    <SearchPageContent
      keyword={keyword}
      notice={noticeSearchResult}
      news={newsSearchResult}
      seminar={seminarSearchResult}
    />
  );
}
