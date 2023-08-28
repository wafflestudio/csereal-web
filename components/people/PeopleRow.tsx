import Image from 'next/image';
import Link from 'next/link';

import { faculty, researchLabs, staff } from '@/types/page';

import { getPath } from '@/utils/page';

export interface PeopleRowProps {
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

export default function PeopleRow({
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
  const professorLink = getPath(faculty);
  const staffLink = getPath(staff);
  const labLink = getPath(researchLabs);
  return (
    <article className="text-neutral-700 font-noto font-normal text-xs flex flex-col w-36 gap-3">
      <Link
        href={`${professorLink}/${id}`}
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
      </Link>
      <div className="flex flex-col items-start break-keep">
        {academicRank && (
          <div className="flex flex-row w-full gap-1 items-end pb-2 border-b-[1px] border-neutral-200">
            <Link href={`${staffLink}/${id}`} className="hover:cursor-pointer ">
              <p className="text-md font-bold">{name}</p>
            </Link>
            <p className="text-neutral-500">{academicRank}</p>
          </div>
        )}
        {role && (
          <div className="flex flex-col w-full pb-1 border-b-[1px] border-neutral-200">
            <Link href={`${professorLink}/${id}`} className="hover:cursor-pointer ">
              <p className="text-md font-bold leading-5">{name}</p>
            </Link>
            <p className="text-neutral-500 leading-6">{role}</p>
          </div>
        )}
        <div className="flex flex-col gap-[0.37rem] mt-1 items-start break-keep">
          {labId !== undefined && labName !== undefined && (
            <Link
              href={`${labLink}/${labId}`}
              className="hover:underline leading-[1.1rem] items-center"
            >
              <p>{labName}</p>
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
