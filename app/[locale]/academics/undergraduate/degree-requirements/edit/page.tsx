import { revalidateTag } from 'next/cache';

import {
  getDegreeRequirements,
  putDegreeRequirements,
} from '@/apis/v1/academics/undergraduate/degree-requirements';
import { FETCH_TAG_DEGREE } from '@/constants/network';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { degree } from '@/utils/segmentNode';
import { decodeFormDataFileName } from '@/utils/string';

import DegreeRequirementsEditor from './DegreeRequirementsEditor';

const path = getPath(degree);

export default async function DegreeRequirementsEditPage() {
  const data = await getDegreeRequirements();

  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'newAttachments');
    await putDegreeRequirements(formData);
    revalidateTag(FETCH_TAG_DEGREE);
    redirectKo(path);
  };

  return (
    <DegreeRequirementsEditor
      defaultValues={{
        description: data.description,
        files: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
      }}
      onSubmit={onSubmit}
    />
  );
}
