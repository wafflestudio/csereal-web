import { getContact } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ContactPage() {
  const { description } = await getContact();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={description}
        // TODO: 이미지 본문에 넣기
        topRightContent={{
          type: 'image',
          url: `https://cse-dev-waffle.bacchus.io/sites/default/files/styles/scale-width-220/public/node--contact/301.jpg?itok=zbUgVCfd`,
          width: 240,
          height: 360,
        }}
      />
    </PageLayout>
  );
}
