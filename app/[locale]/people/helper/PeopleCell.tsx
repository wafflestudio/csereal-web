import Image from 'next/image';

import { Link } from '@/navigation';

export type PeopleType = 'FACULTY' | 'EMIRITUS_FACULTY' | 'STAFF';

export interface PeopleCellProps {
  imageURL: string;

  title: string;
  subtitle: string;
  href: string;
  titleNewline?: boolean;

  content: { text: string; href?: string }[];
}

export default function PeopleCell({
  imageURL,
  title,
  subtitle,
  href,
  titleNewline = false,
  content,
}: PeopleCellProps) {
  return (
    <article className="group flex w-fit flex-row gap-5 text-md sm:w-36 sm:flex-col sm:gap-3">
      <Link
        href={href}
        className="relative h-48 w-36"
        style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))' }}
      >
        <Image src={imageURL} alt="프로필 사진" className="object-cover" fill quality={25} />
      </Link>
      <div className="flex flex-col items-start break-keep">
        <div
          className={`relative flex w-full flex-row gap-2 pb-2.5 ${titleNewline ? 'flex-col' : ''}`}
        >
          <Link href={href} className="hover:cursor-pointer">
            <p className="text-[18px] font-bold">{title}</p>
          </Link>
          <AcademicRankText academicRank={subtitle} />
          <HoverAnimationUnderline />
        </div>

        <div className="mt-2.5 flex flex-col items-start gap-2 break-keep">
          {content.map(({ text, href }, idx) => {
            if (href) {
              return (
                <Link key={idx} href={href} className="items-center hover:underline">
                  <p>{text}</p>
                </Link>
              );
            } else {
              return <p key={idx}>{text}</p>;
            }
          })}
        </div>
      </div>
    </article>
  );
}

const HoverAnimationUnderline = () => (
  <>
    <span className="absolute bottom-0 inline-block w-full border-b border-neutral-200" />
    <span className="absolute bottom-0 inline-block w-0 border-b border-main-orange transition-all duration-700 ease-out group-hover:w-full" />
  </>
);

// 괄호 안 문자는 폰트 크기 작게
function AcademicRankText({ academicRank }: { academicRank: string }) {
  return (
    <p className="mb-px flex items-end text-neutral-500">
      {academicRank.split('(').map((rank, i) =>
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
