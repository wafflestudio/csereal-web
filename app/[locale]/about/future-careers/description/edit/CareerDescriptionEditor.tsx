'use client';

import { putCareerDescriptionAction } from '@/actions/about';
import Fieldset from '@/components/editor/common/Fieldset';
import LanguagePicker from '@/components/editor/common/LanguagePicker';
import Form from '@/components/editor/rhf/Form';
import HTMLEditor from '@/components/editor/SunEditor/HTMLEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
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
      handleServerAction(
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
          <Fieldset.Editor>
            {language === 'ko' && <HTMLEditor name="ko" options={{ required: true }} />}
            {language === 'en' && <HTMLEditor name="en" />}
          </Fieldset.Editor>
          <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
        </Form>
      </FormProvider>
    </PageLayout>
  );
}
