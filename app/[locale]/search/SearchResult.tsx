import { Suspense } from 'react';

import AboutSection from './AboutSection';
import CommunitySection from './CommunitySection';
import ResearchSection from './ResearchSection';

export const DESCRIPTION_CHAR_CNT = 200;

export default async function SearchResult({ keyword }: { keyword: string }) {
  return (
    <div className="flex w-[52.5rem] grow flex-col gap-20">
      <Suspense>
        <AboutSection keyword={keyword} />
        <CommunitySection keyword={keyword} />
        <ResearchSection keyword={keyword} />
      </Suspense>
    </div>
  );
}
