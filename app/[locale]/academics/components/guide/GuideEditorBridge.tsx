'use client';

import { Guide } from '@/apis/types/academics';
import GuideEditor, { GuideFormData } from '@/app/[locale]/academics/components/guide/GuideEditor';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

interface Props {
  data: Guide;
  serverAction: (formData: FormData) => Promise<void>;
  path: string;
}

export default function GuideEditBridge({ data, serverAction, path }: Props) {
  const onSubmit = async (_formData: GuideFormData) => {
    const deleteIds = getAttachmentDeleteIds(_formData.file, data.attachments);
    const formData = contentToFormData('EDIT', {
      requestObject: { description: _formData.description, deleteIds },
      attachments: _formData.file,
    });
    const resp = await serverAction(formData);
    handleServerResponse(resp, { successMessage: '안내를 수정했습니다.' });
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
