export const objToURLSearchParams = (params: { [key: string]: string | string[] | number }) => {
  const flattenedArray: string[][] = [];
  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const v of value) flattenedArray.push([key, v]);
    } else {
      flattenedArray.push([key, value.toString()]);
    }
  }
  return new URLSearchParams(flattenedArray);
};

export const urlSearchParamsToString = (params: URLSearchParams) =>
  params.size ? `?${params}` : '';

export const objToQueryString = (params: { [key: string]: string | string[] | number }) => {
  const urlSearchParams = objToURLSearchParams(params);
  const queryString = urlSearchParamsToString(urlSearchParams);
  return queryString;
};
