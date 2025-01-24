import { useTranslations } from 'next-intl';
import { useReducer, useState } from 'react';

import { deleteCourseAction } from '@/actions/academics';
import { Course, GRADE } from '@/apis/types/academics';
import { DeleteButton, GrayButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import ModalFrame from '@/components/modal/ModalFrame';
import BookmarkIcon from '@/public/image/bookmark_icon.svg';
import { Language } from '@/types/language';
import { useTypedLocale } from '@/utils/hooks/useTypedLocale';
import { CustomError, handleServerResponse } from '@/utils/serverActionError';

import CourseEditor from './CourseEditor';

interface CourseDetailModalProps {
  initCourse: Course;
  onClose: () => void;
}

export default function CourseDetailModal({ initCourse, onClose }: CourseDetailModalProps) {
  // 수정 이후 페이지 새로고침 없이 모달 내용을 업데이트하기 위해 내부 상태로 관리
  const [course, setCourse] = useState(initCourse);
  const [isEditMode, toggleEditMode] = useReducer((x) => !x, false);

  const handleDelete = async () => {
    const resp = await deleteCourseAction(course.code);
    handleServerResponse(resp, {
      successMessage: '교과목을 삭제했습니다.',
      // TODO: 이전 소개 PR 머지되면 추가 onSuccess: onClose
    });
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className="styled-scrollbar relative flex w-fit max-w-[768px] flex-col gap-4 overflow-auto overflow-x-hidden rounded-t-sm border-b border-t-2 border-main-orange bg-neutral-50 p-6">
        {isEditMode ? (
          <CourseEditor
            defaultValues={course}
            toggleEditMode={toggleEditMode}
            setCourse={setCourse}
          />
        ) : (
          <CourseViewer course={course} onClickDelete={handleDelete} onClickEdit={toggleEditMode} />
        )}
      </div>
    </ModalFrame>
  );
}

function CourseViewer({
  course,
  onClickDelete,
  onClickEdit,
}: {
  course: Course;
  onClickDelete: () => Promise<CustomError | void>;
  onClickEdit: () => void;
}) {
  const language = useTypedLocale();

  return (
    <>
      <CourseHeader course={course} language={language} />
      <CourseBody content={course[language].description} />
      <LoginVisible staff>
        <div className="flex justify-end gap-3">
          <DeleteButton onDelete={onClickDelete} />
          <GrayButton title="편집" onClick={onClickEdit} />
        </div>
      </LoginVisible>
    </>
  );
}

function CourseHeader({ course, language }: { course: Course; language: Language }) {
  const t = useTranslations('Tag');

  return (
    <h4 className="flex flex-wrap items-center gap-2">
      <BookmarkIcon />
      <span className="font-bold">{course[language].name}</span>
      <div className="flex items-center divide-x divide-neutral-200 pt-1 text-sm text-neutral-600 [&_span]:px-2">
        <span>{course.code}</span>
        <span>{course[language].classification}</span>
        <span>{t(`${course.credit}학점`)}</span>
        <span>{t(GRADE[course.grade])}</span>
      </div>
    </h4>
  );
}

function CourseBody({ content }: { content: string }) {
  return <p className="text-md leading-loose">{content}</p>;
}
