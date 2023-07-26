import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export type QueryKey = 'keyword' | 'tag';

export function useMyURLSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(Array.from(searchParams.entries()));

  const getSearchParams = () => {
    return { keyword: searchParams.get('keyword'), tags: searchParams.getAll('tag') };
  };

  const setSearchParams = (name: QueryKey, value: string, replace: boolean = true) => {
    if (!value) deleteSearchParams(name);
    else if (replace) params.set(name, value);
    else params.append(name, value);
    moveToNewPathWithQuery();
  };

  const deleteSearchParams = (name: QueryKey, value?: string) => {
    if (!value) {
      params.delete(name);
    } else {
      const newParams = searchParams.getAll(name).filter((v) => v !== value);
      params.delete(name);
      for (const v of newParams) {
        params.append(name, v);
      }
    }
    moveToNewPathWithQuery();
  };

  const moveToNewPathWithQuery = () => {
    const query = params.toString();
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;
    router.push(pathWithQuery);
  };

  return { getSearchParams, setSearchParams, deleteSearchParams } as const;
}

export function useSyncedState<T>(initState: T) {
  const [state, setState] = useState<T>(initState);

  useEffect(() => {
    setState(initState);
  }, [initState]);

  return [state, setState] as const;
}
