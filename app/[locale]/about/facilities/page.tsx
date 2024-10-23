export const dynamic = 'force-dynamic';

import { getFacilities } from '@/apis/about';
import FacilitesList from '@/app/[locale]/about/facilities/FacilitiesList';
import { OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/navigation';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { facilities } from '@/utils/segmentNode';

export async function generateMetadata({ params: { locale } }: { params: { locale: Language } }) {
  return await getMetadata({ locale, node: facilities });
}

interface FacilitiesPageProps {
  params: { locale: Language };
}

const facilitiesPath = getPath(facilities);

export default async function FacilitiesPage({ params }: FacilitiesPageProps) {
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
