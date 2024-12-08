import { getResearchGroup } from '@/apis/v2/research/[id]';
import { getResearchGroups } from '@/apis/v2/research/groups';
import { OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link, redirect } from '@/i18n/routing';
import { Language } from '@/types/language';
import { findItemBySearchParam } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/constants/segmentNode';

import ResearchGroupDetails from './ResearchGroupDetails';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: researchGroups });
}

const researchGroupsPath = getPath(researchGroups);

export default async function ResearchGroupsPage(props: {
  params: Promise<{ locale: Language }>;
  searchParams: Promise<{ selected?: string }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { locale } = params;

  const groups = await getResearchGroups(locale);
  const selectedGroup = findItemBySearchParam(groups, (item) => [item.name], searchParams.selected);
  // 존재하지 않는 그룹(영어 변환 포함)일 경우 초기화
  if (!selectedGroup) {
    redirect({ href: researchGroupsPath, locale });
    return;
  }
  const groupWithLanguage = await getResearchGroup(selectedGroup.id);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      {/* TODO: 외부 div 스타일링 SelectionList에서 표현 */}
      <div className="px-7 sm:pl-[100px] sm:pr-[320px]">
        <LoginVisible staff>
          <div className="mt-11 text-right">
            <Link href={`${researchGroupsPath}/create`}>
              <OrangeButton title="연구 스트림 추가" />
            </Link>
          </div>
        </LoginVisible>
        <SelectionList
          names={groups.map((group) => ({ ko: group.name }))}
          selectedItemNameKo={selectedGroup?.name ?? ''}
          rootPath={researchGroupsPath}
          listGridColumnClass="lg:grid-cols-[repeat(auto-fit,minmax(236px,_auto))]"
        />
      </div>
      {selectedGroup ? (
        <ResearchGroupDetails
          group={selectedGroup}
          ids={{ ko: groupWithLanguage.ko.id, en: groupWithLanguage.en.id }}
        />
      ) : (
        <Fallback selected={searchParams.selected ?? ''} />
      )}
    </PageLayout>
  );
}

const Fallback = ({ selected }: { selected: string }) => (
  <p>
    <b>{selected}</b> 스트림은 존재하지 않습니다.
  </p>
);
