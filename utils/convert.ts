export const convertObjToURLSearchParams = (params: object) => {
  const flattenedArray: string[][] = [];
  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const v of value) flattenedArray.push([key, v]);
    } else {
      flattenedArray.push([key, value]);
    }
  }
  return new URLSearchParams(flattenedArray);
};
