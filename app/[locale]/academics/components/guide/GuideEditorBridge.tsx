'use client';

import { Guide } from '@/apis/types/academics';
import GuideEditor, { GuideFormData } from '@/app/[locale]/academics/components/guide/GuideEditor';
import { errorToStr } from '@/utils/error';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

interface Props {
  data: Guide;
  serverAction: (formData: FormData) => Promise<void>;
  path: string;
}

export default function GuideEditBridge({ data, serverAction, path }: Props) {
  const onSubmit = async (_formData: GuideFormData) => {
    try {
      const deleteIds = getAttachmentDeleteIds(_formData.file, data.attachments);
      const formData = contentToFormData('EDIT', {
        requestObject: { description: _formData.description, deleteIds },
        attachments: _formData.file,
      });
      handleServerAction(await serverAction(formData));
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <GuideEditor
      defaultValues={{
        description: data.description,
        file: data.attachments.map((file) => ({ type: 'UPLOADED_FILE', file })),
      }}
      onCancelPath={path}
      onSubmit={onSubmit}
    />
  );
}
