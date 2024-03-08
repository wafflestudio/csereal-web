import { SimpleResearchLab } from '@/types/research';

import ResearchLabListHeader from './ResearchLabListHeader';
import ResearchLabListRow from './ResearchLabListRow';

interface ResearchLabListProps {
  labInfos: SimpleResearchLab[];
}

export default function ResearchLabList({ labInfos }: ResearchLabListProps) {
  return (
    <div className="sm:border-y sm:border-neutral-200">
      <ResearchLabListHeader />
      <ul className="sm:divide-y sm:divide-dashed sm:divide-neutral-200">
        {labInfos.map((lab) => (
          <ResearchLabListRow lab={lab} key={lab.name} />
        ))}
      </ul>
    </div>
  );
}
