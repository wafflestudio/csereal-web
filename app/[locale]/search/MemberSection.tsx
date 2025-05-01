import { Member, MemberSearchResult } from '@/apis/types/search';
import CircleTitle from '@/app/[locale]/search/helper/CircleTitle';
import Divider from '@/app/[locale]/search/helper/Divider';
import Section from '@/app/[locale]/search/helper/Section';
import styles from '@/app/[locale]/search/style.module.css';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import { faculty, staff } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

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
        className={`h-[192px] w-[144px] object-cover ${styles.memberImage}`}
        width={144}
        height={192}
        quality={50}
        priority
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
