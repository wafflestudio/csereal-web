'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/hooks/useLanguage';

import { emeritusFaculty, faculty, researchLabs, staff } from '@/types/page';

import { getPath } from '@/utils/page';

export interface PeopleRowProps {
  type: 'FACULTY' | 'EMIRITUS_FACULTY' | 'STAFF';
  id: number;
  name: string;
  academicRank?: string;
  labId?: number;
  labName?: string;
  phone?: string;
  email?: string;
  role?: string;
  office?: string;
  imageURL: string;
}

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);
const staffPath = getPath(staff);
const labLink = getPath(researchLabs);

const hrefList = {
  EMIRITUS_FACULTY: emeritusFacultyPath,
  FACULTY: facultyPath,
  STAFF: staffPath,
};

const getTextInParentheses = (title: string) => {
  const match = title.match(/\(([^)]+)\)/);
  if (match) {
    return match[1];
  } else {
    return title;
  }
};

const removeTextInParentheses = (title: string) => {
  const match = title.match(/(.*?)\([^)]+\)/); // 괄호 안의 내용을 포함한 부분을 추출하는 정규 표현식
  if (match) {
    return match[1].trim(); // 괄호를 포함한 부분 중에서 괄호 안의 내용을 생략하고 나머지 문자열을 반환
  } else {
    return title; // 괄호가 없으면 원래 문자열 반환
  }
};
export default function PeopleRow({
  type,
  id,
  name,
  academicRank,
  labId,
  labName,
  phone,
  email,
  role,
  office,
  imageURL,
}: PeopleRowProps) {
  const { isEnglish } = useLanguage();

  const href = isEnglish ? '/en' + `${hrefList[type]}/${id}` : `${hrefList[type]}/${id}`;

  return (
    <article className="text-neutral-700 font-noto font-normal text-xs flex flex-col w-36 gap-3">
      <Link
        href={href}
        className="w-36 h-48 relative"
        style={{
          filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
        }}
      >
        <Image
          alt="대표 이미지"
          src={imageURL}
          priority={true}
          fill
          className="object-cover"
          sizes="144px, 192px"
          style={{
            clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
          }}
        />
        {isEnglish && academicRank?.match(/\(([^)]+)\)/) ? (
          <div className="absolute right-0 -bottom-2 w-auto max-w-[132px] items-center justify-center text-center px-[10px] break-words text-white text-[10px] font-bold bg-main-orange">
            {getTextInParentheses(academicRank)}
          </div>
        ) : null}
      </Link>

      <div className="flex flex-col items-start break-keep">
        {academicRank ? (
          !isEnglish ? (
            <div className="flex flex-row w-full gap-1 items-end pb-2 border-b-[1px] border-neutral-200">
              <Link href={href} className="hover:cursor-pointer ">
                <p className="text-md font-bold leading-5">{name}</p>
              </Link>
              <div className="text-neutral-500 flex flex-row items-end">
                <p>{removeTextInParentheses(academicRank)}</p>
                {academicRank?.match(/\(([^)]+)\)/) && (
                  <p className="text-[9px] whitespace-nowrap">
                    {'(' + getTextInParentheses(academicRank) + ')'}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full pb-1 border-b-[1px] border-neutral-200">
              <Link href={href} className="hover:cursor-pointer ">
                <p className="text-md font-bold leading-5">{name}</p>
              </Link>
              <p className="text-neutral-500">{removeTextInParentheses(academicRank)}</p>
            </div>
          )
        ) : null}
        {role && (
          <div className="flex flex-col w-full pb-1 border-b-[1px] border-neutral-200">
            <Link href={href} className="hover:cursor-pointer ">
              <p className="text-md font-bold leading-5">{name}</p>
            </Link>
            <p className="text-neutral-500 leading-6">{role}</p>
          </div>
        )}
        <div className="flex flex-col gap-[0.37rem] mt-1 items-start break-keep">
          {labId !== undefined && labName !== undefined && (
            <Link
              href={`${labLink}/${labId}`}
              className="hover:underline leading-[1rem] items-center"
            >
              <p className={isEnglish ? 'text-[11px]' : ''}>{labName}</p>
            </Link>
          )}
          {office && <p className="leading-[1.1rem] items-center">{office}</p>}
          {phone && <p className="leading-[1.1rem]">{phone}</p>}
          {email && (
            <Link
              href={`mailto:${email}`}
              className="hover:underline leading-[1.1rem] items-center"
            >
              <p>{email}</p>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
