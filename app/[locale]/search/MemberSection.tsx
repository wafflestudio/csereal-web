import ImageWithFallback from '@/components/common/ImageWithFallback';
import { Link } from '@/i18n/routing';
import { Member, MemberSearchResult } from '@/types/search';
import { getPath } from '@/utils/page';
import { faculty, staff } from '@/utils/segmentNode';

import CircleTitle from './helper/CircleTitle';
import Divider from './helper/Divider';
import Section from './helper/Section';

export default async function MemberSection({ member }: { member: MemberSearchResult }) {
  const professorList = member.results.filter((x) => x.memberType === 'PROFESSOR');
  const staffList = member.results.filter((x) => x.memberType === 'STAFF');

  return (
    <Section title="구성원" size={member.total}>
      {professorList.length !== 0 && (
        <>
          <CircleTitle title="교수진" />
          <div className="ml-5 mt-7 flex flex-wrap gap-10 sm:gap-12">
            {professorList.slice(0, 3).map((result) => {
              return <MemberCell key={result.id} {...result} />;
            })}
          </div>
        </>
      )}
      {professorList.length !== 0 && staffList.length !== 0 && <Divider />}
      {staffList.length !== 0 && (
        <>
          <CircleTitle title="행정직원" />
          <div className="ml-5 mt-7 flex flex-wrap gap-10 sm:gap-12">
            {staffList.slice(0, 3).map((result) => {
              return <MemberCell key={result.id} {...result} />;
            })}
          </div>
        </>
      )}
    </Section>
  );
}

const facultyPath = getPath(faculty);
const staffPath = getPath(staff);

const MemberCell = ({ name, academicRankOrRole, imageURL, memberType, id }: Member) => {
  const href = `${memberType === 'PROFESSOR' ? facultyPath : staffPath}/${id}`;

  return (
    <Link className="group flex flex-col gap-3" href={href}>
      <ImageWithFallback
        src={imageURL}
        alt={`${name} 프로필`}
        className="h-[192px] w-[144px] object-cover"
        width={144}
        height={192}
        quality={50}
        priority
        style={{
          clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
          filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
        }}
      />
      <div className="flex items-end gap-1">
        <h3 className="text-[1.04169rem] font-bold text-neutral-950 group-hover:underline">
          {name}
        </h3>
        <p className="text-md font-normal text-neutral-500">{academicRankOrRole}</p>
      </div>
    </Link>
  );
};
