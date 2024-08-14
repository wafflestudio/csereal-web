import { useLocale, useTranslations } from 'next-intl';
import { CSSProperties, useEffect, useReducer, useRef } from 'react';

import { Course, GRADE, SortOption } from '@/types/academics';
import { Language } from '@/types/language';

interface CourseCardProps {
  course: Course;
  selectedOption: SortOption;
}

const useSortedProperties = (course: Course, selectedOption: SortOption) => {
  const lang = useLocale() as Language;
  const t = useTranslations('Tag');

  const classification = course[lang].classification;
  const grade = t(GRADE[course.grade]);
  const credit = t(`${course.credit}학점`);

  if (selectedOption === '교과목 구분') {
    return [classification, grade, credit];
  } else if (selectedOption === '학점') {
    return [credit, grade, classification];
  } else {
    return [grade, classification, credit];
  }
};

const CARD_HEIGHT = 176; // px
const LINE_LIMIT = 6;
const TEXT_SIZE = 11; // px

export default function CourseCard({ course, selectedOption }: CourseCardProps) {
  const sortedProperties = useSortedProperties(course, selectedOption);
  const [isFlipped, flipCard] = useReducer((x) => !x, false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const language = useLocale() as Language;

  // resize card width
  useEffect(() => {
    const front = frontRef.current;
    const back = backRef.current;
    if (!front || !back) return;

    if (isFlipped) {
      if (back.scrollHeight > CARD_HEIGHT) {
        const textCount = back.innerText.split('\n')[2].length;
        const letterPerLine = textCount / LINE_LIMIT;
        const expectedWidth = letterPerLine * TEXT_SIZE;
        back.style.width = expectedWidth + 'px';
      }
    } else {
      back.style.width = front.offsetWidth + 'px';
    }
  }, [isFlipped]);

  const cardStyle: CSSProperties = {
    position: 'relative',
    paddingRight: '0.1875rem', // 3px
    transformStyle: 'preserve-3d',
    perspective: '1000px',
    cursor: 'pointer',
  };

  const faceStyle: CSSProperties = {
    top: 0,
    left: 0,
    height: '11rem', // 176px
    borderRadius: '0.25rem', // 4px
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transition: 'transform ease-in-out 0.5s, width ease-in-out 0.5s',
  };

  const frontStyle = `absolute p-[1.125rem] bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-50 ${
    isFlipped ? '[transform:rotateY(-180deg)]' : '[transform:rotateY(0deg)]'
  } shadow-[2px_2px_4px_0_rgba(255,255,255,0.05)_inset,_-2px_-2px_6px_0_rgba(0,0,0,0.05)_inset]`;

  const backStyle = `py-5 px-[1.125rem] bg-neutral-200 ${
    isFlipped ? '[transform:rotateY(0deg)]' : '[transform:rotateY(180deg)]'
  } shadow-[2px_2px_4px_0_rgba(255,255,255,0.07)_inset,_-2px_-2px_4px_0_rgba(0,_0,_0,_0.05)_inset]`;

  return (
    <div style={cardStyle} onClick={flipCard}>
      <div className={frontStyle} style={{ ...faceStyle }} ref={frontRef}>
        <CardHeader sortedProperties={sortedProperties} />
        <CardTitle name={course[language].name} code={course.code} />
        <CardContentPreview description={course[language].description} />
      </div>
      <div className={backStyle} style={{ ...faceStyle }} ref={backRef}>
        <CardTitle name={course[language].name} code={course.code} />
        <CardContent description={course[language].description} />
      </div>
    </div>
  );
}

function CardHeader({ sortedProperties }: { sortedProperties: string[] }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex h-[26px] items-center whitespace-nowrap rounded-[1.875rem] border bg-white px-2.5 text-sm font-medium text-main-orange">
        {sortedProperties[0]}
      </div>
      <span className="ml-2 whitespace-nowrap text-xs text-neutral-500">
        <span className="mr-2">{sortedProperties[1]}</span>
        <span>{sortedProperties[2]}</span>
      </span>
    </div>
  );
}

function CardTitle({ name, code }: { name: string; code: string }) {
  return (
    <h2 className="mb-2 whitespace-nowrap">
      <span className="mr-2 text-base font-bold leading-normal">{name}</span>
      <span className="text-xs leading-normal text-neutral-500">{code}</span>
    </h2>
  );
}

function CardContentPreview({ description }: { description: string }) {
  return (
    <div className="flex">
      <p className="line-clamp-2 w-0 grow text-xs leading-normal text-neutral-500">{description}</p>
    </div>
  );
}

function CardContent({ description }: { description: string }) {
  return (
    <div className="flex">
      <p className="w-0 grow text-xs leading-normal">{description}</p>
    </div>
  );
}
