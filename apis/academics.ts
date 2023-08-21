import { graduateGuideData, undergraduateGuideData } from '@/data/academics';

import { Guide } from '@/types/academics';

import { getRequest } from '.';

// export const getAcademicsGuide = (type: 'undergraduate' | 'graduate') =>
//   getRequest(`/guide/${type}`) as Promise<Guide>;

export const getAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return { description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData };
};
