import { CSSProperties, useReducer, useRef } from 'react';

import { Tag } from '@/components/common/Tags';

import { Course, SortOption } from '@/types/academics';

interface CourseCardProps {
  course: Course;
  selectedOption: SortOption;
  zIndex: number;
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

const CARD_HEIGHT = 176; // px
const LINE_LIMIT = 6;
const TEXT_SIZE = 11; // px

export default function CourseCard({ course, selectedOption, zIndex }: CourseCardProps) {
  const sortedProperties = getSortedProperties(course, selectedOption);
  const [isFlipped, flipCard] = useReducer((x) => !x, false);
  const backRef = useRef<HTMLDivElement>(null);

  // resize card width
  if (backRef.current) {
    const back = backRef.current;
    if (back.scrollHeight > CARD_HEIGHT) {
      const textCount = back.innerText.split('\n')[2].length;
      const letterPerLine = textCount / LINE_LIMIT;
      const expectedWidth = letterPerLine * TEXT_SIZE;
      back.style.width = expectedWidth + 'px';
    }
  }

  const cardStyle: CSSProperties = {
    position: 'relative',
    transformStyle: 'preserve-3d',
    perspective: '1000px',
    cursor: 'pointer',
    zIndex: zIndex,
  };

  const faceStyle: CSSProperties = {
    top: 0,
    left: 0,
    height: '11rem',
    borderRadius: '0.25rem',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transition: 'all ease-in-out 0.5s',
  };

  const frontStyle: CSSProperties = {
    padding: '1.125rem',
    backgroundColor: 'white',
    position: isFlipped ? 'absolute' : 'relative',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const backStyle: CSSProperties = {
    padding: '1.25rem 1.125rem',
    backgroundColor: '#f5f5f5',
    position: isFlipped ? 'relative' : 'absolute',
    transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
  };

  return (
    <div style={cardStyle} onClick={flipCard}>
      <div style={{ ...faceStyle, ...frontStyle }}>
        <CardHeader sortedProperties={sortedProperties} />
        <CardTitle name={course.name} code={course.code} />
        <CardContentPreview description={course.description} />
      </div>
      <div style={{ ...faceStyle, ...backStyle }} ref={backRef}>
        <CardTitle name={course.name} code={course.code} />
        <CardContent description={course.description} />
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
    <h2 className="mb-2 whitespace-nowrap">
      <span className="font-bold text-base mr-2">{name}</span>
      <span className="text-xs text-neutral-500">{code}</span>
    </h2>
  );
}

function CardContentPreview({ description }: { description: string }) {
  return (
    <div className="flex">
      <p className="grow w-0 line-clamp-2 text-[0.6875rem] text-neutral-400 leading-normal">
        {description}
      </p>
    </div>
  );
}

function CardContent({ description }: { description: string }) {
  return (
    <div className="flex">
      <p className="w-0 grow text-[0.6875rem] text-neutral-500">{description}</p>
    </div>
  );
}
