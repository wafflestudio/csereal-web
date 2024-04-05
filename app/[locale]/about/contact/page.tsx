import { getContact } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ContactPage() {
  const { description } = await getContact();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={description}
        topRightContent={{
          type: 'image',
          widthPX: 240,
          heightPX: 360,
          marginTopPx: 28,
          url: 'https://cse-dev-waffle.bacchus.io/sites/default/files/styles/scale-width-220/public/node--contact/301.jpg?itok=zbUgVCfd',
        }}
        className="mt-[-1.5rem]"
      />
    </PageLayout>
  );
}
