'use client';

import { useState } from 'react';
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';

import Fieldset from '@/components/form/Fieldset';
import LanguagePicker from '@/components/form/LanguagePicker';
import { PostEditorImage } from '@/components/form/PostEditorTypes';
import Form from '@/components/form/Form';
import { Language, WithLanguage } from '@/types/language';
import { getKeys } from '@/types/object';
import { FACULTY_STATUS, FacultyStatus } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';
import useLanguage from '@/utils/hooks/useLanguage';

export type FacultyFormData = WithLanguage<{
  status: FacultyStatus;
  name: string;
  academicRank: string;
  image: PostEditorImage | null;
  phone: string;
  email: string;
  office: string;
  fax: string;
  website: string;
  educations: string[];
  researchAreas: string[];
  careers: string[];
  labId: number | null;
  startDate: Date;
  endDate: Date;
}>;

interface Props {
  initialStatus?: FacultyStatus;
  defaultValues?: FacultyFormData;
  labs: WithLanguage<SimpleResearchLab[]>;
  onCancel: () => void;
  onSubmit: (formData: FacultyFormData) => Promise<void>;
  onDelete?: () => Promise<void>;
}

const defaultValue = (status: FacultyStatus) => ({
  status,
  name: '',
  academicRank: '',
  startDate: new Date(),
  endDate: new Date(),
  image: null,
  labId: null,
  educations: [],
  researchAreas: [],
  careers: [],
  office: '',
  phone: '',
  fax: '',
  email: '',
  website: '',
});

export default function FacultyEditor({
  initialStatus = 'ACTIVE',
  defaultValues,
  labs,
  onCancel,
  onSubmit,
  onDelete,
}: Props) {
  const { isEnglish } = useLanguage();
  const [language, setLanguage] = useState<Language>(isEnglish ? 'en' : 'ko');
  const formMethods = useForm<FacultyFormData>({
    defaultValues: defaultValues ?? {
      ko: defaultValue(initialStatus),
      en: defaultValue(initialStatus),
    },
  });
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset title="구분" mb="mb-11" titleMb="mb-2" required>
          <div className="flex gap-3">
            {getKeys(FACULTY_STATUS).map((status) => (
              <Form.Radio
                key={status}
                value={status}
                label={FACULTY_STATUS[status]}
                name={`${language}.status`}
              />
            ))}
          </div>
        </Fieldset>

        <LanguagePicker selected={language} onChange={setLanguage} />
        {language === 'ko' && <Editor language="ko" labs={labs} />}
        {language === 'en' && <Editor language="en" labs={labs} />}

        <Form.Action
          onCancel={onCancel}
          onSubmit={handleSubmit(onSubmit)}
          onDelete={onDelete}
          submitLabel="추가하기"
        />
      </Form>
    </FormProvider>
  );
}

const Editor = ({
  language,
  labs,
}: {
  language: Language;
  labs: WithLanguage<SimpleResearchLab[]>;
}) => {
  return (
    <>
      <Fieldset title="이름" mb="mb-5" titleMb="mb-2" required>
        <Form.Text
          name={`${language}.name`}
          maxWidth="max-w-[30rem]"
          options={{ required: true }}
        />
      </Fieldset>

      <Fieldset title="직함" mb="mb-10" titleMb="mb-2" required>
        <Form.Text
          name={`${language}.academicRank`}
          maxWidth="max-w-[30rem]"
          placeholder="예: 교수, 조교수, 명예교수 등"
          options={{ required: true }}
        />
      </Fieldset>

      <DateSection language={language} />

      <Fieldset title="사진" mb="mb-12" titleMb="mb-2">
        <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
          3:4 비율의 증명사진이 가장 적합합니다.
        </label>
        <Form.Image name={`${language}.image`} />
      </Fieldset>

      <LabFieldset labs={labs[language]} language={language} />

      <Fieldset title="학력" mb="mb-2.5" titleMb="mb-2">
        <Form.TextList
          name={`${language}.educations`}
          placeholder="예: 서울대학교 컴퓨터공학 학사 (2003)"
        />
      </Fieldset>

      <Fieldset title="연구 분야" mb="mb-2.5" titleMb="mb-2">
        <Form.TextList
          name={`${language}.researchAreas`}
          placeholder="예: 스마트 디바이스 최적화"
        />
      </Fieldset>

      <Fieldset title="경력" mb="mb-2.5" titleMb="mb-2">
        <Form.TextList
          name={`${language}.careers`}
          placeholder="예: 2015.09. - 현재: 전임교수, 서울대학교 컴퓨터공학부"
        />
      </Fieldset>

      <Form.Section title="연락처 정보" titleMb="mb-3">
        <Fieldset title="위치" mb="mb-5" titleMb="mb-2">
          <Form.Text
            name={`${language}.office`}
            maxWidth="max-w-[20rem]"
            placeholder="예: 301동 504호"
          />
        </Fieldset>
        <div className="flex w-[42rem]">
          <Fieldset title="전화번호" mb="mb-5" titleMb="mb-2">
            <Form.Text
              name={`${language}.phone`}
              maxWidth="max-w-[20rem]"
              placeholder="예: (02) 880-7302"
            />
          </Fieldset>
          <Fieldset title="팩스" mb="mb-5" titleMb="mb-2">
            <Form.Text name={`${language}.fax`} maxWidth="max-w-[20rem]" />
          </Fieldset>
        </div>
        <Fieldset title="이메일" mb="mb-5" titleMb="mb-2">
          <Form.Text name={`${language}.email`} maxWidth="max-w-[25rem]" />
        </Fieldset>
        <Fieldset title="웹사이트 URL" mb="mb-5" titleMb="mb-2">
          <Form.Text name={`${language}.website`} maxWidth="max-w-[25rem]" />
        </Fieldset>
      </Form.Section>
    </>
  );
};

const DateSection = ({ language }: { language: Language }) => {
  const { control } = useFormContext<FacultyFormData>();
  const status = useWatch({ control, name: `${language}.status` });
  const isDisabled = status !== 'INACTIVE';

  return (
    <Form.Section title="재직 기간" mb="mb-10" titleMb="mb-2" disabled={isDisabled}>
      <div className="flex w-[400px]">
        <Fieldset title="시작 날짜" titleMb="mb-2">
          <Form.Date name={`${language}.startDate`} hideTime enablePast disabled={isDisabled} />
        </Fieldset>
        <Fieldset title="종료 날짜" titleMb="mb-2">
          <Form.Date name={`${language}.startDate`} hideTime enablePast disabled={isDisabled} />
        </Fieldset>
      </div>
    </Form.Section>
  );
};

const LabFieldset = ({ labs, language }: { labs: SimpleResearchLab[]; language: Language }) => {
  const { control } = useFormContext<FacultyFormData>();
  const status = useWatch({ control, name: `${language}.status` });
  const isDisabled = status === 'INACTIVE';

  return (
    <Fieldset title="연구실" mb="mb-5" titleMb="mb-2">
      <Form.Dropdown
        name={`${language}.labId`}
        contents={[
          { value: null, label: '선택 안 함' },
          ...labs.map((lab) => ({ value: lab.id, label: lab.name })),
        ]}
        isDisabled={isDisabled}
      />
    </Fieldset>
  );
};
