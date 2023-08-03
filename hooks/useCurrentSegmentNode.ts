import { usePathname } from 'next/navigation';

import { SegmentNode, main } from '@/types/page';

export default function useCurrentSegmentNode(): SegmentNode {
  const pathname = usePathname();
  const segments = pathname.split('/');
  segments.shift(); // 맨 앞의 공백 제거
  let node = main;

  for (const segment of segments) {
    let child = findChildWithName(node, segment);
    if (!child) break;
    node = child;
  }

  return node;
}

function findChildWithName(node: SegmentNode, segment: string) {
  if (!node.children) return undefined;
  for (const child of node.children) if (child.segment === segment) return child;
  return undefined;
}
