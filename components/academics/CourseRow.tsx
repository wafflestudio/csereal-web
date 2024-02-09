'use client';

import { Course, SortOption } from '@/types/academics';

import CourseCard from './CourseCard';
import { useRef } from 'react';

interface CourseRowProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseRow({ courses, selectedOption }: CourseRowProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    const currPos = carouselRef.current.scrollLeft;
    carouselRef.current?.scrollTo({ left: currPos - 400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    const currPos = carouselRef.current.scrollLeft;
    carouselRef.current?.scrollTo({ left: currPos + 400, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center group">
      <button className="invisible group-hover:visible" onClick={scrollLeft}>
        <span className="material-symbols-rounded font-light text-[32px] text-main-orange">
          navigate_before
        </span>
      </button>
      <div className="styled-scrollbar overflow-y-hidden overflow-x-auto py-3" ref={carouselRef}>
        <div className="flex gap-5">
          {courses.map((course) => (
            <CourseCard course={course} selectedOption={selectedOption} key={course.code} />
          ))}
        </div>
      </div>
      <button className="invisible group-hover:visible" onClick={scrollRight}>
        <span className="material-symbols-rounded font-light text-[32px] text-main-orange">
          navigate_next
        </span>
      </button>
    </div>
  );
}
