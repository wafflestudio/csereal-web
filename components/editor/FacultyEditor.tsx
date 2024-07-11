'use client';

import { ReactNode, useState } from 'react';

import {
  CreateAction,
  CreateActionButtons,
  EditAction,
  EditActionButtons,
} from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import Fieldset from './common/Fieldset';

export interface FacultyEditorContent {
  name: string;
  academicRank: string;
  imageURL: string;
  phone: string;
  email: string;
  office: string;
  fax: string;
  website: string;
  educations: string[];
  researchAreas: string[];
  careers: string[];
  labId: number;
  labName: string;
  startDate: string;
  endDate: string;
}

interface FacultyEditorProps {
  actions: EditAction<FacultyEditorContent> | CreateAction<FacultyEditorContent>;
  initialContent?: FacultyEditorContent;
}

export default function FacultyEditor({ actions, initialContent }: FacultyEditorProps) {
  const [content, setContent] = useState<FacultyEditorContent>({
    ...getFacultyEditorDefaultValue(),
    ...initialContent,
  });

  const setContentByKey =
    <T extends keyof FacultyEditorContent>(key: T) =>
    (value: FacultyEditorContent[T]) => {
      setContent((content) => ({ ...content, [key]: value }));
    };

  return (
    <form className="flex flex-col">
      <NameFieldset value={content.name} onChange={setContentByKey('name')} />
      <AcademicRankFieldset
        value={content.academicRank}
        onChange={setContentByKey('academicRank')}
      />

      <Section title="연구 정보" mb="mb-12" titleMb="mb-3">
        <LabFieldset value={content.labName} onChange={() => {}} />
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
          <CreateActionButtons {...actions} getContent={() => content} />
        )}
        {actions.type === 'EDIT' && <EditActionButtons {...actions} getContent={() => content} />}
      </div>
    </form>
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
    <Fieldset title="직함" mb="mb-5" titleMb="mb-2" required>
      <BasicTextInput
        value={value}
        onChange={onChange}
        maxWidth="max-w-[30rem]"
        placeholder="예: 교수, 조교수, 명예교수 등"
      />
    </Fieldset>
  );
}

function LabFieldset({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <Fieldset title="연구실" mb="mb-5" titleMb="mb-2">
      <BasicTextInput value={value} onChange={onChange} maxWidth="max-w-[20rem]" />
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
  titleMb?: string;
  children: ReactNode;
}

function Section({ title, mb, titleMb, children }: SectionProps) {
  return (
    <div className={mb}>
      <div className={`mb-3 text-md font-semibold tracking-wide ${titleMb}`}>{title}</div>
      {children}
    </div>
  );
}

export const getFacultyEditorDefaultValue = (): FacultyEditorContent => {
  return {
    name: '',
    academicRank: '',
    imageURL: '',
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
    startDate: '',
    endDate: '',
  };
};
