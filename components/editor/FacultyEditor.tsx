'use client';

import { useState } from 'react';

import { Language, LANGUAGE, WithLanguage } from '@/types/language';
import { getKeys } from '@/types/object';
import { Faculty, FACULTY_STATUS, FacultyStatus } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';

import useEditorContent from '@/utils/hooks/useEditorContent';

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
import Section from './common/Section';
import { PostEditorImage } from './PostEditorTypes';
import Dropdown from '../common/form/Dropdown';

export interface FacultyEditorContent {
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
}

interface FacultyEditorProps {
  actions:
    | EditAction<WithLanguage<FacultyEditorContent>>
    | CreateAction<WithLanguage<FacultyEditorContent>>;
  initialContent?: WithLanguage<Faculty>;
  initialFacultyStatus?: FacultyStatus;
  initialLangauge: Language;
  labs: WithLanguage<SimpleResearchLab[]>;
}

export default function FacultyEditor({
  actions,
  initialContent,
  initialFacultyStatus = 'ACTIVE',
  initialLangauge,
  labs,
}: FacultyEditorProps) {
  const [language, setLanguage] = useState<Language>(initialLangauge);
  const { content, setContentByKey } = useEditorContent(
    getInitialContent(initialFacultyStatus, initialContent),
    language,
  );
  const currLangContent = content[language];
  const isInactiveFaculty = currLangContent.status === 'INACTIVE';

  const getContent = (): WithLanguage<FacultyEditorContent> => {
    const filterEmptyValue = (array: string[]) => array.filter((x) => x !== '');

    return {
      ko: {
        ...content.ko,
        careers: filterEmptyValue(content.ko.careers),
        educations: filterEmptyValue(content.ko.educations),
        researchAreas: filterEmptyValue(content.ko.researchAreas),
      },
      en: {
        ...content.en,
        careers: filterEmptyValue(content.en.careers),
        educations: filterEmptyValue(content.en.educations),
        researchAreas: filterEmptyValue(content.en.researchAreas),
      },
    };
  };

  return (
    <form className="flex flex-col">
      <FacultyStatusFieldset
        selected={currLangContent.status}
        onChange={setContentByKey('status', true)}
      />

      <LangauageFieldset selected={language} onChange={setLanguage} />

      <NameFieldset value={currLangContent.name} onChange={setContentByKey('name')} />
      <AcademicRankFieldset
        value={currLangContent.academicRank}
        onChange={setContentByKey('academicRank')}
      />

      <Section title="재직 기간" mb="mb-10" titleMb="mb-2" disabled={!isInactiveFaculty}>
        <div className="flex w-[400px]">
          <DateFieldset
            title="시작 날짜"
            value={currLangContent.startDate}
            onChange={setContentByKey('startDate', true)}
            disabled={!isInactiveFaculty}
          />
          <DateFieldset
            title="종료 날짜"
            value={currLangContent.endDate}
            onChange={setContentByKey('endDate', true)}
            disabled={!isInactiveFaculty}
          />
        </div>
      </Section>

      <ImageFieldset file={currLangContent.image} setFile={setContentByKey('image', true)} />

      <Section title="연구 정보" mb="mb-12" titleMb="mb-3">
        <LabFieldset
          labs={labs[language]}
          selected={currLangContent.labId}
          onChange={setContentByKey('labId')}
          disabled={isInactiveFaculty}
        />
        <EducationsFieldset
          educations={currLangContent.educations}
          setEducations={setContentByKey('educations')}
        />
        <ResearchAreasFieldset
          researchAreas={currLangContent.researchAreas}
          setResearchAreas={setContentByKey('researchAreas')}
        />
        <CareersFieldset
          careers={currLangContent.careers}
          setCareers={setContentByKey('careers')}
        />
      </Section>

      <Section title="연락처 정보" titleMb="mb-3">
        <OfficeFieldset value={currLangContent.office} onChange={setContentByKey('office')} />
        <div className="flex w-[42rem]">
          <PhoneFieldset value={currLangContent.phone} onChange={setContentByKey('phone', true)} />
          <FaxFieldset value={currLangContent.fax} onChange={setContentByKey('fax', true)} />
        </div>
        <EmailFieldset value={currLangContent.email} onChange={setContentByKey('email', true)} />
        <WebsiteFieldset
          value={currLangContent.website}
          onChange={setContentByKey('website', true)}
        />
      </Section>

      <div className="mt-5 flex gap-3 self-end">
        {actions.type === 'CREATE' && (
          <CreateActionButtons {...actions} getContent={getContent} completeButtonText="추가하기" />
        )}
        {actions.type === 'EDIT' && <EditActionButtons {...actions} getContent={getContent} />}
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
        {getKeys(FACULTY_STATUS).map((status) => (
          <BasicRadioInput
            key={status}
            value={status}
            label={FACULTY_STATUS[status]}
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
  selected: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div className="mb-9 flex gap-3">
      {getKeys(LANGUAGE).map((language) => (
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
            {LANGUAGE[language]}
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
  labs,
  selected,
  onChange,
  disabled,
}: {
  labs: SimpleResearchLab[];
  selected: number | null;
  onChange: (id: number | null) => void;
  disabled: boolean;
}) {
  const getSelectedIndex = () => {
    const idx = labs.findIndex((e) => e.id === selected);
    return idx === -1 ? 0 : idx + 1;
  };

  return (
    <Fieldset title="연구실" mb="mb-5" titleMb="mb-2" className={disabled ? 'opacity-30' : ''}>
      <Dropdown
        contents={['선택 안 함', ...labs.map((lab) => lab.name)]}
        selectedIndex={getSelectedIndex()}
        onClick={(i) => {
          onChange(i === 0 ? null : labs[i - 1].id);
        }}
      />
    </Fieldset>
  );
}

function EducationsFieldset({
  educations,
  setEducations,
}: {
  educations: string[];
  setEducations: (newEducations: string[]) => void;
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
  researchAreas: string[];
  setResearchAreas: (newAreas: string[]) => void;
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
  careers: string[];
  setCareers: (newCareers: string[]) => void;
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

const INIT_FACULTY_EDITOR_CONTENT: FacultyEditorContent = {
  status: 'ACTIVE',
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
  labId: null,
  startDate: new Date(),
  endDate: new Date(),
};

const getInitialContent = (
  initStatus: FacultyStatus,
  initContent?: WithLanguage<Faculty>,
): WithLanguage<FacultyEditorContent> => {
  return {
    ko: getDefaultContentDetail(initStatus, initContent?.ko),
    en: getDefaultContentDetail(initStatus, initContent?.en),
  };
};

export const getDefaultContentDetail = (
  initStatus: FacultyStatus,
  content?: Faculty,
): FacultyEditorContent => {
  const startDate = content?.startDate ? new Date(content.startDate) : new Date();
  const endDate = content?.endDate ? new Date(content.endDate) : new Date();

  return content
    ? {
        ...content,
        image: content?.imageURL ? { type: 'UPLOADED_IMAGE', url: content.imageURL } : null,
        startDate,
        endDate,
      }
    : { ...INIT_FACULTY_EDITOR_CONTENT, status: initStatus, startDate, endDate };
};
