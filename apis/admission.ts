import { getRequest } from '.';

/*
mainType 종류: 학부 – undergraduate , 대학원 – graduate , International - international
postType 종류: 수시 모집 – early-admission , 정시 모집 – regular-admission , Undergraduate – undergraduate , Graduate – graduate , Exchage/Visiting Program – exchange-visiting , Scholarships - scholarships
*/

export const getUndergraduateEarlyAdmission = () =>
  getRequest('/admissions/undergraduate/early-admission') as Promise<{ description: string }>;

export const getUndergraduateRegularAdmission = () =>
  getRequest('/admissions/undergraduate/regular-admission') as Promise<{ description: string }>;

export const getGraduateRegularAdmission = () =>
  getRequest('/admissions/graduate/regular-admission') as Promise<{ description: string }>;

export const getInternationalUndergraduate = () =>
  getRequest('/admissions/international/undergraduate') as Promise<{ description: string }>;

export const getInternationalgraduate = () =>
  getRequest('/admissions/international/graduate') as Promise<{ description: string }>;

export const getInternationalExchangeVisiting = () =>
  getRequest('/admissions/international/exchange-visiting') as Promise<{ description: string }>;

export const getInternationalScholarships = () =>
  getRequest('/admissions/international/scholarships') as Promise<{ description: string }>;
