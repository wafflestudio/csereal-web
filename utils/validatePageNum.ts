export const validatePageNum = (pageNumStr: string) => {
  const pageNum = Number.parseInt(pageNumStr);
  const isValid = Number.isNaN(pageNum) || pageNum < 1 ? false : true;
  return isValid;
};
