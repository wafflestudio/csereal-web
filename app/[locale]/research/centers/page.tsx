import { getResearchCenter, getResearchCenters } from '@/apis/research';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link, redirect } from '@/navigation';
import { Language } from '@/types/language';
import { findItemBySearchParam } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';

import ResearchCenterDetails from './ResearchCenterDetails';

export async function generateMetadata({ params: { locale } }: { params: { locale: Language } }) {
  return await getMetadata({ locale, node: researchCenters });
}

const researchCentersPath = getPath(researchCenters);

export default async function ResearchCentersPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: Language };
  searchParams: { selected?: string };
}) {
  const centers = await getResearchCenters(locale);
  const selectedCenter = findItemBySearchParam(
    centers,
    (item) => [item.name],
    searchParams.selected,
  );
  // 존재하지 않는 센터(영어 변환 포함)일 경우 초기화
  if (!selectedCenter) {
    redirect(researchCentersPath);
    return;
  }
  const centerWithLanguage = await getResearchCenter(selectedCenter.id);

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <LoginVisible staff>
        <div className="mt-11 text-right">
          <Link href={`${researchCentersPath}/create`}>
            {/* TODO: 오렌지 버튼 컴포넌트 사용 */}
            <button className="h-9 rounded-[.0625rem] bg-main-orange px-[.875rem] py-[.3125rem] text-md font-semibold text-white">
              연구 센터 추가
            </button>
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
