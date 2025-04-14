'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { useRouter } from '@/i18n/routing';
import { Language } from '@/types/language';
import { CustomError, handleServerResponse } from '@/utils/serverActionError';

export type AdmissionsFormData = {
  ko: string;
  en: string;
};

type Props = {
  defaultValues: AdmissionsFormData;
  cancelPath: string;
  onSubmit: (data: AdmissionsFormData) => Promise<void | CustomError>;
};

export default function AdmissionsEditor({
  defaultValues,
  cancelPath,
  onSubmit: _onSubmit,
}: Props) {
  const formMethods = useForm<AdmissionsFormData>({ defaultValues });
  const { handleSubmit } = formMethods;
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('ko');

  const onSubmit = async (formData: AdmissionsFormData) => {
    const resp = _onSubmit(formData);
    handleServerResponse(resp, { successMessage: '입학 본문을 수정했습니다.' });
  };

  const onCancel = () => router.push(cancelPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
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
    <Fieldset.HTML>
      <Form.HTML name={language} options={{ required: true }} />
    </Fieldset.HTML>
  );
};
