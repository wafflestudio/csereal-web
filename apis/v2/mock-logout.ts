export const getMockLogout = () =>
  fetch(`https://cse-dev-waffle.bacchus.io/api/v2/mock-logout`, {
    method: 'GET',
    cache: 'no-store',
  });
