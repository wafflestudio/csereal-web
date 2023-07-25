import { Location2, main } from '@/types/page';

export const getLog = (location: Location2) => {
  const log: Location2[] = [];
  let curr = location;
  while (curr.parent !== null) {
    log.push(curr);
    curr = curr.parent;
  }
  return log.reverse();
};

export const getFullPath = (location: Location2) => {
  let fullPath = '/';
  let curr = location;
  while (curr.parent !== null) {
    fullPath = '/' + curr.path + fullPath;
    curr = curr.parent;
  }
  return fullPath;
};

export const getRootTab = (location: Location2) => {
  if (location === main) return main;

  let root = location;
  while (root.parent !== main) {
    root = location.parent!; // main 제외한 탭은 전부 parent가 있음
  }
  return root;
};

export const getAllSubTabs = (location: Location2): Location2[] => {
  if (!location.children) return [];

  const subtabs: Location2[] = [];
  for (const subtab of location.children) {
    subtabs.push(subtab);
    subtabs.push(...getAllSubTabs(subtab));
  }
  return subtabs;
};
