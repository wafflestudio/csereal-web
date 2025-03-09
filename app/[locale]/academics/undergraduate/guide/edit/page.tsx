import { getAcademicsGuide } from '@/apis/v2/academics/[studentType]/guide';
import GuideEditBridge from '@/app/[locale]/academics/components/guide/GuideEditorBridge';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateGuide } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(undergraduateGuide);

export default async function Page() {
  const data = await getAcademicsGuide('undergraduate');

  return (
    <PageLayout title="학부 안내 편집" titleType="big">
      <GuideEditBridge data={data} studentType="undergraduate" path={path} />
    </PageLayout>
  );
}
