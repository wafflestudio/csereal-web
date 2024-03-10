import { replaceDashWithSpace } from './string';

export const findSelectedItem = <T extends { name: string }>(
  items: T[],
  dashedItemName?: string,
) => {
  const defaultItem = items[0];

  if (dashedItemName === undefined) return defaultItem;

  const selectedName = replaceDashWithSpace(dashedItemName);
  const item = items.find((item) => item.name === selectedName);

  return item ?? defaultItem;
};
