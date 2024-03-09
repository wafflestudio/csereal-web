import { MainContents } from '@/types/main';

import { getRequest } from './network/client';

export const getMainContents = () => getRequest('') as Promise<MainContents>;
