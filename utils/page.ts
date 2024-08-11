import { main,SegmentNode } from '@/utils/segmentNode';

export const getLocationLog = (location: SegmentNode | null): SegmentNode[] => {
  if (location === null) return [];
  if (location === main) return [];

  return [...getLocationLog(location.parent), location];
};

export const getPath = (location: SegmentNode | null): string => {
  if (!(location && location !== main)) return '';
  return `${getPath(location.parent)}/${location.segment}`;
};

export const getRootTab = (currTab: SegmentNode): SegmentNode => {
  let root = currTab;
  while (root.parent && root.parent !== main) {
    root = root.parent;
  }
  return root;
};

export const getAllSubTabs = (rootTab: SegmentNode): SegmentNode[] => {
  if (!rootTab.children) return [];

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
