export const dynamic = 'force-dynamic';

import { getFutureCareeres } from '@/apis/v2/about/future-careers';
import CareerCompanies from '@/app/[locale]/about/future-careers/CareerCompanies';
import CareerStat from '@/app/[locale]/about/future-careers/CareerStat';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { futureCareers } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: Language }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: futureCareers });
}

const careerPath = getPath(futureCareers);

export default async function FutureCareersPage(props: { params: Promise<{ locale: Language }> }) {
  const params = await props.params;
  const { description, stat, companies } = await getFutureCareeres(params.locale);

  return (
    <PageLayout titleType="big">
      <CareerDescription description={description} />
      <CareerStat stat={stat} />
      <CareerCompanies companies={companies} />
    </PageLayout>
  );
}

function CareerDescription({ description }: { description: string }) {
  return (
    <>
      <HTMLViewer htmlContent={description} />
      <LoginVisible staff>
        <div className="flex justify-end pb-2">
          <EditButton href={`${careerPath}/description/edit`} />
        </div>
      </LoginVisible>
    </>
  );
}
