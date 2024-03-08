import { MainContents } from '@/types/main';

import { getRequest } from './common/client';

export const getMainContents = () => getRequest('') as Promise<MainContents>;
