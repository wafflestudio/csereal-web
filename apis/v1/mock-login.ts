export const getMockLogin = () =>
  fetch(`https://cse-dev-waffle.bacchus.io/api/v1/mock-login`, {
    method: 'GET',
    cache: 'no-store',
  });
