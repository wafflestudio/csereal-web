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
        <Fieldset.Title>
          <Form.Text
            name="koName"
            options={{ required: '한국어 장학금 이름을 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.Text
            name="enName"
            options={{ required: '영어 장학금 이름을 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset.Title>
        <Fieldset.HTML>
          <Form.HTML
            name="koDescription"
            options={{ required: '한국어 장학금 설명을 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.HTML
            name="enDescription"
            options={{ required: '영어 장학금 설명을 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset.HTML>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}
