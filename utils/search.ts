import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type QueryKey = 'keyword' | 'tag';

export function useMyURLSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setSearchParams = (key: QueryKey, value: string, replace: boolean = true) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      params.delete(key);
    } else if (replace) {
      params.set(key, value);
    } else {
      params.append(key, value);
    }

    const query = params.toString();
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;
    router.push(pathWithQuery);
  };

  const deleteSearchParams = (key: QueryKey, value?: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      params.delete(key);
    } else {
    }
  };

  return { setSearchParams, deleteSearchParams } as const;
}
