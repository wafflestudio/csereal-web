import { ResearchLabInfo } from '@/types/research';

import ResearchLabListHeader from './ResearchLabListHeader';
import ResearchLabListRow from './ResearchLabListRow';

interface ResearchLabListProps {
  labInfos: ResearchLabInfo[];
}

export default function ResearchLabList({ labInfos }: ResearchLabListProps) {
  return (
    <div className="w-[48.75rem] border-y border-neutral-200">
      <ResearchLabListHeader />
      <ul className="divide-y divide-neutral-200 divide-dashed font-noto ">
        {labInfos.map((lab) => (
          <ResearchLabListRow lab={lab} key={lab.name} />
        ))}
      </ul>
    </div>
  );
}
