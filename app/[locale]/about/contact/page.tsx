export const dynamic = 'force-dynamic';

import { getContact } from '@/apis/v1/about/contact';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { contact } from '@/constants/segmentNode';

interface ContactPageProps {
  params: Promise<{ locale: Language }>;
}

const contactPath = getPath(contact);

export async function generateMetadata(props: ContactPageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: contact });
}

export default async function ContactPage(props: ContactPageProps) {
  const params = await props.params;

  const { locale } = params;

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
        topRightContent={
          imageURL
            ? {
                type: 'image',
                widthPX: 240,
                heightPX: 360,
                marginTopPx: 28,
                url: imageURL,
              }
            : undefined
        }
        className="mt-[-1.5rem]"
      />
    </PageLayout>
  );
}
