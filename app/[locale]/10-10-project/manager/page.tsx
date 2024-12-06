import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getPath } from '@/utils/page';
import { greetings } from '@/utils/segmentNode';

export default async function TenTenManager() {
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={htmlContent} />
    </PageLayout>
  );
}

const htmlContent = `<h3>Professor Soonhoi Ha (Department Head)<br /></h3>
<p>Codesign And Parallel Processing Lab</p>
<p>Contact info</p>
<p>Office: 301 Building, Room 408</p>
<p>Phone: (02) 880-8382 Fax: (02) 886-7589</p>
<p>Email: sha@iris.snu.ac.kr</p>
<p>
  Website:&nbsp;<a rel="nofollow" href="http://peace.snu.ac.kr/sha/">http://peace.snu.ac.kr/sha/</a>
</p>
<p>Education Ph.D. in EECS, University of California, Berkeley, 1992</p>
<p>Introduction&nbsp;:<a rel="nofollow" href="${getPath(
  greetings,
)}">https://cse.snu.ac.kr/en/greetings</a></p>
<h3>Curricular Vitae (CV)&nbsp;</h3>
<p>
  <a
    rel="nofollow"
    href="https://docs.google.com/document/d/1WmpKLWIv_xjwFv4VFOItJ4vuhfAPi-67JRCl6pszHoI/edit"
    >https://docs.google.com/document/d/1WmpKLWIv_xjwFv4VFOItJ4vuhfAPi-67JRCl6pszHoI/edit</a
  >
</p>
`;
