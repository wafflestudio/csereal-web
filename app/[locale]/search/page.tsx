import { getNewsByKeyword, getNoticeByKeyword } from '@/apis/search';
import { getSeminarPosts } from '@/apis/seminar';

import SearchPageContent from './SearchPageContent';

interface SearchPageProps {
  searchParams: {
    keyword: string;
  };
}

export default async function SearchPage({ searchParams: { keyword } }: SearchPageProps) {
  const [noticeSearchResult, newsSearchResult, seminarSearchResult] = await Promise.all([
    getNoticeByKeyword({ keyword, number: 2 }),
    getNewsByKeyword({ keyword, number: 2 }),
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
