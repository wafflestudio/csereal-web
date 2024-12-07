export const dynamic = 'force-dynamic';

import { getFacilities } from '@/apis/v2/about/facilities';
import FacilitesList from '@/app/[locale]/about/facilities/FacilitiesList';
import { OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/i18n/routing';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { facilities } from '@/constants/segmentNode';

export async function generateMetadata(props: { params: Promise<{ locale: Language }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: facilities });
}

interface FacilitiesPageProps {
  params: Promise<{ locale: Language }>;
}

const facilitiesPath = getPath(facilities);

export default async function FacilitiesPage(props: FacilitiesPageProps) {
  const params = await props.params;
  const facilities = await getFacilities();

  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="mb-7 text-right">
          <Link href={`${facilitiesPath}/create`}>
            <OrangeButton title="시설 추가" />
          </Link>
        </div>
      </LoginVisible>
      <FacilitesList facilities={facilities.map((facility) => facility[params.locale])} />
    </PageLayout>
  );
}
