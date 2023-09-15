import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function InternationalGraduateAdmissionPage() {
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={htmlContent} />
    </PageLayout>
  );
}

const htmlContent = `<p>SNU's academic year begins in the Spring. The university offers admissions for the Fall semester as well as the Spring.<br></p><p>Graduate admission application initial steps are managed by the university headquarters. For more details visit the SNU Admissions Headquarters Website.</p><ul><li>Graduate: <a rel="nofollow" href="http://en.snu.ac.kr/apply/graduate/timeline">http://en.snu.ac.kr/apply/graduate/timeline</a></li></ul><p><br>For more details visit the Faculty information page at CSE homepage.</p><ul><li>CSE Faculty: <a rel="nofollow" href="http://cse.snu.ac.kr/en/people/faculty">http://cse.snu.ac.kr/en/people/faculty</a></li></ul>`;
