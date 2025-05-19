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
  onSubmitAction: (data: AdmissionsFormData) => Promise<void | CustomError>;
};

export default function AdmissionsEditor({
  defaultValues,
  cancelPath,
  onSubmitAction: _onSubmit,
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
        <Fieldset.HTML>
          <Form.HTML
            name="ko"
            options={{ required: '한국어 입학 본문을 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.HTML
            name="en"
            options={{ required: '영어 입학 본문을 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset.HTML>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}
