'use client';

import { ReactNode, useState } from 'react';

import {
  CreateAction,
  CreateActionButtons,
  EditAction,
  EditActionButtons,
} from './common/ActionButtons';
import BasicTextInput from './common/BasicTextInput';
import DateSelector from './common/DateSelector';
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
  educations: string[];
  researchAreas: string[];
  careers: string[];
  labId: number;
  labName: string;
  startDate: Date;
  endDate: Date;
}

type FacultyStatus = 'ACTIVE' | 'INACTIVE' | 'VISITING';

interface FacultyEditorProps {
  actions: EditAction<FacultyEditorContent> | CreateAction<FacultyEditorContent>;
  initialContent?: FacultyEditorContent;
  initialFacultyStatus: FacultyStatus;
}

export default function FacultyEditor({
  actions,
  initialContent,
  initialFacultyStatus,
}: FacultyEditorProps) {
  const [content, setContent] = useState<FacultyEditorContent>({
    ...getFacultyEditorDefaultValue(),
    ...initialContent,
  });
  const [facultyStatus, setFacultyStatus] = useState<FacultyStatus>(initialFacultyStatus);

  const setContentByKey =
    <T extends keyof FacultyEditorContent>(key: T) =>
    (value: FacultyEditorContent[T]) => {
      setContent((content) => ({ ...content, [key]: value }));
    };

  return (
    <form className="flex flex-col">
      <FacultyStatusFieldset
        selected={facultyStatus}
        onChange={(text: string) => setFacultyStatus(text as FacultyStatus)}
      />

      <NameFieldset value={content.name} onChange={setContentByKey('name')} />
      <AcademicRankFieldset
        value={content.academicRank}
        onChange={setContentByKey('academicRank')}
      />

      <Section title="재직 기간" mb="mb-12" titleMb="mb-2">
        <div className={`flex w-[400px] ${facultyStatus !== 'INACTIVE' && 'opacity-30'}`}>
          <DateFieldset
            title="시작 날짜"
            value={content.startDate}
            onChange={setContentByKey('startDate')}
          />
          <DateFieldset
            title="종료 날짜"
            value={content.endDate}
            onChange={setContentByKey('endDate')}
          />
        </div>
      </Section>

      <ImageFieldset file={content.image} setFile={setContentByKey('image')} />

      <Section title="연구 정보" mb="mb-12" titleMb="mb-3">
        <LabFieldset
          value={content.labName}
          onChange={() => {}}
          disabled={facultyStatus === 'INACTIVE'}
        />
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

const facultyStatusToKo = (value: FacultyStatus) => {
  if (value === 'ACTIVE') return '교수';
  else if (value === 'VISITING') return '객원 교수';
  else return '역대 교수';
};

function StatusRadio({
  value,
  checked,
  onChange,
}: {
  value: FacultyStatus;
  checked: boolean;
  onChange: (text: string) => void;
}) {
  return (
    <label className="mb- flex cursor-pointer gap-1 text-md font-medium tracking-wide">
      <input
        type="radio"
        name="status"
        value={value}
        checked={checked}
        className="h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border-2 border-neutral-300 checked:border-[3px] checked:border-white checked:bg-main-orange checked:shadow-[0_0_0_1.3px_#ff6914] hover:border-main-orange checked:hover:border-white"
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{facultyStatusToKo(value)}</span>
    </label>
  );
}

function FacultyStatusFieldset({
  selected,
  onChange,
}: {
  selected: FacultyStatus;
  onChange: (text: string) => void;
}) {
  return (
    <Fieldset title="구분" mb="mb-11" titleMb="mb-2" required>
      <div className="flex gap-3">
        <StatusRadio value="ACTIVE" checked={selected === 'ACTIVE'} onChange={onChange} />
        <StatusRadio value="VISITING" checked={selected === 'VISITING'} onChange={onChange} />
        <StatusRadio value="INACTIVE" checked={selected === 'INACTIVE'} onChange={onChange} />
      </div>
    </Fieldset>
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
}: {
  title: string;
  value: Date;
  onChange: (date: Date) => void;
}) {
  return (
    <Fieldset title={title} titleMb="mb-2">
      <DateSelector date={value} setDate={onChange} hideTime enablePast />
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
        maxWidth="max-w-[20rem]"
        disabled={disabled}
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
