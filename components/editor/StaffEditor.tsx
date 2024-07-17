'use client';

import { useState } from 'react';

import { Locale, LOCALE, localeToKo } from '@/types/locale';

import {
  CreateAction,
  CreateActionButtons,
  EditAction,
  EditActionButtons,
} from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import DynamicTextInputList from './common/DynamicTextInputList';
import Fieldset from './common/Fieldset';
import ImagePicker, { ImagePickerProps } from './common/ImagePicker';
import Section from './common/Section';
import { PostEditorImage } from './PostEditorTypes';

export interface StaffEditorContent {
  ko: StaffEditorContentDetail;
  en: StaffEditorContentDetail;
}

export interface StaffEditorContentDetail {
  language: string;
  name: string;
  role: string;
  office: string;
  phone: string;
  email: string;
  tasks: { id: number; value: string }[];
  image: PostEditorImage;
}

interface StaffEditorProps {
  actions: EditAction<StaffEditorContent> | CreateAction<StaffEditorContent>;
  initialContent?: StaffEditorContent;
  initialLangauge: Locale;
}

export default function StaffEditor({
  actions,
  initialContent,
  initialLangauge,
}: StaffEditorProps) {
  const [language, setLanguage] = useState<Locale>(initialLangauge);
  const [contentAll, setContentAll] = useState<StaffEditorContent>({
    ...getStaffEditorDefaultValue(),
    ...initialContent,
  });
  const content = contentAll[language];

  const getcontent = (): StaffEditorContent => {
    return contentAll;
  };

  const setContentByKey =
    <T extends keyof StaffEditorContentDetail>(key: T) =>
    (value: StaffEditorContentDetail[T]) => {
      setContentAll((content) => ({
        ...content,
        [language]: { ...content[language], [key]: value },
      }));
    };

  return (
    <form className="flex flex-col">
      <LangauageFieldset selected={language} onChange={setLanguage} />

      <NameFieldset value={content.name} onChange={setContentByKey('name')} />
      <RoleFieldset value={content.role} onChange={setContentByKey('role')} />
      <ImageFieldset file={content.image} setFile={setContentByKey('image')} />

      <Section title="연락처 정보" titleMb="mb-3">
        <OfficeFieldset value={content.office} onChange={setContentByKey('office')} />
        <PhoneFieldset value={content.phone} onChange={setContentByKey('phone')} />
        <EmailFieldset value={content.email} onChange={setContentByKey('email')} />
      </Section>

      <TasksFieldset tasks={content.tasks} setTasks={setContentByKey('tasks')} />

      <div className="mt-5 flex gap-3 self-end">
        {actions.type === 'CREATE' && (
          <CreateActionButtons {...actions} getContent={getcontent} completeButtonText="추가하기" />
        )}
        {actions.type === 'EDIT' && <EditActionButtons {...actions} getContent={getcontent} />}
      </div>
    </form>
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

function RoleFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="업무 요약" mb="mb-10" titleMb="mb-2" required>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[30rem]"
        placeholder="예: 교원인사, 일반서무 등"
      />
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

function OfficeFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="위치" mb="mb-5" titleMb="mb-2" required>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[20rem]"
        placeholder="예: 301동 316호"
      />
    </Fieldset>
  );
}

function PhoneFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="전화번호" mb="mb-5" titleMb="mb-2" required>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[20rem]"
        placeholder="예: (02) 880-7302"
      />
    </Fieldset>
  );
}

function EmailFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="이메일" mb="mb-5" titleMb="mb-2" required>
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[25rem]" />
    </Fieldset>
  );
}

function TasksFieldset({
  tasks,
  setTasks,
}: {
  tasks: { id: number; value: string }[];
  setTasks: (newTasks: { id: number; value: string }[]) => void;
}) {
  return (
    <Fieldset title="주요 업무" mb="mb-2.5" titleMb="mb-2" required>
      <DynamicTextInputList
        list={tasks}
        setList={setTasks}
        placeholder="예: 학부생 수료, 졸업사정 및 논문 관리"
      />
    </Fieldset>
  );
}

export const getStaffEditorDefaultValue = (): StaffEditorContent => {
  const contentDetailDefaultValue: StaffEditorContentDetail = {
    language: 'ko',
    name: '',
    image: null,
    phone: '',
    email: '',
    office: '',
    tasks: [],
    role: '',
  };

  return {
    ko: contentDetailDefaultValue,
    en: { ...contentDetailDefaultValue, language: 'en' },
  };
};
