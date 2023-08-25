import {
  getMockClubs,
  getMockContact,
  getMockDirections,
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

export const getClubs = getMockClubs;

export const getFacilities = getMockFacilities;

export const getContact = getMockContact;

export const getDirections = getMockDirections;

// const clubPath = '/about/student-clubs';

// export const getClubs = () => getRequest<Club[]>(clubPath);

// export const postClub = (newClub: Club) => postRequest(clubPath, newClub) as Promise<Club>;

// export const patchClub = (id: number, newClub: Partial<Club>) =>
//   patchRequest(clubPath, newClub) as Promise<Club>;

// export const deleteClub = (id: number) => deleteRequest(clubPath);

// const facilitiesPath = '/facilities';

// export const getDirections = () => getRequest<Direction[]>(/about/directions);
