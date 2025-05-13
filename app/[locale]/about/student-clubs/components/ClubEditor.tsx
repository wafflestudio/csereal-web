import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { studentClubs } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { EditorImage } from '@/types/form';
import { Language, WithLanguage } from '@/types/language';
import { getPath } from '@/utils/page';

const clubPath = getPath(studentClubs);

export interface ClubFormData extends WithLanguage<{ name: string; description: string }> {
  image?: EditorImage;
}

interface Props {
  defaultValues?: ClubFormData;
  onSubmit: (formData: ClubFormData) => void;
}

export default function ClubEditor({ defaultValues, onSubmit }: Props) {
  const router = useRouter();
  const formMethods = useForm<ClubFormData>({ defaultValues });
  const { handleSubmit } = formMethods;
  const [language, setLanguage] = useState<Language>('ko');

  const onCancel = () => router.push(clubPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <LanguagePicker onChange={setLanguage} selected={language} />

        <Fieldset.Title>
          <Form.Text
            name="ko.name"
            options={{ required: '한국어 동아리 이름을 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.Text
            name="en.name"
            options={{ required: '영어 동아리 이름을 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset.Title>

        <Fieldset.HTML>
          <Form.HTML
            name="ko.description"
            options={{ required: '한국어 동아리 소개를 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.HTML
            name="en.description"
            options={{ required: '영어 동아리 소개를 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset.HTML>

        <Fieldset.Image>
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            글 우측 상단에 들어가는 이미지입니다.
          </label>
          <Form.Image name="image" />
        </Fieldset.Image>

        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}
