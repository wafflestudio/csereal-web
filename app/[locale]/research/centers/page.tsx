import { getResearchCenter } from '@/apis/v2/research/[id]';
import { getResearchCenters } from '@/apis/v2/research/centers';
import ResearchCenterDetails from '@/app/[locale]/research/centers/ResearchCenterDetails';
import { OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { researchCenters } from '@/constants/segmentNode';
import { Link, redirect } from '@/i18n/routing';
import { Language } from '@/types/language';
import { findItemBySearchParam } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: Language }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: researchCenters });
}

const researchCentersPath = getPath(researchCenters);

export default async function ResearchCentersPage(props: {
  params: Promise<{ locale: Language }>;
  searchParams: Promise<{ selected?: string }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { locale } = params;

  const centers = await getResearchCenters(locale);
  const selectedCenter = findItemBySearchParam(
    centers,
    (item) => [item.name],
    searchParams.selected,
  );
  // 존재하지 않는 센터(영어 변환 포함)일 경우 초기화
  if (!selectedCenter) {
    redirect({ href: researchCentersPath, locale });
    return;
  }
  const centerWithLanguage = await getResearchCenter(selectedCenter.id);

  return (
    <PageLayout titleType="big" removeTopPadding>
      <LoginVisible staff>
        <div className="mt-11 text-right">
          <Link href={`${researchCentersPath}/create`}>
            <OrangeButton title="연구 센터 추가" />
          </Link>
        </div>
      </LoginVisible>
      <SelectionList
        names={centers.map((center) => ({ ko: center.name }))}
        selectedItemNameKo={selectedCenter?.name ?? ''}
        rootPath={researchCentersPath}
        listGridColumnClass="lg:grid-cols-[repeat(auto-fit,minmax(_200px,_auto))]"
      />
      {selectedCenter ? (
        <ResearchCenterDetails
          center={selectedCenter}
          ids={{ ko: centerWithLanguage.ko.id, en: centerWithLanguage.en.id }}
        />
      ) : (
        <Fallback selected={selectedCenter} />
      )}
    </PageLayout>
  );
}

const Fallback = ({ selected }: { selected: string }) => (
  <p>
    <b>{selected}</b> 연구센터는 존재하지 않습니다.
  </p>
);
