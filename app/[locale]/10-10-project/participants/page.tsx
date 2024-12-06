import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function TenTenParticipants() {
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={htmlContent} />
    </PageLayout>
  );
}

const htmlContent = `<h3><strong>Academic Excellence Team</strong><br /></h3>
<p>Team Leader: Prof. U Kang</p>
<p>Prof. Choong Gil Hur</p>
<p>Prof. Tae Hyun Kim</p>
<p>Prof. Myung-Soo Kim</p>
<p>Prof. Tae Kyoung Kwon</p>
<p>Prof. Heon Young Yeom</p>
<p><br /></p>
<h3>Industry Collaboration Team</h3>
<p>Team Leader: -Prof. Jin Soo Kim:</p>
<p>Prof. Hyeon Sang Eom:</p>
<p>Prof. Chong Kwon Kim</p>
<p>Prof. Hyoung Joo Kim</p>
<p>Prof. Ji Hong Kim</p>
<p>Prof. Chang Gun Lee</p>
<p>Prof. Jae Jin Lee</p>
<p>Prof. Yeong Kil Shin</p>
<p><br /></p>
<h3>AI Team</h3>
<p>Team Leader: Prof. Gun Hee Kim</p>
<p>Prof. Yang Hee Choi</p>
<p>Prof. Byung Gon Chun</p>
<p>Prof. Sun Kim</p>
<p>Prof. Sang Goo Lee</p>
<p>Prof. Byung-Ro Moon</p>
<p>Prof. Hyun Oh Song</p>
<p>Prof. Byung Tak Zhang</p>
<p>Prof. Sung Joo Yoo</p>
<p><br /></p>
<h3>Human Resources Team</h3>
<p>Team Leader: Prof. Jin Wook Seo</p>
<p>Prof. Bernhard Egger</p>
<p>Prof. Wha Sook Jeon</p>
<p>Prof. Jae Wook Lee</p>
<p>Prof. Je Hee Lee</p>
<p>Prof. Young Ki Lee</p>
<p>Prof. Bong Ki Moon</p>
<p>Prof. Kun Soo Park</p>
<p>Prof. Kwang Keun Yi</p>
<p>
  <a href="/people/faculty">click here for detailed info of participants</a>
</p>`;
