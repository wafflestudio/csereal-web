import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@/navigation';

import { PostSearchQueryParams } from '@/types/post';

import { objToQueryString, urlSearchParamsToString } from '@/utils/convertParams';

export type SearchInfo =
  | { purpose: 'search'; keyword: string; tag?: string[] }
  | { purpose: 'navigation'; pageNum: number };

// 검색 결과를 현재 페이지가 아니라 다른 페이지에서 보여줘야 할 때는 initPath 따로 설정
export function useCustomSearchParams(initPath?: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = parseInt(searchParams.get('pageNum') ?? '1');
  const keyword = searchParams.get('keyword') ?? undefined;
  const tags = searchParams.getAll('tag');

  const moveToNewPathWithQuery = (queryString: string) => {
    const pathWithQuery = `${initPath || pathname}${queryString}`;
    router.push(pathWithQuery);
  };

  const setSearchParams = (searchInfo: SearchInfo) => {
    let queryString: string;

    if (searchInfo.purpose == 'search') {
      const newParams: PostSearchQueryParams = {};
      if (searchInfo.keyword) newParams.keyword = searchInfo.keyword;
      if (searchInfo.tag?.length) newParams.tag = searchInfo.tag;
      queryString = objToQueryString(newParams);
    } else {
      const newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
      newSearchParams.set('pageNum', searchInfo.pageNum.toString());
      queryString = urlSearchParamsToString(newSearchParams);
    }

    moveToNewPathWithQuery(queryString);
  };

  return { page, keyword, tags, setSearchParams } as const;
}
