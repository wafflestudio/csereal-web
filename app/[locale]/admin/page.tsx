import { ADMIN_MENU_IMPORTANT, ADMIN_MENU_SLIDE } from '@/apis/types/admin';
import { getImportants } from '@/apis/v1/admin/important';
import { getSlides } from '@/apis/v1/admin/slide';
import ImportantManagement from '@/app/[locale]/admin/helper/important/ImportantManagement';
import SlideManagement from '@/app/[locale]/admin/helper/slide/SlideManagement';
import LoginVisible from '@/components/common/LoginVisible';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { admin } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { replaceDashWithSpace } from '@/utils/string';

interface AdminPageProps {
  searchParams: Promise<{ selected?: string; page?: string }>;
}

const adminPath = getPath(admin);

export default async function AdminPage(props: AdminPageProps) {
  const searchParams = await props.searchParams;

  const { selected, page } = searchParams;

  const selectedMenu = selected ? replaceDashWithSpace(selected) : ADMIN_MENU_SLIDE;
  const pageNum = (page && parseInt(page)) || 1;

  // TODO: 잘못 선택했을 때 컴포넌트 만들기(다른 곳에서도 자주 사용됨)
  if (selectedMenu !== ADMIN_MENU_SLIDE && selectedMenu !== ADMIN_MENU_IMPORTANT) return <></>;

  return (
    <PageLayout title="관리자 메뉴" titleType="big" titleMargin="mb-9">
      <LoginVisible staff fallback={<p>관리자만 사용할 수 있는 페이지입니다.</p>}>
        <SelectionList
          names={[{ ko: '슬라이드쇼 관리' }, { ko: '중요 안내 관리' }]}
          selectedItemNameKo={selectedMenu}
          rootPath={adminPath}
          listGridColumnClass="grid-cols-[200px_220px]"
        />
        <PageContent selected={selectedMenu} pageNum={pageNum} />
      </LoginVisible>
    </PageLayout>
  );
}

const PageContent = async ({ selected, pageNum }: { selected: string; pageNum: number }) => {
  if (selected === '슬라이드쇼 관리') {
    const { slides, total } = await getSlides(pageNum);
    return <SlideManagement posts={slides} total={total} />;
  } else {
    const { importants, total } = await getImportants(pageNum);
    return <ImportantManagement posts={importants} total={total} />;
  }
};
