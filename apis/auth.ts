import { getRequest } from '.';

export const getIsStaff = () => getRequest('/user/is-staff') as Promise<{ isStaff: boolean }>;
