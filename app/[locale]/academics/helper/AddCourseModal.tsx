import { useState } from 'react';

import BasicTextInput from '@/components/editor/common/BasicTextInput';
import Fieldset from '@/components/editor/common/Fieldset';
import ModalFrame from '@/components/modal/ModalFrame';

import { Course } from '@/types/academics';

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
          <Fieldset title="교과목명" titleMb="mb-1" mb="mb-3" required>
            <BasicTextInput
              value={course.name}
              onChange={setContentByKey('name')}
              maxWidth="max-w-[480px]"
            />
          </Fieldset>
          <Fieldset title="교과목 설명" titleMb="mb-1" mb="mb-3" required>
            <BasicTextInput
              value={course.description}
              onChange={() => {}}
              maxWidth="max-w-[480px]"
            />
          </Fieldset>
          <div className="flex justify-between">
            <Fieldset title="교과목 코드" titleMb="mb-1" grow={false} required>
              <BasicTextInput
                value={course.description}
                onChange={setContentByKey('code')}
                maxWidth="max-w-[140px]"
              />
            </Fieldset>
            <Fieldset title="교과목 구분" titleMb="mb-1" grow={false} required>
              <BasicTextInput
                value={course.description}
                onChange={() => {}}
                maxWidth="max-w-[84px]"
              />
            </Fieldset>
            <Fieldset title="학점" titleMb="mb-1" grow={false} required>
              <BasicTextInput
                value={course.description}
                onChange={() => {}}
                maxWidth="max-w-[84px]"
              />
            </Fieldset>
            <Fieldset title="학년" titleMb="mb-1" grow={false} required>
              <BasicTextInput
                value={course.description}
                onChange={() => {}}
                maxWidth="max-w-[84px]"
              />
            </Fieldset>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button className="rounded-sm border border-neutral-200 bg-white px-2.5 py-1.5 text-md text-neutral-700">
            취소
          </button>
          <button className="rounded-sm border border-neutral-200 bg-white px-2.5 py-1.5 text-md text-neutral-700">
            추가하기
          </button>
        </div>
      </div>
    </ModalFrame>
  );
}
