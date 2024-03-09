import Image from 'next/image';

import { Link } from '@/navigation';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, researchLabs, staff } from '@/utils/segmentNode';

export type PeopleType = 'FACULTY' | 'EMIRITUS_FACULTY' | 'STAFF';

export interface PeopleCellProps {
  type: PeopleType;
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

export default function PeopleCell({
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
}: PeopleCellProps) {
  const href = `${hrefList[type]}/${id}`;

  return (
    <article className="group flex w-fit flex-row gap-5 text-md sm:w-36 sm:flex-col sm:gap-3">
      <Link
        href={href}
        className="relative h-48 w-36"
        style={{
          filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
        }}
      >
        <Image
          alt="대표 이미지"
          src={imageURL}
          fill
          className="object-cover"
          sizes="144px, 192px"
        />
      </Link>
      <div className="flex flex-col items-start break-keep">
        {academicRank && (
          <div className="relative flex w-full flex-row items-end gap-2 pb-2.5">
            <Link href={href} className="hover:cursor-pointer">
              <p className="text-[18px] font-bold">{name}</p>
            </Link>
            <AcademicRankText academicRank={academicRank} />
            <span className="absolute bottom-0 inline-block w-full border-b border-neutral-200" />
            <span className="absolute bottom-0 inline-block w-0 border-b border-main-orange transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        )}
        {role && (
          <div className="border-b-px relative flex w-full flex-col border-neutral-200 pb-2.5">
            <Link href={href} className="hover:cursor-pointer">
              <p className="text-[18px] font-bold leading-5">{name}</p>
            </Link>
            <p className="leading-6 text-neutral-500">{role}</p>
            <span className="absolute bottom-0 inline-block w-full border-b border-neutral-200" />
            <span className="absolute bottom-0 inline-block w-0 border-b border-main-orange transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        )}
        <div className="mt-2.5 flex flex-col items-start gap-2 break-keep">
          {labId && labName && (
            <Link href={`${labLink}/${labId}`} className="items-center hover:underline">
              <p>{labName}</p>
            </Link>
          )}
          {office && <p className="items-center">{office}</p>}
          {phone && <p>{phone}</p>}
          {email && (
            <Link href={`mailto:${email}`} className="items-center hover:underline">
              <p>{email}</p>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

// 괄호 안 문자는 폰트 크기 작게
function AcademicRankText({ academicRank }: { academicRank: string }) {
  return (
    <p className="mb-px flex items-end text-neutral-500">
      {splitParenthesis(academicRank).map((rank, i) =>
        i === 0 ? (
          <span key={rank}>{rank}</span>
        ) : (
          <span key={rank} className="inline-block origin-left scale-75 whitespace-nowrap">
            ({rank}
          </span>
        ),
      )}
    </p>
  );
}

const splitParenthesis = (text: string) => text.split('(');
