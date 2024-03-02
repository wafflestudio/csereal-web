import Image from 'next/image';

import { Link } from '@/navigation';

import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty, researchLabs, staff } from '@/utils/segmentNode';

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
  const hrefList = {
    EMIRITUS_FACULTY: emeritusFacultyPath,
    FACULTY: facultyPath,
    STAFF: staffPath,
  };
  const href = `${hrefList[type]}/${id}`;

  return (
    <article className="text-neutral-700 text-xs flex flex-col w-36 gap-3 group">
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
          <div className="relative flex flex-row w-full gap-1 items-end pb-2 mb-1">
            <Link href={href} className="hover:cursor-pointer ">
              <p className="text-md font-noto font-bold">{name}</p>
            </Link>
            <AcademicRankText academicRank={academicRank} />
            <span className="absolute inline-block bottom-0 border-b w-full border-neutral-200" />
            <span className="absolute inline-block bottom-0 border-b w-0 border-main-orange group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        )}
        {role && (
          <div className="relative flex flex-col w-full pb-1 mb-1 border-b-[1px] border-neutral-200">
            <Link href={href} className="hover:cursor-pointer ">
              <p className="font-noto text-md font-bold leading-5">{name}</p>
            </Link>
            <p className="text-neutral-500 leading-6">{role}</p>
            <span className="absolute inline-block bottom-0 border-b w-full border-neutral-200" />
            <span className="absolute inline-block bottom-0 border-b w-0 border-main-orange group-hover:w-full transition-all duration-700 ease-out" />
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

// 괄호 안 문자는 폰트 크기 작게
function AcademicRankText({ academicRank }: { academicRank: string }) {
  return (
    <p className="flex items-end text-neutral-500">
      {splitParenthesis(academicRank).map((rank, i) =>
        i === 0 ? (
          <span key={rank}>{rank}</span>
        ) : (
          <span key={rank} className="inline-block scale-75 origin-left whitespace-nowrap">
            ({rank}
          </span>
        ),
      )}
    </p>
  );
}

const splitParenthesis = (text: string) => text.split('(');
