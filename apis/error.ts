export class NetworkError extends Error {
  statusCode: number;
  constructor(statusCode: number) {
    super(`${statusCode} 에러`);
    this.statusCode = statusCode;
  }
}

export const checkError = (response: Response) => {
  if (response.ok) return;
  throw new NetworkError(response.status);
};
