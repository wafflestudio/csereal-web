'use client';

import { Course, SortOption } from '@/types/academics';

import CourseCard from './CourseCard';
import { useRef } from 'react';

interface CourseRowProps {
  courses: Course[];
  selectedOption: SortOption;
}

const SCROLL_DISTANCE = 400;

export default function CourseRow({ courses, selectedOption }: CourseRowProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollHorizontally = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const currPos = carouselRef.current.scrollLeft;
    carouselRef.current?.scrollTo({
      left: currPos + (direction === 'left' ? -SCROLL_DISTANCE : SCROLL_DISTANCE),
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex items-center group">
      <ArrowButton iconName=" navigate_before" onClick={() => scrollHorizontally('left')} />
      <div className="styled-scrollbar overflow-y-hidden overflow-x-auto py-3" ref={carouselRef}>
        <div className="flex gap-5">
          {courses.map((course) => (
            <CourseCard course={course} selectedOption={selectedOption} key={course.code} />
          ))}
        </div>
      </div>
      <ArrowButton iconName=" navigate_next" onClick={() => scrollHorizontally('right')} />
    </div>
  );
}

interface ArrowButtonProps {
  iconName: string;
  onClick: () => void;
}

function ArrowButton({ iconName, onClick }: ArrowButtonProps) {
  return (
    <button className="invisible group-hover:visible" onClick={onClick}>
      <span className="material-symbols-rounded font-light text-[44px] text-main-orange">
        {iconName}
      </span>
    </button>
  );
}
