import { NavTreeNode, main } from '@/constants/navTreeNode';

export const getLocationLog = (location: NavTreeNode | null): NavTreeNode[] => {
  if (location === null) return [];
  if (location === main) return [];

  return [...getLocationLog(location.parent), location];
};

export const getPath = (location: NavTreeNode | null): string => {
  if (!(location && location !== main)) return '';
  return `${getPath(location.parent)}/${location.segment}`;
};

export const getRootTab = (currTab: NavTreeNode): NavTreeNode => {
  let root = currTab;
  while (root.parent && root.parent !== main) {
    root = root.parent;
  }
  return root;
};

export const getAllSubTabs = (rootTab: NavTreeNode): NavTreeNode[] => {
  if (!rootTab.children) return [];

  const subtabs: NavTreeNode[] = [];
  for (const subtab of rootTab.children) {
    subtabs.push(subtab);
    subtabs.push(...getAllSubTabs(subtab));
  }
  return subtabs;
};

export const getDepth = (tab: NavTreeNode): number => {
  let depth = 0;
  let curr = tab;
  while (curr.parent !== null) {
    depth += 1;
    curr = curr.parent;
  }
  return depth;
};

export const isAncestorNode = (parent: NavTreeNode, child: NavTreeNode) => {
  while (child.parent) {
    if (child.parent === parent) return true;
    child = child.parent;
  }
  return false;
};
