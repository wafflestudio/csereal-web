import { getAcademicsGuide } from '@/apis/v2/academics/[studentType]/guide';
import GuideEditBridge from '@/app/[locale]/academics/components/guide/GuideEditorBridge';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateGuide } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const path = getPath(graduateGuide);

export default async function Page() {
  const data = await getAcademicsGuide('graduate');

  return (
    <PageLayout title="대학원 안내 편집" titleType="big">
      <GuideEditBridge data={data} studentType="graduate" path={path} />
    </PageLayout>
  );
}
