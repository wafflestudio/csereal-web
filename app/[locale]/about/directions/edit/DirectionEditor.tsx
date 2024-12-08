'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { putDirectionsAction } from '@/actions/about';
import Fieldset from '@/components/form/Fieldset';
import LanguagePicker from '@/components/form/LanguagePicker';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { Direction } from '@/types/about';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { directions } from '@/constants/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

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

  const { handleSubmit } = formMethods;

  const onCancel = () => router.push(directionsPath);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      handleServerAction(
        await putDirectionsAction(data.ko.id, {
          koDescription: formData.htmlKo,
          enDescription: formData.htmlEn,
        }),
      );
      successToast('찾아오는 길을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  });

  return (
    <PageLayout title={`찾아오는 길(${data.ko.name}) 편집`} titleType="big" hideNavbar>
      <FormProvider {...formMethods}>
        <Form>
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
