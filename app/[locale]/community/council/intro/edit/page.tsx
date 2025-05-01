import { putIntroAction } from '@/actions/council';
import { getCouncilIntro } from '@/apis/v2/council/intro';
import IntroEditor, {
  IntroFormData,
} from '@/app/[locale]/community/council/intro/edit/IntroEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilIntro } from '@/constants/segmentNode';
import { getEditorImage } from '@/utils/formData';
import { getPath } from '@/utils/page';

const path = getPath(councilIntro);

export default async function IntroEditPage() {
  const data = await getCouncilIntro();

  const defaultValues: IntroFormData = {
    description: data.description,
    image: getEditorImage(data.imageURL),
  };

  return (
    <PageLayout title="학생회 소개 편집" titleType="big" hideNavbar>
      <IntroEditor cancelPath={path} defaultValues={defaultValues} onSubmit={putIntroAction} />
    </PageLayout>
  );
}
