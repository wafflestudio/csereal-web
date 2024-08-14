import { putCourseAction } from '@/actions/academics';
import BookmarkIcon from '@/public/image/bookmark_icon.svg';

import Dropdown from '@/components/common/form/Dropdown';
import BasicTextInput from '@/components/editor/common/BasicTextInput';

import { CLASSIFICATION, Course, GRADE } from '@/types/academics';
import { getKeys } from '@/types/object';

import { validateCourseForm } from '@/utils/formValidation';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import useCourseEditor from './useCourseEditor';

const CREDIT = [1, 2, 3, 4];

export default function CourseEditor({
  initCourse,
  toggleEditMode,
  setCourse,
}: {
  initCourse: Course;
  toggleEditMode: () => void;
  setCourse: (course: Course) => void;
}) {
  const { content, setContentByKey, setLanguageContent, setClassification } =
    useCourseEditor(initCourse);
  const isGraduateCourse = initCourse.grade === 0;

  const handleSubmit = async () => {
    try {
      validateCourseForm(content);
      handleServerAction(await putCourseAction(content));
      successToast('교과목을 수정했습니다.');
      setCourse(content);
      toggleEditMode();
    } catch (e) {
      if (e instanceof Error) {
        errorToast(e.message);
      } else {
        throw e;
      }
    }
  };

  return (
    <>
      <h4 className="flex flex-wrap items-center gap-2">
        <BookmarkIcon />
        <BasicTextInput
          value={content.ko.name}
          onChange={(value) => setLanguageContent('name', value, 'ko')}
          maxWidth="w-[180px]"
          placeholder="교과목명"
        />
        <div
          className="h-8 w-[120px] cursor-default rounded-sm border border-neutral-300 pl-2 text-sm leading-[31px] text-neutral-400"
          onClick={() => errorToast('교과목 코드는 수정할 수 없습니다')}
        >
          {content.code}
        </div>
        <CustomDropdown
          contents={getKeys(CLASSIFICATION)}
          selected={content.ko.classification}
          onChange={setClassification}
          width="w-[94px]"
        />
        <CustomDropdown
          contents={CREDIT}
          selected={content.credit}
          onChange={setContentByKey('credit')}
        />
        <CustomDropdown
          contents={isGraduateCourse ? [GRADE[0]] : GRADE.slice(1)}
          selected={GRADE[content.grade]}
          onChange={(value) => setContentByKey('grade')(GRADE.indexOf(value))}
          width="w-[90px]"
        />
      </h4>
      <TextArea
        value={content.ko.description}
        onChange={(value) => setLanguageContent('description', value, 'ko')}
        placeholder="교과목 설명"
      />
      <EnglishField
        name={content.en.name}
        description={content.en.description}
        setContent={(key, value) => setLanguageContent(key, value, 'en')}
      />
      <div className="flex justify-end gap-2">
        <Button text="취소" onClick={toggleEditMode} />
        <Button text="확인" onClick={handleSubmit} dark />
      </div>
    </>
  );
}

function Button({
  text,
  onClick,
  dark = false,
}: {
  text: string;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <button
      className={`rounded-sm border px-2.5 py-1.5 text-md font-medium ${
        dark
          ? 'border-neutral-800 bg-neutral-800 text-white hover:border-neutral-500 hover:bg-neutral-500'
          : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-200'
      } `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function CustomDropdown<T>({
  contents,
  selected,
  onChange,
  width,
}: {
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
  );
}

function TextArea({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="autofill-bg-white h-20 w-full resize-none rounded-sm border border-neutral-300 p-2 text-md outline-none placeholder:text-neutral-300"
      placeholder={placeholder}
    />
  );
}

function EnglishField({
  name,
  description,
  setContent,
}: {
  name: string;
  description: string;
  setContent: (key: 'name' | 'description', value: string) => void;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="text-md text-neutral-400">영문</span>
        <BasicTextInput
          value={name}
          onChange={(value) => setContent('name', value)}
          maxWidth="w-[308px]"
          placeholder="course name"
        />
      </div>
      <TextArea
        value={description}
        onChange={(value) => setContent('description', value)}
        placeholder="course description"
      />
    </div>
  );
}
