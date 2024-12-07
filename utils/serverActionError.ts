import { errorToStr } from '@/utils/error';
import { errorToast, successToast } from '@/utils/toast';

export type CustomError = { error: { message: string } };

export const isApiError = <T>(response: T | CustomError): response is CustomError => {
  return typeof response === 'object' && response !== null && 'error' in response;
};

export function throwIfError<T>(response: T): asserts response is Exclude<T, CustomError> {
  if (isApiError(response)) {
    throw new Error(response.error.message);
  }
}

/**
 * @deprecated handleServerResponse를 사용하세요.
 */
export function handleServerAction_legacy<T>(response: T): Exclude<T, CustomError> {
  throwIfError(response);
  return response;
}

export const handleServerResponse = <T>(
  response: T,
  { successMessage }: { successMessage: string },
) => {
  try {
    console.log(response);
    throwIfError(response);
    successToast(successMessage);
    return response;
  } catch (e) {
    errorToast(errorToStr(e));
  }
};
