'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/editor/common/Fieldset';
import LanguagePicker from '@/components/editor/common/LanguagePicker';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';
import { useRouter } from '@/i18n/routing';
import { Language } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

export type ScholarshipFormData = {
  koName: string;
  koDescription: string;
  enName: string;
  enDescription: string;
};

type Props = {
  defaultValues?: ScholarshipFormData;
  cancelPath: string;
  onSubmit: (data: ScholarshipFormData) => Promise<void>;
};

export default function ScholarshipEditor({
  defaultValues,
  cancelPath,
  onSubmit: _onSubmit,
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
    try {
      handleServerAction(_onSubmit(formData));
      successToast('장학금을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
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
      <Fieldset.Editor>
        <HTMLEditor name={`${language}Description`} options={{ required: true }} />
      </Fieldset.Editor>
    </>
  );
};
