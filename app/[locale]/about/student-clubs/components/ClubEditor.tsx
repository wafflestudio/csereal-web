'use client';

import Fieldset from '@/components/form/Fieldset';
import LanguagePicker from '@/components/form/LanguagePicker';
import { PostEditorImage } from '@/components/form/types';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const clubPath = getPath(studentClubs);

export interface ClubFormData extends WithLanguage<{ name: string; description: string }> {
  image?: PostEditorImage;
}

interface Props {
  defaultValues?: ClubFormData;
  onSubmit: (formData: ClubFormData) => void;
}

export default function ClubEditor({ defaultValues, onSubmit }: Props) {
  const router = useRouter();
  const formMethods = useForm<ClubFormData>({ defaultValues });
  const { handleSubmit } = formMethods;
  const [language, setLanguage] = useState<Language>('ko');

  const onCancel = () => router.push(clubPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <LanguagePicker onChange={setLanguage} selected={language} />

        <Fieldset.Title>
          {language === 'ko' && <Form.Text name="ko.name" options={{ required: true }} />}
          {language === 'en' && <Form.Text name="en.name" />}
        </Fieldset.Title>

        <Fieldset.Editor>
          {language === 'ko' && <Form.HTML name="ko.description" options={{ required: true }} />}
          {language === 'en' && <Form.HTML name="en.description" />}
        </Fieldset.Editor>

        <Fieldset.Image>
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            글 우측 상단에 들어가는 이미지입니다.
          </label>
          <Form.Image name="image" />
        </Fieldset.Image>

        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}
