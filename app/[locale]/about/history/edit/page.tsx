import { putHistoryAction } from '@/actions/about';
import { getHistory } from '@/apis/v2/about/history';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { history } from '@/constants/segmentNode';
import { getEditorFile, getEditorImage } from '@/utils/formData';
import { getPath } from '@/utils/page';

import AboutEditor, { AboutFormData } from '../../components/AboutEditor';

const path = getPath(history);

export default async function HistoryEditPage() {
  const [koData, enData] = await Promise.all([getHistory('ko'), getHistory('en')]);

  const defaultValues: AboutFormData = {
    htmlKo: koData.description,
    htmlEn: enData.description,
    image: getEditorImage(koData.imageURL),
    files: getEditorFile(koData.attachments),
  };

  return (
    <PageLayout title="연혁 편집" titleType="big" hideNavbar>
      <AboutEditor
        cancelPath={path}
        defaultValues={defaultValues}
        onSubmitAction={putHistoryAction}
        showAttachments
      />
    </PageLayout>
  );
}
