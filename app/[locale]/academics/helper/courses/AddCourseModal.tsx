import { postCourseAction } from '@/actions/academics';
import Dropdown from '@/components/common/form/Dropdown';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';
import ModalFrame from '@/components/modal/ModalFrame';
import { CLASSIFICATION, Classification, Course, GRADE, StudentType } from '@/types/academics';
import { getKeys } from '@/types/object';
import { errorToStr } from '@/utils/error';
import { validateCourseForm } from '@/utils/formValidation';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import useCourseEditor from './useCourseEditor';

const getInitCourse = (type: StudentType): Course => ({
  code: '',
  credit: 3,
  grade: type === 'graduate' ? 0 : 1,
  studentType: type,
  ko: { name: '', description: '', classification: '전공필수' },
  en: { name: '', description: '', classification: 'RM' },
});

export default function AddCourseModal({
  onClose,
  studentType,
}: {
  onClose: () => void;
  studentType: StudentType;
}) {
  const { content, setContentByKey, setLanguageContent, setClassification } = useCourseEditor(
    getInitCourse(studentType),
  );

  const handleSubmit = async () => {
    try {
      validateCourseForm(content);
      handleServerAction(await postCourseAction(content));
      successToast('새 교과목을 추가했습니다.');
      onClose();
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className="styled-scrollbar relative flex w-fit min-w-[500px] max-w-[768px] flex-col gap-4 overflow-auto overflow-x-hidden rounded-t-sm border-b border-t-2 border-main-orange bg-neutral-100 p-7">
        <h4 className="text-xl font-bold text-neutral-700">교과목 추가</h4>
        <div>
          <NameFieldset
            name={content.ko.name}
            onChange={(value) => setLanguageContent('name', value, 'ko')}
          />
          <DescriptionFieldset
            description={content.ko.description}
            onChange={(value) => setLanguageContent('description', value, 'ko')}
          />
          <div className="flex justify-between">
            <CodeFieldset code={content.code} onChange={setContentByKey('code')} />
            <ClassificationFieldset
              selected={content.ko.classification}
              onChange={setClassification}
            />
            <CreditFieldset selected={content.credit} onChange={setContentByKey('credit')} />
            <GradeField
              selected={content.grade}
              onChange={setContentByKey('grade')}
              studentType={studentType}
            />
          </div>
          <div className="mb-10 mt-1.5 text-xs text-main-orange">
            * 교과목 번호는 추후 수정할 수 없습니다.
          </div>
          <NameFieldset
            name={content.en.name}
            onChange={(value) => setLanguageContent('name', value, 'en')}
            english
          />
          <DescriptionFieldset
            description={content.en.description}
            onChange={(value) => setLanguageContent('description', value, 'en')}
            english
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button text="취소" onClick={onClose} />
          <Button text="추가하기" onClick={handleSubmit} />
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

function NameFieldset({
  name,
  onChange,
  english = false,
}: {
  name: string;
  onChange: (value: string) => void;
  english?: boolean;
}) {
  return (
    <Fieldset title={english ? '(영문) Course Name' : '교과목명'} titleMb="mb-1" mb="mb-5" required>
      <BasicTextInput value={name} onChange={onChange} maxWidth="max-w-[480px]" />
    </Fieldset>
  );
}

function DescriptionFieldset({
  description,
  onChange,
  english = false,
}: {
  description: string;
  onChange: (value: string) => void;
  english?: boolean;
}) {
  return (
    <Fieldset
      title={english ? '(영문) Course Description' : '교과목 설명'}
      titleMb="mb-1"
      mb="mb-5"
      required
    >
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
    <Fieldset title="교과목 번호" titleMb="mb-1" grow={false} required>
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
      contents={getKeys(CLASSIFICATION)}
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

function GradeField({
  selected,
  onChange,
  studentType,
}: {
  selected: number;
  onChange: (value: number) => void;
  studentType: StudentType;
}) {
  return (
    <DropdownFieldset
      title="학년"
      contents={studentType === 'undergraduate' ? GRADE.slice(1) : [GRADE[0]]}
      selected={GRADE[selected]}
      onChange={(value) => onChange(GRADE.indexOf(value))}
      width="w-[90px]"
    />
  );
}
