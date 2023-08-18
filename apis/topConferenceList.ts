import { TopConferenceList } from '@/types/research';

import { getRequest } from '.';

export const getTopConferenceList = () =>
  getRequest('/research/top-conference-list') as Promise<TopConferenceList>;

export const getMockTopConferenceList: typeof getTopConferenceList = async () => {
  const conferenceList = Array.from({ length: 50 }, (_, index) => {
    return {
      id: index + 1,
      code: 'AAAA001',
      abbreviation: 'AAAA',
      name: `컨퍼런스 ${index + 1}`,
    };
  });
  return {
    modifiedAt: new Date(),
    author: '한민정',
    conferenceList: conferenceList,
  };
};
