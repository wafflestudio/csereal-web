import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function InternationalScholarshipPage() {
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={htmlContent} />
    </PageLayout>
  );
}

const htmlContent = `<p>Students may apply for the programs before or during the admission application period or may apply after admitted at SNU.<br></p><p>Please visit headquarter and OIA site for more details.</p><ul><li>Scholarship info. at headquarter site(under graduate):<a rel="nofollow" href="http://en.snu.ac.kr/apply/under/scholarships/before-application">http://en.snu.ac.kr/apply/under/scholarships/before-application</a></li><li>Scholarship info. at headquarter site (graduate):<a rel="nofollow" href="http://en.snu.ac.kr/apply/graduate/scholarships/before-application">http://en.snu.ac.kr/apply/graduate/scholarships/before-application</a></li><li>Scholarship info. at OIA site:<a rel="nofollow" href="http://oia.snu.ac.kr/page/scholarships.php">http://oia.snu.ac.kr/page/scholarships.php</a></li></ul>`;
