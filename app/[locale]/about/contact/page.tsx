import { useLocale } from 'next-intl';

import { getContact } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ContactPage() {
  const { description, imageURL } = await getContact();
  const locale = useLocale();
  console.log(locale);
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer
        htmlContent={description}
        topRightContent={{ type: 'image', url: imageURL, width: 240, height: 360 }}
      />
    </PageLayout>
  );
}
