export const dynamic = 'force-dynamic';

import { ReactNode } from 'react';

import { getClubs } from '@/apis/about';
import { OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/navigation';
import { Language } from '@/types/language';
import { findItemBySearchParam } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';

import ClubDetails from './ClubDetails';

export async function generateMetadata({ params: { locale } }: { params: { locale: Language } }) {
  return await getMetadata({ locale, node: studentClubs });
}

interface StudentClubsPageProps {
  params: { locale: Language };
  searchParams: { selected?: string };
}

const clubPath = getPath(studentClubs);

export default async function StudentClubsPage({ searchParams, params }: StudentClubsPageProps) {
  const clubs = await getClubs();
  const selectedClub = findItemBySearchParam(
    clubs,
    (item) => [item.en.name, item.ko.name],
    searchParams.selected,
  );

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <LoginVisible staff>
        <div className="mt-11 text-right">
          <Link href={`${clubPath}/create`}>
            <OrangeButton title="동아리 추가" />
          </Link>
        </div>
      </LoginVisible>
      <SelectionList
        names={clubs.map((club) => ({ ko: club.ko.name, en: club.en.name }))}
        selectedItemNameKo={selectedClub?.ko.name ?? ''}
        rootPath={clubPath}
      />
      {selectedClub ? (
        <ClubDetails club={selectedClub} language={params.locale} />
      ) : (
        <NotFoundLabel>{searchParams.selected}</NotFoundLabel>
      )}
    </PageLayout>
  );
}

const NotFoundLabel = ({ children }: { children: ReactNode }) => (
  <p>
    <b>{children}</b>은/는 존재하지 않는 동아리입니다.
  </p>
);
