'use client';

import { ReactNode, useState } from 'react';

import { Locale, LOCALE, localeToKo } from '@/types/locale';
import { FACULTY_STATUS, FacultyStatus, facultyStatusToKo } from '@/types/people';

import {
  CreateAction,
  CreateActionButtons,
  EditAction,
  EditActionButtons,
} from './common/ActionButtons';
import BasicRadioInput from './common/BasicRadioInput';
import BasicTextInput from './common/BasicTextInput';
import DateSelector from './common/DateSelector';
import DynamicTextInputList from './common/DynamicTextInputList';
import Fieldset from './common/Fieldset';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import { PostEditorImage } from './PostEditorTypes';

export interface FacultyEditorContent {
  name: string;
  academicRank: string;
  image: PostEditorImage | null;
  phone: string;
  email: string;
  office: string;
  fax: string;
  website: string;
  educations: { id: number; value: string }[];
  researchAreas: { id: number; value: string }[];
  careers: { id: number; value: string }[];
  labId: number;
  labName: string;
  startDate: Date;
  endDate: Date;
}

interface FacultyEditorProps {
  actions: EditAction<FacultyEditorContent> | CreateAction<FacultyEditorContent>;
  initialContent?: { ko: FacultyEditorContent; en: FacultyEditorContent };
  initialFacultyStatus: FacultyStatus;
  initialLangauge: Locale;
}

export default function FacultyEditor({
  actions,
  initialContent,
  initialFacultyStatus,
  initialLangauge,
}: FacultyEditorProps) {
  const [language, setLanguage] = useState<Locale>(initialLangauge);
  const [facultyStatus, setFacultyStatus] = useState<FacultyStatus>(initialFacultyStatus);
  const isInactiveFaculty = facultyStatus === 'INACTIVE';
  const [contentAll, setContentAll] = useState<{
    ko: FacultyEditorContent;
    en: FacultyEditorContent;
  }>({
    ko: { ...getFacultyEditorDefaultValue() },
    en: { ...getFacultyEditorDefaultValue() },
    ...initialContent,
  });
  const content = contentAll[language];

  const setContentByKey =
    <T extends keyof FacultyEditorContent>(key: T) =>
    (value: FacultyEditorContent[T]) => {
      setContentAll((content) => ({
        ...content,
        [language]: { ...content[language], [key]: value },
      }));
    };

  return (
    <form className="flex flex-col">
      <FacultyStatusFieldset selected={facultyStatus} onChange={setFacultyStatus} />

      <LangauageFieldset selected={language} onChange={setLanguage} />

      <NameFieldset value={content.name} onChange={setContentByKey('name')} />
      <AcademicRankFieldset
        value={content.academicRank}
        onChange={setContentByKey('academicRank')}
      />

      <Section title="재직 기간" mb="mb-10" titleMb="mb-2" disabled={!isInactiveFaculty}>
        <div className="flex w-[400px]">
          <DateFieldset
            title="시작 날짜"
            value={content.startDate}
            onChange={setContentByKey('startDate')}
            disabled={!isInactiveFaculty}
          />
          <DateFieldset
            title="종료 날짜"
            value={content.endDate}
            onChange={setContentByKey('endDate')}
            disabled={!isInactiveFaculty}
          />
        </div>
      </Section>

      <ImageFieldset file={content.image} setFile={setContentByKey('image')} />

      <Section title="연구 정보" mb="mb-12" titleMb="mb-3">
        <LabFieldset value={content.labName} onChange={() => {}} disabled={isInactiveFaculty} />
        <EducationsFieldset
          educations={content.educations}
          setEducations={setContentByKey('educations')}
        />
        <ResearchAreasFieldset
          researchAreas={content.researchAreas}
          setResearchAreas={setContentByKey('researchAreas')}
        />
        <CareersFieldset careers={content.careers} setCareers={setContentByKey('careers')} />
      </Section>

      <Section title="연락처 정보" titleMb="mb-3">
        <OfficeFieldset value={content.office} onChange={setContentByKey('office')} />
        <div className="flex w-[42rem]">
          <PhoneFieldset value={content.phone} onChange={setContentByKey('phone')} />
          <FaxFieldset value={content.fax} onChange={setContentByKey('fax')} />
        </div>
        <EmailFieldset value={content.email} onChange={setContentByKey('email')} />
        <WebsiteFieldset value={content.website} onChange={setContentByKey('website')} />
      </Section>

      <div className="mt-5 flex gap-3 self-end">
        {actions.type === 'CREATE' && (
          <CreateActionButtons
            {...actions}
            getContent={() => content}
            completeButtonText="추가하기"
          />
        )}
        {actions.type === 'EDIT' && <EditActionButtons {...actions} getContent={() => content} />}
      </div>
    </form>
  );
}

function FacultyStatusFieldset({
  selected,
  onChange,
}: {
  selected: FacultyStatus;
  onChange: (status: FacultyStatus) => void;
}) {
  return (
    <Fieldset title="구분" mb="mb-11" titleMb="mb-2" required>
      <div className="flex gap-3">
        {FACULTY_STATUS.map((status) => (
          <BasicRadioInput
            key={status}
            value={status}
            label={facultyStatusToKo(status)}
            name="status"
            checked={selected === status}
            onChange={onChange}
          />
        ))}
      </div>
    </Fieldset>
  );
}

