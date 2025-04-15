import { UserState } from '@/contexts/SessionContext';

/**
 * 페이지별 권한 검사
 * 권한간의 계층관계가 명확하지 않으므로(요구사항이 바뀔 수도 있으므로) 배열로 반환
 */
export const getRequiredAuth = (pathname: string): UserState[] => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);

  const isCouncilPage = pathname.includes('/council');
  const isCreateOrEditPage = pathname.endsWith('create') || pathname.endsWith('edit');
  const isAdminPage = pathname.startsWith('/admin');

  if (isCouncilPage && isCreateOrEditPage) {
    return ['ROLE_COUNCIL', 'ROLE_STAFF'];
  }

  if (isAdminPage || isCreateOrEditPage) {
    return ['ROLE_STAFF'];
  }

  return ['ROLE_STAFF', 'ROLE_RESERVATION', 'ROLE_COUNCIL', 'logout'];
};
