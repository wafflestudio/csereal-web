import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { convertObjToURLSearchParams } from '@/utils/convert';

export type PostSearchQueryParams = { page?: number; keyword?: string; tag?: string[] };

export type SearchInfo =
  | { purpose: 'search'; keyword: string; tag?: string[] }
  | { purpose: 'navigation'; page: number };

// 검색 결과를 현재 페이지가 아니라 다른 페이지에서 보여줘야 할 때는 initPath 따로 설정
export function useCustomSearchParams(initPath?: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = parseInt(searchParams.get('page') ?? '1');
  const keyword = searchParams.get('keyword') ?? undefined;
  const tags = searchParams.getAll('tag');

  const moveToNewPathWithQuery = (params: URLSearchParams) => {
    const query = params.toString();
    const pathWithQuery = query ? `${initPath || pathname}?${query}` : pathname;
    router.push(pathWithQuery);
  };

  const setSearchParams = (searchInfo: SearchInfo) => {
    let newSearchParams: URLSearchParams;

    if (searchInfo.purpose == 'search') {
      const newParams: PostSearchQueryParams = {};
      if (searchInfo.keyword) newParams.keyword = searchInfo.keyword;
      if (searchInfo.tag?.length) newParams.tag = searchInfo.tag;
      newSearchParams = convertObjToURLSearchParams(newParams);
    } else {
      newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
      newSearchParams.set('page', searchInfo.page.toString());
    }

    moveToNewPathWithQuery(newSearchParams);
  };

  return { page, keyword, tags, setSearchParams } as const;
}
