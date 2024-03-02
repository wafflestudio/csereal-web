'use client';

import useSWR from 'swr';

import { getImportants, getSlides } from '@/apis/admin';
// import { getImportants, getSlides } from '@/apis/adminServer';

import ImportantManagement from '@/components/admin/important/ImportantManagement';
import SlideManagement from '@/components/admin/slide/SlideManagement';
import LoginStaffVisible from '@/components/common/auth/LoginStaffVisible';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { ADMIN_MENU, ImportantPreview, SlidePreview } from '@/types/admin';

import { getPath } from '@/utils/page';
import { replaceDashWithSpace } from '@/utils/replaceCharacter';
import { admin } from '@/utils/segmentNode';

interface AdminPageProps {
  searchParams: { selected?: string; page?: string };
}

const DEFAULT_MENU = ADMIN_MENU.slide;
const adminPath = getPath(admin);

const getAdminData = async (selectedMenu: string, pageNum: number) => {
  if (selectedMenu === ADMIN_MENU.slide) {
    return await getSlides(pageNum);
  } else {
    return await getImportants(pageNum);
  }
};

export default function AdminPage({ searchParams: { selected, page } }: AdminPageProps) {
  const selectedMenu = selected ? replaceDashWithSpace(selected) : DEFAULT_MENU;
  const pageNum = (page && parseInt(page)) || 1;
  const { data } = useSWR(['/admin', selectedMenu, pageNum], () =>
    getAdminData(selectedMenu, pageNum),
  );

  if (selectedMenu === ADMIN_MENU.slide && data) {
    const { slides, total } = data as { slides: SlidePreview[]; total: number };
    return (
      <AdminPageLayout selectedMenu={selectedMenu}>
        {slides && <SlideManagement posts={slides} total={total} page={pageNum} />}
      </AdminPageLayout>
    );
  } else if (selectedMenu === ADMIN_MENU.important && data) {
    const { importants, total } = data as { importants: ImportantPreview[]; total: number };
    return (
      <AdminPageLayout selectedMenu={selectedMenu}>
        {importants && <ImportantManagement posts={importants} total={total} page={pageNum} />}
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
      <LoginStaffVisible fallback={<p>관리자만 사용할 수 있는 페이지입니다.</p>}>
        <SelectionList
          names={Object.values(ADMIN_MENU)}
          selectedItemName={selectedMenu}
          path={adminPath}
          listGridColumnClass="grid-cols-[200px_220px]"
        />
        {children}
      </LoginStaffVisible>
    </PageLayout>
  );
}
