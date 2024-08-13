import BookmarkIcon from '@/public/image/bookmark_icon.svg';

import Dropdown from '@/components/common/form/Dropdown';
import BasicTextInput from '@/components/editor/common/BasicTextInput';

import { CLASSIFICATION, Course, GRADE } from '@/types/academics';
import { Language } from '@/types/language';

import useEditorContent from '@/utils/hooks/useEditorContent';

const CREDIT = [1, 2, 3, 4];

export default function CourseEditor({
  initCourse,
  toggleEditMode,
}: {
  initCourse: Course;
  toggleEditMode: () => void;
}) {
  const { content, setContent, setContentByKey } = useEditorContent(initCourse);
  const isGraduateCourse = initCourse.grade === 0;

  const setLanguageContent = (
    key: 'name' | 'description' | 'classification',
    value: string,
    language: Language,
  ) => {
    setContent((prev) => ({ ...prev, [language]: { ...prev[language], [key]: value } }));
  };

  const handleComplete = async () => {
    toggleEditMode();
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
        <BasicTextInput
          value={content.code}
          onChange={setContentByKey('code')}
          maxWidth="w-[120px]"
          placeholder="교과목 번호"
        />
        <CustomDropdown
          contents={[...CLASSIFICATION]}
          selected={content.ko.classification}
          onChange={(value) => setLanguageContent('classification', value, 'ko')}
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
        <Button text="확인" onClick={handleComplete} dark />
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
      className="autofill-bg-white h-20 resize-none rounded-sm border border-neutral-300 p-2 text-md outline-none"
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
      <div className="mb-3 flex items-center gap-2.5">
        <span className="text-md text-neutral-400">영문</span>
        <BasicTextInput
          value={name}
          onChange={(value) => setContent('name', value)}
          maxWidth="w-[180px]"
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
