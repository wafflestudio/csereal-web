import BookmarkIcon from '@/public/image/bookmark_icon.svg';

import ModalFrame from '@/components/modal/ModalFrame';

import { Course } from '@/types/academics';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
}

export default function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  return (
    <ModalFrame onClose={onClose}>
      <div className="relative flex flex-col gap-4 p-6 w-fit max-w-[768px] bg-neutral-100 border-t-2 border-b rounded-t-sm border-main-orange overflow-auto styled-scrollbar overflow-x-hidden">
        <CourseHeader course={course} />
        <CourseBody content={course.description} />
      </div>
    </ModalFrame>
  );
}

function CourseHeader({ course }: { course: Course }) {
  return (
    <h4 className="flex items-center gap-2">
      <BookmarkIcon />
      <span className="font-bold">{course.name}</span>
      <div className="flex items-center pt-1 text-neutral-600 text-sm divide-x divide-neutral-200 [&_span]:px-2">
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
