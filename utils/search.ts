import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type QueryParams = { page?: string; keyword?: string; tag?: string[] };
export type SearchInfo =
  | { purpose: 'search'; keyword: string; tag?: string[] }
  | { purpose: 'navigation'; page: number };

// 검색 결과를 현재 페이지가 아니라 다른 페이지에서 보여줘야 할 때는 initPath 따로 설정
export function useCustomSearchParams(initPath?: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = searchParams.get('page');
  const keyword = searchParams.get('keyword');
  const tags = searchParams.getAll('tag');

  const moveToNewPathWithQuery = (params: URLSearchParams) => {
    const query = params.toString();
    const pathWithQuery = query ? `${initPath || pathname}?${query}` : pathname;
    router.push(pathWithQuery);
  };

  const convertObjToPairArr = (params: QueryParams) => {
    const flattenedArray = Object.entries(params).flatMap(([key, value]) =>
      Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]],
    );
    return flattenedArray;
  };

  const setSearchParams = (searchInfo: SearchInfo) => {
    let newSearchParams: URLSearchParams;

    if (searchInfo.purpose == 'search') {
      const newParams: QueryParams = { page: '1' };
      if (searchInfo.keyword) newParams.keyword = searchInfo.keyword;
      if (searchInfo.tag) newParams.tag = searchInfo.tag;
      const pairs = convertObjToPairArr(newParams);
      newSearchParams = new URLSearchParams(pairs);
    } else {
      newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
      searchInfo.page
        ? newSearchParams.set('page', searchInfo.page.toString())
        : newSearchParams.delete('page');
    }

    moveToNewPathWithQuery(newSearchParams);
  };

  return { page, keyword, tags, setSearchParams } as const;
}
