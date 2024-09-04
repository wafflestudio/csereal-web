export const dynamic = 'force-dynamic';

import { getContact } from '@/apis/about';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { contact } from '@/utils/segmentNode';

interface ContactPageProps {
  params: { locale: Language };
}

const contactPath = getPath(contact);

export async function generateMetadata({ params: { locale } }: ContactPageProps) {
  return await getMetadata({ locale, node: contact });
}

export default async function ContactPage({ params: { locale } }: ContactPageProps) {
  const { description, imageURL } = await getContact(locale);

  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="mb-8 text-right">
          <EditButton href={`${contactPath}/edit`} />
        </div>
      </LoginVisible>
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
