import { getContact } from '@/apis/about';

import ContentWithImage from '@/components/common/ContentWithImage';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ContactPage() {
  const { description } = await getContact();

  return (
    <PageLayout titleType="big">
      <ContentWithImage
        content={description}
        imageURL="https://cse-dev-waffle.bacchus.io/sites/default/files/styles/scale-width-220/public/node--contact/301.jpg?itok=zbUgVCfd"
        imageWidth={240}
        imageHeight={360}
        imageMarginTop={28}
        growWidth={false}
        htmlViewerClassName="mt-[-1.5rem]"
      />
    </PageLayout>
  );
}
