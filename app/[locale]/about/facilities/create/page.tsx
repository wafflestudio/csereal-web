'use client';

import { Fragment, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { postFacilityAction } from '@/actions/about';
import { Facility } from '@/apis/types/about';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { facilities } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { EditorImage } from '@/types/form';
import { Language, WithLanguage } from '@/types/language';
import { contentToFormData } from '@/utils/formData';
import { getPath } from '@/utils/page';
import { handleServerResponse } from '@/utils/serverActionError';

const facilitiesPath = getPath(facilities);

interface FormData extends WithLanguage<Facility> {
  imageURL: EditorImage | null;
}

export default function FacilityCreator() {
  const router = useRouter();
  const formMethods = useForm<FormData>({
    defaultValues: {
      ko: { name: '', description: '', locations: [] },
      en: { name: '', description: '', locations: [] },
    },
  });
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ko');

  const { handleSubmit } = formMethods;

  const onCancel = () => router.push(facilitiesPath);

  const onSubmit = handleSubmit(async (_formData) => {
    const formData = contentToFormData('CREATE', {
      requestObject: _formData,
      image: _formData.imageURL,
    });
    const resp = await postFacilityAction(formData);
    handleServerResponse(resp, { successMessage: '시설 안내를 추가했습니다.' });
  });

  return (
    <PageLayout title="시설 안내 추가" titleType="big" hideNavbar>
      <FormProvider {...formMethods}>
        <LanguagePicker onChange={setSelectedLanguage} selected={selectedLanguage} />

        {['ko', 'en'].map(
          (language) =>
            language === selectedLanguage && (
              <Fragment key={language}>
                <Fieldset title="시설명" mb="mb-8" titleMb="mb-2" required>
                  <Form.Text name={`${language}.name`} maxWidth="max-w-[30rem]" />
                </Fieldset>
                <Fieldset title="시설 설명" mb="mb-10" titleMb="mb-2" required>
                  <Form.HTML name={`${language}.description`} options={{ required: true }} />
                </Fieldset>
                <Fieldset title="시설 위치" mb="mb-8" titleMb="mb-2" required>
                  <Form.TextList name={`${language}.locations`} placeholder="예: 301동 315호" />
                </Fieldset>
              </Fragment>
            ),
        )}

        <Fieldset title="시설 사진" mb="mb-12" titleMb="mb-2">
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            시설 대표 이미지입니다.
          </label>
          <Form.Image name="imageURL" />
        </Fieldset>

        <Form.Action onCancel={onCancel} onSubmit={onSubmit} />
      </FormProvider>
    </PageLayout>
  );
}
