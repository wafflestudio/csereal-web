import { Club } from '@/types/club';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

// 아직 미확정

const clubPath = '/club';

export const getClubs = () => getRequest(clubPath) as Promise<Club[]>;

export const postClub = (newClub: Club) => postRequest(clubPath, newClub) as Promise<Club>;

export const patchClub = (id: number, newClub: Partial<Club>) =>
  patchRequest(clubPath, newClub) as Promise<Club>;

export const deleteClub = (id: number) => deleteRequest(clubPath);
