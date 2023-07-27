import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type QueryParams = { keyword?: string; tag?: string[] };

export function useCustomSearchParams(initPath?: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const keyword = searchParams.get('keyword');
  const tags = searchParams.getAll('tag');

  const moveToNewPathWithQuery = (params: URLSearchParams) => {
    const query = params.toString();
    const pathWithQuery = query ? `${initPath || pathname}?${query}` : pathname;
    router.push(pathWithQuery);
  };

  const transformObj2PairArr = (params: QueryParams) => {
    const flattenedArray = Object.entries(params).flatMap(([key, value]) =>
      Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]],
    );
    return flattenedArray;
  };

  const setSearchParams = (newParams: QueryParams) => {
    if (!newParams.keyword) delete newParams.keyword;

    const pairs = transformObj2PairArr(newParams);
    const newSearchParams = new URLSearchParams(pairs);
    moveToNewPathWithQuery(newSearchParams);
  };

  return { keyword, tags, setSearchParams } as const;
}
