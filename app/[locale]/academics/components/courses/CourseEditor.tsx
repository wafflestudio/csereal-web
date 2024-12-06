import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { putCourseAction } from '@/actions/academics';
import Form from '@/components/form/Form';
import BookmarkIcon from '@/public/image/bookmark_icon.svg';
import { CLASSIFICATION, ClassificationEn, Course, GRADE } from '@/types/academics';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const CREDIT = [1, 2, 3, 4];

export default function CourseEditor({
  defaultValues,
  toggleEditMode,
  setCourse,
}: {
  defaultValues: Course;
  toggleEditMode: () => void;
  setCourse: (course: Course) => void;
}) {
  const formMethods = useForm<Course>({ defaultValues });
  const { setValue, handleSubmit } = formMethods;
  const gradeDropdownContents = defaultValues.grade === 0 ? [GRADE[0]] : GRADE.slice(1);

  const onSubmit = async (course: Course) => {
    try {
      handleServerAction(await putCourseAction(course));
      successToast('교과목을 수정했습니다.');
      setCourse(course);
      toggleEditMode();
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <FormProvider {...formMethods}>
      <h4 className="flex flex-wrap items-center gap-2">
        <BookmarkIcon />
        <Form.Text
          name="ko.name"
          maxWidth="w-[180px]"
          placeholder="교과목명"
          options={{ required: true }}
        />
        <div
          className="h-8 w-[120px] cursor-default rounded-sm border border-neutral-300 pl-2 text-sm leading-[31px] text-neutral-400"
          onClick={() => errorToast('교과목 코드는 수정할 수 없습니다')}
        >
          {defaultValues.code}
        </div>
        <Form.Dropdown
          contents={Object.keys(CLASSIFICATION).map((value) => ({ label: value, value }))}
          name="ko.classification"
          borderStyle="border-neutral-300"
          height="h-8"
          width="w-[94px]"
          onChange={(value) => setValue('en.classification', value as ClassificationEn)}
        />
        <Form.Dropdown
          contents={CREDIT.map((value) => ({ label: value.toString(), value }))}
          name="credit"
          borderStyle="border-neutral-300"
          height="h-8"
        />
        <Form.Dropdown
          contents={gradeDropdownContents.map((label, idx) => ({ value: idx, label }))}
          name="grade"
          borderStyle="border-neutral-300"
          height="h-8"
          width="w-[90px]"
        />
      </h4>
      <Form.TextArea name="ko.description" placeholder="교과목 설명" options={{ required: true }} />
      <div>
        <div className="mb-4 flex items-center gap-2.5">
          <span className="text-md text-neutral-400">영문</span>
          <Form.Text
            name="en.name"
            maxWidth="w-[308px]"
            placeholder="course name"
            options={{ required: true }}
          />
        </div>
        <Form.TextArea
          name="en.description"
          placeholder="course description"
          options={{ required: true }}
        />
      </div>
      <div className="flex justify-end gap-2">
        {/* TODO: disabled 처리 */}
        <Button onClick={toggleEditMode}>취소</Button>
        <Button onClick={handleSubmit(onSubmit)} dark>
          확인
        </Button>
      </div>
    </FormProvider>
  );
}

function Button({
  onClick,
  children,
  dark = false,
}: {
  onClick: () => void;
  children?: ReactNode;
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
      {children}
    </button>
  );
}
