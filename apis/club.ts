import { Club } from '@/types/club';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

// 아직 미확정

const clubPath = '/club';

export const getClubs = () => getRequest(clubPath) as Promise<Club[]>;

export const getClubsMock: typeof getClubs = async () => CLUBS_MOCK;

export const postClub = (newClub: Club) => postRequest(clubPath, newClub) as Promise<Club>;

export const patchClub = (id: number, newClub: Partial<Club>) =>
  patchRequest(clubPath, newClub) as Promise<Club>;

export const deleteClub = (id: number) => deleteRequest(clubPath);

export const CLUBS_MOCK: Club[] = [
  {
    name: '가디언',
    engName: 'Guardian',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '바쿠스',
    engName: 'Bacchus',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '사커301',
    engName: 'Soccer301',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '슈타인',
    engName: 'Stein',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '스눕스',
    engName: 'SNUPS',
    description: '맛있는 서비스가 탄생하는 곳',
  },
  {
    name: '와플스튜디오',
    engName: 'Waffle Studio',
    description:
      '맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳  맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳 맛있는 서비스가 탄생하는 곳',
    image: {
      url: 'https://picsum.photos/801',
      width: 320,
      height: 190,
    },
  },
  {
    name: '유피넬',
    engName: 'UPNL',
    description: '맛있는 서비스가 탄생하는 곳',
  },
];