function LangauageFieldset({
  selected,
  onChange,
}: {
  selected: Locale;
  onChange: (language: Locale) => void;
}) {
  return (
    <div className="mb-9 flex gap-3">
      {LOCALE.map((language) => (
        <span key={language}>
          <input
            id={language}
            type="radio"
            name="language"
            value={language}
            checked={selected === language}
            className="peer appearance-none"
            onChange={() => onChange(language)}
          />
          <label
            htmlFor={language}
            className="cursor-pointer pb-1 font-semibold text-neutral-300 peer-checked:border-b-2 peer-checked:border-b-neutral-800 peer-checked:text-neutral-800"
          >
            {localeToKo(language)}
          </label>
        </span>
      ))}
    </div>
  );
}

function NameFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="이름" mb="mb-5" titleMb="mb-2" required>
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[30rem]" />
    </Fieldset>
  );
}

function AcademicRankFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {
  return (
    <Fieldset title="직함" mb="mb-10" titleMb="mb-2" required>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[30rem]"
        placeholder="예: 교수, 조교수, 명예교수 등"
      />
    </Fieldset>
  );
}

function DateFieldset({
  title,
  value,
  onChange,
  disabled,
}: {
  title: string;
  value: Date;
  onChange: (date: Date) => void;
  disabled: boolean;
}) {
  return (
    <Fieldset title={title} titleMb="mb-2">
      <DateSelector date={value} setDate={onChange} hideTime enablePast disabled={disabled} />
    </Fieldset>
  );
}

function ImageFieldset({ file, setFile }: ImagePickerProps) {
  return (
    <Fieldset title="사진" mb="mb-12" titleMb="mb-2">
      <label className="mb-3 whitespace-pre-wrap text-sm font-normal tracking-wide text-neutral-500">
        3:4 비율의 증명사진이 가장 적합합니다.
      </label>
      <ImagePicker file={file} setFile={setFile} />
    </Fieldset>
  );
}

function LabFieldset({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (text: string) => void;
  disabled: boolean;
}) {
  return (
    <Fieldset title="연구실" mb="mb-5" titleMb="mb-2" className={disabled ? 'opacity-30' : ''}>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[25rem]"
        disabled={disabled}
      />
    </Fieldset>
  );
}

function EducationsFieldset({
  educations,
  setEducations,
}: {
  educations: { id: number; value: string }[];
  setEducations: (newEducations: { id: number; value: string }[]) => void;
}) {
  return (
    <Fieldset title="학력" mb="mb-2.5" titleMb="mb-2">
      <DynamicTextInputList
        list={educations}
        setList={setEducations}
        placeholder="예: 서울대학교 컴퓨터공학 학사 (2003)"
      />
    </Fieldset>
  );
}

function ResearchAreasFieldset({
  researchAreas,
  setResearchAreas,
}: {
  researchAreas: { id: number; value: string }[];
  setResearchAreas: (newAreas: { id: number; value: string }[]) => void;
}) {
  return (
    <Fieldset title="연구 분야" mb="mb-2.5" titleMb="mb-2">
      <DynamicTextInputList
        list={researchAreas}
        setList={setResearchAreas}
        placeholder="예: 스마트 디바이스 최적화"
      />
    </Fieldset>
  );
}

function CareersFieldset({
  careers,
  setCareers,
}: {
  careers: { id: number; value: string }[];
  setCareers: (newCareers: { id: number; value: string }[]) => void;
}) {
  return (
    <Fieldset title="경력" mb="mb-2.5" titleMb="mb-2">
      <DynamicTextInputList
        list={careers}
        setList={setCareers}
        placeholder="예: 2015.09. - 현재: 전임교수, 서울대학교 컴퓨터공학부"
      />
    </Fieldset>
  );
}

function OfficeFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="위치" mb="mb-5" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[20rem]"
        placeholder="예: 301동 504호"
      />
    </Fieldset>
  );
}

function PhoneFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="전화번호" mb="mb-5" titleMb="mb-2">
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[20rem]"
        placeholder="예: (02) 880-7302"
      />
    </Fieldset>
  );
}

function FaxFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="팩스" mb="mb-5" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[20rem]" />
    </Fieldset>
  );
}

function EmailFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="이메일" mb="mb-5" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[25rem]" />
    </Fieldset>
  );
}

function WebsiteFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="웹사이트 URL" mb="mb-5" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[25rem]" />
    </Fieldset>
  );
}

interface SectionProps {
  title: string;
  mb?: string;
  titleMb: string;
  disabled?: boolean;
  children: ReactNode;
}

function Section({ title, mb, titleMb, disabled, children }: SectionProps) {
  return (
    <div className={`${mb} ${disabled && 'opacity-30'}`}>
      <div className={`mb-3 text-md font-semibold tracking-wide ${titleMb}`}>{title}</div>
      {children}
    </div>
  );
}

export const getFacultyEditorDefaultValue = (): FacultyEditorContent => {
  return {
    name: '',
    academicRank: '',
    image: null,
    phone: '',
    email: '',
    office: '',
    fax: '',
    website: '',
    educations: [],
    researchAreas: [],
    careers: [],
    labId: 0,
    labName: '',
    startDate: new Date(),
    endDate: new Date(),
  };
};
