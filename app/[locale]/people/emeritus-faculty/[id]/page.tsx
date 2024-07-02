import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/navigation';

import { getEmeritusFaculty } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';

import BulletRow from '../../helper/BulletRow';
import HeaderAndList from '../../helper/HeaderAndList';
import PageTitle from '../../helper/PageTitle';
import ProfileImage from '../../helper/ProfileImage';

export async function generateMetadata({
  params: { locale, id },
}: EmeritusFacultyMemberPageProps): Promise<Metadata> {
  const faculty = await getEmeritusFaculty(id);

  return await getMetadata({
    locale,
    metadata: {
      title: `${faculty.name}`,
      description: `서울대학교 컴퓨터공학부 ${faculty.name} 교수 페이지입니다.`,
    },
  });
}

interface EmeritusFacultyMemberPageProps {
  params: { id: number; locale: string };
}

export default async function EmeritusFacultyMemberPage({
  params,
}: EmeritusFacultyMemberPageProps) {
  const t = await getTranslations('Content');
  const faculty = await getEmeritusFaculty(params.id);

  const careerTime = { startTime: faculty.startDate, endTime: faculty.endDate };

  return (
    <PageLayout title={<PageTitle {...faculty} />} titleType="big" titleMargin="mb-9">
      <div className="relative mb-10 flex flex-col items-start sm:flex-row sm:gap-[3.75rem]">
        <ProfileImage imageURL={faculty.imageURL} />
        <div className="mt-6 sm:mt-0">
          {(faculty.office || faculty.email || faculty.website) && (
            <article className="mb-6 flex flex-col  text-neutral-700">
              <h3 className=" text-base font-bold leading-8">{t('연락처')}</h3>
              <ul className="list-inside list-disc">
                {faculty.office && (
                  <BulletRow>
                    {t('교수실')}: {faculty.office}
                  </BulletRow>
                )}
                {faculty.email && (
                  <BulletRow>
                    {t('이메일')}:
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
                    {t('웹사이트')}:
                    <Link className="ml-1 text-link hover:underline" href={`${faculty.website}`}>
                      {faculty.website}
                    </Link>
                  </BulletRow>
                )}
              </ul>
            </article>
          )}
          <HeaderAndList header={t('학력')} list={faculty.educations} />
          <HeaderAndList header={t('연구 분야')} list={faculty.researchAreas ?? []} />
          <div className=" mb-7 text-sm font-medium text-neutral-700">
            {t('재직 기간')}: {careerTime.startTime} - {careerTime.endTime}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
