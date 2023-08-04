export const convertObjToURLSearchParams = (params: object) => {
  const flattenedArray = Object.entries(params).flatMap(([key, value]) =>
    Array.isArray(value) ? value.map((v) => [key, v.toString()]) : [[key, value.toString()]],
  );
  return new URLSearchParams(flattenedArray);
};
