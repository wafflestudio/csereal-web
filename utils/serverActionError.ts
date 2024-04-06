export type CustomError = { error: { message: string } };

export const isApiError = <T>(response: T | CustomError): response is CustomError => {
  return typeof response === 'object' && response !== null && 'error' in response;
};

export function throwIfError<T>(response: T): asserts response is Exclude<T, CustomError> {
  if (isApiError(response)) {
    throw new Error(response.error.message);
  }
}

export function handleServerAction<T>(response: T): Exclude<T, CustomError> {
  throwIfError(response);
  return response;
}
