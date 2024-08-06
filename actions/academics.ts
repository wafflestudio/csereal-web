// import { revalidateTag } from 'next/cache';

import { redirect } from '@/navigation';

import { putAcademicsGuide } from '@/apis/academics';

import { StudentType } from '@/types/academics';

import { getPath } from '@/utils/page';
import { academics } from '@/utils/segmentNode';

import { withErrorHandler } from './errorHandler';

const academicsPath = getPath(academics);

export const putGuideAction = withErrorHandler(async (type: StudentType, formData: FormData) => {
  await putAcademicsGuide(type, formData);

  //   revalidateTag(FETCH_TAG_);
  redirect(`${academicsPath}/${type}/guide`);
});
