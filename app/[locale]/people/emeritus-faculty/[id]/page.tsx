import { Metadata } from 'next';

import { Link } from '@/navigation';

import { getEmeritusFaculty } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import BulletRow from '../../helper/BulletRow';
import HeaderAndList from '../../helper/HeaderAndList';
import PageTitle from '../../helper/PageTitle';
import ProfileImage from '../../helper/ProfileImage';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const faculty = await getData(parseInt(params.id));

  return {
    title: `${faculty.name}`,
    description: `서울대학교 컴퓨터공학부 ${faculty.name} 교수 페이지입니다.`,
  };
}

export default async function EmeritusFacultyMemberPage({ params }: { params: { id: number } }) {
  const faculty = await getData(params.id);
  const careerTime = { startTime: faculty.startDate, endTime: faculty.endDate };

  return (
    <PageLayout title={<PageTitle {...faculty} />} titleType="big" titleMargin="mb-9">
      <div className="relative mb-10 flex flex-col items-start sm:flex-row sm:gap-[3.75rem]">
        <ProfileImage imageURL={faculty.imageURL} />
        <div className="mt-6 sm:mt-0">
          {(faculty.office || faculty.email || faculty.website) && (
            <article className="mb-6 flex flex-col  text-neutral-700">
              <h3 className=" text-base font-bold leading-8">연락처 정보</h3>
              <ul className="list-inside list-disc">
                {faculty.office && <BulletRow>교수실: {faculty.office}</BulletRow>}
                {faculty.email && (
                  <BulletRow>
                    이메일:
                    <Link
                      className="ml-1 text-link hover:underline"
                      href={`mailto:${faculty.email}`}
                    >
                      {faculty.email}
                    </Link>
                  </BulletRow>
                )}
                {faculty.website && (
                  <BulletRow>
                    웹사이트:
                    <Link className="ml-1 text-link hover:underline" href={`${faculty.website}`}>
                      {faculty.website}
                    </Link>
                  </BulletRow>
                )}
              </ul>
            </article>
          )}
          <HeaderAndList header="학력" list={faculty.educations} />
          <HeaderAndList header="연구 분야" list={faculty.researchAreas ?? []} />
          <div className=" mb-7 text-sm font-medium text-neutral-700">
            재직 기간: {careerTime.startTime} - {careerTime.endTime}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

async function getData(id: number) {
  const faculty = await getEmeritusFaculty(id);

  return faculty;
}
