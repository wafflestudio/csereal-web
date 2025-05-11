import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import LanguagePicker from '@/components/form/LanguagePicker';
import { EditorImage } from '@/types/form';
import { Language, WithLanguage } from '@/types/language';
import useLanguage from '@/utils/hooks/useLanguage';

export type StaffEditorFormData = WithLanguage<{
  name: string;
  role: string;
  office: string;
  phone: string;
  email: string;
  tasks: string[];
  image: EditorImage | null;
}>;

interface StaffEditorProps {
  defaultValues?: StaffEditorFormData;
  onCancel: () => void;
  onSubmit: (formData: StaffEditorFormData) => Promise<void>;
}

export default function StaffEditor({ defaultValues, onCancel, onSubmit }: StaffEditorProps) {
  const formMethods = useForm<StaffEditorFormData>({
    defaultValues: defaultValues ?? {
      ko: { name: '', email: '', office: '', phone: '', role: '', tasks: [], image: null },
      en: { name: '', email: '', office: '', phone: '', role: '', tasks: [], image: null },
    },
  });
  const { handleSubmit } = formMethods;
  const [language, setLanguage] = useState<Language>(useLanguage().isEnglish ? 'en' : 'ko');

  return (
    <FormProvider {...formMethods}>
      <Form>
        <LanguagePicker selected={language} onChange={setLanguage} />
        <Fieldset title="이름" mb="mb-5" titleMb="mb-2" required>
          <Form.Text
            name={`ko.name`}
            maxWidth="max-w-[30rem]"
            options={{ required: '한국어 이름을 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.Text
            name={`en.name`}
            maxWidth="max-w-[30rem]"
            options={{ required: '영어 이름을 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset>
        <Fieldset title="업무 요약" mb="mb-10" titleMb="mb-2" required>
          <Form.Text
            name="ko.role"
            maxWidth="max-w-[30rem]"
            placeholder="예: 교원인사, 일반서무 등"
            options={{ required: '한국어 업무 요약을 입력해주세요.' }}
            isHidden={language === 'en'}
          />
          <Form.Text
            name="en.role"
            maxWidth="max-w-[30rem]"
            placeholder="예: 교원인사, 일반서무 등"
            options={{ required: '영어 업무 요약을 입력해주세요.' }}
            isHidden={language === 'ko'}
          />
        </Fieldset>
        <Fieldset title="사진" mb="mb-12" titleMb="mb-2">
          <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
            3:4 비율의 증명사진이 가장 적합합니다.
          </label>
          <Form.Image name={`${language}.image`} />
        </Fieldset>

        <Form.Section title="연락처 정보" titleMb="mb-3" mb="mb-12">
          <Fieldset title="위치" mb="mb-5" titleMb="mb-2" required>
            <Form.Text
              name="ko.office"
              maxWidth="max-w-[20rem]"
              placeholder="예: 301동 316호"
              options={{ required: '한국어 위치를 입력해주세요.' }}
              isHidden={language === 'en'}
            />
            <Form.Text
              name="en.office"
              maxWidth="max-w-[20rem]"
              placeholder="예: 301동 316호"
              options={{ required: '영어 위치를 입력해주세요.' }}
              isHidden={language === 'ko'}
            />
          </Fieldset>
          <Fieldset title="전화번호" mb="mb-5" titleMb="mb-2" required>
            <Form.Text
              name="ko.phone"
              maxWidth="max-w-[20rem]"
              placeholder="예: (02) 880-7302"
              options={{ required: '한국어 전화번호를 입력해주세요.' }}
              isHidden={language === 'en'}
            />
            <Form.Text
              name="en.phone"
              maxWidth="max-w-[20rem]"
              placeholder="예: (02) 880-7302"
              options={{ required: '영어 전화번호를 입력해주세요.' }}
              isHidden={language === 'ko'}
            />
          </Fieldset>
          <Fieldset title="이메일" titleMb="mb-2" required>
            <Form.Text
              name="ko.email"
              maxWidth="max-w-[25rem]"
              options={{ required: '한국어 이메일을 입력해주세요.' }}
              isHidden={language === 'en'}
            />
            <Form.Text
              name="en.email"
              maxWidth="max-w-[25rem]"
              options={{ required: '영어 이메일을 입력해주세요.' }}
              isHidden={language === 'ko'}
            />
          </Fieldset>
        </Form.Section>

        <Fieldset title="주요 업무" mb="mb-2.5" titleMb="mb-2" required>
          {language === 'ko' ? (
            <Form.TextList name="ko.tasks" placeholder="예: 학부생 수료, 졸업사정 및 논문 관리" />
          ) : (
            <Form.TextList name="en.tasks" placeholder="예: 학부생 수료, 졸업사정 및 논문 관리" />
          )}
        </Fieldset>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}
