'use client';

import { putCareerDescriptionAction } from '@/actions/about';
import Fieldset from '@/components/form/Fieldset';
import LanguagePicker from '@/components/form/LanguagePicker';
import Form from '@/components/form/Form';
import HTMLEditor from '@/components/form/html/HTMLEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/constants/segmentNode';
import { handleServerAction_legacy } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

const clubPath = getPath(studentClubs);

export default function CareerDescriptionEditor({ data }: { data: WithLanguage<string> }) {
  const router = useRouter();
  const formMethods = useForm<WithLanguage<string>>({ defaultValues: data });
  const [language, setLanguage] = useState<Language>('ko');

  const { handleSubmit } = formMethods;

  const onCancel = () => router.push(clubPath);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      handleServerAction_legacy(
        await putCareerDescriptionAction({
          koDescription: formData.ko,
          enDescription: formData.en,
        }),
      );
      successToast('졸업생 진로 본문을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  });

  return (
    <PageLayout title="졸업생 진로 본문 편집" titleType="big" hideNavbar>
      <FormProvider {...formMethods}>
        <Form>
          <LanguagePicker onChange={setLanguage} selected={language} />
          <Fieldset.HTML>
            {language === 'ko' && <Form.HTML name="ko" options={{ required: true }} />}
            {language === 'en' && <Form.HTML name="en" />}
          </Fieldset.HTML>
          <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}
