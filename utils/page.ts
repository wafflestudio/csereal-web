import { main, SegmentNode } from '@/constants/segmentNode';

export const getLocationLog = (location: SegmentNode | null): SegmentNode[] => {
  if (location === null) return [];
  if (location === main) return [];

  return [...getLocationLog(location.parent), location];
};

export const getPath = (location: SegmentNode | null): string => {
  // MEMO: 서버에서 prop으로 건네준 객체와 클라단에서 직접 쓰는 객체가 다를 수 있어서
  // 객체끼리 직접 비교는 지양한다.
  // location === main 등등...
  return location?.parent && location.segment
    ? `${getPath(location.parent)}/${location.segment}`
    : '';
};

export const getRootTab = (currTab: SegmentNode): SegmentNode => {
  let root = currTab;
  while (root.parent && root.parent !== main) {
    root = root.parent;
  }
  return root;
};

export const getAllSubTabs = (rootTab: SegmentNode): SegmentNode[] => {
  const subtabs: SegmentNode[] = [];
  for (const subtab of rootTab.children) {
    subtabs.push(subtab);
    subtabs.push(...getAllSubTabs(subtab));
  }
  return subtabs;
};

export const getDepth = (tab: SegmentNode): number => {
  let depth = 0;
  let curr = tab;
  while (curr.parent !== null) {
    depth += 1;
    curr = curr.parent;
  }
  return depth;
};

export const isAncestorNode = (parent: SegmentNode, child: SegmentNode) => {
  while (child.parent) {
    if (child.parent === parent) return true;
    child = child.parent;
  }
  return false;
};
