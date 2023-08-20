// TODO: undefined 리턴됐을 때 각 페이지에서 404 에러 발생시키기
export const findSelectedItem = <T extends { name: string }>(
  items: T[],
  selectedItemName: string,
  defaultItemName: string,
) => {
  const selectedName = selectedItemName || defaultItemName;
  return items.find((item) => item.name === selectedName);
};
