import { Link } from '@/navigation';

import ImageWithFallback from '@/components/common/ImageWithFallback';

export type PeopleType = 'FACULTY' | 'EMIRITUS_FACULTY' | 'STAFF';

export interface PeopleCellProps {
  imageURL: string | null;

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
        className="relative h-48 w-36 cursor-pointer overflow-hidden"
        style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))' }}
      >
        <ImageWithFallback
          src={imageURL}
          alt={`${title} 프로필`}
          // 이유는 모르겠지만 여기에도 w, h를 명시해야 object-cover가 동작
          className="h-[192px] w-[144px] object-cover"
          width={144}
          height={192}
          quality={50}
        />
      </Link>
      <div className="flex flex-col items-start break-keep">
        <Link
          href={href}
          className={`relative flex w-full cursor-pointer flex-row gap-2 pb-2.5 ${
            titleNewline ? 'flex-col' : ''
          }`}
        >
          <span className="text-[18px] font-bold">{title}</span>
          <AcademicRankText academicRank={subtitle} />
          <HoverAnimationUnderline />
        </Link>

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
