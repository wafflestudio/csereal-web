import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { main } from '@/types/page';

export type FooterMode = 'light' | 'dark';

// TODO: 페이지별 모드 적용하기
export default function useFooterDesignMode(): FooterMode {
  const node = useCurrentSegmentNode();
  if (node === main) return 'dark';
  else return 'light';
}
