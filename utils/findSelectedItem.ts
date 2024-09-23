import { replaceDashWithSpace } from './string';

export const findItemBySearchParam = <T>(
  items: T[],
  getItemIds: (item: T) => string[],
  searchParam?: string,
) => {
  const defaultItem = items[0];
  if (!searchParam) return defaultItem;

  const id = replaceDashWithSpace(searchParam);
  const item = items.find((item) =>
    getItemIds(item)
      // Human-Centered Computing 같은 코너 케이스가 있으므로 기존 이름도 dash 전부 제거하고 비교
      .map((id) => replaceDashWithSpace(id))
      .includes(id),
  );
  return item;
};
