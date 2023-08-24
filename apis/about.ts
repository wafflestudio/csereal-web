import {
  getMockClubs,
  getMockFacilities,
  getMockFutureCareers,
  getMockGreetings,
  getMockHistory,
  getMockOverview,
} from '@/data/about';

export const getOverview = getMockOverview;

export const getGreetings = getMockGreetings;

export const getHistory = getMockHistory;

export const getFutureCareeres = getMockFutureCareers;

// const clubPath = '/club';

export const getClubs = getMockClubs;

// export const postClub = (newClub: Club) => postRequest(clubPath, newClub) as Promise<Club>;

// export const patchClub = (id: number, newClub: Partial<Club>) =>
//   patchRequest(clubPath, newClub) as Promise<Club>;

// export const deleteClub = (id: number) => deleteRequest(clubPath);

// const facilitiesPath = '/facilities';

export const getFacilities = getMockFacilities;
