import { getFacultyRecruitment } from '@/apis/v1/recruit';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { facultyRecruitment } from '@/utils/segmentNode';

export async function generateMetadata({ params: { locale } }: { params: { locale: Language } }) {
  return await getMetadata({ locale, node: facultyRecruitment });
}

const recruitPath = getPath(facultyRecruitment);

export default async function FacultyRecruitment() {
  const data = await getFacultyRecruitment();

  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="mb-8 text-right">
          <EditButton href={`${recruitPath}/edit`} />
        </div>
      </LoginVisible>
      <h1 className="my-5 text-3xl font-bold">{data.title}</h1>
      <HTMLViewer
        htmlContent={data.description}
        topRightContent={
          data.mainImageUrl
            ? {
                type: 'image',
                url: data.mainImageUrl,
                widthPX: 200,
                heightPX: 200,
              }
            : undefined
        }
      />
    </PageLayout>
  );
}
