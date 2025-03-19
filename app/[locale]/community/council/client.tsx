'use client';

import Header from '@/components/layout/header/Header';
import CategoryGrid from '@/components/layout/pageLayout/CategoryGrid';
import PageTitle from '@/components/layout/pageLayout/PageTitle';
import { council } from '@/constants/segmentNode';

export default function CouncilClientPage() {
  return (
    <div className="bg-neutral-850">
      <Header />
      <PageTitle
        title={council.name}
        currentPage={council}
        titleType="big"
        margin="mb-6 sm:mb-11"
      />
      <CategoryGrid currentPage={council} theme="light" />
    </div>
  );
}
