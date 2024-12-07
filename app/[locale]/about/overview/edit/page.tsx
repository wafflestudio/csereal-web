import { putOverviewAction } from '@/actions/about';
import { getOverview } from '@/apis/v1/about/overview';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getEditorFile, getEditorImage } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { overview } from '@/constants/segmentNode';

import AboutEditor, { AboutFormData } from '../../components/AboutEditor';

const path = getPath(overview);

export default async function OverviewEditPage() {
  const [koData, enData] = await Promise.all([getOverview('ko'), getOverview('en')]);

  const defaultValues: AboutFormData = {
    htmlKo: koData.description,
    htmlEn: enData.description,
    image: getEditorImage(koData.imageURL),
    files: getEditorFile(koData.attachments),
  };

  return (
    <PageLayout title="학부 소개 편집" titleType="big" hideNavbar>
      <AboutEditor
        cancelPath={path}
        defaultValues={defaultValues}
        onSubmit={putOverviewAction}
        showAttachments
      />
    </PageLayout>
  );
}
