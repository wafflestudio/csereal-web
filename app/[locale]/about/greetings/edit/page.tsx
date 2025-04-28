import { putGreetingsAction } from '@/actions/about';
import { getGreetings } from '@/apis/v2/about/greetings';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { greetings } from '@/constants/segmentNode';
import { getEditorFile, getEditorImage } from '@/utils/formData';
import { getPath } from '@/utils/page';

import AboutEditor, { AboutFormData } from '../../components/AboutEditor';

const path = getPath(greetings);

export default async function GreetingsEditPage() {
  const [koData, enData] = await Promise.all([getGreetings('ko'), getGreetings('en')]);

  const defaultValues: AboutFormData = {
    htmlKo: koData.description,
    htmlEn: enData.description,
    image: getEditorImage(koData.imageURL),
    files: getEditorFile(koData.attachments),
  };

  return (
    <PageLayout title="학부장 인사말 편집" titleType="big" hideNavbar>
      <AboutEditor
        cancelPath={path}
        defaultValues={defaultValues}
        onSubmit={putGreetingsAction}
        showAttachments
      />
    </PageLayout>
  );
}
