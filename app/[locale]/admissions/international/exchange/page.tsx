import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function InternationalExchangePage() {
  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={htmlContent} />
    </PageLayout>
  );
}

const htmlContent = `<p>Inbound Programs<br></p><ul><li>Website<ul><li>Exchange Students: <a rel="nofollow" href="http://oia.snu.ac.kr/page/exchange_program.php">http://oia.snu.ac.kr/page/exchange_program.php</a></li><li>Visiting Students: <a rel="nofollow" href="http://oia.snu.ac.kr/page/visiting_program.php">http://oia.snu.ac.kr/page/visiting_program.php</a></li></ul></li></ul><ul><li>Contact Office: <a rel="nofollow" href="http://oia.snu.ac.kr/page/contact_us.php">http://oia.snu.ac.kr/page/contact_us.php</a></li></ul>
`;
