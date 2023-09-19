import { getMockMainContents } from '@/data/main';

import { MainContents } from '@/types/main';

import { getRequest } from '.';

export const getMainContents = () => getRequest('') as Promise<MainContents>;

// export const getMainContents = getMockMainContents;
