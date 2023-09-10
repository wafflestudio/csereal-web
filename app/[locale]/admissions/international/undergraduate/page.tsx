import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function InternationalUndergraduateAdmissionPage() {
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={htmlContent} />
    </PageLayout>
  );
}

const htmlContent =
  '<p>Undergraduate admissions are managed by the university headquarters. For more details visit the SNU Admissions Headquarters Website. The SNU Admissions Headquarters Websiteholds the latest information.<br></p><ul><li>Overview:<a rel="nofollow" href="http://en.snu.ac.kr/apply/info">http://en.snu.ac.kr/apply/info</a></li><li>Undergraduate:<a rel="nofollow" href="http://en.snu.ac.kr/apply/under/timeline">http://en.snu.ac.kr/apply/under/timeline</a></li><li>Exchange Programs:<a rel="nofollow" href="http://en.snu.ac.kr/apply/exchange/programs">http://en.snu.ac.kr/apply/exchange/programs</a></li><li>Int’l Summer Institute:<a rel="nofollow" href="http://en.snu.ac.kr/apply/summer">http://en.snu.ac.kr/apply/summer</a></li><li>Korean Language Course:<a rel="nofollow" href="http://en.snu.ac.kr/apply/language/programs">http://en.snu.ac.kr/apply/language/programs</a></li></ul>';
