/**
 * 페이지별 권한 검사
 * 권한간의 계층관계가 명확하지 않으므로(요구사항이 바뀔 수도 있으므로) 배열로 반환
 */
export const getRequiredAuth = (pathname: string) => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const lastSegment = segments.at(-1);

  const isCouncilPage = segments.includes('council');
  const isCreateOrEditPage = lastSegment === 'create' || lastSegment === 'edit';
  const isAdminPage = firstSegment === 'admin';

  if (isCouncilPage && isCreateOrEditPage) {
    return ['ROLE_COUNCIL', 'ROLE_STAFF'];
  }

  if (isAdminPage || isCreateOrEditPage) {
    return ['ROLE_STAFF'];
  }

  return ['ROLE_STAFF', 'ROLE_RESERVATION', 'ROLE_COUNCIL', 'logout'];
};
