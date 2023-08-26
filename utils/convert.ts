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

const paramsToString = (params: URLSearchParams) => (params.size ? `?${params}` : '');

export const objToQueryString = (params: object) => {
  const urlSearchParams = convertObjToURLSearchParams(params);
  const queryString = urlSearchParams.size ? `?${urlSearchParams}` : '';
  return queryString;
};
