export const dynamic = 'force-static';

import { getScholarship } from '@/apis/academicsServer';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export default async function GraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship(parseInt(params.id), 'graduate');

  return <ScholarshipDetail scholarship={scholarship} />;
}

export async function generateStaticParams() {
  return Array(4)
    .fill(0)
    .map((_, i) => ({
      id: i + '',
    }));
}
