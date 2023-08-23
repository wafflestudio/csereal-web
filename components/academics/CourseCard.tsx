import { useReducer } from 'react';

import { Tag } from '@/components/common/Tags';

import { Course, SortOption } from '@/types/academics';

interface CourseCardProps {
  course: Course;
  selectedOption: SortOption;
}

const getSortedProperties = (course: Course, selectedOption: SortOption) => {
  if (selectedOption === '교과목 구분') {
    return [course.classification, course.year, `${course.credit}학점`];
  } else if (selectedOption === '학점') {
    return [`${course.credit}학점`, course.year, course.classification];
  } else {
    return [course.year, course.classification, `${course.credit}학점`];
  }
};

export default function CourseCard({ course, selectedOption }: CourseCardProps) {
  const sortedProperties = getSortedProperties(course, selectedOption);
  const [isFlipped, flipCard] = useReducer((x) => !x, false);

  return isFlipped ? (
    <div
      className="inline-block bg-neutral-100 h-44 px-[1.125rem] py-5 rounded shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] cursor-pointer overflow-hidden "
      onClick={flipCard}
    >
      <CardTitle name={course.name} code={course.code} />
      <CardContent description={course.description} />
    </div>
  ) : (
    <div
      className="inline-block p-[1.125rem] h-44 rounded shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] cursor-pointer"
      onClick={flipCard}
    >
      <CardHeader sortedProperties={sortedProperties} />
      <div className="inline-block">
        <CardTitle name={course.name} code={course.code} />
        <CardContentPreview description={course.description} />
      </div>
    </div>
  );
}

function CardHeader({ sortedProperties }: { sortedProperties: string[] }) {
  return (
    <div className="flex items-center mb-4 justify-between">
      <Tag tag={sortedProperties[0]} />
      <span className="text-xs text-neutral-500">
        <span className="mr-2">{sortedProperties[1]}</span>
        <span>{sortedProperties[2]}</span>
      </span>
    </div>
  );
}

function CardTitle({ name, code }: { name: string; code: string }) {
  return (
    <h2 className="mb-2">
      <span className="font-bold text-base mr-2">{name}</span>
      <span className="text-xs text-neutral-500">{code}</span>
    </h2>
  );
}

function CardContentPreview({ description }: { description: string }) {
  return (
    <p className="flex">
      <p className="grow w-0 line-clamp-2 text-[0.6875rem] text-neutral-400 leading-normal">
        {description}
      </p>
    </p>
  );
}

function CardContent({ description }: { description: string }) {
  return (
    <p className="flex">
      <p className="w-0 grow text-[0.6875rem] text-neutral-500">{description}</p>
    </p>
  );
}
