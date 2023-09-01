import { getImportants, getSlides } from '@/apis/admin';

import ImportantManagement from '@/components/admin/important/ImportantManagement';
import SlideManagement from '@/components/admin/slide/SlideManagement';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { ADMIN_MENU } from '@/types/admin';
import { admin } from '@/types/page';

import { getPath } from '@/utils/page';
import { replaceDashWithSpace } from '@/utils/replaceCharacter';

interface AdminPageProps {
  searchParams: { selected?: string; page?: string };
}

const DEFAULT_MENU = ADMIN_MENU.slide;
const adminPath = getPath(admin);

export default async function AdminPage({ searchParams: { selected, page } }: AdminPageProps) {
  const selectedMenu = selected ? replaceDashWithSpace(selected) : DEFAULT_MENU;
  const pageNum = (page && parseInt(page)) || 1;

  if (selectedMenu === ADMIN_MENU.slide) {
    const { posts, total } = await getSlides();
    return (
      <AdminPageLayout selectedMenu={selectedMenu}>
        {posts && <SlideManagement posts={posts} total={total} page={pageNum} />}
      </AdminPageLayout>
    );
  } else if (selectedMenu === ADMIN_MENU.important) {
    const { posts, total } = await getImportants();
    return (
      <AdminPageLayout selectedMenu={selectedMenu}>
        {posts && <ImportantManagement posts={posts} total={total} page={pageNum} />}
      </AdminPageLayout>
    );
  } else {
    return (
      <AdminPageLayout selectedMenu={selectedMenu}>
        <p>
          <b>{`'${selectedMenu}'`}</b>은/는 존재하지 않는 메뉴입니다.
        </p>
      </AdminPageLayout>
    );
  }
}

interface AdminPageLayoutProps {
  selectedMenu: string;
  children: React.ReactNode;
}

function AdminPageLayout({ selectedMenu, children }: AdminPageLayoutProps) {
  return (
    <PageLayout title="관리자 메뉴" titleType="big" titleMargin="mb-9">
      <SelectionList
        names={Object.values(ADMIN_MENU)}
        selectedItemName={selectedMenu}
        path={adminPath}
        listGridColumnClass="grid-cols-[200px_220px]"
      />
      {children}
    </PageLayout>
  );
}
