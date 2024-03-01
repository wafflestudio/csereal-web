import Attachment from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function PrivacyPolicyPage() {
  return (
    <PageLayout title="개인정보처리방침" titleType="big" titleMargin="mb-9">
      {/* TODO: PR 합친 후 매직 넘버 없애기 */}
      <div className="mr-[300px]" style={{ marginLeft: '100px' }}>
        <HTMLViewer htmlContent={htmlContent} />
        <Attachment files={[file]} />
      </div>
    </PageLayout>
  );
}

const htmlContent =
  '<h2>1. 수집하는 개인정보의 항목 및 수집방법</h2><h3>가. 수집하는 개인정보의 항목</h3><p>첫째, 일반회원의 컴퓨터공학부 통합계정 신청시에는 컴퓨터공학부 학생임을 확인하기 위해 최초 회원가입신청 당시 아래와 같은 개인정보를 수집하고 있습니다.</p><ul><li>필수항목 : 이름, 아이디, 학번(학사 또는 석사, 박사), 분류, 전자 우편, 휴대폰 번호, 졸업 예정일.</li><li>2011년 9월 제정된 개인정보 보호법 시행령에 따라 주민등록번호를 수집하지 않고 행정실을 통해 학적을 확인하고 있습니다.</li><li>선택사항 : 교직원 및 동문이 아닌 교수의 경우 학적과 관계된 항목</li></ul><p>둘째, 대기회원은 서울대학교 학번이 발급되기 이전의 신입생 및 컴퓨터공학 동문회회원으로 구성되며, 회원가입신청 당시 아래와 같은 개인정보를 수집하고 있습니다.</p><ul><li>필수항목 : 이름, 생년월일, 아이디, 학번의 년도, 분류, 전자 우편, 휴대폰 번호.</li><li>대기회원이 일반 통합회원으로 전환하기 위해서는 일반 통합회원의 필수항목 기재와 행정실을 통한 학적 확인이 필요합니다.</li></ul><p>셋째, 컴퓨터 공학부 커뮤니티 SNUCSE를 이용하면서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</p><ul><li>IP Address, 방문 일시</li></ul><h3>나. 개인정보 수집방법</h3><p>개인정보는 홈페이지를 이용하여 수집합니다.</p><h2>2. 개인정보의 수집목적 및 이용목적</h2><h3>가. 본인 인증</h3><ul><li>첫째, 일반회원의 구 서울대학교 컴퓨터공학과, 전자계산기학과, 전산학과, 응용수학과와 현 서울대학교 컴퓨터공학부 학적확인</li><li>둘째, 대기회원의 신입생, 컴퓨터공학 동문회 회원의 인증 관리자를 통한 본인 인증</li></ul><h3>나. 회원제 서비스 제공</h3><ul><li>첫째, 일반회원에게는 현 컴퓨터공학부의 회원제 서비스인 SNUCSE 커뮤니티, 학부 실습실, 리눅스, 프린터 서비스, 메일계정, DNS 및 호스팅 서비스</li><li>둘째, 대기회원에게 해당 대기회원레벨의 회원제 서비스인 SNUCSE 커뮤니티의 일부 게시판에 대하여 글 쓰기/읽기 및 태그 보기, 본인 프로필 페이지 열람 및 수정, 메일링 리스트 가입</li></ul><h3>다. 회원관리</h3><p>회원제 서비스 이용 및 개인식별, 가입의사 확인, 가입 및 가입횟수 제한.</p><h3>라. 동문 정보 공유</h3><p>컴퓨터공학부 구성원들간의 연락처 및 생일 정보 공유, 컴퓨터공학 동문회 메일링 리스트 구성 및 학부 메일링리스트 구성</p><h3>마. 신규서비스 개발 및 통계</h3><p>신규 서비스 개발, 서비스의 유효성 확인 및 접속빈도파악</p><h2>3. 개인정보의 공유 및 제공</h2><p>이용자들의 개인정보는 원칙적으로 SNUCSE에 공개되어 있습니다. 단, 학번정보는 년도와 분류만 공개이며, 나머지는 이용자가 원하면 비공개로 설정이 가능합니다. 그 외에는 이용자들의 개인정보를 "2. 개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 단, 아래의 경우에는 예외로 합니다.</p><ul><li>SNUCSE를 제외한 개인정보 외부 공개에 대해 이용자들의 사전에 공개에 동의한 경우.</li><li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우.</li></ul><h2>4. 개인정보의 보유 및 이용기간</h2><h3>가. 통합계정 발급 시 입력한 개인정보</h3><ul><li>보존이유 : 계정 발급 후 개별적인 연락이 필요한 경우, 동문회 동문 정보공유. 회원제 서비스 중 졸업생처리 및 서비스 권한 설정. 중복 가입 방지</li><li>보존기간 : 2년</li></ul><h3>나. 방문 기록</h3><ul><li>보존이유 : 사용량 통계</li><li>보존기간 : 3개월</li></ul><h2>5. 개인정보 파기절차</h2><h3>가. 파기절차</h3><ul><li>이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침에 따라(보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다.</li><li>동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</li></ul><h2>6. 개인정보의 기술적/관리적 보호 대책</h2><p>커뮤니티는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.</p><h3>가. 기술적인 대책</h3><ul><li>회원 계정의 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알고 있으며, 비밀번호의 변경 및 계정 관리 이메일 변경은 비밀번호와 관리 이메일의 접근권한을 가지고 있는 본인에 의해서만 가능합니다.</li><li>개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있습니다.</li><li>최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 손상되지 않도록 방지하고 있습니다.</li><li>암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.</li><li>기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.</li></ul><h3>나. 관리적인 대책</h3><ul><li>사용자 스스로 주의가 필요합니다. 계정은 반드시 본인만 사용하시고 비밀번호를 자주 바꿔주시는 것이 좋습니다.</li><li>커뮤니티의 개인정보관련 취급은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있습니다.</li><li>담당자에 대한 교육을 통해 개인정보취급방침의 준수를 항상 강조하고 있습니다.</li><li>이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호 등 개인정보가 유출되어 발생한 문제에 대해서는 일체의 책임을 지지 않습니다.</li></ul><h2>7. 개인정보처리 위탁</h2><p>커뮤니티는 원칙적으로 이용자의 개인정보를 타인에게 위탁하지 않습니다. 향후 개인정보처리 위탁 필요가 생길 경우, 위탁대상자, 위탁업무내용, 위탁기간, 위탁계약 내용(개인정보보호 관련 법규의 준수, 개인정보에 관한 제3자 제공 금지 및 책임부담 등을 규정)을 공지사항 및 개인정보처리방침을 통해 고지하겠습니다. 또한 필요한 경우 사전 동의를 받도록 하겠습니다.</p><h2>8. 개인정보민원 연락처</h2><p>사용자는 서비스를 이용하시며 발생하는 모든 개인정보 관련 민원을 신고하실 수 있습니다. 바쿠스는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p><ul><li>바쿠스 : contact @ bacchus.snucse.org</li></ul><p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p><ul><li>개인정보침해신고센터 (<a href="http://www.cyberprivacy.or.kr/">http://www.cyberprivacy.or.kr</a>/ 1336)</li><li>정보보호마크인증위원회 (<a href="http://www.eprivacy.or.kr/">www.eprivacy.or.kr</a>/ 02-580-0533~4)</li><li>대검찰청 첨단범죄수사과 (<a href="http://www.spo.go.kr/">http://www.spo.go.kr</a>/ 02-3480-2000)</li><li>경찰청 사이버테러대응센터 (<a href="http://www.ctrc.go.kr/">www.ctrc.go.kr</a>/ 02-392-0330)</li></ul><h2>9. 개인정보보호 책임자</h2><p>본 홈페이지는 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자 및 실무담당자를 지정하고 있습니다.(개인정보보호법 제31조제1항에 따른 개인정보보호책임자)</p><h3>서울대학교 개인정보보호 총괄 책임자</h3><ul><li>담당부서 : 사무국</li><li>성명 : 박융수</li><li>전화번호 : 02) 880-5091</li><li>이메일 :<a href="mailto:privacy@snu.ac.kr">privacy@snu.ac.kr</a></li></ul><h3>서울대학교 개인정보보호 총괄 담당자</h3><ul><li>담당부서 : 사무국 총무과</li><li>성명 : 총무과장, 정보화지원과장, 캠퍼스관리과장</li><li>전화번호 : 02) 880-5091, 5359, 5228</li><li>이메일 :<a href="mailto:privacy@snu.ac.kr">privacy@snu.ac.kr</a></li></ul><h3>컴퓨터공학부 개인정보보호 책임자</h3><ul><li>담당부서 : 컴퓨터공학부 행정실</li><li>성명 : 우미숙</li><li>전화번호 : 02) 880-6583</li><li>이메일 :<a href="mailto:misuk@snu.ac.kr">misuk@snu.ac.kr</a></li></ul><h3>컴퓨터공학부 개인정보보호 담당자</h3><ul><li>담당부서 : 컴퓨터공학부 행정실</li><li>성명 : 한민정</li><li>전화번호 : 02) 880-1527</li><li>이메일 :<a href="mailto:alswjd@snu.ac.kr">alswjd@snu.ac.kr</a></li></ul>';

const file = {
  name: '「서울대학교 개인정보 처리방침」 전문.pdf',
  url: 'https://cse-dev-waffle.bacchus.io/sites/default/files/node--page/「서울대학교%20개인정보%20처리방침」%20전문%20%281%29.pdf',
  bytes: 322.92 * 1000,
};