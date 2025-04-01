'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { putDirectionsAction } from '@/actions/about';
import { Direction } from '@/apis/types/about';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { directions } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';
import { handleServerResponse } from '@/utils/serverActionError';

const directionsPath = getPath(directions);

interface FormData {
  htmlKo: string;
  htmlEn: string;
}

export default function DirectionEditor({ data }: { data: WithLanguage<Direction> }) {
  const router = useRouter();
  const formMethods = useForm<FormData>({
    defaultValues: { htmlKo: data.ko.description, htmlEn: data.en.description },
  });
  const [language, setLanguage] = useState<Language>('ko');

  const { handleSubmit, formState } = formMethods;

  const onCancel = () => router.push(directionsPath);

  const onSubmit = handleSubmit(async (formData) => {
    const resp = await putDirectionsAction(data.ko.id, {
      koDescription: formData.htmlKo,
      enDescription: formData.htmlEn,
    });
    handleServerResponse(resp, { successMessage: '찾아오는 길을 수정했습니다.' });
  });

  return (
    <PageLayout title={`찾아오는 길(${data.ko.name}) 편집`} titleType="big" hideNavbar>
      <FormProvider {...formMethods}>
        <Form isDirty={formState.isDirty}>
          <LanguagePicker onChange={setLanguage} selected={language} />

          <Fieldset.HTML>
            {language === 'ko' && <Form.HTML name="htmlKo" options={{ required: true }} />}
            {language === 'en' && <Form.HTML name="htmlEn" />}
          </Fieldset.HTML>
          <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}
