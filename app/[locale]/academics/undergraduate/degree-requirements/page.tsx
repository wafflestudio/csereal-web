import { getDegreeRequirements } from '@/apis/academics';
import { getMetadata } from '@/utils/metadata';
import { degree } from '@/utils/segmentNode';

import DegreeRequirementsPageContent from './DegreeRequirementsPageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: degree });
}

export default async function UndergraduteDegreeRequirementsPage() {
  const data = await getDegreeRequirements();

  return <DegreeRequirementsPageContent data={data} />;
}
