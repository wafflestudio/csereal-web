'use client';

import PageTitle from '@/components/layout/pageLayout/PageTitle';
import { main } from '@/constants/segmentNode';

export default function SearchPageTitle() {
  return <PageTitle title={'통합 검색'} currentPage={main} titleType={'big'} margin={'mb-11'} />;
}
