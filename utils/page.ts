import { SegmentNode, admin, main } from '@/types/page';

export const getLocationLog = (location: SegmentNode): SegmentNode[] => {
  const log: SegmentNode[] = [];
  let curr = location;
  while (curr.parent !== null) {
    log.push(curr);
    curr = curr.parent;
  }
  return log.reverse();
};

export const getPath = (location: SegmentNode): string => {
  if (location.parent === null) return `/${location.segment}`;

  let fullPath = '';
  let curr = location;
  while (curr.parent !== null) {
    fullPath = '/' + curr.segment + fullPath;
    curr = curr.parent;
  }
  return fullPath;
};

export const getRootTab = (currTab: SegmentNode): SegmentNode => {
  if (currTab === main || currTab === admin) return currTab;

  let root = currTab;
  while (root.parent !== main) {
    root = root.parent!; // main 제외한 내비탭은 전부 parent가 있음
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
