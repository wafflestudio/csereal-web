import { putContactAction } from '@/actions/about';
import { getContact } from '@/apis/v2/about/contact';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { contact } from '@/constants/segmentNode';
import { getEditorFile, getEditorImage } from '@/utils/formData';
import { getPath } from '@/utils/page';

import AboutEditor, { AboutFormData } from '../../components/AboutEditor';

const path = getPath(contact);

export default async function ContactEditPage() {
  const [koData, enData] = await Promise.all([getContact('ko'), getContact('en')]);

  const defaultValues: AboutFormData = {
    htmlKo: koData.description,
    htmlEn: enData.description,
    image: getEditorImage(koData.imageURL),
    files: getEditorFile(koData.attachments),
  };

  return (
    <PageLayout title="연락처 편집" titleType="big" hideNavbar>
      <AboutEditor
        cancelPath={path}
        defaultValues={defaultValues}
        onSubmitAction={putContactAction}
        showAttachments
      />
    </PageLayout>
  );
}
