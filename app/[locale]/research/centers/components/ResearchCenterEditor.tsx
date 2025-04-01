'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { researchCenters } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { EditorImage } from '@/types/form';
import { Language } from '@/types/language';
import { getPath } from '@/utils/page';

export interface ResearchCenterFormData {
  ko: { name: string; description: string; websiteURL: string; type: 'centers' };
  en: { name: string; description: string; websiteURL: string; type: 'centers' };
  image: EditorImage | null;
}

interface Props {
  defaultValues?: ResearchCenterFormData;
  onSubmit: (formData: ResearchCenterFormData) => Promise<void>;
}

const centersPath = getPath(researchCenters);

export default function ResearchCenterEditor({ onSubmit, defaultValues }: Props) {
  const formMethods = useForm<ResearchCenterFormData>({
    defaultValues: defaultValues ?? {
      en: { name: '', description: '', websiteURL: '', type: 'centers' },
      ko: { name: '', description: '', websiteURL: '', type: 'centers' },
      image: null,
    },
  });
  const { handleSubmit, formState } = formMethods;
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('ko');

  const onCancel = () => router.push(centersPath);

  return (
    <FormProvider {...formMethods}>
      <Form isDirty={formState.isDirty}>
        <LanguagePicker selected={language} onChange={setLanguage} />
        {language === 'ko' && <Editor language="ko" />}
        {language === 'en' && <Editor language="en" />}
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

const Editor = ({ language }: { language: Language }) => {
  return (
    <>
      <Fieldset.Title>
        <Form.Text name={`${language}.name`} maxWidth="w-[30rem]" />
      </Fieldset.Title>
      <Fieldset title="웹사이트 주소" mb="mb-8" titleMb="mb-2">
        <Form.Text name={`${language}.websiteURL`} maxWidth="max-w-[30rem]" />
      </Fieldset>
      <Fieldset.HTML>
        <Form.HTML name={`${language}.description`} />
      </Fieldset.HTML>
      <Fieldset.Image>
        <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
          연구 센터 대표 이미지입니다.
        </label>
        <Form.Image name="image" />
      </Fieldset.Image>
    </>
  );
};
