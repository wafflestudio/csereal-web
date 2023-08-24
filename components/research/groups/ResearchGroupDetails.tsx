import HTMLViewer from '@/components/editor/HTMLViewer';
import SelectionTitle from '@/components/common/selection/SelectionTitle';

import { ResearchGroup } from '@/types/research';

import ResearchGroupLabs from './ResearchGroupLabs';

interface ResearchGroupDetailProps {
  group: ResearchGroup;
}

export default function ResearchGroupDetails({ group }: ResearchGroupDetailProps) {
  return (
    <div>
      <SelectionTitle animationKey={group.name}>{group.name} 연구 그룹</SelectionTitle>
      <HTMLViewer
        htmlContent={group.description}
        topRightContent={{ type: 'image', width: 320, height: 160, url: group.imageURL }}
        margin="mb-9 ml-2.5"
      />
      <ResearchGroupLabs labs={group.labs} />
    </div>
  );
}
