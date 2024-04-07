export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://cse.snu.ac.kr/api/v1'
    : 'https://csereal-prod.bacchus.io/api/v1';

export const checkError = (response: Response) => {
  if (response.ok) return;
  // server action 에러 처리를 위해 status code만 깔끔하게 담음
  throw new Error(response.status.toString());
};
