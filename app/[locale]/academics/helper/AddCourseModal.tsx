import { useState } from 'react';

import Dropdown from '@/components/common/form/Dropdown';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';
import ModalFrame from '@/components/modal/ModalFrame';

import { Classification, CLASSIFICATION, Course, Grade, GRADE } from '@/types/academics';

export default function AddCourseModal({ onClose }: { onClose: () => void }) {
  const [course, setCourse] = useState<Course>({
    name: '',
    description: '',
    classification: '전공필수',
    code: '',
    credit: 3,
    grade: '1학년',
  });

  const setContentByKey =
    <K extends keyof Course>(key: K) =>
    (value: Course[K]) => {
      setCourse((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  return (
    <ModalFrame onClose={onClose}>
      <div className="styled-scrollbar relative flex w-fit min-w-[500px] max-w-[768px] flex-col gap-4 overflow-auto overflow-x-hidden rounded-t-sm border-b border-t-2 border-main-orange bg-neutral-100 p-7">
        <h4 className="text-xl font-bold text-neutral-700">교과목 추가</h4>
        <div>
          <NameFieldset name={course.name} onChange={setContentByKey('name')} />
          <DescriptionFieldset
            description={course.description}
            onChange={setContentByKey('description')}
          />
          <div className="mb-10 flex justify-between">
            <CodeFieldset code={course.code} onChange={setContentByKey('code')} />
            <ClassificationFieldset
              selected={course.classification}
              onChange={setContentByKey('classification')}
            />
            <CreditFieldset selected={course.credit} onChange={setContentByKey('credit')} />
            <GradeField selected={course.grade} onChange={setContentByKey('grade')} />
          </div>
          <NameFieldset name={course.name} onChange={setContentByKey('name')} />
          <DescriptionFieldset
            description={course.description}
            onChange={setContentByKey('description')}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button text="취소" onClick={onClose} />
          <Button text="추가하기" onClick={() => {}} />
        </div>
      </div>
    </ModalFrame>
  );
}

function Button({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="rounded-sm border border-neutral-300 bg-white px-2.5 py-1.5 text-md font-medium text-neutral-700 hover:bg-neutral-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function NameFieldset({ name, onChange }: { name: string; onChange: (value: string) => void }) {
  return (
    <Fieldset title="교과목명" titleMb="mb-1" mb="mb-5" required>
      <BasicTextInput value={name} onChange={onChange} maxWidth="max-w-[480px]" />
    </Fieldset>
  );
}

function DescriptionFieldset({
  description,
  onChange,
}: {
  description: string;
  onChange: (value: string) => void;
}) {
  return (
    <Fieldset title="교과목 설명" titleMb="mb-1" mb="mb-5" required>
      <textarea
        value={description}
        onChange={(e) => onChange(e.target.value)}
        className="autofill-bg-white h-24 resize-none rounded-sm border border-neutral-300 p-2 outline-none"
      />
    </Fieldset>
  );
}

function CodeFieldset({ code, onChange }: { code: string; onChange: (value: string) => void }) {
  return (
    <Fieldset title="교과목 코드" titleMb="mb-1" grow={false} required>
      <BasicTextInput value={code} onChange={onChange} maxWidth="max-w-[140px]" />
    </Fieldset>
  );
}

function DropdownFieldset<T>({
  title,
  contents,
  selected,
  onChange,
  width,
}: {
  title: string;
  contents: T[];
  selected: T;
  onChange: (value: T) => void;
  width?: string;
}) {
  const getSelectedIndex = () => {
    const idx = contents.findIndex((x) => x === selected);
    return idx === -1 ? 0 : idx;
  };

  return (
    <Fieldset title={title} titleMb="mb-1" grow={false} required>
      <Dropdown
        contents={contents.map((x) => x + '')} // 문자열화
        selectedIndex={getSelectedIndex()}
        onClick={(i) => {
          onChange(contents[i]);
        }}
        borderStyle="border-neutral-300"
        width={width}
        height="h-8"
      />
    </Fieldset>
  );
}

function ClassificationFieldset({
  selected,
  onChange,
}: {
  selected: Classification;
  onChange: (value: Classification) => void;
}) {
  return (
    <DropdownFieldset
      title="교과목 구분"
      contents={[...CLASSIFICATION]} // 그냥 CLASSIFICATION은 as const로 되어 있어서 할당 불가
      selected={selected}
      onChange={onChange}
      width="w-[94px]"
    />
  );
}

const CREDIT = [1, 2, 3, 4];

function CreditFieldset({
  selected,
  onChange,
}: {
  selected: number;
  onChange: (value: number) => void;
}) {
  return (
    <DropdownFieldset title="학점" contents={CREDIT} selected={selected} onChange={onChange} />
  );
}

function GradeField({ selected, onChange }: { selected: Grade; onChange: (value: Grade) => void }) {
  return (
    <DropdownFieldset
      title="학년"
      contents={[...GRADE]} // 그냥 GRDAE는 as const로 되어 있어서 할당 불가
      selected={selected}
      onChange={onChange}
      width="w-[90px]"
    />
  );
}
