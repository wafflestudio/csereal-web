import { useReducer } from 'react';

import BookmarkIcon from '@/public/image/bookmark_icon.svg';

import { GrayButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import ModalFrame from '@/components/modal/ModalFrame';

import { Course } from '@/types/academics';

import CourseEditor from './CourseEditor';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
}

export default function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [isEditMode, toggleEditMode] = useReducer((x) => !x, false);

  const handleDelete = async () => {
    toggleEditMode();
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className="styled-scrollbar relative flex w-fit max-w-[768px] flex-col gap-4 overflow-auto overflow-x-hidden rounded-t-sm border-b border-t-2 border-main-orange bg-neutral-50 p-6">
        {isEditMode ? (
          <CourseEditor initCourse={course} toggleEditMode={toggleEditMode} />
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
  onClickDelete: () => void;
  onClickEdit: () => void;
}) {
  return (
    <>
      <CourseHeader course={course} />
      <CourseBody content={course.description} />
      <LoginVisible staff>
        <div className="flex justify-end gap-3">
          <GrayButton title="삭제" onClick={onClickDelete} />
          <GrayButton title="편집" onClick={onClickEdit} />
        </div>
      </LoginVisible>
    </>
  );
}

function CourseHeader({ course }: { course: Course }) {
  return (
    <h4 className="flex flex-wrap items-center gap-2">
      <BookmarkIcon />
      <span className="font-bold">{course.name}</span>
      <div className="flex items-center divide-x divide-neutral-200 pt-1 text-sm text-neutral-600 [&_span]:px-2">
        <span>{course.code}</span>
        <span>{course.classification}</span>
        <span>{course.credit}학점</span>
        <span>{course.grade}</span>
      </div>
    </h4>
  );
}

function CourseBody({ content }: { content: string }) {
  return <p className="text-md leading-loose">{content}</p>;
}
