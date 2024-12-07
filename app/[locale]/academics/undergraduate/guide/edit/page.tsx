import { revalidateTag } from 'next/cache';

import { getAcademicsGuide, putAcademicsGuide } from '@/apis/v1/academics/[studentType]/guide';
import GuideEditBridge from '@/app/[locale]/academics/components/guide/GuideEditorBridge';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_GUIDE } from '@/constants/network';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { undergraduateGuide } from '@/constants/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

const path = getPath(undergraduateGuide);

export default async function Page() {
  const data = await getAcademicsGuide('undergraduate');

  const serverAction = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'newAttachments');
    await putAcademicsGuide('undergraduate', formData);
    revalidateTag(FETCH_TAG_GUIDE);
    redirectKo(path);
  };

  return (
    <PageLayout title="학부 안내 편집" titleType="big">
      <GuideEditBridge data={data} serverAction={serverAction} path={path} />
    </PageLayout>
  );
}
