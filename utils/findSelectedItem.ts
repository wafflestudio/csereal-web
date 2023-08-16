export const findSelectedItem = <T extends { name: string }>(
  items: T[],
  selectedItemName: string,
  defaultItemName?: string,
) => {
  const selectedName = selectedItemName || defaultItemName || items[0]?.name;
  return items.find((item) => item.name === selectedName);
};
