import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type QueryParams = { page?: string; keyword?: string; tag?: string[] };

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

  const setSearchParams = (newParams: QueryParams, purpose: 'search' | 'pagination' = 'search') => {
    let newSearchParams: URLSearchParams;

    if (purpose == 'search') {
      if (!newParams.keyword) delete newParams.keyword;
      const pairs = convertObjToPairArr(newParams);
      newSearchParams = new URLSearchParams(pairs);
    } else {
      newSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
      if (!newParams.page || newParams.page === '1') {
        newSearchParams.delete('page');
      } else {
        newSearchParams.set('page', newParams.page);
      }
    }

    moveToNewPathWithQuery(newSearchParams);
  };

  return { page, keyword, tags, setSearchParams } as const;
}
