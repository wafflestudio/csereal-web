import { Metadata } from 'next';

import { getInternationalUndergraduate } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { internationalUndergraduateAdmission } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({
    locale,
    node: internationalUndergraduateAdmission,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${-internationalUndergraduateAdmission.name} page`,
    },
  });
}

export default async function InternationalUndergraduateAdmissionPage() {
  const { description } = await getInternationalUndergraduate();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
