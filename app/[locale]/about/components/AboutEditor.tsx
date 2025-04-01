'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { useRouter } from '@/i18n/routing';
import { EditorFile, EditorImage } from '@/types/form';
import { Language } from '@/types/language';
import { contentToFormData, getAttachmentDeleteIds } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export interface AboutFormData {
  htmlKo: string;
  htmlEn: string;
  image: EditorImage;
  files: EditorFile[];
}

interface Props {
  cancelPath: string;
  defaultValues: AboutFormData;
  onSubmit: (formData: FormData) => Promise<unknown>;
  showAttachments?: boolean;
}

export default function AboutEditor({
  cancelPath,
  defaultValues,
  onSubmit: _onSubmit,
  showAttachments = false,
}: Props) {
  const router = useRouter();
  const formMethods = useForm<AboutFormData>({ defaultValues });
  const { handleSubmit, formState } = formMethods;
  const [language, setLanguage] = useState<Language>('ko');

  const onCancel = () => router.push(cancelPath);

  const onSubmit = handleSubmit(async ({ htmlKo, htmlEn, image, files }) => {
    const requestObject = {
      ko: { description: htmlKo, deleteIds: getAttachmentDeleteIds(files, defaultValues.files) },
      en: { description: htmlEn, deleteIds: [] },
      removeImage: defaultValues.image !== null && image === null,
    };

    const formData = contentToFormData('EDIT', { requestObject, image, attachments: files });
    const resp = await _onSubmit(formData);
    handleServerResponse(resp, { successMessage: '수정 완료되었습니다.' });
  });

  return (
    <FormProvider {...formMethods}>
      <Form isDirty={formState.isDirty}>
        <LanguagePicker onChange={setLanguage} selected={language} />

        <Fieldset.HTML>
          {language === 'ko' && <Form.HTML name="htmlKo" options={{ required: true }} />}
          {language === 'en' && <Form.HTML name="htmlEn" />}
        </Fieldset.HTML>

        <Fieldset.Image>
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            글 우측 상단에 들어가는 이미지입니다.
          </label>
          <Form.Image name="image" />
        </Fieldset.Image>

        {showAttachments && (
          <Fieldset.File>
            <Form.File name="files" />
          </Fieldset.File>
        )}

        <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
      </Form>
    </FormProvider>
  );
}
