import { FormProvider, useForm } from 'react-hook-form';

import { postCourseAction } from '@/actions/academics';
import { CLASSIFICATION, Course, GRADE, StudentType } from '@/apis/types/academics';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import ModalFrame from '@/components/modal/ModalFrame';
import { getKeys } from '@/utils/object';
import { handleServerResponse } from '@/utils/serverActionError';

export default function AddCourseModal({
  onClose,
  studentType,
}: {
  onClose: () => void;
  studentType: StudentType;
}) {
  const formMethods = useForm<Course>({
    defaultValues: {
      code: '',
      credit: 3,
      grade: studentType === 'graduate' ? 0 : 1,
      studentType: studentType,
      ko: { name: '', description: '', classification: '전공필수' },
      en: { name: '', description: '', classification: 'RM' },
    },
  });
  const { handleSubmit } = formMethods;

  const onSubmit = async (course: Course) => {
    const resp = await postCourseAction(course);
    handleServerResponse(resp, {
      successMessage: '새 교과목을 추가했습니다.',
      onSuccess: onClose,
    });
  };

  return (
    <ModalFrame onClose={onClose}>
      <FormProvider {...formMethods}>
        <div className="styled-scrollbar relative flex w-fit min-w-[500px] max-w-[768px] flex-col gap-4 overflow-auto overflow-x-hidden rounded-t-sm border-b border-t-2 border-main-orange bg-neutral-100 p-7">
          <h4 className="text-xl font-bold text-neutral-700">교과목 추가</h4>
          <div>
            <Fieldset title="교과목명" titleMb="mb-1" mb="mb-5" required>
              <Form.Text name="ko.name" maxWidth="max-w-[480px]" />
            </Fieldset>
            <Fieldset title="교과목 설명" titleMb="mb-1" mb="mb-5" required>
              <Form.TextArea
                name="ko.description"
                className="autofill-bg-white h-24 resize-none rounded-sm border border-neutral-300 p-2 outline-none"
              />
            </Fieldset>
            <div className="flex justify-between">
              <Fieldset title="교과목 번호" titleMb="mb-1" grow={false} required>
                <Form.Text name="code" maxWidth="max-w-[140px]" />
              </Fieldset>
              <DropdownFieldset
                title="교과목 구분"
                contents={getKeys(CLASSIFICATION).map((value) => ({ value, label: value }))}
                name="ko.classification"
                width="w-[94px]"
              />
              <DropdownFieldset
                title="학점"
                name="credit"
                contents={CREDIT.map((value) => ({ value, label: value.toString() }))}
              />
              <DropdownFieldset
                title="학년"
                contents={
                  studentType === 'undergraduate'
                    ? GRADE.slice(1).map((label, idx) => ({ value: idx + 1, label }))
                    : [{ value: 0, label: GRADE[0] }]
                }
                name="grade"
                width="w-[90px]"
              />
            </div>
            <div className="mb-10 mt-1.5 text-xs text-main-orange">
              * 교과목 번호는 추후 수정할 수 없습니다.
            </div>
            <Fieldset title={'(영문) Course Name'} titleMb="mb-1" mb="mb-5" required>
              <Form.Text name="en.name" maxWidth="max-w-[480px]" />
            </Fieldset>
            <Fieldset title="(영문) Course Description" titleMb="mb-1" mb="mb-5" required>
              <Form.TextArea
                name="en.description"
                className="autofill-bg-white h-24 resize-none rounded-sm border border-neutral-300 p-2 outline-none"
              />
            </Fieldset>
          </div>
          <div className="flex justify-end gap-2">
            <Button text="취소" onClick={onClose} />
            <Button text="추가하기" onClick={handleSubmit(onSubmit)} />
          </div>
        </div>
      </FormProvider>
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

function DropdownFieldset({
  title,
  contents,
  name,
  width,
}: {
  title: string;
  contents: { value: unknown; label: string }[];
  name: string;
  width?: string;
}) {
  return (
    <Fieldset title={title} titleMb="mb-1" grow={false} required>
      <Form.Dropdown
        contents={contents}
        name={name}
        borderStyle="border-neutral-300"
        width={width}
        height="h-8"
      />
    </Fieldset>
  );
}

const CREDIT = [1, 2, 3, 4];
