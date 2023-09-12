export const dynamic = 'force-static';

import { getScholarship } from '@/apis/academicsServer';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GraduateScholarshipPage({ params }: { params: { id: string } }) {
  const { name, description } = await getScholarship(parseInt(params.id), 'graduate');

  return (
    // 타이틀이 긴 경우 정규표현식으로 괄호 내부 내용을 제거
    // ex) 교외장학금 (현송문화재단, 유한재단, ...) -> 교외장학금
    <PageLayout
      title={name.length > 20 ? name.replace(/\([^)]*\)/g, '') : name}
      titleType="big"
      titleMargin="mb-8"
    >
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}

export async function generateStaticParams() {
  return Array(4)
    .fill(0)
    .map((_, i) => ({
      id: i + '',
    }));
}
