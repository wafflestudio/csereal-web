'use client';

import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/constants/segmentNode';

import ResearchGroupLabsEditGuide from '../ResearchGroupLabsEditGuide';
import { FormProvider, useForm } from 'react-hook-form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { Language } from '@/types/language';
import { useState } from 'react';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import { EditorImage } from '@/components/form/types';

const groupsPath = getPath(researchGroups);

export interface ResearchGroupFormData {
  ko: { name: string; description: string; type: 'groups' };
  en: { name: string; description: string; type: 'groups' };
  image: EditorImage | null;
}

interface Props {
  defaultValues?: ResearchGroupFormData;
  onSubmit: (formData: ResearchGroupFormData) => Promise<void>;
}

export default function ResearchGroupEditor({ onSubmit, defaultValues }: Props) {
  const formMethods = useForm<ResearchGroupFormData>({
    defaultValues: defaultValues ?? {
      ko: { name: '', description: '', type: 'groups' },
      en: { name: '', description: '', type: 'groups' },
      image: null,
    },
  });
  const { handleSubmit } = formMethods;
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('ko');

  const onCancel = () => router.push(groupsPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <ResearchGroupLabsEditGuide />
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
      <Fieldset.HTML>
        <Form.HTML name={`${language}.description`} />
      </Fieldset.HTML>
      <Fieldset.Image>
        <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
          글 우측 상단에 들어가는 이미지입니다.
        </label>
        <Form.Image name="image" />
      </Fieldset.Image>
    </>
  );
};
