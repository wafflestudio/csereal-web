export const dynamic = 'force-dynamic';

import { getContact } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { contact } from '@/utils/segmentNode';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: contact });
}

export default async function ContactPage() {
  const { description, imageURL } = await getContact();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={description}
        topRightContent={{
          type: 'image',
          widthPX: 240,
          heightPX: 360,
          marginTopPx: 28,
          url: imageURL,
        }}
        className="mt-[-1.5rem]"
      />
    </PageLayout>
  );
}
