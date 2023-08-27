import { replaceDashWithSpace } from './replaceCharacter';

export const findSelectedItem = <T extends { name: string }>(
  items: T[],
  selectedItemName: string,
  defaultItemName: string,
) => {
  const selectedName = replaceDashWithSpace(selectedItemName) || defaultItemName;
  return items.find((item) => item.name === selectedName);
};
