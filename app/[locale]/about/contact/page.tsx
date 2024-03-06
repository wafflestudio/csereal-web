import { getContact } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ContactPage() {
  const { description, imageURL } = await getContact();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={description}
        topRightContent={{ type: 'image', url: imageURL, width: 240, height: 360 }}
      />
    </PageLayout>
  );
}
