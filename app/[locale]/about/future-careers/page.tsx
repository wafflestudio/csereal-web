export const dynamic = 'force-dynamic';

import { getFutureCareeres } from '@/apis/v1/about/future-careers';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { futureCareers } from '@/utils/segmentNode';

import CareerCompanies from './CareerCompanies';
import CareerStat from './CareerStat';

export async function generateMetadata({ params: { locale } }: { params: { locale: Language } }) {
  return await getMetadata({ locale, node: futureCareers });
}

const careerPath = getPath(futureCareers);

export default async function FutureCareersPage({ params }: { params: { locale: Language } }) {
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
