'use client';

import { useState } from 'react';

import { LANGUAGE, Language, WithLanguage } from '@/types/language';
import { getKeys } from '@/types/object';
import { Staff } from '@/types/people';
import useEditorContent from '@/utils/hooks/useEditorContent';

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
  name: string;
  role: string;
  office: string;
  phone: string;
  email: string;
  tasks: string[];
  image: PostEditorImage;
}

interface StaffEditorProps {
  actions:
    | EditAction<WithLanguage<StaffEditorContent>>
    | CreateAction<WithLanguage<StaffEditorContent>>;
  initialContent?: WithLanguage<Staff>;
  initialLangauge: Language;
}

export default function StaffEditor({
  actions,
  initialContent,
  initialLangauge,
}: StaffEditorProps) {
  const [language, setLanguage] = useState<Language>(initialLangauge);
  const { content, setContentByKey } = useEditorContent(
    getInitialContent(initialContent),
    language,
  );
  const currLangContent = content[language];

  const getContent = (): WithLanguage<StaffEditorContent> => {
    return {
      ko: { ...content.ko, tasks: content.ko.tasks.filter((x) => x !== '') },
      en: { ...content.en, tasks: content.en.tasks.filter((x) => x !== '') },
    };
  };

  return (
    <form className="flex flex-col">
      <LangauageFieldset selected={language} onChange={setLanguage} />

      <NameFieldset value={currLangContent.name} onChange={setContentByKey('name')} />
      <RoleFieldset value={currLangContent.role} onChange={setContentByKey('role')} />
      <ImageFieldset file={currLangContent.image} setFile={setContentByKey('image', true)} />

      <Section title="연락처 정보" titleMb="mb-3" mb="mb-12">
        <OfficeFieldset value={currLangContent.office} onChange={setContentByKey('office')} />
        <PhoneFieldset value={currLangContent.phone} onChange={setContentByKey('phone', true)} />
        <EmailFieldset value={currLangContent.email} onChange={setContentByKey('email', true)} />
      </Section>

      <TasksFieldset tasks={currLangContent.tasks} setTasks={setContentByKey('tasks')} />

      <div className="mt-5 flex gap-3 self-end">
        {actions.type === 'CREATE' && (
          <CreateActionButtons {...actions} getContent={getContent} completeButtonText="추가하기" />
        )}
        {actions.type === 'EDIT' && <EditActionButtons {...actions} getContent={getContent} />}
      </div>
    </form>
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
    <Fieldset title="이메일" titleMb="mb-2" required>
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[25rem]" />
    </Fieldset>
  );
}

function TasksFieldset({
  tasks,
  setTasks,
}: {
  tasks: string[];
  setTasks: (newTasks: string[]) => void;
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

const INIT_STAFF_EDITOR_CONTENT: StaffEditorContent = {
  name: '',
  email: '',
  office: '',
  phone: '',
  role: '',
  tasks: [],
  image: null,
};

const getDefaultContentDetail = (content?: Staff): StaffEditorContent => {
  if (content) {
    const { imageURL, ...editorContent } = content;

    return {
      ...editorContent, // imageURL 속성 제외한 나머지
      image: imageURL ? { type: 'UPLOADED_IMAGE', url: imageURL } : null,
    };
  }

  return INIT_STAFF_EDITOR_CONTENT;
};

const getInitialContent = (initContent?: WithLanguage<Staff>): WithLanguage<StaffEditorContent> => {
  return {
    ko: getDefaultContentDetail(initContent?.ko),
    en: getDefaultContentDetail(initContent?.en),
  };
};
