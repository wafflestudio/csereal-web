import { Direction } from '@/types/directions';

import { getRequest } from '.';

const directionsPath = '/directions';

export const getDirections = () => getRequest(directionsPath) as Promise<Direction[]>;

export const getDirectionsMock = () => DIRECTIONS_MOCK;

const DIRECTIONS_MOCK: Direction[] = [
  { name: '대중교통', engName: 'public-transit', description: '대중교통으로 오는 방법 어쩌고' },
  { name: '승용차', engName: 'car', description: '승용차로 오는 방법 어쩌고' },
  { name: '지방 및 해외', engName: 'far-away', description: '지방 및 해외에서 오는 방법 어쩌고' },
];
