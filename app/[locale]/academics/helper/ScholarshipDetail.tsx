import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Scholarship } from '@/types/academics';

export default async function ScholarshipDetail({
  scholarship: { name, description },
}: {
  scholarship: Scholarship;
}) {
  // 타이틀이 긴 경우 정규표현식으로 괄호 내부 내용을 제거
  // ex) 교외장학금 (현송문화재단, 유한재단, ...) -> 교외장학금
  const shortTitle = name.length > 20 ? name.replace(/\([^)]*\)/g, '') : name;

  return (
    <PageLayout title={shortTitle} titleType="big" titleMargin="mb-8">
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
