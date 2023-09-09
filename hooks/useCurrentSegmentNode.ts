import { usePathname } from 'next/navigation';

import { SegmentNode, admin, main } from '@/types/page';

export default function useCurrentSegmentNode(): SegmentNode {
  const pathname = usePathname();
  const segments = pathname.split('/');
  segments.shift(); // 맨 앞의 공백 제거

  // 영어 버전일 경우 /en 제거
  if (segments.length && segments[0] === 'en') segments.shift();

  // admin 예외처리
  if (segments[0] === admin.segment) return admin;

  return findCurrentSegmentNode(main, segments);
}

/** 매칭되는 SegmentNode가 없는 경우 그나마 가까운 SegmentNode를 반환 */
const findCurrentSegmentNode = (curNode: SegmentNode, segments: string[]): SegmentNode => {
  if (segments.length === 0) return curNode;

  const nextNode = curNode.children?.find((x) => x.segment === segments[0]);
  return nextNode ? findCurrentSegmentNode(nextNode, [...segments.slice(1)]) : curNode;
};
