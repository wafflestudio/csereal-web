import {
  getMockClubs,
  getMockFutureCareers,
  getMockGreetings,
  getMockHistory,
  getMockOverview,
} from '@/data/about';
import { clubs } from '@/data/objects';

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
