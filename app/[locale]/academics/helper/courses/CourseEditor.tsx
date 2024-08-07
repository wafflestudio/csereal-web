import { useState } from 'react';

import BookmarkIcon from '@/public/image/bookmark_icon.svg';

import Dropdown from '@/components/common/form/Dropdown';
import BasicTextInput from '@/components/editor/common/BasicTextInput';

import { CLASSIFICATION, Course, GRADE } from '@/types/academics';

const CREDIT = [1, 2, 3, 4];

export default function CourseEditor({
  initCourse,
  toggleEditMode,
}: {
  initCourse: Course;
  toggleEditMode: () => void;
}) {
  const [course, setNewCourse] = useState<Course>(initCourse);

  const handleComplete = async () => {
    toggleEditMode();
  };

  // TODO: 훅 사용
  const setContentByKey =
    <K extends keyof Course>(key: K) =>
    (value: Course[K]) => {
      setNewCourse((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  return (
    <>
      <h4 className="flex flex-wrap items-center gap-2">
        <BookmarkIcon />
        <BasicTextInput
          value={course.name}
          onChange={setContentByKey('name')}
          maxWidth="w-[180px]"
        />
        <BasicTextInput
          value={course.code}
          onChange={setContentByKey('code')}
          maxWidth="w-[120px]"
        />
        <CustomDropdown
          contents={[...CLASSIFICATION]}
          selected={course.classification}
          onChange={setContentByKey('classification')}
          width="w-[94px]"
        />
        <CustomDropdown
          contents={CREDIT}
          selected={course.credit}
          onChange={setContentByKey('credit')}
        />
        <CustomDropdown
          contents={[...GRADE]}
          selected={course.grade}
          onChange={setContentByKey('grade')}
          width="w-[90px]"
        />
      </h4>
      <TextArea value={course.description} onChange={setContentByKey('description')} />
      {/* <EnglishField /> */}
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

// function EnglishField({
//   name,
//   description,
//   setEnglish,
// }: {
//   name: string;
//   description: string;
//   setEnglish: (value: object) => void;
// }) {
//   return (
//     <div>
//       <div className="mb-3 flex items-center gap-2.5">
//         <span className="text-md text-neutral-400">영문</span>
//         <BasicTextInput
//           value={name}
//           onChange={(value) => setEnglish((prev) => ({ ...prev, name: value }))}
//           maxWidth="w-[180px]"
//         />
//       </div>
//       <TextArea
//         value={description}
//         onChange={(value) => setEnglish((prev) => ({ ...prev, name: value }))}
//       />
//     </div>
//   );
// }

function TextArea({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="autofill-bg-white h-20 resize-none rounded-sm border border-neutral-300 p-2 text-md outline-none"
    />
  );
}
