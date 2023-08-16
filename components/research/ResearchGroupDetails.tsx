import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';

import { ResearchGroup } from '@/types/research';

import ResearchGroupLabs from './ResearchGroupLabs';

interface ResearchGroupDetailProps {
  group: ResearchGroup;
}

export default function ResearchGroupDetails({ group }: ResearchGroupDetailProps) {
  return (
    <div>
      <ResearchGroupTitle name={group.name} />
      <HTMLViewer
        htmlContent={group.description}
        topRightContent={{ type: 'image', width: 320, height: 160, url: group.imageURL }}
        margin="mt-3 mb-9 ml-2.5"
      />
      <ResearchGroupLabs labNames={group.laboratories} />
    </div>
  );
}

function ResearchGroupTitle({ name }: { name: string }) {
  return (
    <div className="w-fit">
      <h4 className="px-2.5 h-10 font-bold text-[1.25rem] leading-10">{name}</h4>
      <StraightNode />
    </div>
  );
}
