import { revalidateTag } from 'next/cache';

import { getInternal, putInternal } from '@/apis/v2/internal';
import InternalEditor from '@/app/.internal/components/InternalEditor';
import { FETCH_TAG_INTERNAL } from '@/constants/network';
import { redirectKo } from '@/i18n/routing';

export default async function InternalPage() {
  const { description } = await getInternal();

  const onSubmit = async (description: string) => {
    'use server';
    await putInternal(description);
    revalidateTag(FETCH_TAG_INTERNAL);
    redirectKo('/.internal');
  };

  return <InternalEditor description={description} onSubmit={onSubmit} />;
}
