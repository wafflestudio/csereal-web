'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { useRouter } from '@/i18n/routing';
import { Language } from '@/types/language';
import { CustomError, handleServerResponse } from '@/utils/serverActionError';

export type ScholarshipFormData = {
  koName: string;
  koDescription: string;
  enName: string;
  enDescription: string;
};

type Props = {
  defaultValues?: ScholarshipFormData;
  cancelPath: string;
  onSubmitAction: (data: ScholarshipFormData) => Promise<void | CustomError>;
};

export default function ScholarshipEditor({
  defaultValues,
  cancelPath,
  onSubmitAction: _onSubmit,
}: Props) {
  const formMethods = useForm<ScholarshipFormData>({
    defaultValues: defaultValues ?? {
      koName: '',
      koDescription: '',
      enName: '',
      enDescription: '',
    },
  });
  const { handleSubmit } = formMethods;
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('ko');

  const onSubmit = async (formData: ScholarshipFormData) => {
    const resp = _onSubmit(formData);
    handleServerResponse(resp, {
      successMessage: `장학금을 ${defaultValues ? '수정' : '추가'}했습니다.`,
    });
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
    <>
      <Fieldset.Title>
        <Form.Text name={`${language}Name`} options={{ required: true }} />
      </Fieldset.Title>
      <Fieldset.HTML>
        <Form.HTML name={`${language}Description`} options={{ required: true }} />
      </Fieldset.HTML>
    </>
  );
};
