import { getResearchGroups } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';

import ResearchGroupDetails from './ResearchGroupDetails';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: researchGroups });
}

const researchGroupsPath = getPath(researchGroups);

export default async function ResearchGroupsPage({
  searchParams,
}: {
  searchParams: { selected?: string };
}) {
  const { groups } = await getResearchGroups();
  const selectedGroup = findSelectedItem(groups, searchParams.selected);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      {/* TODO: 외부 div 스타일링 SelectionList에서 표현 */}
      <div className="px-7 sm:pl-[100px] sm:pr-[320px]">
        <SelectionList
          names={groups.map((group) => group.name)}
          selectedItemName={selectedGroup?.name ?? ''}
          path={researchGroupsPath}
          listGridColumnClass="lg:grid-cols-[repeat(auto-fit,minmax(_236px,_auto))]"
        />
      </div>
      {selectedGroup ? (
        <ResearchGroupDetails group={selectedGroup} />
      ) : (
        <Fallback selected={selectedGroup} />
      )}
    </PageLayout>
  );
}

const Fallback = ({ selected }: { selected: string }) => (
  <p>
    <b>{selected}</b> 스트림은 존재하지 않습니다.
  </p>
);
