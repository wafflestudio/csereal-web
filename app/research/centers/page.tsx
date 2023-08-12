import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import { SelectionList } from '@/components/common/SelectionList';
import PageLayout from '@/components/layout/PageLayout';

import { researchGroups } from '@/types/page';

import { getPath } from '@/utils/page';

const researchGroupsPath = getPath(researchGroups);

const content = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`;

export default function ResearchGroupsPage() {
  return (
    <PageLayout currentPage={researchGroups} title={researchGroups.name} titleSize="text-2xl">
      <SelectionList names={[]} selectedItemName="" path={researchGroupsPath} />
      <ResearchGroupsTitle title="그래픽스 및 사람 중심 컴퓨팅 연구그룹" />
      <HTMLViewer
        htmlContent={content}
        mainImage={{ url: 'https://picsum.photos/801', width: 320, height: 160 }}
      />
    </PageLayout>
  );
}

function ResearchGroupsTitle({ title }: { title: string }) {
  return (
    <div className="w-fit">
      <h4 className="px-2.5">{title}</h4>
      <StraightNode />
    </div>
  );
}
