import { SegmentNode, admin, main } from '@/types/page';

export const getLocationLog = (location: SegmentNode | null): SegmentNode[] => {
  if (!(location && location.segment)) return [];
  return [...getLocationLog(location.parent), location];
};

export const getPath = (location: SegmentNode | null): string => {
  if (!(location && location.segment)) return '';
  return `${getPath(location.parent)}/${location.segment}`;
};

export const getRootTab = (currTab: SegmentNode): SegmentNode => {
  if (currTab === main || currTab === admin) return currTab;

  let root = currTab;
  while (root.parent !== null) {
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
