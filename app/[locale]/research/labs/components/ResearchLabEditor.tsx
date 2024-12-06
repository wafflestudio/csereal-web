'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from '@/i18n/routing';
import { Language, WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/types/people';
import { ResearchGroup } from '@/types/research';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';

import Fieldset from '../../../../../components/editor/common/Fieldset';
import LanguagePicker from '../../../../../components/editor/common/LanguagePicker';
import { PostEditorFile } from '../../../../../components/editor/PostEditorTypes';
import Form from '../../../../../components/editor/rhf/Form';
import HTMLEditor from '../../../../../components/editor/SunEditor/HTMLEditor';

export type ResearchLabFormData = WithLanguage<{
  name: string;
  description: string;
  groupId: number | null;
  professorId: number | null;
  location: string;
}> & {
  acronym: string;
  tel: string;
  websiteURL: string;
  youtube: string;
  pdf: PostEditorFile[];
};

interface ResearchLabEditorProps {
  onSubmit: (formData: ResearchLabFormData) => void;
  professors: WithLanguage<SimpleFaculty[]>;
  groups: WithLanguage<ResearchGroup[]>;
  defaultValues?: ResearchLabFormData;
}

const labsPath = getPath(researchLabs);

const defaultLabValue: ResearchLabFormData['ko'] = {
  name: '',
  description: '',
  groupId: null,
  professorId: null,
  location: '',
};

// TODO: 영어 register 처리
export default function ResearchLabEditor({
  onSubmit,
  professors,
  groups,
  defaultValues,
}: ResearchLabEditorProps) {
  const formMethods = useForm<ResearchLabFormData>({
    defaultValues: defaultValues ?? {
      ko: defaultLabValue,
      en: defaultLabValue,
      tel: '',
      acronym: '',
      youtube: '',
      websiteURL: '',
      pdf: [],
    },
  });
  const { handleSubmit } = formMethods;
  const [language, setLanguage] = useState<Language>('ko');
  const router = useRouter();

  const onCancel = () => router.push(labsPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <LanguagePicker onChange={setLanguage} selected={language} />
        {language === 'ko' && <Editor language="ko" professors={professors} groups={groups} />}
        {language === 'en' && <Editor language="en" professors={professors} groups={groups} />}
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

const Editor = ({
  language,
  professors,
  groups,
}: {
  language: Language;
  professors: WithLanguage<SimpleFaculty[]>;
  groups: WithLanguage<ResearchGroup[]>;
}) => {
  return (
    <>
      <Fieldset title="연구실명" mb="mb-6" titleMb="mb-2" required>
        <Form.Text
          name={`${language}.name`}
          maxWidth="max-w-[30rem]"
          options={{ required: true }}
        />
      </Fieldset>
      <div className="flex w-[30rem] gap-6">
        {/* TODO: 지도교수 복수 선택 가능하도록 */}
        <Fieldset title="지도교수" mb="mb-11" titleMb="mb-2">
          <Form.Dropdown
            name={`${language}.professorId`}
            contents={[
              { label: '선택 안 함', value: null },
              ...professors[language].map((prof) => ({ label: prof.name, value: prof.id })),
            ]}
          />
        </Fieldset>
        <Fieldset title="연구실 약자" mb="mb-11" titleMb="mb-2">
          <Form.Text name="acronym" maxWidth="w-[17rem]" />
        </Fieldset>
      </div>
      <div className="flex w-[45rem] gap-6">
        <Fieldset title="전화" mb="mb-6" titleMb="mb-2">
          <Form.Text name="tel" maxWidth="w-[21.75rem]" placeholder="예: (02) 880-7302" />
        </Fieldset>
        <Fieldset title="웹사이트 주소" mb="mb-6" titleMb="mb-2">
          <Form.Text name="webtie" maxWidth="w-[21.75rem]" placeholder="예: (02) 880-7302" />
        </Fieldset>
      </div>

      <Fieldset title="연구실 위치" mb="mb-11" titleMb="mb-2">
        <Form.Text
          name={`${language}.location`}
          maxWidth="w-[45rem]"
          placeholder="복수일 경우 “ / ”로 구분해주세요. 예: 301동 515호 / 518호 / 551-1호"
        />
      </Fieldset>

      <Fieldset title="연구·교육 스트림" mb="mb-11" titleMb="mb-2" required>
        <Form.Dropdown
          name={`${language}.groupId`}
          contents={[
            { label: '선택 안 함', value: null },
            ...groups[language].map((lab) => ({ label: `${lab.name} 스트림`, value: lab.id })),
          ]}
          rules={{ required: true }}
        />
      </Fieldset>

      <Fieldset title="소개 자료" mb="mb-8" titleMb="mb-2">
        <div className="mb-2.5 flex w-[45rem] items-center">
          <span className="w-[3.5rem] text-sm text-neutral-400">| 문서</span>
          <Form.File name="pdf" multiple={false} />
        </div>
        <div className="flex w-[45rem] items-center">
          <span className="w-[3.5rem] text-sm text-neutral-400">| 유튜브</span>
          <Form.Text
            name="youtube"
            maxWidth="w-[41.5rem]"
            placeholder="예: https://www.youtube.com/watch?v=bCLWYhurBuo"
          />
        </div>
      </Fieldset>

      <Fieldset title="연구실 설명 및 이미지" mb="mb-10" titleMb="mb-2" required>
        <HTMLEditor name={`${language}.description`} options={{ required: true }} />
      </Fieldset>
    </>
  );
};
