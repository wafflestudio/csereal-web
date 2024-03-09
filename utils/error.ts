export const errorToStr = (err: unknown) =>
  err instanceof Error ? err.message : `알 수 없는 에러: ${err}`;
