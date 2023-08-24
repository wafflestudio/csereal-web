import useHorizontalScroll from '@/hooks/useHorizontalScroll';

import { Course, SortOption } from '@/types/academics';

import CourseCard from './CourseCard';

interface CourseRowProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseRow({ courses, selectedOption }: CourseRowProps) {
  const { scrollRef: screenRef } = useHorizontalScroll();

  // useEffect(() => {
  //   const rowDiv = rootRef.current;

  //   if (rowDiv) {
  //     const onWheel = (e: WheelEvent) => {
  //       // if (e.deltaY == 0) return;
  //       // e.preventDefault();
  //       rowDiv.scrollTo({
  //         left: rowDiv.scrollLeft + e.deltaY,
  //         behavior: 'smooth',
  //       });
  //     };

  //     rowDiv.addEventListener('wheel', onWheel);

  //     return () => rowDiv.removeEventListener('wheel', onWheel);
  //   }
  // }, []);

  return (
    <div className="no-scrollbar overflow-y-hidden overflow-x-auto p-1.5" ref={screenRef}>
      <div className="flex gap-5">
        {courses.map((course) => (
          <CourseCard course={course} selectedOption={selectedOption} key={course.id} />
        ))}
      </div>
    </div>
  );
}
