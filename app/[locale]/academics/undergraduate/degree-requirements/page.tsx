import { getDegreeRequirements } from '@/apis/v1/academics/undergraduate/degree-requirements';
import Attachments from '@/components/common/Attachments';
import { BlackButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { degree } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

const degreeRequirementsPath = getPath(degree);

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: degree });
}

export default async function UndergraduteDegreeRequirementsPage() {
  const data = await getDegreeRequirements();

  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="text-right">
          <Link href={`${degreeRequirementsPath}/edit`}>
            <BlackButton title="편집" />
          </Link>
        </div>
      </LoginVisible>

      <Attachments files={data.attachments} />
      <div className="mb-4 mt-6 flex w-[200px] flex-col">
        <h3 className=" mb-2 pl-3 text-lg font-bold">공통: 졸업사정 유의사항</h3>
        <StraightNode />
      </div>
      <HTMLViewer htmlContent={data.description} wrapperClassName="mt-7" />
    </PageLayout>
  );
}
