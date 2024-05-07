import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getResearchGroups } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';

import ResearchGroupDetails from './ResearchGroupDetails';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('연구 그룹'),
    description: '서울대학교 컴퓨터공학부 연구 그룹 페이지입니다.',
  };
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
    <b>{selected}</b> 연구그룹은 존재하지 않습니다.
  </p>
);
