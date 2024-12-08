export const companyList = ['SAMSUNG', 'LG', 'LARGE', 'SMALL', 'GRADUATE', 'OTHER'] as const;
type Company = (typeof companyList)[number];
export const degreeList = ['bachelor', 'master', 'doctor'] as const;
type Degree = (typeof degreeList)[number];

export type Stat = { career: Company } & { [key in Degree]: number };

export const COMPANY_MAP = {
  SAMSUNG: '삼성',
  LG: 'LG',
  LARGE: '기타 대기업',
  SMALL: '중소기업',
  GRADUATE: '진학',
  OTHER: '기타',
} as const;
