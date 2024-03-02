import {
  SegmentNode,
  about,
  academics,
  admissions,
  community,
  main,
  people,
  research,
  reservations,
} from '@/types/page';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';


export type FooterMode = 'light' | 'dark';

// TODO: 페이지별 모드 적용하기
export default function useFooterDesignMode(): FooterMode {
  const node = useCurrentSegmentNode();
  return pageWithDarkMode.includes(node) ? 'dark' : 'light';
}

const pageWithDarkMode: SegmentNode[] = [
  main,
  about,
  community,
  people,
  research,
  admissions,
  academics,
  reservations,
];
