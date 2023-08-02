import { useSearchParams } from 'next/navigation';

export function useQueryString() {
  const params = useSearchParams();
  return params ? `?${params}` : '';
}
