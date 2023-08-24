import {
  getMockClubs,
  getMockFutureCareers,
  getMockGreetings,
  getMockHistory,
  getMockOverview,
} from '@/data/about';

import { Facilities } from '@/types/about';

export const getOverview = getMockOverview;

export const getGreetings = getMockGreetings;

export const getHistory = getMockHistory;

export const getFutureCareeres = getMockFutureCareers;

export const getClubs = getMockClubs;

// const clubPath = '/club';

// export const postClub = (newClub: Club) => postRequest(clubPath, newClub) as Promise<Club>;

// export const patchClub = (id: number, newClub: Partial<Club>) =>
//   patchRequest(clubPath, newClub) as Promise<Club>;

// export const deleteClub = (id: number) => deleteRequest(clubPath);

// const facilitiesPath = '/facilities';

export const getMockFacilitiesPosts = async () => {
  const facilitiesList = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `${index + 1}번째 시설`,
    description: `과방은 학부생들의 주 생활 공간이다. 끊임없이 나오는 과제를 해치우는데 사용되는 수십 대의 Intel Core i7 PC가 구비되어 있으며, 오랫동안 컴퓨터를 하느라 편할 날이 없는 학생들의 눈·목·손목 등의 휴식을 위한 편의 시설도 마련되어 있다. 학생들이 기증하거나 잠시 빌려준 각종 서적·만화책·보드 게임 등이 있어 공부뿐만 아니라 여가도 즐길 줄 아는 학생들을 위한 환경이 조성되어 있다.`,
    location: `301동 316호`,
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-landscape-crop/public/node--facility/admin.JPG?itok=-ilXd4wR',
  }));
  return {
    facilitiesList,
  };
};

export const getFacilitiesPosts = getMockFacilitiesPosts;
