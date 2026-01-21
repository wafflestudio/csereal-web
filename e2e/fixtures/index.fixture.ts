import { mergeTests } from '@playwright/test';

import { test as pagesTest } from './pages.fixture';
import { test as roleTest } from './role.fixture';

export const test = mergeTests(roleTest, pagesTest);
