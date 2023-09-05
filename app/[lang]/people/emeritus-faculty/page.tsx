import { Locale } from '@/i18n-config';

import { getEmeritusFacultyList, getEmeritusFacultyListEng } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default async function EmeritusFacultyPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const facultyList =
    lang === 'ko' ? await getEmeritusFacultyList() : await getEmeritusFacultyListEng();
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="grid grid-cols-4 gap-14">
        {facultyList.map((emeritusFaculty, index) => (
          <PeopleRow
            type="EMIRITUS_FACULTY"
            key={index}
            id={emeritusFaculty.id}
            name={emeritusFaculty.name}
            academicRank={emeritusFaculty.academicRank}
            email={emeritusFaculty.email}
            imageURL={emeritusFaculty.imageURL}
          />
        ))}
      </div>
    </PageLayout>
  );
}
