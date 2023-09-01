import { getImportants, getSlides } from '@/apis/admin';

import ImportantManagement from '@/components/admin/important/ImportantManagement';
import SlideManagement from '@/components/admin/slide/SlideManagement';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleImportant, SimpleSlide } from '@/types/admin';
import { admin } from '@/types/page';

import { getPath } from '@/utils/page';
import { replaceDashWithSpace } from '@/utils/replaceCharacter';

interface AdminPageProps {
  searchParams: { selected: string; page: string };
}

export const ADMIN_MENU = { slide: '슬라이드쇼 관리', important: '중요 안내 관리' };
const DEFAULT_MENU = ADMIN_MENU.slide;
const adminPath = getPath(admin);

export default async function AdminPage({ searchParams: { selected, page } }: AdminPageProps) {
  const selectedMenu = selected ? replaceDashWithSpace(selected) : DEFAULT_MENU;
  const { posts, total } =
    selectedMenu === ADMIN_MENU.slide ? await getSlides() : await getImportants();

  return (
    <PageLayout title="관리자 메뉴" titleType="big" titleMargin="mb-9">
      <SelectionList
        names={Object.values(ADMIN_MENU)}
        selectedItemName={selectedMenu}
        path={adminPath}
        listGridColumnClass="grid-cols-[200px_220px]"
      />
      {posts &&
        (selectedMenu === ADMIN_MENU.slide ? (
          <SlideManagement posts={posts as SimpleSlide[]} total={total} page={parseInt(page)} />
        ) : (
          <ImportantManagement
            posts={posts as SimpleImportant[]}
            total={total}
            page={parseInt(page)}
          />
        ))}
    </PageLayout>
  );
}
