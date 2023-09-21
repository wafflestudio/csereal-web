import { Club, Direction, Facilities } from '@/types/about';
import { Course, CourseChange, DegreeRequirements } from '@/types/academics';
import {
  EmiritusFaculty,
  Faculty,
  SimpleEmiritusFaculty,
  SimpleFaculty,
  Staff,
  StaffList,
} from '@/types/people';
import {
  ResearchCenter,
  ResearchGroups,
  SimpleResearchLab,
  TopConferenceList,
} from '@/types/research';

export const careerStatRows = ['삼성', 'LG', '기타 대기업', '중소기업', '진학', '기타'];
export const careerStatCols = ['학부', '석사', '박사'];

export const careerStat = {
  2021: [
    [0, 5, 6],
    [2, 1, 0],
    [6, 4, 1],
    [22, 16, 8],
    [16, 8, 1],
    [16, 20, 2],
  ],
  2020: [
    [4, 5, 3],
    [3, 2, 0],
    [8, 9, 2],
    [3, 14, 2],
    [14, 4, 2],
    [30, 24, 17],
  ],
  2019: [
    [4, 6, 4],
    [5, 1, 0],
    [5, 7, 3],
    [9, 13, 2],
    [25, 7, 1],
    [22, 22, 13],
  ],
  2018: [
    [1, 8, 6],
    [2, 5, 0],
    [7, 10, 2],
    [3, 8, 2],
    [17, 8, 2],
    [25, 18, 6],
  ],
  2017: [
    [3, 6, 5],
    [0, 2, 0],
    [3, 7, 2],
    [12, 12, 5],
    [30, 5, 1],
    [20, 16, 8],
  ],
  2016: [
    [4, 10, 12],
    [0, 3, 1],
    [6, 6, 0],
    [4, 2, 2],
    [24, 3, 1],
    [18, 12, 3],
  ],
  2015: [
    [3, 5, 5],
    [0, 6, 0],
    [3, 10, 1],
    [5, 4, 2],
    [29, 7, 1],
    [14, 16, 5],
  ],
  2014: [
    [1, 4, 8],
    [2, 1, 0],
    [2, 1, 0],
    [6, 5, 1],
    [23, 3, 3],
    [11, 15, 10],
  ],
  2013: [
    [5, 9, 11],
    [1, 2, 2],
    [9, 6, 1],
    [2, 6, 2],
    [12, 6, 0],
    [12, 18, 15],
  ],
  2012: [
    [1, 4, 8],
    [3, 5, 1],
    [8, 11, 3],
    [8, 8, 2],
    [20, 5, 1],
    [17, 16, 15],
  ],
  2011: [
    [3, 3, 10],
    [1, 13, 1],
    [8, 6, 0],
    [5, 5, 4],
    [18, 5, 1],
    [14, 26, 13],
  ],
};

export const futureCompanies = [
  { name: '서울정보시스템(주)', url: 'http://www.nsis.co.kr/homepage/index.html', year: 1984 },
  { name: '(주)나다텔', url: 'http://www.nadatel.com/', year: 1992 },
  { name: '넥슨코리아', url: 'https://company.nexon.com', year: 1994 },
  { name: '엠케이일렉트로닉스', url: 'http://www.mkelec.com/', year: 1994 },
  { name: '(주)세라시스템', url: 'https://www.serasystem.com/', year: 1994 },
  { name: '(주)블루인포시스', year: 1995 },
  { name: '키스톤 테크놀로지', year: 1995, url: 'http://www.keystone.co.kr/' },
  { name: '(주)아이엠디비', year: 1997 },
  { name: '(주)넷사랑컴퓨터', url: 'https://www.netsarang.com/ko/', year: 1998 },
  { name: '콘트로닉스', year: 1998 },
  { name: '엔에이치엔', url: 'https://www.nhn.com', year: 1999 },
  { name: '네이버', url: 'https://www.naver.com', year: 1999 },
  { name: '코난테크놀로지', url: 'https://www.konantech.com', year: 1999 },
  { name: '지인정보기술㈜', year: 1999 },
  { name: '(주)위트넷', year: 1999 },
  { name: '(주)라오넷', year: 2000 },
  { name: '스몰소프트(주)', year: 2000 },
  { name: '(주)어헤드모바일', year: 2000 },
  { name: '(주)테크노니아', url: 'http://www.technonia.com/', year: 2000 },
  { name: '(주)옵투스자산운용', url: 'http://www.optus.co.kr/', year: 2001 },
  { name: '듀어텔(주)', year: 2001 },
  { name: '메트릭스솔루션', year: 2002 },
  { name: '(주)시큐러스아이엔씨', year: 2002 },
  { name: '엑스엘게임즈', url: 'https://www.xlgames.com', year: 2003 },
  { name: '(주)젠다소프트', url: 'http://zenda.co.kr/', year: 2003 },
  { name: '(주)네오이노', year: 2004 },
  { name: '아이볼타(주)', year: 2006 },
  { name: '(주)인디링스', year: 2006 },
  { name: '스피킹 맥스', url: 'https://www.speakingmax.com/', year: 2008 },
  { name: '한마리곰미디어', url: 'http://hangom.com', year: 2008 },
  { name: 'CRZ 테크놀로지', url: 'https://www.crz-tech.com', year: 2009 },
  { name: '워터베어소프트', url: 'http://www.waterbear.co.kr', year: 2010 },
  { name: '두나무', url: 'https://www.dunamu.com', year: 2012 },
  { name: '센드버드', url: 'https://sendbird.com/ko', year: 2012 },
  { name: '매니코어소프트', url: 'http://manycoresoft.co.kr', year: 2012 },
  { name: '그렙', url: 'https://www.grepp.co', year: 2013 },
  { name: '베스파', url: 'https://www.vespainc.com', year: 2013 },
  { name: '로그프레소', url: 'https://logpresso.com/ko', year: 2013 },
  { name: '멋쟁이 사자처럼', url: 'https://www.likelion.net', year: 2013 },
  { name: '몰로코', url: 'https://www.moloco.com/', year: 2013 },
  { name: '이디엄', year: 2013 },
  { name: '다이닝코드', url: 'https://www.diningcode.com', year: 2014 },
  { name: '싱타', url: 'http://www.singta.co', year: 2014 },
  { name: '하이퍼커넥트', url: 'https://hyperconnect.com/ko/', year: 2014 },
  { name: '주식회사 댄디라이언', url: 'http://www.dandylion.co.kr/', year: 2014 },
  { name: '주식회사써로마인드', url: 'http://surromind.ai', year: 2015 },
  { name: '법무법인 비트', year: 2015, url: 'https://www.veatlaw.kr' },
  { name: '주식회사레벨소프트', url: 'http://www.rebelsoft.co.kr', year: 2015 },
  { name: '폴라리언트', url: 'http://www.polariant.io/', year: 2015 },
  { name: '스탠다임', url: 'https://www.standigm.com/main', year: 2015 },
  { name: '앵커리어', url: 'https://anchoreer.oopy.io', year: 2015 },
  { name: '스켈터랩스', url: 'https://www.skelterlabs.com', year: 2015 },
  { name: '주식회사 플링크', year: 2015, url: 'https://www.pagecall.com' },
  { name: '㈜파두', url: 'https://fadu.io', year: 2015 },
  { name: '사십이컴퍼니', year: 2015 },
  { name: '시큐리티플랫폼 주식회사', url: 'https://www.securityplatform.co.kr', year: 2015 },
  { name: '(주)매이블러', url: 'http://www.maybler.com/', year: 2015 },
  { name: '밀리의서재', url: 'https://www.millie.co.kr/', year: 2016 },
  { name: '바이올렛', url: 'https://violet.team', year: 2016 },
  { name: '에스프레스토', url: 'https://www.spresto.net', year: 2016 },
  { name: '주식회사인텔리시스', url: 'http://intellisys.co.kr', year: 2017 },
  { name: '베어로보틱스코리아', url: 'https://kr.bearrobotics.ai', year: 2017 },
  { name: '인텔리시스', url: 'http://intellisys.co.kr', year: 2017 },
  { name: '옴니아트', url: 'http://www.omniart.co.kr/', year: 2017 },
  { name: '플로바', url: 'https://flova.kr/', year: 2017 },
  { name: '주식회사 메이코더스', url: 'https://maycoders.com', year: 2017 },
  { name: '카르타', url: 'https://www.meissa.ai/ko/', year: 2017 },
  { name: '딥트레이드', url: 'https://deeptrade.co/', year: 2018 },
  { name: '프로비트', url: 'https://www.probit.kr/ko-kr/', year: 2018 },
  { name: '크로스앵글', url: 'https://xangle.io/', year: 2018 },
  { name: '주식회사네트워크디파인즈', url: 'http://www.networkdefines.com/', year: 2018 },
  { name: '케이디에듀', year: 2018 },
  { name: '모아이스', url: 'http://kr.moais.co.kr/', year: 2019 },
  { name: '커미터', year: 2019 },
  { name: '옴니스랩스', url: 'https://www.deepblock.net/', year: 2019 },
  { name: '(주)인이지', url: 'https://www.ineeji.com/', year: 2019 },
  { name: '주식회사만든다', year: 2020 },
  { name: '스웨트', year: 2020 },
  { name: '에브리바이크', url: 'https://everybike.io/', year: 2020 },
  { name: '주식회사 모레', year: 2020, url: 'https://www.moreh.io/' },
  { name: '주식회사넥스트에디션', url: 'https://camfit.co.kr/', year: 2020 },
  { name: '테아트룸', url: 'https://livelystage.com/', year: 2020 },
  { name: '지로(두둠)', year: 2020 },
  { name: '미르니', url: 'https://www.mirny.io/', year: 2020 },
  { name: '에브리데이톡', url: 'https://www.everydaytalk.net/', year: 2020 },
  { name: '알파그래픽스', year: 2020 },
  { name: '엔트로피패러독스 주식회사', year: 2020, url: 'https://entropyparadox.com' },
  { name: '지크립토', url: 'https://www.zkrypto.com', year: 2020 },
  { name: '모이하우(주)', year: 2020 },
  { name: '(주)어크로스비', url: 'https://www.acrossb.net', year: 2020 },
  { name: '3R Innovation', year: 2021, url: 'https://3rinnovation.com/' },
  { name: '팬세이션주식회사', url: 'https://corp.fansation.net/', year: 2021 },
  { name: 'https://www.waveon.io/', year: 2021 },
  { name: '데이탄소프트', url: 'https://www.datansoft.com/', year: 2021 },
  { name: '네온시티주식회사', url: 'http://neoncity.co.kr/', year: 2021 },
  { name: '(주)아이겐드럭', url: 'https://www.aigendrug.com', year: 2021 },
  { name: '텅스텐에이아이', url: 'https://www.tungsten-ai.com', year: 2021 },
  { name: 'growdle', url: 'https://www.growdle.com/', year: 2021 },
  { name: '메드키트', url: 'https://medkit.co.kr/', year: 2021 },
  { name: '(주)브랜치앤바운드', url: 'https://www.codetree.ai/landing', year: 2021 },
  { name: '블록누커', url: 'https://www.etheruko.com/', year: 2022 },
  { name: '주식회사 쿳션', year: 2022 },
].sort((a, b) => b.year - a.year);

export const clubs: Club[] = [
  {
    name: '가디언',
    engName: 'Guardian',
    description:
      '<p>​<a href="http://guardian.snucse.org">가디언</a>은 1999년 4월 30일에 창립된 서울대학교 보안 연구 동아리입니다.<br></p><p>가디언에서는 시스템, 웹, 네트워크, 모바일 등 다양한 분야에서 취약점을 찾고 공격과 방어 기법을 연구하며 해킹에 대한 열정을 펼치고 있습니다. 보안 분야의 진입장벽을 낮추기 위해 신입회원을 위한 교육을 진행하며, 개강총회와 종강총회에서 그동안 연구한 내용들을 발표하기도 합니다.<br>또한 DEF CON 등 다양한 보안 대회에 출전하는 등 활발한 활동을 진행하고 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>주로 3월에 신입회원을 모집하고 9월에도 비정기적으로 모집합니다.</p><p><br></p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>가디언은 전 세계의 내로라하는 해킹/보안 팀이 참가하는 해킹/보안 대회에서 꾸준히 좋은 성적을 내고 있다.<br>특히 2013년에는 전년보다 대회 참여 인원이 대폭 늘어 4월에 열린 PlaidCTF에서는 17위, 6월 예선과 8월 본선이 열린 DEFCON CTF에서는 보안 팀 Alternatives와 연합 참가하여 각각 17위(본선 진출), 8위를 차지했다.<br>이 밖에도 CodeGate, SECUINSIDE CTF, Ghost In The Shellcode 등 다양한 대회에 출전하여 실력을 쌓고 있다.</p><p><br></p><h3><strong>연락처</strong></h3><hr class="__se__solid"><p>이메일: snucsguard@gmail.com<br>홈페이지:&nbsp;<a href="http://guardian.snucse.org/">http://guardian.snucse.org</a></p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/%EA%B0%80%EB%94%94%EC%96%B8_%EB%A1%9C%EA%B3%A0.jpg?itok=Jk3PN69X',
  },
  {
    name: '바쿠스',
    engName: 'Bacchus',
    description:
      '<p><a href="http://bacchus.snucse.org/">바쿠스</a>는 서울대학교 컴퓨터공학부의 시스템 관리자 모임입니다.<br></p><p>바쿠스는 실습실 및 PC, 서버관리를 비롯해 다양한 서비스를 컴퓨터공학부 구성원에게 제공하는 일을 하고 있으며 이와 같은 일을 전문적이고 체계적으로 하기 위한 시스템 및 소프트웨어 연구 동아리입니다.<br>하나의 계정으로 실습실 PC 사용, 리눅스 서버 사용, 학부 커뮤니티 사이트 이용을 가능케 하는 통합 계정 서비스를 제공하고 있으며,&nbsp;<a href="http://www.snucse.org/">컴퓨터공학부 커뮤니티 사이트</a>를 개발, 관리 및 유지 보수하는 일도 담당하고 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>주로 3월, 9월에 신입회원을 모집하며, 신입회원은 수습기간 후 정회원으로 활동하게 됩니다.</p><p><br></p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>깃헙(<a href="https://github.com/bacchus-snu/">https://github.com/bacchus-snu/</a>) 에서 확인할 수 있습니다.</p><p><br></p><h3><strong>연락처</strong></h3><hr class="__se__solid"><p>이메일: contact@bacchus.snucse.org<br>홈페이지:&nbsp;<a href="https://bacchus.snucse.org/">https://bacchus.snucse.org</a></p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/bacchus_0.png?itok=1o1B-7or',
  },
  {
    name: '사커301',
    engName: 'Soccer301',
    description:
      '<p>2008년 결성된 학부 내 축구를 좋아하고 즐기는 학생들로 구성된 축구 동아리이다. 축구를 통한 체력 향상 및 친목 도모를 목표로 한다. 매주 주말 모여 훈련 및 친선경기를 하고 있으며 서울대 학내에서 열리는 총장배 구기대회, 공대 학장배 축구대회, 공대축제 축구대회 등 여러 대회에 꾸준히 참가해 좋은 성적을 내고 있다.<br></p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>상시 모집</p><p><br></p><h3><strong>대회 성적</strong></h3><hr class="__se__solid"><p>2009년 공대 학장배 3위<br>2013년 공대 축제 3위<br>2014년 공대 학장배 1위<br>2014년 공대 축제 1위</p><p><br></p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/Soccer301_%EB%A1%9C%EA%B3%A0.jpg?itok=_wtIa-xW',
  },
  {
    name: '슈타인',
    engName: 'Stein',
    description:
      '<p>슈타인은 2012년 결성된 학부 내 경음악에 흥미와 소질이 있는 학생들로 구성된 밴드 동아리이다. 매년 신입 회원을 영입하여 기 단위로 운영되는 슈타인은 연중 수시로 합주를 하며 친목을 다지는 것을 목표로 한다.<br></p><p>주요 활동으로는 정기 공연 및 타 학교의 밴드들과의 교류 등이 있다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>매년 3월 중순경 가입신청을 받은 후, 오디션을 통해 선발한다.</p><p><br></p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>■ 17,18,19학번 활동중<br>■ 19학번 주1회 정기 연습<br>■ 3월 22일 타 동아리와 합동 공연<br>■ 신입들과의 회식</p><p><br></p><h3><strong>동아리 활동 계획</strong></h3><hr class="__se__solid"><p>■ 6월 28일 타 동아리와 합동 공연 예정<br>■ 7월 정기공연, 컴밤 공연 예정</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/Stein.PNG?itok=J8eVZbbZ',
  },
  {
    name: '스눕스',
    engName: 'SNUPS',
    description:
      '<p><a href="https://snups.org/">스눕스(SNUPS)</a>는 컴퓨터공학의 한 분야인 문제 해결 및 알고리즘을 공부하고 연구하는 동아리입니다.<br></p><p>다양한 난이도의 스터디를 통해 회원 개개인의 실력을 기르고 각종 온/오프라인 프로그래밍 대회에 참가하는 것이 주된 활동이며, 모든 서울대학교 학생이 참가할 수 있는 서울대학교 프로그래밍 경시대회(SNUPC)를 직접 준비 및 개최하고 있습니다.<br>매년 많은 회원들이 삼성 대학생 프로그래밍 경진대회(SCPC), 카카오 코드 페스티벌, Google Code Jam, Facebook Hacker Cup 등 여러 프로그래밍 대회에서 높은 성과를 거두고 있으며, 특히 최근 3년(2017~2019) 동안 SNUPS 회원들로 구성된 팀이 국제 대학생 프로그래밍 경시대회(ACM-ICPC) 국내 대회에서 대상을 차지하고 세계 대회에 출전해 메달을 획득한 바 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>주로 3월 달에 신입생을 모집하며, 스눕스 구성원과의 개별 연락을 통해 상시 가입도 가능하다.</p><p><br></p><h3><strong>최근 동아리 활동 현황</strong></h3><hr class="__se__solid"><p>ipsc, icpc, 전국 대학생 프로그래밍동아리 연합 대회 등에 3인팀을 꾸려 출전하고 있으며, google code jam, facebook hacker cup나 기타 PS 대회에 스눕스 소속으로 개인출전하고 있다. 팀을 꾸릴 때는 SNUTOC(SNU Team Organization Contest) 등의 내부대회를 통해 실력과 분야에 맞는 팀원을 구성하여 출전하고 있다.</p><p>2019년 ACM-ICPC World Final 은메달 (7위)<br>2018년 ACM-ICPC World Final 은메달 (5위)<br>2017년 ACM-ICPC World Final 금메달 (3위)<br>2018년 ACM-ICPC Asia Taipei Regional Contest 3위<br>2017년 ACM-ICPC Asia Tsukuba Regional Contest 2위<br>2017년 ACM-ICPC Asia Hua-Lien Regional Contest 3위<br>2016년 ACM-ICPC Asia Nha Trang Regional Contest 1위<br>2016년 ACM-ICPC Asia Bangkok Regional Contest 5위<br>2016, 2017, 2018년 한국 대학생 프로그래밍 경시대회 대상 및 다수<br>2018년 UCPC 2등상 및 다수<br>2016, 2017, 2018년 SCPC 1등상 및 다수<br>2017년 LG CNS Code Monster 2등상 및 다수<br>2016년 LG CNS Code Monster 1등상 및 다수<br>2017, 2018년 카카오 코드 페스티벌 1등상 및 다수<br>2016, 2018년 Google Code Jam World Final 진출<br>2016, 2017, 2018년 Facebook Hacker Cup Final Round 진출<br>2017, 2018년 Code Festival Final Onsite 진출<br>2016년 Russian Code Cup Final Round 진출</p><p><br></p><h3><strong>연락처</strong></h3><hr class="__se__solid"><p>홈페이지:&nbsp;<a href="https://snups.org/">https://snups.org</a></p>',
  },
  {
    name: '와플스튜디오',
    engName: 'Waffle Studio',
    description:
      '<p>서울대학교 컴퓨터공학부 웹/앱 개발 동아리 와플스튜디오는 웹/앱 서비스 개발을 통해 개인의 개발 실력 향상을 도모합니다. 또한 회원 간의 친목을 추구하여 개발자 간의 커뮤니티 형성을 목적으로 합니다.</p><p>와플스튜디오에서는 프로젝트, 스터디, 코딩모임 등 개발과 관련된 다양한 활동들이 진행됩니다. 프로젝트를 통해 개발 결과물을 도출하고, 나아가 사람들에게 유용하고 실험적이며 재미있는 서비스로 기여합니다. 현재 본교 학생들을 대상으로 출시한 다양한 서비스를 운영하고 있으며 더하여 여러 신규 프로젝트가 진행되고 있습니다. 또한 매년 2학기 백엔드, 프론트엔드, 그리고 모바일 개발에 관한 세미나를 정기적으로 개최하고 있습니다.</p><p><br></p><h3>신입회원 모집 시기</h3><hr class="__se__solid"><p><strong>Rookies</strong></p><p>매년 2학기 준회원인 Rookies를 선발합니다. 이들은 세미나와 과제를 통과하면 정회원인 Programmers로 승격할 수 있는 자격을 얻습니다.</p><p><strong>Programmers &amp; Designers</strong></p><p>매년 1학기, 2학기 정회원인 Programmers와 Designers를 선발합니다. 이들은 선발과 동시에 정회원의 자격이 주어지며 프로젝트와 스터디 등 진행 중인 활동에 자유롭게 참여하고, 활동을 주도할 수 있습니다.</p><p><br></p><h3>동아리 활동 현황</h3><hr class="__se__solid"><p>​<a href="https://snutt.wafflestudio.com/">SNUTT</a>​</p><p>2012년에 서비스를 시작한 서울대학교 시간표 작성 서비스 SNUTT가 2021년 개편 작업을 거쳐 현재까지 안정적이고 편리한 서비스를 제공하고 있습니다. 깔끔한 UI와 다양한 필터를 이용해 강의를 검색하고 시간표를 만들 수 있습니다. 더하여 곧 강의평 기능도 추가될 예정입니다.</p><p><a href="https://siksha.wafflestudio.com/">​식샤</a>​</p><p>2015년 초 기존 식단 어플리케이션들의 문제점을 보완하기 위해 개발되었고 2021년에 리뉴얼되었습니다. 날짜와 시간대별로 서울대학교 식단 상세정보뿐만 아니라 식당 운영시간과 위치정보를 제공합니다. 또한 식단 리뷰 기능까지 추가되어 식단에 대한 평가를 남기고 사진도 직접 올릴 수 있습니다.</p><p><strong>스누보드</strong></p><p>현재 학과별로 흩어져있는 서울대학교 과별 홈페이지를 하나의 모바일 플랫폼으로 통합한 서비스입니다. 원하는 학과와 태그별로 공지사항을 모아볼 수 있으며 새로운 글이 올라왔을 때 푸시 알림을 받아볼 수 있습니다. 구독(팔로우) 중인 공지사항 중에 필요한 내용을 검색하는 것도 가능합니다. 2021년 8월 초기 버전이 출시되었고, 꾸준한 업데이트가 진행되고 있습니다. 현재 앱스토어와 구글플레이스토어에서 다운로드 받을 수 있습니다.</p><p><strong>괌</strong></p><p>개발 프로젝트 팀을 만들어주고, 팀원간 소통을 가능하게 해주는 앱 서비스입니다. 2021년 9월 Google Store에 배포되었으며, 10월 현재 IT SNS로 거듭나기 위해 Version 2.0을 개발 중입니다.</p><br/><h3>연락처</h3><hr class="__se__solid"><p>이메일: <a href="mailto:master@wafflestudio.com">master@wafflestudio.com</a>​</p>',
    imageURL: '/image/waffle.png',
  },
  {
    name: '유피넬',
    engName: 'UPNL',
    description:
      '<p><a href="https://upnl.org/">유피넬</a>은 컴퓨터공학부의 소프트웨어 개발 동아리입니다.</p><p>동아리원들이 모여 여러 프로젝트를 진행하고 유용한 소프트웨어를 만들어내는 것을 목표로 하며, 이를 위해 주기적으로 내부 워크샵과 아이디어 제안회 등 서로의 지식과 아이디어, 성과를 공유하는 자리를 가집니다. 여러 대의 서버를 보유하고 있어 동아리원들을 위한 소스 코드 관리 시스템과 위키를 직접 서비스하고 있으며, 서버가 필요한 게임이나 웹 서비스 등의 프로젝트도 진행할 수 있습니다. 그 외에도 몇 대의 PC와 다양한 개발 관련 기기 및 서적이 갖추어져 있습니다.</p><p>2019년 현재 (외부 기업의) 동아리 지원 프로그램에 소속되어 활동비 및 행사 지원과 현직 소프트웨어 개발자 멘토링 등의 도움을 받고 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>3월 중에 공개적으로 신입회원들을 모집하고 OT를 실시합니다. 개발 경험이 없는 신입회원들을 위해서 Git과 C#을 가르치는 세미나를 매년 진행하고 있습니다.</p><p><br></p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>2019년<br>■ 오브의마검사<br>■ 패러독스<br>2018년<br>■ 막고라<br>■ 눈을떠보니</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/upnllogo_0.png?itok=BJdQ6N6u',
  },
];

export const facilities: Facilities = {
  facilitiesList: [
    {
      id: 3,
      name: '하드웨어 실습실',
      description:
        '<p>하드웨어 관련 실습 수업에 사용된다. 오실로스코프, 직류 전원 공급기, 함수 발생기, 멀티미터, Intel Core i7 PC 등의 장비와 각종 공구를 이용할 수 있다. 논리설계나 하드웨어시스템설계 등의 수업을 수강하는 학생들은 이곳에서 많은 시간을 보내게 된다.</p>',
      location: '302동 310-2호',
      imageURL: '하드웨어',
    },
    {
      id: 2,
      name: '소프트웨어 실습실',
      description:
        '<p>소프트웨어와 관련된 실습 수업 시에 사용된다. 수업 시간이 아닌 경우에는 컴퓨터공학부 학생이라면 누구나 자유롭게 사용할 수 있다. 과거에는 "NT실"이라고 불리기도 했다.</p>',
      location: '302동 311-1호',
      imageURL: '소프트웨어',
    },
    {
      id: 0,
      name: `학부 행정실`,
      description: `<p>컴퓨터공학부 행정실에서는 학부생, 대학원생, 교수를 위한 다양한 행정 업무를 돕고 있다. 각 업무별 담당자는 <a href="/people/staff">직원 목록</a>을 참조.</p>`,
      location: `301동 316호`,
      imageURL: '행정실',
    },
    {
      id: 1,
      name: 'S-Lab',
      description:
        '<p>S-Lab은 학생들이 학습, 개발, 토론 등 다양한 목적으로 사용할 수 있는 공간이다. 안쪽에는 중앙의 공간과 분리된 4개의 회의실이 있다. 고성능 PC와 Mac, 스마트 TV, 빔 프로젝터 등의 장비와 회의실을 갖추고 있다.</p>',
      location: '301동 315호',
      imageURL: 'SLAB',
    },
    {
      id: 3,
      name: '해동학술정보실',
      description:
        '<p><a href="http://haedong.snu.ac.kr/">해동학술정보실</a>은 전기공학부와 컴퓨터공학부 학생들을 위한 도서관이다. 정기 간행물 및 논문을 열람하거나 대여할 수 있다. 조용한 환경에서 공부할 수 있는 230석 규모의 열람실이 딸려 있다.</p>',
      location: '310동 312호 ',
      imageURL: '해동',
    },
    {
      id: 4,
      name: '학생 공간 및 동아리 방',
      description:
        '<p>과방은 학부생들의 주 생활 공간이다. 끊임없이 나오는 과제를 해치우는데 사용되는 수십 대의 Intel Core i7 PC가 구비되어 있으며, 오랫동안 컴퓨터를 하느라 편할 날이 없는 학생들의 눈·목·손목 등의 휴식을 위한 편의 시설도 마련되어 있다. 학생들이 기증하거나 잠시 빌려준 각종 서적·만화책·보드 게임 등이 있어 공부뿐만 아니라 여가도 즐길 줄 아는 학생들을 위한 환경이 조성되어 있다.</p>',
      location: '301동 315호',
      imageURL: '과방',
    },
    {
      id: 5,
      name: '세미나실',
      description:
        '<p>세미나실은 301동과 302동에 있다. 컴퓨터공학부 대학원생들이 온라인예약하여 사용할 수 있다.</p>',
      location:
        '301동 417호, 301동 521호(MALDIVES), 301동 551-4호(HAWAII), 302동 308호, 302동 309-1호, 302동 309-2호, 302동 309-3호',
      imageURL: '세미나실',
    },
    {
      id: 5,
      name: '서버실',
      description:
        '<p>컴퓨터공학부의 실습 서버, 통합계정 서버, 프린터 서버 등 각종 서버 및 워크스테이션을 관리하는 곳이다. 학부 서버는 학생 동아리인 <a href="/about/student-clubs?selected=%EB%B0%94%EC%BF%A0%EC%8A%A4">바쿠스</a>에서 관리하고 있다.</p>',
      location: '302동 310-2호',
      imageURL: '서버실',
    },
  ],
};

export const directions: Direction[] = [
  {
    name: '대중교통',
    engName: 'public-transit',
    description: `<p><strong>지하철 2호선 낙성대역</strong></p><p>낙성대역 4번 출구로 나와 직진, 주유소에서 좌회전하여 제과점 앞 정류장에서 마을버스 관악02를 타고 제2공학관에서 내립니다.</p><p><br></p><p><strong>지하철 2호선 서울대입구역</strong></p><p>서울대입구역 3번 출구로 나와 관악구청 방향으로 직진하여 학교 셔틀 버스나 시내버스 5511 또는 5513을 타고 제2공학관에서 내립니다. 제2공학관행 셔틀 버스는 아침 8시부터 10시까지 15분 간격으로 월요일부터 금요일까지 운행됩니다.</p><p><br></p><p><strong>지하철 2호선 신림역</strong></p><p>신림역 3번 출구에서 나와 시내버스 5516을 타고 제2공학관에서 하차합니다.</p><p><br></p><p><strong>지하철 신림경전철 관악산역</strong><br></p><p>관악산역 1번 출구로 나와 직진, 관악산입구.관악아트홀.중앙도서관 정류장에서 5511 또는 5516 시내버스를 타고 제2공학관에서 내립니다.</p><p><br></p><p><strong>서울대학교 정문 경유 버스</strong></p><p>서울대학교 정문을 경유하는 버스를 이용해서 정문에 내린 후 교내순환 셔틀버스, 시내버스 5511 또는 5513을 타고 제2공학관으로 갈 수 있습니다.</p><table><tbody><tr><th><div>버스 번호</div></th><th><div>종점</div></th><th><div>경유지</div></th></tr><tr><td><div>5517</div></td><td><div>시흥벽산APT ↔ 중앙대</div></td><td><div>서울대, 노량진</div></td></tr><tr><td><div>6511</div></td><td><div>서울대 ↔ 구로동</div></td><td><div>신대방역, 신도림역</div></td></tr><tr><td><div>6512</div></td><td><div>서울대 ↔ 구로동</div></td><td><div>서울대입구역, 신림역, 영등포</div></td></tr><tr><td><div>6513</div></td><td><div>서울대 ↔ 철산동</div></td><td><div>신림역, 대방역, 영등포</div></td></tr><tr><td><div>750A, 750B</div></td><td><div>서울대 ↔ 덕은동</div></td><td><div>관악구청, 상도터널, 서울역, 신촌, 수색역</div></td></tr><tr><td><div>5528</div></td><td><div>가산동 ↔ 사당동</div></td><td><div>금천경찰서, 신림사거리, 서울대, 낙성대</div></td></tr><tr><td><div>6514</div></td><td><div>서울대 ↔ 양천</div></td><td><div>신림역, 대방역, 영등포역, 당산역</div></td></tr><tr><td><div>501</div></td><td><div>서울대 ↔ 종로2가</div></td><td><div>상도동, 신용산, 서울역</div></td></tr><tr><td><div>6003</div></td><td><div>서울대 ↔ 인천공항</div></td><td><div>대림역, 목동역, 88체육관, 김포공항</div></td></tr></tbody></table><p></p>`,
  },
  {
    name: '승용차',
    engName: 'car',
    description:
      '<p><strong>남부순환도로에서 오는 방법</strong><br></p><ol><li>남부순환도로의 낙성대입구에서 좌·우회전합니다.</li><li>남쪽으로 직진합니다.</li><li>서울대학교 후문을 지나 기숙사 삼거리에서 좌회전합니다.</li><li>서울대학교 제1공학관이 보일 때까지 직진합니다.</li><li>컴퓨터공학부는 제1공학관 3층에 있습니다.</li></ol><p><br></p><p><strong>한강대교에서 오는 방법</strong></p><ol><li>상도터널을 지나 지하철 7호선 상도역에서 좌회전하여 직진합니다.</li><li>서울대 입구역에서 직진하거나 좌회전한 후 남부순환도로에서 오는 방법을 따릅니다.</li><li>서울대 정문이 보이면 교내로 진입합니다.</li><li>정문 게이트웨이에서 직진 합니다.</li><li>교내 순환도로를 따라 제1공학관이 보일 때까지 직진합니다.</li><li>컴퓨터공학부는 제1공학관 3층에 있습니다.</li></ol><p><br></p><p><strong>주차 안내</strong></p><ul><li>방문자용 주차권은 용무를 마치고 나갈 때 주차료 계산시 사용합니다.</li><li>주차는 제 1공학관 앞 공터를 이용하시기 바랍니다.</li></ul>',
  },
  {
    name: '지방 및 해외',
    engName: 'far-away',
    description:
      '<h3><strong>비행기로 오는 경우</strong><br></h3><hr class="__se__solid"><p><strong>인천공항</strong></p><p>인천공항에서 6003번 리무진을 타고 서울대 정문에서 하차합니다. 또는 6017번을 타고 호암교수회관에서 하차합니다. 6017번은 김포공항을 경유하지 않는 서울대와 인천공항 사이의 직통 리무진입니다.</p><p><strong>김포공항</strong></p><p>김포공항에서 6003번 리무진 또는 651번 파란색 간선버스을 타고 서울대 정문에서 하차하거나 지하철을 이용할 때는 5호선을 타고 영등포구청역에서 2호선으로 환승하여 서울대입구역 또는 낙성대역에서 하차합니다.</p><br/><h3><strong>기차로 오는 경우</strong></h3><hr class="__se__solid"><p><strong>​</strong><strong>서울역</strong></p><p>서울역에서 501, 750번 파란색 버스를 이용하여 서울대 정문에 하차하거나, 지하철을 이용할 때는 4호선에서 사당방향으로 승차한 후 사당역에서 2호선으로 환승하여 서울대입구역에서 하차합니다.</p><p><strong>영등포역</strong></p><p>지하철 1호선을 타고 신도림역에서 2호선으로 환승하여 서울대입구역에서 하차합니다.</p><br/><h3><strong>고속버스로 오는 경우</strong></h3><hr class="__se__solid"><p><strong>경부 및 호남 고속터미널</strong></p><p>5412번 초록색 지선버스를 이용하여 서울대 정문에 하차하거나 지하철 3호선을 타고 교대역에서 2호선으로 환승하여 서울대입구역에 하차하여 셔틀버스나 시내버스 또는 택시를 이용합니다.</p><p><strong>동서울터미널</strong></p><p>지하철 2호선을 이용하여 서울대입구역에 하차하여, 셔틀버스나 시내버스 또는 택시를 이용합니다.</p>',
  },
];
/* 학사 및 교과 */

export const graduateGuideData = `<div className="mw-parser-output">

<h2><span id=".EC.88.98.EC.97.85_.EC.97.B0.ED.95.9C"></span><span className="mw-headline" id="수업_연한">수업 연한</span></h2>
<ol><li>석사: 2년 – 4년까지</li>
<li>박사: 2년 – 6년까지</li>
<li>석박사통합: 4년 – 8년까지</li></ol>
<h2><span id=".ED.9C.B4.ED.95.99_.EB.B0.8F_.EB.B3.B5.ED.95.99"></span><span className="mw-headline" id="휴학_및_복학">휴학 및 복학</span></h2>
<ol><li>휴학
<ol><li>휴학의 종류
<ol><li>일반 휴학: 등록 기간 중 등록하지 않고 휴학</li>
<li>학기중 휴학: 등록 후 수업 주수 종료 이전에 휴학 (수업 주수 2/4선 이내)</li></ol></li>
<li>휴학원 유효 기간은 1년 이내 (계속 휴학하고자 할 경우에는 휴학원을 다시 제출)</li>
<li>휴학 기간: 석사는 4학기 이내, 박사는 6학기 이내, 석박사통합은 8학기 이내 (휴학 기간 초과시 제적되며, 군 복무 기간은 휴학 기간에 삽입되지 않음)</li></ol></li>
<li>복학원 제출: 1학기 복학은 2월 초, 2학기 복학은 8월 초 신청</li></ol>
<h2><span id=".ED.95.99.EC.A0.90"></span><span className="mw-headline" id="학점">학점</span></h2>
<ol><li>석사 24학점 이상, 박사 36학점 이상, 석박통합 60학점 이상</li>
<li>수료 기준 평점 평균은 전 교과목 및 전공교과목의 성적이 각각 3.0 이상이나, 학생이 원할 경우 3.0을 만족하지 않아도 수료 가능하며, 이후에는 연구생등록이 불가하여 학위논문을 제출할 수 없으므로 졸업은 가능하지 않다.</li></ol>
<h2><span id=".EC.88.98.EA.B0.95_.EC.8B.A0.EC.B2.AD"></span><span className="mw-headline" id="수강_신청">수강 신청</span></h2>
<ol><li>매 학기 수강 신청 학점은 12학점을 초과할 수 없음(하계 계절학기 9학점, 동계 계절학기 6학점)</li>
<li>교과목을 이수할 때 학·석·박사 각 과정에서는 별도로 지정되어 있는 교과목 (군사학, 논문연구 등) 이외에는 동일 명칭의 과목 (학기 완성 과목과 통년 완성 과목 모두)을 중복 이수하여서는 안 됨. 단, 대학원 과정에서 교과목군 Ⅱ로 지정된 교과목으로서, 부제목이 다를 경우에는 별개의 교과목으로 중복 인정되며, 재이수 처리 불가.</li>
<li>수강에 관한 내규 (2005학번부터 적용)
<ol><li>동일 교수 과목 인정 제한: 대학원 졸업 학점에서 동일 교수의 과목은 강의과목은 2과목, 연구과목은 1과목까지만 인정(단, 해당교수의 대학원논문연구과목, 학부 과목 제외)</li>
<li>연구 과목 인정 제한: 대학원 졸업 학점에서 연구 과목은 석사 1과목, 박사 2과목, 석박통합 과정은 4과목까지 인정. 단, 석사 과정에서 연구 과목을 2과목 수강하는 경우에는 대학원논문연구 학점을 3학점만 인정한다. 과목명이 특강이나 실제는 강의 과목인 경우 수강 신청 시 <a rel="nofollow" className="external text" href="http://cse.snu.ac.kr/sites/default/files/node--page/%EA%B0%95%EC%9D%98%EA%B3%BC%EB%AA%A9%ED%99%95%EC%9D%B8%EC%84%9C.hwp">강의 과목 확인서</a>에 반드시 강의 담당 교수의 서명을 받아 강의 계획서와 함께 학부 행정실로 제출하여야 함.</li>
<li>세미나 과목 (4190.781 고급컴퓨터공학세미나)을 내규로 해서 석사는 2학점, 박사, 석박통합은 3학점을 반드시 듣도록 함
<ul><li>4190.781 고급컴퓨터공학세미나 (1학점)는 대학원 2군 교과목으로 매 학기 부제를 다르게 정하여 개설되므로 중복 수강 가능.</li></ul></li></ol></li></ol>
<h2><span id=".EB.8C.80.ED.95.99.EC.9B.90_.EB.85.BC.EB.AC.B8_.EC.97.B0.EA.B5.AC_.ED.95.99.EC.A0.90"></span><span className="mw-headline" id="대학원_논문_연구_학점">대학원 논문 연구 학점</span></h2>
<ol><li>목적: 대학원생 논문 연구를 학점화하여 전임 교원의 책임 시간으로 인정, 강의 부담을 줄이고 논문 연구를 책임있게 지도할 수 있도록 내실화를 기하고자 함</li>
<li>수강 요령 및 성적
<ol><li>지도교수가 개설한 과목 신청</li>
<li>박사 과정은 과정 수료 학점의 1/3 이내 (최대 12학점까지)</li>
<li>석사 과정은 과정 수료 학점의 1/4 이내 (최대 6학점까지, 구 컴퓨터공학과는 내규로 3, 4학기 중에 택일하여 최대 3학점까지만 신청 가능)</li>
<li>석박통합 과정은 최대 18학점까지 (한 학기 최대 6학점 (2과목) 이수 가능)</li>
<li>성적 평가는 S/U</li></ol></li></ol>
<h2><span id=".ED.95.99.EC.A0.90_.EC.9D.B8.EC.A0.95"></span><span className="mw-headline" id="학점_인정">학점 인정</span></h2>
<ol><li>학사 과정에서 취득한 대학원 학점(B0이상)은 학사 졸업 학점에 포함하지 않은 경우, 대학원 입학 후 B0 이상인 과목에 대해 최대 6학점까지 석사 과정 수료 학점에 포함할 수 있다. 이 경우 매 학기 초 통산 인정 신청 공지 시 <a rel="nofollow" className="external text" href="http://cse.snu.ac.kr/sites/default/files/node--page/%ED%95%99%EC%84%9D%EC%82%AC%EA%B0%84%EA%B5%90%EA%B3%BC%ED%95%99%EC%A0%90%ED%86%B5%EC%82%B0%EC%9D%B8%EC%A0%95%EC%8B%A0%EC%B2%AD%EC%84%9C.hwp">학·석사간 교과 학점 통산 인정 신청서</a>를 작성하여 성적표와 함께 제출하여야 한다.</li>
<li>석사 과정에서 24학점을 초과하여 수강한 과목은 학점이 B0 이상인 교과목에 한하여 12학점 까지 박사 과정 수료 학점으로 인정 (서울대학교 석사과정 학위 취득자가 본교 박사과정 진학시). 이 경우 매 학기 초 통산 인정 신청 공지 시 <a rel="nofollow" className="external text" href="http://cse.snu.ac.kr/sites/default/files/node--page/%EC%84%9D%EB%B0%95%EC%82%AC%EA%B0%84%EA%B5%90%EA%B3%BC%ED%95%99%EC%A0%90%ED%86%B5%EC%82%B0%EC%9D%B8%EC%A0%95%EC%8B%A0%EC%B2%AD%EC%84%9C.hwp">석·박사간 교과 학점 통산 인정 신청서</a>를 작성하여 성적표와 함께 제출하여야 한다.</li>
<li>대학원 과정 학생으로서 학사 과정 교과목(교양과목은 불인정)을 이수하고자 할 때에는 학과장의 승인을 받아 대학원 과정 통산 6학점 이내에서 과정 수료 학점으로 인정받을 수 있다. 이 경우 수강 신청 시 <a rel="nofollow" className="external text" href="http://cse.snu.ac.kr/sites/default/files/node--page/%ED%95%99%EC%A0%90%EC%9D%B8%EC%A0%95%EC%8B%A0%EC%B2%AD%EC%84%9C.hwp">학점 인정 신청서</a>를 작성하여 제출하여야 한다.</li>
<li>대학원 과정에 있어서 자기 학과(부)의 전공 과목으로 설정되지 않은 교과목일지라도 전공 지도교수의 추천에 의하여 학과(부)장이 인정하는 타 학과(부)의 대학원 과정 교과목을 이수할 경우 과정별 수료 학점의 1/2 범위 내에서 전공 과목으로 인정할 수 있고(2020학번까지 적용), 과정 수료 학점으로 인정할 수 있다. (2021학번부터 [과정별 수료학점-대학원논문연구]의 1/2까지만 인정)   3.번 항의 학사 과정 이수 학점도 1/2 범위 내에 포함한다. 그러나 선수 과목으로 이수한 자기 학과(부)의 학사 과정 교과목 학점은 수료 학점에 포함하지 아니하나 수료 사정 시의 평점 계산에는 포함한다. 타 학부에서 개설한 과목을 수강하여 과정 수료 학점으로 인정받기를 원하는 경우에도 수강 신청 시 <a rel="nofollow" className="external text" href="http://cse.snu.ac.kr/sites/default/files/node--page/%ED%95%99%EC%A0%90%EC%9D%B8%EC%A0%95%EC%8B%A0%EC%B2%AD%EC%84%9C.hwp">학점 인정 신청서</a>를 작성하여 제출하여야 한다. (Cross-listing으로 열리는 교과목의 경우 동일 교과목명이라도 타 학과(부) 코드로 개설되는 경우 타 학과(부) 과목으로 포함)</li>
<li>대학원생을 위한 영어교과목 「고급영어학술작문(990.664)」과 「고급영어학술발표(990.666)」는 수료학점에 불포함</li>
<li>대학원 공통역량교과목 수강 시 우리 학부와 유사한 과목이 아닌 과목만 인정이 되며 수강하는 학기에 전공 인정 신청서를 제출하면 학사위원회에서 전공인정 여부 결정(최대 3학점까지만 인정, 타학부 제한 학점에 포함)</li>
<li>서울대학교 개설 연구윤리 교과목 중 1과목 필수 이수(2022.2학기 신입생부터 적용. 최대 3학점 인정, 타 학부 제한 학점에 포함)</li></ol>
<h2><span id=".EC.84.9D.C2.B7.EB.B0.95.EC.82.AC_.ED.95.99.EC.9C.84_.EC.B7.A8.EB.93.9D.EC.9D.84_.EC.9C.84.ED.95.9C_.EA.B5.90.EA.B3.BC.EB.AA.A9_.EC.9D.B4.EC.88.98.EC.97.90_.EA.B4.80.ED.95.9C_.EB.82.B4.EA.B7.9C"></span><span className="mw-headline" id="석·박사_학위_취득을_위한_교과목_이수에_관한_내규">석·박사 학위 취득을 위한 교과목 이수에 관한 내규</span></h2>
<ol><li>제1조 (이수 과목) 석·박사 과정 학생은 졸업 이전에 제2조에 명시한 바와 같이 대학원 교과목 9개 분야 중 3개 분야 이상에서 4과목을 이수하여야 하며 (1+1+1+1 또는 2+1+1), 각 과목에서 B0 이상을 취득하여야 한다.(2022학번부터는 4과목(융합분야 과목이 포함된 경우 융합분야를 제외한 3과목)의 평점평균은 B+ 이상 되어야 한다.)) 9번째 융합 분야에서는 S학점 취득한 1개 과목만 분야별 과목으로 인정한다. 단, 서울대학교 컴퓨터공학부에서 석사 학위를 취득한 박사 과정 학 생에게는 이 규정을 적용하지 않는다.</li>
<li>제2조 (이수 분야) 교과목 이수 분야는 다음과 같으며 각 분야에 해당되는 교과목은 학사위원회에서 결정한다. (분야별 교과목 리스트는 첨부파일 참조)
<ol><li>System Software</li>
<li>Programming System and Software Engineering</li>
<li>Information Systems</li>
<li>Graphics and Human-Centered Computing</li>
<li>Networks</li>
<li>AI</li>
<li>Architecture and Embedded System</li>
<li>Theory</li>
<li>Convergence</li></ol></li>
<li>제3조 (대체 이수) 제2조에 명시되어 있지 않은 과목을 제1조에서 요구하는 이수 과목으로 대체 인정받을 수 있다. 대체 과목으로 인정받기 위해서는 학사위원회의 사전 승인을 받아야 한다. 대체 이수를 신청하는 학생은 과목을 수강하기 전 지도교수의 승인을 받아 신청서를 학사위원회에 제출하여야 한다. 학사위원회는 과목의 적정성, 학문의 발전 방향 및 학생의 연구 분야 등을 고려하여 대체 이수 허용을 결정한다. 타 학과/학부의 대학원 과목에 대한 대체 이수는 원칙적으로 최대 1과목까지만 인정한다. (2011년 7월 27일 개정) <a rel="nofollow" className="external text" href="http://cse.snu.ac.kr/sites/default/files/node--page/%EC%84%9D%EB%B0%95%EC%82%AC%ED%95%99%EC%9C%84%20%EC%B7%A8%EB%93%9D%EC%9D%84%EC%9C%84%ED%95%9C%20%EA%B5%90%EA%B3%BC%EB%AA%A9%20%EB%8C%80%EC%B2%B4%EC%9D%B4%EC%88%98%20%EC%8B%A0%EC%B2%AD%EC%84%9C.hwp">대체 이수 신청서</a></li></ol>
<h2><span id=".ED.95.99.EC.9C.84_.EB.85.BC.EB.AC.B8_.EC.A0.9C.EC.B6.9C_.EC.9E.90.EA.B2.A9.EC.8B.9C.ED.97.98"></span><span className="mw-headline" id="학위_논문_제출_자격시험">학위 논문 제출 자격시험</span></h2>
<ol><li>응시 자격
<ol><li>석사: 2개 학기 이상 등록, 환경안전교육 이수자, 생명존중(자살예방) 교육 이수자</li>
<li>박사: 2개 학기 이상 등록, 환경안전교육 이수자, 생명존중(자살예방) 교육 이수자, 석박사통합과정의 경우 석사 논문제출자격시험 합격자</li></ol></li>
<li>석사 논문제출자격시험 안내
<ol><li>시행: 학사위원회가 지정하는 분야 과목들 중 1과목 또는 2과목을 선택하여 필답고사로 시행한다. 현재 학사위원회가 지정한 분야 과목은 컴퓨터구조, 운영체제, 알고리즘, 프로그래밍언어, 기계학습 개론 과목이며 과목 선택은 시험 시간에 문제를 본 후 1과목 또는 2과목을 선택하여 80분 이내로 푼다. 합격은 1과목 이상이 100점 만점 기준에 60점 이상이면 합격이다. 또한, 채점 점수 및 답안지는 비공개이며 불합격자는 재시험을 통해 합격해야 한다.</li></ol></li>
<li>박사 논문제출자격시험 안내
<ol><li>시행: 전임교수 3인으로 구성된 박사논문제출자격시험 위원회가 지정하는 논문 1편 이상을 영어로 발표하고 심사위원의 질문에 답하는 구술 고사로 시행한다. 박사논문제출자격시험 위원회가 지정하는 논문은 박사 논문심사 대상자가 발표한 논문이 아닌 다른 저자의 논문으로 지정한다. 박사논문제출자격시험 위원회 구성, 발표 일정 및 장소는 학생이 지도교수와 상의하여 정하고 학부 담당 직원에게 알린다. 합격은 100점 만점 기준 70점 이상이다, 단, 석박사통합과정은 박사논문제출자격시험 보기 직전 학기까지 석사 논문제출자격시험을 별도로 합격해야 한다. 합격 점수는 100만점에 60점 이상으로 한다. 현재 학사위원회가 지정한 석사 논문제출자격시험 분야 과목은 컴퓨터구조, 운영체제, 알고리즘, 프로그래밍언어, 기계학습 개론 과목이다.</li>
<li>주의사항&nbsp;: 박사과정 학생은, 논문제출자격시험 통과 후 그 다음 학기부터 논문심사(예비심사1(초심), 예비심사2(중심), 본심(종심) 신청 가능 (박사 논문요지발표(프로포절 형식)는 박사 본 심사학기 직전 학기인 논문제출자격시험 직후 실시)</li></ol></li></ol>
<h2><span id=".ED.95.99.EC.9C.84_.EB.85.BC.EB.AC.B8_.EC.A0.9C.EC.B6.9C_.EA.B8.B0.ED.95.9C"></span><span className="mw-headline" id="학위_논문_제출_기한">학위 논문 제출 기한</span></h2>
<ol><li>석사 과정 수료 후 4년 (군 복무 기간은 제외)</li>
<li>박사 과정 수료 후 6년 (군 복무 기간은 제외)</li></ol>
<h2><span id=".ED.95.99.EC.9C.84_.EB.85.BC.EB.AC.B8.EC.97.90_.EA.B4.80.ED.95.9C_.EC.9A.94.EA.B1.B4"></span><span className="mw-headline" id="학위_논문에_관한_요건">학위 논문에 관한 요건</span></h2>
<p>석사 및 박사과정 이수자는 다음과 같은 논문에 관한 요건을 만족시켜야 한다.
</p>
<ol><li>(석사 과정) 석사 학위 논문은 학회지에 발표 가능한 수준이어야 한다.</li>
<li>(박사 과정) 컴퓨터공학부에서 박사 학위를 수여 받을 예정자 (이하 '학위예정자')가 학위 논문 심사를 받기 위해서는 다음의 사항들을 모두 만족해야 한다.
<ol><li>학위예정자가 박사 학위 심사에 필요한 최소한의 연구 업적을 이루었다고 논문 지도교수 (이하 '지도교수')가 판단하여 발급한 박사 학위 심사원 제출 자격 확인서를 학부장에게 제출하여 학부장의 허가를 받아야 한다.</li>
<li>본인이 박사학위 논문심사위원을 제외한 제일저자이면서 아래의 2.iii 항 규정을 만족하는 논문 두 편이 게재되거나 게재예정임을 증명할 수 있는 관련서류를 학부장에게 제출하여 학부장의 허가를 받아야 한다. 단, 공동제일저자일 경우도 인정하나, 박사학위 논문심사위원을 제외한 공동제일저자가 두 명 이상일 경우, 일을 공동저자 수로 나누어 소수점 아래 두 자리까지 반올림하여 구한 값을 편수로 간주한다.(변경 2018.05.08. 학부교수회의 의결) (박사과정 혹은 석박통합과정 입학 후 진행한 연구내용으로 publish한 논문 인정. 국제학술회의 논문의 경우 “Regular Paper만 인정이 되고 기타 Paper는 논문지도위원회에서 인정요청하고 학사위원회에서 심의 후 결정함(추가 2021.4.5. 학부 교수회의 의결)</li>
<li>박사학위 후보자가 저자로서 서울대 소속이나 그에 준하는 사실이 명시된 논문관련 성과 중에 다음의 조건을 만족해야 한다. 
<ol><li>국제논문지 SCI(E)급 논문 1편 또는 최상위 국제학술회의 논문 1편(추가 2016.10.10. 학부 교수회의 의결) (최상위 국제학술회의 리스트는 우리학부 내규 리스트 및 한국정보과학회 리스트로 정함, 논문 제출 당시 최신 리스트 기준으로 함.(2023.3.1 이후부터 적용.))</li>
<li>국제학술회의 또는 국제논문지 또는 국내논문지 1편</li></ol></li></ol></li>
<li>이 세칙에서 정하는 국제논문지란 SCI(E)급으로 국제적으로 인정받는(정기적으로 발간되고, 심사과정이 있는) 학술논문지를 말하고, 국제학술회의는 국제적으로 인정받는(정기적으로 개최되는 심사과정이 있는) 학술회의를 말하며, 국내논문지란 국제논문지에 포함되지 않은 국내에서 발간되는(정기적으로 발간되고 심사과정이 있는) 학술논문지이며, 최상위 국제학술회의는 학사위원회에서 별도로 인정하는 학술회의를 말한다.</li>
<li>학위예정자는 학사위원회가 허락하면 2.iii 항의 조건에서 1편의 논문을 면제받을 수 있다. (2003.10. 6. 변경)</li>
<li>면제대상자는 학부 전임교수 1인당 지도학생 2명(누계)에 한한다. 단, 지도교수     의 퇴직 또는 휴직으로 지도교수를 변경한 학위예정자의 경우는, 변경 후 4학기 이내에 새 지도교수의 승인 하에 이전 지도교수의 퇴직 또는 휴직 시 잔여 면제대상인원을 사용할 수 있다.</li>
<li>학위예정자가 1편의 논문 면제를 적용받아 졸업한 경우, 졸업 후 당사자의 논문 게재가 확정되면 해당 지도교수가 학부장에게 게재 증명 서류를 제출한 시점에서 2.iii 항의 조건을 만족시킨 것으로 간주한다.</li></ol>
<ul><li>부칙 1. 이 규정은 입학 및 수료 시기와 상관없이 2009년 8월 30일 이후부터 모든 박사 과정 학생에게 적용한다. (이 규정은 과거 규정에 비해 완화된 것이므로 소급 적용해도 문제 없음.)</li></ul>
<h2><span id=".EB.B0.95.EC.82.AC_.EB.85.BC.EB.AC.B8.EC.8B.AC.EC.82.AC"></span><span className="mw-headline" id="박사_논문심사">박사 논문심사</span></h2>
<ol><li>논문요지발표, 예비심사1(초심), 예비심사2(중심), 본심(종심) 모두 자체적으로 일정을 수립하고, 예비심사1은 공개 발표로 진행하며 일자와 장소만 학부행정실에 알린다.</li>
<li>논문요지발표는 전임교수 3인으로 구성된 논문지도위원회를 위촉하여 예비심사1을 받기  이전학기에 박사 논문제출자격시험 직후 논문 프로포절 형식으로 실시한다.</li>
<li>예비심사1에 참석한 학생은 대학원 고급컴퓨터공학세미나 과목의 세미나 1회 참석한 것으로 인정한다.</li></ol>
<h2><span id=".EA.B8.B0.ED.83.80"></span><span className="mw-headline" id="기타">기타</span></h2>
<ol><li>장학금: 컴퓨터공학부 통합으로 세부 사항은 추후 결정하여 공고함</li>
<li>기타사항
<ol><li>학과에서 1년 동안 개최하는 세미나는 3분의 1 이상을 참석하여야 하며 참석하지 않을 경우 석·박사 논문 심사에 영향이 있음</li>
<li>학과와 관련 없는 본인의 우편물 (카드 관련 우편물, 정보과학 회지 등)은 본인이 거주하는 주소지로 함을 원칙으로 하며, 위 사항을 지키지 않고 학과로 우편 배달이 되어 분실하는 경우에는 책임이 본인에게 있음. 등록금과 성적표는 학과 사무실의 각 연구 실 사물함에 비치.</li></ol></li></ol>
<h2><span id=".EB.B0.94.EA.B9.A5_.EA.B3.A0.EB.A6.AC"></span><span className="mw-headline" id="바깥_고리">바깥 고리</span></h2>
<ul><li><a rel="nofollow" className="external text" href="http://rule.snu.ac.kr/">서울대학교 학칙</a></li></ul>

</div>`;

export const undergraduateGuideData = `<p><br></p><h2>수강 신청<br></h2><ol><li>수강 신청은 1학기 (당해 연도 1월 또는 2월 중), 2학기 (당해 연도 7월 또는 8월 중)</li><li>수강 변경은 매 학기 수업 주수 1주 이내 (6학점 이내)</li><li>수강 취소는 수업 주수 2/4선 이내</li><li>수강 신청 학점 (학기 당)은 18학점 이내<ol><li>직전 2개 학기 평점 평균이 3.3 이상일 때 21학점까지 신청할 수 있음</li><li>직전 학기 학사 경고 (한 학기 성적 평점 평균이 1.7에 미달되거나 3 교과목 이상 또는 6학점 이상이 'F')를 받은 경우는 학기당 15학점까지만 수강 신청 가능</li></ol></li></ol><h3>수강에 관한 내규</h3><p>유사 과목 목록에 따라 중복 수강을 금지한다. (2004학번부터 적용) 컴퓨터공학부에 개설된 과목을 타과의 유사 과목으로 대체 금지. 단, 타과 과목이 컴퓨터공학부 과목보다 심화된 과목의 경우 예외 인정.<em>​</em></p><h3>타 과와의 유사 교과목 목록</h3><table><tbody><tr><th colspan="2"><div>컴퓨터공학부</div></th><th colspan="2"><div>전기·정보공학부</div></th></tr><tr><th><div>교과목 번호</div></th><th><div>교과목명<em>​</em></div></th><th><div>교과목 번호</div></th><th><div>교과목명</div></th></tr><tr><td><div>M1522.000700<br>(4190.201)</div></td><td><div>논리설계</div></td><td rowspan="2"><div>430.201A</div></td><td rowspan="2"><div>논리설계 및 실험</div></td></tr><tr><td><div>4190.202A</div></td><td><div>논리설계실험</div></td></tr><tr><td><div>M1522.000600<br>(4190.102A)</div></td><td><div>컴퓨터프로그래밍</div></td><td rowspan="2"><div>430.211A</div></td><td rowspan="2"><div>프로그래밍방법론</div></td></tr><tr><td><div>4190.210</div></td><td><div>프로그래밍의원리</div></td></tr><tr><td><div>M1522.000900<br>(4190.204)</div></td><td><div>자료구조</div></td><td rowspan="2"><div>420.210<br>430.217<br>430.329<br>430.327</div></td><td rowspan="2"><div>자료구조 및 알고리즘<br>자료구조의 기초<br>알고리즘의 기초<br>자료구조와 알고리즘</div></td></tr><tr><td><div>4190.407</div></td><td><div>알고리즘</div></td></tr><tr><td rowspan="2"><div>4190.206A</div></td><td rowspan="2"><div>전기전자회로</div></td><td><div>420.213<br>430.213A</div></td><td><div>회로이론1<br>기초회로이론 및 실험</div></td></tr><tr><td><div>420.207A<br>430.207B</div></td><td><div>전자회로1<br>기초전자회로 및 실험</div></td></tr><tr><td><div>4190.307</div></td><td><div>운영체제</div></td><td><div>430.318</div></td><td><div>운영체제의 기초</div></td></tr><tr><td><div>4190.308</div></td><td><div>컴퓨터구조</div></td><td><div>430.322</div></td><td><div>컴퓨터 조직론</div></td></tr><tr><td><div>M1522.002100<br>(4190.302)</div></td><td><div>데이터통신</div></td><td><div>430.317</div></td><td><div>통신의 기초</div></td></tr><tr><td><div>4190.303C</div></td><td><div>임베디드시스템과 응용</div></td><td rowspan="2"><div>430.417</div></td><td rowspan="2"><div>임베디드시스템설계</div></td></tr><tr><td><div>4190.309A</div></td><td><div>하드웨어시스템설계</div></td></tr><tr><td><div>4190.411</div></td><td><div>컴퓨터네트워크</div></td><td><div>430.463</div></td><td><div>데이터통신망의 기초</div></td></tr><tr><td><div>4190.416A</div></td><td><div>디지털신호처리</div></td><td><div>430.461</div></td><td><div>디지털신호처리의 기초</div></td></tr><tr><td><div>4190.409</div></td><td><div>컴파일러</div></td><td><div>430.414</div></td><td><div>컴파일러의 기초</div></td></tr><tr><td><div>M1522.000200<br>(4190.311A)</div></td><td><div>창의적통합설계1<br>(프로젝트1)</div></td><td rowspan="2"><div>430.405</div></td><td rowspan="2"><div>전기공학설계프로젝트</div></td></tr><tr><td><div>M1522.000300<br>((4190.413A)</div></td><td><div>창의적통합설계2<br>(프로젝트2)</div></td></tr></tbody></table><table><tbody><tr><th colspan="2"><div>컴퓨터공학부</div></th><th colspan="2"><div>산업공학과</div></th></tr><tr><th><div>교과목 번호</div></th><th><div>교과목명</div></th><th><div>교과목 번호</div></th><th><div>교과목명</div></th></tr><tr><td><div>4190.418A</div></td><td><div>웹정보시스템</div></td><td><div>406.424A</div></td><td><div>전자상거래</div></td></tr><tr><td><div>M1522.001800<br>(4190.301)</div></td><td><div>데이터베이스</div></td><td><div>406.426<br>406.426A<br>406.426B</div></td><td><div>데이터베이스분석및설계<br>데이터베이스 시스템<br>데이터관리와 분석</div></td></tr></tbody></table><h2>휴학</h2><ol><li>휴학 신청은 등록 기간 또는 수업 주수 2/4선 (8주) 이내</li><li>휴학원의 유효 기간은 1년이며, 계속 휴학하고자 할 경우에는 휴학원을 다시 제출</li><li>휴학 기간은 총 6학기</li><li>복학원 제출은 등록 기간 2주 전에 신청</li></ol><h2>졸업</h2><ol><li>이수 학점은 130학점 이상 (1996학번부터)<ul><li>교양과목<ul><li>(1996학번 ~ 2001학번) 36학점 이상</li><li>(2002학번 ~ 2004학번) 37학점 이상</li><li>(2005학번 ~ 2008학번) 54(55)학점 이상</li><li>(2009학번) 55(56)학점 이상</li><li>(2010학번) 56학점 이상</li><li>(2011학번 ~ 2012학번) 53학점 이상</li><li>(2013학번) 47학점 이상 / 사회성 교과목군, 창의성 교과목군 별도 이수</li><li>(2014학번 ~ 2015학번) 44학점 이상 / 사회성 교과목군, 창의성 교과목군 별도 이수</li></ul></li><li>전공 과목<ul><li>(1996학번 ~ 2007학번) 51학점 이상</li><li>(2008학번 ~ 2010학번) 60학점 이상</li><li>(2011학번 ~ 2015학번) 63학점 이상</li></ul></li></ul></li><li>전공 및 전체 이수 학점 평점 평균 2.0 이상</li></ol><h2>복수전공</h2><ol><li>소속 전공 과정을 포함하여 2개 이상의 전공 과정을 이수함</li><li>상호 가능한 대학으로 하며, 지원 자격은 3개 정규학기 이상 이수하고 36학점 이상 취득한 재학생(복학예정자 포함)으로 성적 평점평균이 2.7이상인 자</li><li>이수 규정 (2004학년도 1학기부터 시행)<ul><li>~2007번까지<ul><li>컴퓨터공학부 전공필수 포함하여 51학점 이상 이수하여야 함 (컴퓨터공학부 주전공 학번과 동일한 이수규정)</li><li>공대공통교과목(산업공학개론, 전기공학개론, 재료공학개론, 기계공학개론) 중 한 과목(3학점)을 이수하여야 함.</li></ul></li><li>2008학번 이후<ul><li>컴퓨터공학부 전공필수 포함하여 39학점 이상 이수하여야 함 (컴퓨터공학부 주전공 학번과 전공필수가 동일함)</li><li>공대공통교과목(산업공학개론, 전기공학개론, 재료공학개론, 기계공학개론 등) 이수하지 않아도 됨.</li></ul></li><li>복수전공 이수자는 해당 학부에서 정한 전공 교과목 학점을 이수하여야 하며, 각 전공에 중복되는 교과목은 아래의 경우를 제외하고는 이중으로 인정하지 아니한다.<ul><li>복수전공 이수 시 소속 학과(부)와 복수전공 학과(부)의 교과과정에서 전공과목으로 공통 인정하는 과목(단과대학 내 공통과목 포함)은 9학점까지, 소속 학과(부)와 복수전공 학과(부)의 교과과정에서 공통 인정하는 타 학과(부)의 과목(단과대학 내의 공통과목 포함)은 3학점까지 전공학점의 이수로 중복하여 인정할 수 있다.</li><li>학점인정은 본인의 의사에 따라 인정 받아야 할 필요가 있는 쪽으로 학점 수를 계산하며, 특정한 하나의 과목이 주전공, 복수전공, 부전공, 연합전공, 연계전공, 학생설계전공 간에 공통적으로 필수과목인 경우에는 한번 이수한 것으로 각 전공의 필수를 충족한 것으로 본다.</li><li>과목을 중복으로 인정한 경우에도 학생이 이수한 총 학점 수의 산정에는 이중으로 계산하지 아니한다.</li></ul></li></ul></li></ol><h2>부전공</h2><ol><li>이수 규정<ul><li>~2007번까지<ul><li>컴퓨터공학부 전공필수 포함하여 24학점 이상 이수하여야 함</li><li>전공필수: 자료구조, 시스템프로그래밍, 컴퓨터구조</li><li>전공선택: 컴퓨터공학부 전공교과목 중 선택</li></ul></li><li>2008학번 이후<ul><li>컴퓨터공학부 전공필수 포함하여 21학점 이상 이수하여야 함</li><li>전공필수: 자료구조, 시스템프로그래밍, 컴퓨터구조</li><li>전공선택: 컴퓨터공학부 전공교과목 중 선택</li></ul></li></ul></li></ol><h2>전과(부) 신청</h2><ol><li>전과(부) 선발기준<ul><li>전과(부)의 전출ㆍ입 인원은 대학별로 정한 학과별 학년 정원의 100분의 20 이내로 하며 전출 및 전입자 선발 기준은 대학장이 따로 정한다. 단, 약학대학 전입 인원은 편입학 인원을 포함하여 약학대학 입학정원을 초과할 수 없다.</li></ul></li><li>신청자격 및 허용범위<ol><li>신청자격<ul><li>매 학년도말 현재 4개 학기 이상 등록하고 2학년 수료학점(66학점) 이상을 취득한 자로서 3학년 수료학점(98학점)에 미만이 되는 자,<strong>다만 의과대학 및 수의과대학 학생의 경우에는 예과과정 등록학기 및 이수학점을 합산하여 지원할 수 있으며, 약학대학은 2학년 수료학점을 계절학기 포함한 66학점을 적용한다.</strong></li><li>전과(부) 지원시의 취득학점이며,<em>계절학기 이수 중인 학점은 제외</em></li></ul></li><li>허용범위 및 제한<ul><li>사범계는 사범계 각 학과(부) 상호간에만 허용한다.</li><li>사범계 이외의 학과(부)는 사범계 이외의 각 학과(부) 상호간에만 허용한다. 다만, 의학계, 수의학계 및 간호학계로의 전과(부)는 허용하지 아니한다.</li><li>전공을 예약하고 입학한 자(편입학자 포함)는 전과(부) 불가</li><li>지원 학과(부)는 1개 학과(부)로 제한한다. (이중으로 지원할 경우 지원 학과(부) 모두를 취소)</li></ul></li></ol></li><li>지원서 기간&nbsp;: 매년 1월 중순</li></ol><h2>바깥 고리</h2><ul><li><a rel="nofollow" href="http://rule.snu.ac.kr/">서울대학교 학칙</a></li></ul>`;

export const undergraduateCourses: Course[] = [
  {
    name: '컴퓨터의 개념 및 실습',
    description:
      '컴퓨터를 처음 접하는 학생들을 대상으로 컴퓨터에 대한 일반적인 기초개념 등을 설명하고, 프로그램이 수행되는 과정과 프로그램 작성을 위한 논리적인 사고에 대하여 강의한다. 이와 같은 기초 지식을 바탕으로 Python 프로그래밍 언어를 사용하는 방법을 습득한다. 일부 공과대학 학부/학과에서는 포트란 언어와 Matlab을 사용하는 법을 익힌다. 매주 2시간의 실습을 통하여 프로그래밍 기법을 배양하도록 한다.',
    year: '1학년',
    classification: '교양',
    code: '035.001',
    credit: 3,
  },
  {
    name: '컴퓨터과학이 여는 세계',
    description:
      '학생들이 컴퓨터와 소프트웨어의 원천 기반 기술을 이해하고 장차 각자의 분야에서 미래의 가능한 응용을 창조하거나 예측할 수 있는 안목을 기르도록 한다. - 학생들이 컴퓨터과학의 근간을 이루는 원천 개념을 정확히 이해하도록 해서, 보편만능의 도구라는 컴퓨터의 가능성과 한계를 올바로 파악할 수 있도록 한다. - 지금까지의 정보화 문명은 이제 막 시작에 불과할 뿐이고, 미래에 이루어질 거대한 변화에 비하면 지금까지의 컴퓨터과학의 성과는 매우 미미한 시작임을 상기시킨다. - 컴퓨터과학은 모든 분야(자연과학, 공학, 인문학, 사회학, 예술)의 성과를 바탕으로 자라며 모든 분야를 키우는 보편학문의 성격을 점점 띠고 있고, 다양한 분야의 성장을 가속시키는 인프라가 되고 있음을 구체적인 예를 통해 전달한다.',
    year: '1학년',
    classification: '교양',
    code: '046.016',
    credit: 3,
  },
  {
    name: '컴퓨터과학적 사고와 실습',
    description:
      '인류가 만든 모든 도구들은 인간 능력의 한계를 늘 확장시켜왔지만, 컴퓨터라는 도구는 특이하다. 인류가 발명한 대개의 도구는 물리적인 도구이고 다루려면 물리적인 근육이 필요하다. 하지만 컴퓨터는 마음의 도구이고 그 도구를 다루는 방법은 물리적인 근육이 아니라 언어다. 언어로 작성된 텍스트(소프트웨어)를 컴퓨터의 메모리에 실으면 컴퓨터는 그 텍스트가 표현한 할 일을 해 간다. 이런 소프트웨어들로 마음의 도구를 능숙하게 다루며 인간은 놀랍게 확장하고 있다. 이 과목은 다양한 전공의 학생들에게 컴퓨터라는 마음의 도구를 다루는 소프트웨어적인 문제해결 방식을 쉽게 익히도록 한다. 강의와 실습을 통해서 학생들이 컴퓨터를 다루는 소프트웨어를 어떻게 구성하고 상상할 수 있는 지, 그 사고방식의 강점과 한계를 구체적으로 파악할 수 있도록 돕는다.',
    year: '1학년',
    classification: '교양',
    code: 'L0444.000200',
    credit: 3,
  },
  {
    name: '인공지능 입문',
    description:
      '인공지능은 사람처럼 생각하고 사람처럼 행동하는 지능적인 기계를 연구한다. 인공지능 기술은 인간의 뇌와 마음의 구조와 작동 원리에 기반하며 인문학, 자연과학, 공학의 학제적인 연구를 필요로 한다. 고전적인 규칙 기반 프로그래밍 방식의 한계를 극복하고, 현대적인 데이터 기반의 딥러닝 방식으로의 전환을 통해서 인공지능은 크게 도약하였다. 앞으로 디지털 데이터 양이 더욱 늘어나고 컴퓨팅 속도가 더욱 빨라지는 4차 산업혁명의 시대에는 인공지능이 전 산업을 혁신하는 핵심 원동력 역할을 할 것으로 기대된다. 이 과목은 인공지능의 원리와 방법 및 활용 분야를 개괄적으로 살펴봄으로써 미래의 창의적 융합인재가 갖추어야 할 소양을 함양하는 것을 목적으로 한다. 인문학, 사회과학, 예술 분야 전공자 뿐만 아니라 자연과학, 의약학, 공학 전공자들에게 인간에 대한 정보과학적인 시각을 이해하고, 디지털 시대에 인공지능에 의한 문제해결 능력과 산업 및 사회 변화에 대한 통찰력을 제공하게 될 것이다. 강의 뿐만 아니라 실습을 통해서 학생들이 인공지능 도구를 활용하여 문제를 해결하는 방법을 직접 경험할 기회를 제공한다.',
    year: '1학년',
    classification: '교양',
    code: 'L0444.000300',
    credit: 3,
  },
  {
    name: '인터넷 보안과 프라이버시',
    description:
      '인터넷에서의 보안과 프라이버시는 점점 더 중요해지고 있다. 이공계생들 뿐만 아니라 모든 전공의 학부생들도 인터넷 서비스를 사용함에 있어서 어떤 보안 사항들이 이슈가 되고 어떤 프라이버시가 노출되는 위협이 있는지 기본 원리와 대처 방안들을 이해하는 것은 필수적이라 할 수 있다. 본 강의는 모든 전공의 학생들이 들을 수 있도록 쉽게 구성될 것이다. 본 교과목은 크게 보안과 프라이버시 두 개의 영역으로 구성된다. 보안 분야에서는 보안의 기본 성질 및 개념, 암호화/복호화의 기초, 인증, 보안 장비, 웹의 보안 위협들을 설명한다. 프라이버시 분야에서는 개인 민감정보들을 소셜네트워크에서 어떻게 유출이 가능한지 설명하고, 또한 법적으로 프라이버시가 어떻게 정의되고 어떤 이슈가 있는지 다룬다. 또한 Tor등 익명화 기법을 포함한 프라이버시 강화 기법들을 설명한다. 끝으로 암호화폐와 디지털 포렌식을 다룬다.',
    year: '1학년',
    classification: '교양',
    code: 'L0550.000300',
    credit: 3,
  },
  {
    name: '이산수학',
    description:
      '이 과목에서는 컴퓨터공학과 밀접하게 관련된 수학적 내용들에 대하여 배운다. 논리, 집합, 함수, 관계, 가산성, 조합론, 증명기법, 수학적 귀납법, 재귀함수, 재귀관계, 그래프론, 정수론 등에 대하여 다룬다. 또한, 이러한 수학적 개념들이 컴퓨터공학에서 어떻게 쓰이는지에 대해서 살펴본다.',
    year: '1학년',
    classification: '전공필수',
    code: '4190.101',
    credit: 3,
  },
  {
    name: '프로그래밍연습',
    description:
      '프로그램의 경험이 없는 초보자를 위해서 C 프로그래밍 언어의 문법과 기초 프로그래밍 기법을 강의한다. 프로그래밍 실습을 통하여 프로그래밍 실력을 배양시키는 것이 강의의 목표이다.',
    year: '1학년',
    classification: '전공선택',
    code: '4190.103A',
    credit: 3,
  },
  {
    name: '공학수학1',
    description:
      '모든 공학의 기초가 되는 수학의 응용분야로서, 공학에 널리 쓰이는 수학의 제반원리 및 응용을 교육하는 과목이다. 미분방정식, 행렬방정식, 라플라스 변환 및 복수함수의 해석, 편미분 방정식과 푸리에 급수 등 공학전반에 걸쳐 응용에 필요한 수학의 해석 기법을 익힌다.',
    year: '2학년',
    classification: '교양',
    code: '033.014',
    credit: 3,
  },
  {
    name: '공학수학2',
    description:
      '공학수학1의 연속 강좌로, 엔지니어들을 위한 1년 단위의 공학수학 강의 중 2학기 과목이다.',
    year: '2학년',
    classification: '교양',
    code: '033.015',
    credit: 3,
  },
  {
    name: '전기전자회로',
    description:
      '본 강좌에서는 전기,전자회로의 기본 지식을 학습한다. 저항 회로를 중심으로 회로를 분석하는 일반적인 방법을 배우고 캐패시터와 인덕터 회로를 시간 영역과 주파수 영역에서 분석하는 방법을 배운다. 또한 전자회로의 핵심 소자인 MOS와 Bipolar 트랜지스터의 특성을 학습하고 논리 회로와 증폭회로의 원리를 배운다. 이 과목을 통해서 디지털 하드웨어의 전기적인 특성, 속도와 에너지 소모에 대한 기초지식을 습득한다.',
    year: '2학년',
    classification: '전공필수',
    code: '4190.206A',
    credit: 3,
  },
  {
    name: '컴퓨터구조',
    description:
      '이 과목에서는 컴퓨터를 구성하는 주요 구성 요소들의 기능과 그들 상호간의 작용을 이해하고 이를 바탕으로 컴퓨터 시스템을 구현하는데 사용되는 여러 설계 기법들을 학습한다. 명령어집합, 중앙처리장치, 파이프라이닝, 메모리 계층구조, 입출력장치 등을 다루며 컴퓨터 발전의 역사적 고찰 및 컴퓨터 시스템의 성능 분석에 필요한 지식을 배운다.',
    year: '2학년',
    classification: '전공필수',
    code: '4190.308',
    credit: 3,
  },
  {
    name: '컴퓨터프로그래밍',
    description:
      '이 과목에서는 Java와 C++ 언어를 이용한 객체지향 프로그래밍을 학습한다. 학생들은 Java와 C++의 기초 및 API에 대하여 배우고, Java와 C++를 이용하여 실제 문제를 제대로 풀 수 있도록 바르게 동작하고 질 좋은 객체지향 소프트웨어를 작성하는 방법에 대하여 배운다.',
    year: '2학년',
    classification: '전공필수',
    code: 'M1522.000600',
    credit: 4,
  },
  {
    name: '논리설계',
    description:
      '디지털 논리 회로는 컴퓨터 뿐 아니라 각종 디지털 전자 기기의 하드웨어를 구성하는 기본 요소이며 이 강좌를 통해서 기본 지식을 학습한다. 학생들은 논리회로를 구성하는 기본 소자, 조합회로와 순차회로의 설계 이론을 배운다. 이와 병행하여 학습한 이론을 실험을 통해 확인하여 하드웨어 설계의 기초를 공고히 한다.',
    year: '2학년',
    classification: '전공필수',
    code: 'M1522.000700',
    credit: 4,
  },
  {
    name: '자료구조',
    description:
      '이 과목에서는 컴퓨터에 의한 문제 해결을 위해 필요한 개념이나 대상물의 표현을 위한 자료 구조와 문제해결을 위한 체계적 사고 방법을 학습한다. 배열, 연결 리스트, 큐, 스택, 우선순위 큐 등의 기본적인 자료구조를 배우고, 검색 트리, 해시 테이블, 균형 잡힌 검색 트리 등 자료의 색인을 위한 자료구조와 그들의 효율성을 배운다. 정렬, 그래프 알고리즘 등 문제 해결에 유용한 도구와 생각하는 방법에 관한 내용도 제공한다. 프로그래밍 과제가 부여되며 이를 위한 최소한의 가이드가 제공된다.',
    year: '2학년',
    classification: '전공필수',
    code: 'M1522.000900',
    credit: 3,
  },
  {
    name: '컴퓨터공학세미나',
    description:
      '현대 컴퓨터공학의 주요 관심사에 대한 특별한 주제와 관련해서 매주 한번씩 토의한다.',
    year: '2학년',
    classification: '전공선택',
    code: '4190.209',
    credit: 1,
  },
  {
    name: '프로그래밍의 원리',
    description:
      '이과목은 기계중심/구현중심의 프로그래밍을 보완하는 논리중심/기획중심의 프로그래밍 기술을 익히도록 한다. 학생들이 프로그램 작성의 기본 원리, 구성 요소, 프로그래밍 미학등을 습득하게 함으로써, 소프트웨어 시스템이 드러내는 복잡성을 손쉽게 다룰 수 있는 능력과 자신감을 익히게 한다. 더군다나, 프로그램이 기계를 사용하기 위한 도구라는 제한된 시각에서 벗어나 기계가 프로그램 실행을 위한 도구라는 시각을 갖추도록 보정해준다. 이 강의는 프로그래밍 연습(training)이 아니라 프로그래밍 교육(education)이다. 실습언어는 학생들이 명료하고 효과적으로 생각할 수 있게 하는 프로그래밍 교육에 적절한 ML과 Scheme이다. 대형 소프트웨어를 2명이상의 팀이 기획하고, 구현하고, 형상 관리하는 과정을 프로젝트를 통해 익힌다. 대형 소프트웨어를 구성하는 프로젝트를 학기말에 요구한다.',
    year: '2학년',
    classification: '전공선택',
    code: '4190.210',
    credit: 3,
  },
  {
    name: '알고리즘',
    description:
      '다양한 알고리즘 개발 방법과 알고리즘 분석 기법을 배운다. 귀납적, 재귀적 사고방식을 배우고 이를 통해 문제를 접근하고 해결해나가는 방법을 배운다.',
    year: '3학년',
    classification: '전공필수',
    code: '4190.407',
    credit: 3,
  },
  {
    name: '시스템프로그래밍',
    description:
      '이 과목에서는 운영 체제와 시스템 프로그래밍을 학습한다. 운영 체제의 중요 개념인 프로세스 관리, 메모리 관리, 파일 시스템과 입출력, 네트워크 프로그래밍, 병렬 프로그래밍 및 동기화 관련 내용들을 배운다. 수강생은 각각의 주제에 대해 이론적인 개념을 적용하는 프로젝트를 수행하여 시스템 프로그래밍을 실제적으로 수행할 수 있는 경험을 쌓는다.',
    year: '3학년',
    classification: '전공필수',
    code: 'M1522.000800',
    credit: 4,
  },
  {
    name: '오토마타이론',
    description:
      '이 교과목에서는 유한 오토마타, pushdown 오토마타, 튜링 기계 등 여러 오토마타와 정규 문법, 문맥 자유 문법, 무제약 문법 등 여러 문법체계에 대해서 배우고 그들의 관계를 익힌다. 또한 튜링의 명제와 계산 불가성에 대해서 배운다.',
    year: '3학년',
    classification: '전공선택',
    code: '4190.306',
    credit: 3,
  },
  {
    name: '운영체제',
    description:
      '이과목은 운영체제가 무엇이며, 그것이 수행하는 역할은 무엇이며, 또 운영체제가 어떻게 설계되고 만들어지는지를 소개한다. 주요한 주제들로는 프로세스 관리, 저장장치 관리, 입출력 시스템, 분산처리 및 보안 등이다. 이와 함께 Linux 와 같은 실제 운영체제에 대한 소개도 한다.',
    year: '3학년',
    classification: '전공선택',
    code: '4190.307',
    credit: 3,
  },
  {
    name: '하드웨어시스템설계',
    description:
      '전기전자회로 및 논리설계의 이론 지식에 기초하여 실제 디지털 하드웨어 시스템을 설계 구현할 때 필요한 이론과 실제 지식을 습득한다. 습득한 지식과 실습을 통해서 완전한 독립된 디지털 하드웨어 시스템을 직접 설계 및 구현할 수 있는 능력 배양을 목표로 한다. 논리설계에서 배운 이론적인 디지털 회로가 전자회로 소자 특성에 접목되어 실제 디지털 시스템을 구현할때 이론과 실제가 어떻게 다르며, 신호와 전원 무결성이 시스템 동작에 미치는 영향을 공부한다. 아울러 디지털 디바이스가 아닌 여러 입출력 및 통신 디바이스와의 인터페이스를 배운다. 하나의 완전한 독립된 하드웨어 시스템을 구현하기 위한 전원장치를 배우며, LCD 디스플레이 시스템과 호스트 컴퓨터 통신을 공부한다. 실습으로는 모르스부호 연습기를 구현한다.',
    year: '3학년',
    classification: '전공선택',
    code: '4190.309A',
    credit: 3,
  },
  {
    name: '프로그래밍언어',
    description:
      '프로그래밍 언어론에 대한 전반적인 이해를 높이고, 다양한 프로그래밍 언어를 익힌다. 이를 위해 프로그래밍 언어의 개념, 설계이론, 구현 방법에 대해 공부한다.',
    year: '3학년',
    classification: '전공선택',
    code: '4190.310',
    credit: 3,
  },
  {
    name: '선형 및 비선형 계산모델',
    description:
      '이 과목은 컴퓨터공학의 기초를 수강한 학부 상급생을 대상으로 선형대수학, 선형 프로그래밍, 비선형 최적화 등의 다양한 계산모델들을 소개한다. 이러한 계산모델들이 컴퓨터공학에서 사용되는 구체적인 실례들을 통하여 이들이 컴퓨터 응용소프트웨어 개발에 어떻게 사용되는지를 살펴본다.이 과목을 수강하기 위해서는 컴퓨터공학에 관한 기본 수준의 지식과 C, C++ 등의 프로그래밍을 할 수 있는 지식이 요구된다. 수업의 진행은 강의와 더불어 여러 가지 프로그래밍 실습을 병행한다.',
    year: '3학년',
    classification: '전공선택',
    code: '4190.313',
    credit: 3,
  },
  {
    name: '디지털신호처리',
    description:
      '본 강의에서는 디지털 신호를 처리하는 기본 지식들을 배우도록 한다. 우선 앞부분에서는 푸리에 변환을 이용한 주파수 영역에서의 신호의 해석과 아날로그 신호를 디지털 신호로 변환하는 샘플링에 대하여 학습을 한다. 후반부에서는 디지털 필터와 주파수 영역에서의 신호처리, 그리고 고속 푸리에 변환에 대하여 다루고 끝부분에 이미지 처리에 대한 기본적인 개념을 학습하도록 한다.',
    year: '3학년',
    classification: '전공선택',
    code: '4190.416A',
    credit: 3,
  },
  {
    name: '창의적통합설계1',
    description:
      '본 강의는 소프트웨어/하드웨어 설계 실습을 위주로 하며 다음과 같이 이루어진다. 참여 기업은 4명 내외의 그룹이 1-2 학기 동안(학기에 평균 학생당 60시간 투여)에 할 수 있는 프로젝트 리스트를 제안하고, 학생들은 적당한 그룹을 조직하여 해당 기업의 프로젝트를 수행하며, 학기 중 개발 지도는 회사와 지도교수의 협조로 이루어진다. 학기말에는 각 그룹이 진행한 프로젝트에 대한 전체적인 평가와 발표가 이루어진다.',
    year: '3학년',
    classification: '전공선택',
    code: 'M1522.000200',
    credit: 3,
  },
  {
    name: '데이터마이닝 개론',
    description:
      '데이터마이닝은 대용량 데이터에서 유용한 패턴을 찾기 위한 이론과 기법을 의미한다. 데이터마이닝은 웹, 사기 탐지, 추천 시스템, 사이버 보안 등 중요한 응용에 활용되고 있다. 본 과목에서는 데이터마이닝을 위한 중요 알고리즘과 이론을 설명한다. 주요 학습 주제로 mapreduce, 유사 아이템 검색, 빈발 패턴 검색, 링크 분석, 데이터 스트림 마이닝, 클러스터링, 그래프 마이닝 등을 다룬다.',
    year: '3학년',
    classification: '전공선택',
    code: 'M1522.001400',
    credit: 3,
  },
  {
    name: '데이터베이스',
    description:
      '각종 정보를 효율적으로 관리하기 위한 데이타베이스 시스템에 대한 데이타 모델링 기법, 화일 시스템의 구성 및 인덱싱 기법, 해싱 기법,데이타베이스의 논리적 구조와 물리적 구조, 각 모델에 따른 각종 질의어(query language) 처리 및 최적화, 동시성 제어(concurrency control), 복구기법(recovery technique) 등의 데이타베이스 설계 기법에 대해서 배운다. 선수과목으로는 자료구조, 운영체제가 요구된다.',
    year: '3학년',
    classification: '전공선택',
    code: 'M1522.001800',
    credit: 3,
  },
  {
    name: '데이터통신',
    description:
      '두개의 직접 연결된 디바이스 간의 데이타 교환과 관련된 환경에서 전송, 인터페이싱, 링크제어 및 다중화를 이해하고, 또 통신망을 통해 데이타전송 서비스를 제공하는데 필요한 기능과 그 메커니즘을 이해할 수 있도록 한다. 이 교과목에서 취급하는 내용은 다양한 전송매체를 통한 데이터의 전송 및 인코딩, 디지탈 데이터통신 기술, 데이터 링크 제어, 멀티플렉싱, 패킷 교환, 망 경로배정 및 혼잡제어, 근거리망의 종류와 동작원리이다.',
    year: '3학년',
    classification: '전공선택',
    code: 'M1522.002100',
    credit: 3,
  },
  {
    name: '소프트웨어 개발의 원리와 실습',
    description:
      '중대형 소프트웨어를 설계하고 구현하는데 필요한 실용적인 소프트웨어 개발 원리를 배우고 이 원리를 조별 프로젝트를 통해 실제로 중대형 소프트웨어를 개발하는데 적용한다. 이 경험을 바탕으로 올바르고 성능 좋은 소프트웨어를 개발할 수 있는 사고력, 자신감, 능력을 갖추도록 한다.',
    year: '3학년',
    classification: '전공선택',
    code: 'M1522.002400',
    credit: 4,
  },
  {
    name: 'IT창업개론',
    description:
      '미래의 IT 제품과 서비스를 책임지게 될 컴퓨터공학도에게 새로운 비즈니스 환경에 대한 감수성 함양은 매우 중요한 일이다. 본 과목의 교육목표는 시장 분석, 자금 조달, 성장 관리, 리더십, 조직 내 역할 및 책임 분장 등 IT 기업의 창업과 운영에 수반되는 다양한 요소를 학습하는데 있다. 이들 현안에 대한 이해를 통해 수강생들은 향후 시장성을 고려한 IT 제품과 서비스를 디자인하고, 신규 또는 기존 기업에 대한 분석적 판단을 하고, 자신이 속하게 될 조직에 적극적으로 참여하고 기여할 수 있을 것이다. 토론식 강의 중심으로 진행되며, 주요 성공사례 및 시장현황 등에 대해 외부 초청 인사의 강연도 더해진다. 수강생들은 조사 보고서 및 (개인 또는 팀 별) 발표 과제를 수행하게 된다.',
    year: '3학년',
    classification: '전공선택',
    code: 'M1522.002700',
    credit: 3,
  },
  {
    name: '임베디드시스템과 응용',
    description:
      '본 과목의 전반부에서는 ARM 기반의 내장형 시스템 하드웨어의 이해와 주요 부분에 대한 설계지식을 습득한다. 기존 컴퓨터구조 및 관련 과목에서 마이크로프로세서 위주로 컴퓨터구조를 소개하는 것에 대응하여, 본 과목에서는 메모리 시스템, 입출력 및 버스 등의 구조를 강조하여 소개하여, 내장형 시스템 전체의 하드웨어의 이해와 설계 능력을 배양하는데 그 목표를 둔다. 본 강의의 후반부에서는 내장형 시스템을 구성하는 주요 소프트웨어 구성 요소들을 소개하고 내장형 시스템이 요구하는 설계의 요건들을 만족하기 위한 설계 기법들을 학습한다. 실시간 OS, 디바이스 드라이버 등의 기능들을 소개하고 내장형 시스템의 주요 응용(예: 멀티미디어 응용)에 대해서도 익힌다. 개발된 시스템의 성능평가 및 성능 최적화 기법을 다루며 내장형 소프트웨어를 위한 검증기법을 학습한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.303C',
    credit: 3,
  },
  {
    name: '소프트웨어공학',
    description:
      '소프트웨어 공학은 적절한 기간과 비용의 한도내에서 개발되고 수정되는 소프트웨어 생산품의 생산과 유지를 위한 체계적인 기술과 관리의 학문분야로써 소프트웨어 생산품의 질을 향상시키고 생산성을 증가시키는데 그 목적이 있다. 특히, 소프트웨어 생명주기, 구조적 설계 및 분석기법, 각종 다이어그래밍 기법 등에 대해 배움으로써 고품질의 소프트웨어를 양산할 수 있는 능력을 배양한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.402',
    credit: 3,
  },
  {
    name: '소프트웨어응용',
    description:
      '소프트웨어 공학은 적절한 기간과 비용의 한도 내에서 소프트웨어 생산품의 생산과 유지를 위한 체계적인 기술과 관리의 학문분야로서 소프트웨어 생산품의 질을 향상시키고 생산성을 증가시키는데 그 목적이 있다. 이 강좌에서는 소프트웨어 공학에 대한 폭넓은 시각을 소개하며 주로 큰 규모의 소프트웨어를 개발할 때 널리 사용하는 여러 기법들을 다룬다. 구체적으로 임계 시스템(critical system) 명세와 개발, 검증과 확인, 소프트웨어 비용 산정, 품질 관리, 소프트웨어 진화 등의 주제를 다룬다. 또한 UML, 소프트웨어 메트릭, 재공학과 같은 고급 주제를 대학원생들이 특강 형식을 빌어 소개한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.403',
    credit: 3,
  },
  {
    name: '모바일 컴퓨팅과 응용',
    description:
      '최근 컴퓨팅 기술과 무선통신의 발전에 힘입어 ‘언제, 어디서’든 멀티미디어정보를 처리할 수 있게 되었다. 이러한 이동 컴퓨팅 시스템은 단말기(휴대전화, PDA 등), 유무선 네트워크, 운영체제/미들웨어 등으로 구성되어 있으며, 이들 모두의 통합에 의하여 응용 서비스를 효과적으로 제공할 수 있다. 이동 컴퓨팅은 요소기술로서 분산 컴퓨팅 및 임베디드 시스템 기술에 기초하고 있으며 유비퀴터스 시스템, 이동 상거래, 휴대전화 등에 응용된다. 따라서 이 과목의 목적은 이동 컴퓨팅 구성기술을 이해하고, 단말기 등을 위한 응용 소프트웨어 개발에 대하여 학습하는 데 있다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.406B',
    credit: 3,
  },
  {
    name: '인공지능',
    description:
      '인공지능은 사람의 지능과 인지 기능을 흉내낼 수 있는 정보처리 모델을 연구하는 컴퓨터과학의 한 분야이다. 인공지능의 근본적인 문제로서 경험적 탐색, 추론, 학습, 지식표현 방법에 관한 이론과 근본적인 계산학적 문제들을 다룬다. 논리 기반의 정리증명, 게임이론, 지능형 에이전트 등에 관해 다루며 신경망, 진화연산, 베이지안망의 기본 원리를 학습하고 이의 응용 사례로서 전문가시스템, 컴퓨터비전, 자연언어처리, 데이터마이닝, 정보검색, 바이오정보학 등의 분야에 대해 살펴본다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.408',
    credit: 3,
  },
  {
    name: '컴파일러',
    description:
      '고급언어를 어셈블리어로 번역하여 주는 시스템 프로그램인 컴파일러에 관해 배우는 과목으로 컴파일러의 각 단계인 렉시칼분석(lexical analysis), 구문분석(syntax analysis), 의미분석(semantic analysis), 중간코드생성(intermediate code generator), 최적화기법(optimization technique), 목적코드생성(object code generation) 등에 대하여 배우며 미니 컴파일러를 직접 구성해 봄으로써 컴파일러의 구성과 작동원리를 이해하게 된다. 선수 과목으로는 프로그래밍어론, 컴퓨터시스템 개론이 요구된다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.409',
    credit: 3,
  },
  {
    name: '컴퓨터그래픽스',
    description:
      '2차원 및 3차원 컴퓨터 그래픽스의 기본원리들을 다룬다. 그래픽스 라이브러리를 이용하여 3차원 영상을 합성하고, 대화형 사용자 인터페이스를 구현하는 기술을 익힌다. 3차원 형상의 표현, 기하학적 변환, 투사법 (projection), 가시변환 (viewing transformation), 숨은 면 제거, 렌더링, 애니메이션, 가시화 알고리즘 등을 다룬다. 프로그래밍 과제들을통하여 기본 개념들을 간단히 구현하여 본다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.410',
    credit: 3,
  },
  {
    name: '컴퓨터네트워크',
    description:
      '인터넷 기술을 깊이 다루는 학부 수준의 고급 과정이다. 인터넷의 구조, 프로토콜 응용을 자세히 다룬다. OSI 프로토콜, 데이타 통신 기본 개념에 대한 이해가 사전에 요구된다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.411',
    credit: 3,
  },
  {
    name: '컴퓨터모델링',
    description:
      '컴퓨터 모델링에서는 컴퓨터를 구성하는 각종 자원을 정량적으로 모델링하여 여러 가지 환경하에서 어떻게 동작하는지를 이해하고 성능 분석을 하는 기법을 익힌다. 이를 위해 본 강의에서는 통계적 과정, 분포이론, 확률론등의 기본적 모델링 지식과 함께 실제 시스템에의 적용 방식, 적용 사례 등을 교육한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.412',
    credit: 3,
  },
  {
    name: '멀티코어 컴퓨팅',
    description:
      '이 과목은 컴퓨터공학의 기초를 수강한 학부 상급생을 대상으로 병렬처리 환경의 소개와 병렬프로그래밍 기법에 대하여 입문수준의 지식을 제공함을 목적으로 한다. 주요 학습주제는 일반적인 병렬처리 환경,특히 교내에서 사용 가능한 병렬컴퓨터의 사용방법과 일반적인 대용량의 계산을 요하는 문제들을 어떻게 병렬프로그래밍 하기위해 분석/설계하는 기법이다. 이 과목을 수강하기 위해서는 컴퓨터공학에 관한 기본 수준의 지식과 C, C++ 등의 프로그래밍을 할 수 있는 지식이 요구된다. 수업의 진행은 강의와 더불어 여러 가지 병렬프로그래밍 실습을 병행한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.414A',
    credit: 3,
  },
  {
    name: '컴퓨터보안',
    description:
      '이 과목은 학부 상급생을 대상으로 컴퓨터 및 네트워크 보안의 기본적인 관심 사항 및 기법들을 소개하고, 보안과 관련된 여러 문제점과 해결 방안에 대한 입문 수준의 지식을 제공한다. 주요 학습 주제로는 보안의 정의, 확인과 인증, 접근 제어, 취약성 분석, 보안 모델, 보안 평가, 암호화 기법, 침입 탐지, 시스템 보안, 그리고 네트워크 보안 등을 포함한다. 이 과목을 수강하기 위해서는 운영체제, 컴퓨터 네트워크에 대한 기초 지식이 요구된다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.415',
    credit: 3,
  },
  {
    name: '웹정보시스템',
    description:
      '이 과목은 학부 상급생들을 대상으로 e-비즈니스 용용의 종류를 소개하고 그 현안과 기반기술을 제공하는 것을 목적으로 한다. CRM, ERP, 전자상거래, 데이터 웨어하우스와 OLAP, EAI, SCM을 포함한 기업정보시스템의 비즈니스적 관점에서의 가치를 이해시키며, 기반 기술인 XML, 데이터 마이닝, 웹 서비스, 보안 및 지불결제 기술 및 정보시스템 아키텍쳐에 대해 공부한다. 본 과목을 수강하기 위해서는 운영체제, 데이터베이스, 컴퓨터 네트워크에 대한 지식을 갖추어야 한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.418A',
    credit: 3,
  },
  {
    name: 'IT-리더십 세미나',
    description:
      '이 과목은 IT분야에서의 리더쉽을 개발하기 위해 외부 전문가를 초빙하여 사례분석을 통한 리더쉽의 요건을 학습하도록 한다. 일반적인 리더쉽을 발휘하기 위한 기본 자질 뿐만 아니라 IT분야의 특수성을 고려한 리더쉽 기술에 대하여 공부한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.422',
    credit: 1,
  },
  {
    name: '컴퓨터융합응용',
    description:
      '컴퓨터기술이 전통적인 전자계산 (computing)의 범주를 벗어나서 다른분야와 융합하는 현상은 이제 아주 분명한 정보사회의 흐름으로 나타나고 있다. 본 과목에서는 컴퓨터기술이 다양한 분야 (생명공학 BT, 금융분야 Finance, 미래 자동차 분야 Car Telematics, 휴대 단말기 분야 Handset Devices, etc) 등과 융합되는 과정을 공부하고, 융합에 필요한 기술과 아이디어를 실습하는 내용으로 구성된다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.423',
    credit: 3,
  },
  {
    name: '인간컴퓨터상호작용',
    description:
      '인간-컴퓨터인터페이스의 기본 개념과 인간 요소 관점에서 인간-컴퓨터 인터페이스를 설계하는 기초 이론을 연구한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.426A',
    credit: 3,
  },
  {
    name: '소셜 네트워크 분석',
    description:
      '전산학 및 인터넷의 발전으로 검색시스템, 소셜 네트워크 및 온라인 코머스가 빠르게 발전하고 있다. 소셜 네트워크 분석은 인터넷 세상에서 발생하는 빅 데이터를 분석하여 네트워크 구조 및 인간 사이의 상호작용을 규명하는 최신 데이터 분석학문이다. 이 과목에서는 대규모 소셜 네트워크에서 발생하는 상호작용을 이해하는데 필요한 그래프 이론 및 네트워크 이론을 살펴보고 이론을 바탕으로 대규모 온라인 소셜 네트워크의 구조 및 특성, 역동성을 분석한다. 이 과목에서 다루는 주제는 추천시스템, 작은세상 현상, 무작위 네트워크, 웹 검색 및 내비게이션, 정보의 확산, 커뮤니티 및 클러스터 분석, 음양 네트워크, 네트워크 진화, 생물학적 전파 모델링을 포함한다.',
    year: '4학년',
    classification: '전공선택',
    code: '4190.427',
    credit: 3,
  },
  {
    name: '기계학습 개론',
    description: `학습시스템은 환경과의 상호작용을 통한 경험으로부터 지식을 습득하여 스스로 성능을 향상시키는 시스템이다. 기계학습은 학습시스템의 핵심인 경험으로부터 획득한 데이터로부터 모델을 자동으로 생성하고 이를 기반으로 미래 를 예측하는 계산구조와 알고리즘을 연구하는 컴퓨터공학의 한 분야이다. 기계학습은 인터넷 정보검색, 텍스트마이닝, 컴퓨터비젼, 로보틱스, 게임 뿐만 아니라 생명과학과 비즈니스 데이터마이닝 등에 성공적으로 활용되었다. 최근 들어 모바일폰, 스마트 TV등에서 사용자 모델링과 개인화 추천 서비스에 사용되고 있으며 컴퓨터구조, 컴파일러, 운영체제, 통신망 시스템의 모델링 및 성능 예측 등 컴퓨터공학의 다양한 분야에서 널리 활용되고 있다.

본 교과목은 감독학습, 무감독 학습, 강화학습 등 기계학습의 기본 개념과 원리, 여러가지 학습 방법에 대한 모델 구조와 학습 알고리즘 및 그 수학적인 기반를 제공하는 것을 목적으로 한다. 패턴분류, 확률관계모델링, 순차적 의사결정과정에 대한 구체적인 학습 구조와 알고리즘을 살펴보며 실제 응용문제 해결을 위한 미니 프로젝트를 통하여 그 활용 방법을 습득한다.`,
    year: '4학년',
    classification: '전공선택',
    code: '4190.428',
    credit: 3,
  },
  {
    name: '창의적통합설계2',
    description:
      '본 강의는 창의적통합설계 1의 연속 강의로서 창의적통합설계 1에서 수행한 내용을 더욱 발전시킨다. 참여 기업은 창의적통합설계 1에서 수행한 내용에 대한 확장 보완 작업을 창의적통합설계 2에서 진행하게 된다. 학기말에는 각 그룹이 진행한 프로젝트에 대한 전체적인 평가와 발표가 이루어지며, 대외적인 발표회를 갖는다.',
    year: '4학년',
    classification: '전공선택',
    code: 'M1522.000300',
    credit: 3,
  },
  {
    name: '컴퓨터비전',
    description:
      '컴퓨터비전은 학계와 산업계 모두에서 가장 빠르게 발전하는 인공 지능 분야로, 3차원 세계를 기록한 사진 및 동영상과 같은 시작정보들을 획득, 처리, 분석, 이해하는 데에 그 목적이 있다. 본 과목은 학부 4학년생을 위한 과목으로서 컴퓨터비전과 관련한 기초적인 개념과 방법론 및 그 응용을 배운다. 아울러 프로그래밍으로 구성된 과제들과 학기 프로젝트를 통해 실제 영상을 다루는 경험을 쌓는데 주안점을 둔다. 본 수업에서 다루는 주제들은, 영상 처리 및 분할, 특징점 검출, 광학, 영상 추적, 사진기 모델, 3차원 복원, 인물 및 물체 인식과 검출 등을 포함한다.',
    year: '4학년',
    classification: '전공선택',
    code: 'M1522.001000',
    credit: 3,
  },
  {
    name: '컴퓨터 신기술 특강',
    description:
      '기존의 교과목에서 다루지 못한 새롭게 개발된 컴퓨터 공학 기술들 중 특정 주제를 가르친다. 강의 주제는 매학기 바뀔 수 있으며 강의 계획서에 자세하게 소개된다. 2015년 기준으로, 강의 주제의 예를 들면 빅데이터 분석, 소프트웨어 검증, 딥러닝, 로보틱스, 3차원 프린팅, 클라우드 컴퓨팅, 사물 인터넷, 양자 컴퓨팅 등이 될 수 있다.',
    year: '4학년',
    classification: '전공선택',
    code: 'M1522.001200',
    credit: 3,
  },
  {
    name: '인터넷 보안',
    description:
      '컴퓨터 및 인터넷이 사회 인프라로 사용됨에 따라 IT 시스템에서 보안 요구사항, 보안 기본 동작, 보안 시스템의 약점 등을 이해하는 것이 컴퓨터공학자에게는 점점 더 요구되고 있다. 인터넷 보안 시스템을 근본적으로 이해하기 위해서는 암호기술 및 그 수학적 원리를 알아야 가능하다. 본 강의에서는 먼저 암호 기술들을 이해하기 위해 필요한 정수론, 이산 로그, 소인수분해, 해시 함수 등을 설명한다. 그 뒤에는 대칭키 암호기법, 공개키 암호기법, 디지털 서명, 키 관리 등 기본 보안 기술을 다루고, 마지막으로 그 뒤에 공개키기반구조(PKI), 비트코인, TLS, 웹 보안, Tor 등 응용 보안 기술을 다룬다. 본 과목은 컴퓨터 공학을 전공 혹은 부전공으로 하는 학부생들을 대상으로 하며, 학생들이 일반 고등학교 수학과 이산수학을 수강하였으면 무리 없이 본 강의를 수강할 수 있도록 강의 내용을 개발할 것이다.',
    year: '4학년',
    classification: '전공선택',
    code: 'M1522.002300',
    credit: 3,
  },
  {
    name: '양자 컴퓨팅 및 정보의 기초',
    description:
      '양자 컴퓨터는 기존 정보처리장치에서 비효율적인 연산을 양자시스템의 고유한 성질을 활용하여 효율적으로 해결하는 장치이다. 이 강의는 양자 컴퓨터의 작동원리를 이해하는데 필요한 간단한 계산 이론에 대한 소개와 선형대수 기반의 수학적으로 추상화된 양자역학의 기초를 소개한 후, 이를 바탕으로 양자 회로를 구성하는데 필요한 양자 게이트들과 이들을 활용한 양자 알고리즘을 살펴보는 것을 내용으로 한다. 또한, 대표적인 양자암호 프로토콜들에 대해 살펴보고 양자 오류정정 부호 등 양자 정보의 전반적인 기초 지식과 최근 연구 동향에 대해서도 소개한다.',
    year: '4학년',
    classification: '전공선택',
    code: 'M1522.002500',
    credit: 3,
  },
  {
    name: '블록체인의 이해',
    description:
      '이 강의에서는 공개키 암호화, 해시 함수, 디지털 서명, 영지식 증명 등 블록체인의 기반기술과 합의 알고리즘, data feeds, 거버넌스(governance), 결정성(determinism) 등 블록체인의 중요 개념들을 설명한다. 그 뒤에 비트코인, 이더리움, 하이퍼레저 패브릭, 리플 등 대표적인 블록체인 시스템들을 설명한다. 블록체인이 탈중앙화(decentralization)의 핵심 기술임을 설명하기 위해 PoW, PoS, PBFT, Paxos 등의 합의 알고리즘과 Chord, Pastry, Kademlia 등의 P2P 네트워크를 설명한다.',
    year: '4학년',
    classification: '전공선택',
    code: 'M1522.002800',
    credit: 3,
  },
  {
    name: '딥러닝의 기초',
    description: `4차 산업혁명의 핵심기술인 인공지능(딥러닝)의 배경지식과 활용방법을 습득하며, Convolutional Neural Networks 와 Recurrent Neural Networks 에 관한 지식과 활용법을 실습한다. 딥러닝 기본개념, Stochastic Gradient Descent, backpropagation 기법, 초기화기법, regularization 기법, 콘볼류션신경망(CNN), CNN 구조, 반복신경망(RNN), RNN의 응용, 강화학습을 다룬다. 이론은 기존 머신러닝과목에서 다루므로, 이론보다는 실용적 적용능력을 배양하기 이해 딥러닝 관련 소프트웨어 교육을 강조하며, Python에 관한 강의와 실습, Python 수학 라이브러리 numpy에 강의도 실시한다. 또한 Advanced deep learning library인 Tensorflow에 대한 강의와 실습도 병행한다.

(공과대학 공통 교과목)`,
    year: '4학년',
    classification: '전공선택',
    code: 'M2177.004300',
    credit: 3,
  },
];

export const graduateCourses: Course[] = [
  {
    name: '고급그래픽스',
    description: '3차원 모델링 및 상호작용에 관한 최근의 연구동향에 관하여 공부한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.562',
    credit: 3,
  },
  {
    name: '고급운영체제',
    description:
      '이 과목에서는 유닉스 운영체제를 중심으로 운영체제의 내부 구조와 운영체제 분야의 최신 이론을 배운다. 수강생들은 또한 운영체제 관련 다수의 논문을 읽고 발표해야 하며, 운영체제와 연관된 프로젝트를 수행해야 한다. 강좌 내용을 요약하면, 유닉스의 구조와 발전, 운영체제 관련 논문 연구, 프로젝트 수행 등이다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.568',
    credit: 3,
  },
  {
    name: '고급인공지능',
    description:
      '인공지능은 사람의 지능과 인지 기능을 모사하는 정보처리 모델을 연구하는 컴퓨터 과학의 한 분야이다. 본 강좌는 전통적인 인공지능 주제들에 대해서 살펴보며, 문제 정의와 해결, 다양한 탐색 방법, 논리 표현 및 추론, 확률 모델, 강화학습, 게임 이론, 메커니즘 디자인 등을 포함한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.569',
    credit: 3,
  },
  {
    name: '고급컴퓨터구조',
    description:
      '컴퓨터를 설계하는데 필요한 공학적 방법론, 설계기법, 무결함 검증방법, 기술동향, 성능평가 방법을 익힌다. 구체적으로 다루어지는 내용은 파이프라인 형태의 명령어 실행 방법, 명령어 수준의 병렬성, 메모리 계층구조, 입출력 시스템, 다중처리기 등이다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.571',
    credit: 3,
  },
  {
    name: '고급컴퓨터네트워크',
    description:
      'ATM에 관하여 Physical layer, ATM Layer, ATM Adaptation Layer 각 layer에 관하여 강의를 하며 특히 connectionless service, traffic management, switch에 관하여 심도있는 강의를 한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.572',
    credit: 3,
  },
  {
    name: '프로그램분석',
    description:
      '이 강의에서는 프로그램 분석 기술의 이론과 실제를 강의한다. 프로그램 분석 기술은 주어진 컴퓨터 소프트웨어가 실행중에 어떤 성질을 가지는 지를 실행하기 전에 미리 자동으로 엄밀하게 확인하는 기술이다. 이 기술은 무결점 소프트웨어 개발, 소프트웨어 실행비용 최적화, 소프트웨어 관리 및 이해 등을 위한 자동화 환경의 핵심기술이 된다. 다루는 토픽은, 프로그램 분석의 가장 강력한 틀로 인정받는 요약해석 기술의 이론과 응용, 프로그래밍 언어의 타입 시스템, 집합 제약식을 이용한 분석, 모델검증 등이다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.664A',
    credit: 3,
  },
  {
    name: '기계학습',
    description:
      '기계학습은 환경으로부터 데이터 관찰과 경험을 통해 성능을 계속적으로 향상시킬 수 있는 문제해결 시스템을 연구하는 인공지능의 한 분야이다. 본 과목에서는 기계학습에 관한 이론 및 실제적인 연구 주제들에 관해 학습한다. 감독 학습과 무감독 학습 및 강화학습에 관한 기본 원리와 이론적인 배경을 공부하며 이들에 대한 구체적인 알고리즘을 학습한다. 기호규칙 학습, 결정트리, 메모리기반 학습, 신경망, 유전자알고리즘, 베이지안 망, 은닉 마코프 모델, 커널방법 및 기타 최근 기계학습 알고리즘을 다룬다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.666',
    credit: 3,
  },
  {
    name: '기하모델링',
    description:
      '다양한 곡선 및 곡면디자인 방법들에 대하여 공부한다. 3차원 입체모델의 표현방식들에 대한 이론들을 배우고, 간단한 모델링 시스템을 구축하여본다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.667',
    credit: 3,
  },
  {
    name: '디지털시스템설계방법론',
    description:
      '본 강의에서는 마이크로프로세서 응용 전용 디지털 시스템을 체계적으로 설계하기 위한 방법론으로 최근에 많은 주목을 받고있는 하드웨어-소프트웨어 통합설계에 관하여 공부하도록 한다. 우선, 시스템을 정형적으로 명세하기 위한 다양한 계산 모델 (model of computation)에 관하여 살펴보고 각 모델에 기반한 연구들에 대하여 개괄적으로 살펴본다. 그리고, 데이터플로우 그래프와 FSM을 이용하여 시스템을 명세하는 통합설계 도구인 PeaCE를 이용하여 시스템 설계의 최적화를 위한 세부 내용들을 알아보도록 한다. 최종적으로 기말에는 PeaCE 에 관련된 프로젝트를 수행하게 될 것이다',
    year: '대학원',
    classification: '전공선택',
    code: '4190.668A',
    credit: 3,
  },
  {
    name: '실시간시스템',
    description:
      '실시간 계산 시스템에서는 계산상의 정확성과 아울러 태스크가 주어진 시간내에 정상적으로 종료되어야만 올바르게 동작한다고 한다. 이 과목에서는 이러한 시스템 구성을 위한 태스크 스케쥴링, 프로그래밍언어, 통신, 데이타베이스, 결함허용, 등의 기법에 대하여 학습한다. 또 기말과제를 통하여 각자의 연구분야의 실시간 특성에 대하여 연구할 기회를 갖는다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.672',
    credit: 3,
  },
  {
    name: '암호학',
    description:
      '현대 암호학의 주요 내용을 배운다. 구체적으로 고전 암호학, 샤논의 무제한 보안성, 대칭키 암호시스템, 공개키 암호시스템, 전자서명, 해쉬함수, 비밀공유기법, 난수발생기법, 영지식 증명 등을 배운다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.673',
    credit: 3,
  },
  {
    name: '인공신경망',
    description:
      '자연언어처리는 인간의 언어를 컴퓨터가 자동으로 분석하고 생성하기 위한 소프트웨어를 연구하는 분야이다. 본 교과목에서는 자연언어를 이해하고 기계번역을 자동으로 수행하기 위한 기본적인 개념과 구체적인 언어 처리 기법을 공부한다. 특히, 형태소 분석, 구문분석, 의미분석, 화용론 및 언어생성에 대해 공부한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.676',
    credit: 3,
  },
  {
    name: '자연언어처리',
    description:
      '자연언어처리는 인간의 언어를 컴퓨터가 자동으로 분석하고 생성하기 위한 소프트웨어를 연구하는 분야이다. 본 교과목에서는 자연언어를 이해하고 기계번역을 자동으로 수행하기 위한 기본적인 개념과 구체적인 언어 처리 기법을 공부한다. 특히, 형태소 분석, 구문분석, 의미분석, 화용론 및 언어생성에 대해 공부한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.678',
    credit: 3,
  },
  {
    name: '지식표현및추론',
    description:
      '지식 표현 및 추론은 인간 수준의 인공지능을 실현하기 위한 가장 중요한 주제중의 하나이다. 본 과목에서는 지식표현과 관련된 최신 주제에 관한 논문에 대하여 토론한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.680',
    credit: 3,
  },
  {
    name: '유전알고리즘',
    description:
      '유전 알고리즘으로 대표되는 진화 알고리즘과 문제 공간 탐색에 대해학습한다. 진화 알고리즘은 크게 문제 해결을 위한 경우와 시뮬레이션을 위한 경우가 있는데 본 강의는 문제 해결 측면에 촛점을 맞춘다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.681A',
    credit: 3,
  },
  {
    name: '계산이론특강',
    description:
      '이 교과목에서는 먼저 알고리즘의 성능을 분석하는 기법에 대해 배운다. 여러 가지 string processing 알고리즘bioinformatics에의 응용들을 익힌다. 또한, online 알고리즘, randomized 알고리즘, approximation 알고리즘에 대해 배운다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.761',
    credit: 3,
  },
  {
    name: '그래픽스특강',
    description:
      '컴퓨터그래픽스 전반에 걸쳐 기본적인 개념들을 설명한다. 컴퓨터 그래픽스의 기본적인 렌더링 파이프라인, 물체들을 표현하는 여러 가지 방법, 빛을 나타내는 방법, 레이트레이싱, 볼륨렌더링 등의 특수한 렌더링 방법, 그림자나 질감을 나타내는 방법에 대해서 개론 형식으로 강의한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.762',
    credit: 3,
  },
  {
    name: '내장형시스템특강',
    description:
      '본 강좌는 이미 embedded system에 익숙한 대학원생들을 대상으로 하며 embedded system을 설계하는 데 중요한 여러 주제들에 관한 최신의 연구논문들을 중심으로 연구 결과들을 학습하여 embedded system분야의 본격적인 연구를 준비시키는 데 목적이 있다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.763',
    credit: 3,
  },
  {
    name: '데이터베이스특강',
    description:
      '전자 도서관(Digital Library)과 정보 검색(Information retrieval)분야의 기본적 지식부터 고급 주제까지 다루며 전자상거래(Electronic commerce)에서의 데이타베이스 관련 연구 이슈들도 살펴본다. 이 강좌는 교수의 강의와 학생들의 관련 논문 발표, Term Project 발표로 이루어지며, 영어강좌이므로 강의, 숙제 , 발표 , 시험 등 강좌와 관련된 모든 것이 영어로 진행된다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.765',
    credit: 3,
  },
  {
    name: '실시간시스템특강',
    description:
      '최근 실시간 계산기술의 발전을 기반으로 실제 실시간시스템 구성기술을 연마하는 것을 목적으로한다. 실시간 요구조건의 분석과 실시간 운영체계의 작성 연습을 통하여 실시간 시스템을 설계하는 기법을 습득한다. 이를 위하여 시간의 관리, 실시간 소프트웨어 및 하드웨어의 개발 방법, 실시간 운영체계의 특성, 자원의 할당 및 스케쥴링 방법 등에 대해 검토한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.770',
    credit: 3,
  },
  {
    name: '알고리즘특강',
    description:
      'Shortest path, Network flow 등의 그래프 문제를 해결하는 최근에 개발된 알고리즘과 알고리즘 분야에서의 최근의 연구결과를 학습한다. 분산 시스템의 여러 모델들과 분산 시스템에서 발생하는 중요한 문제들을 해결하는 분산 알고리즘에 관하여 연구한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.771',
    credit: 3,
  },
  {
    name: '인공지능특강',
    description:
      '주어진 지식과 경험을 바탕으로 앞으로 주어질 작업을 효율적이고 체계적으로 수행할수 있는 컴퓨터 프로그램 개발에 많은 연구가 계속되어 오고 있다. 이러한 연구의 핵심 분야인 기계 학습(Machine Learning)에 관한 강의로써 현재까지 발표된 대표적인 연구 논문들을 중심으로 이론및 알고리즘, 응용 분야등을 설명한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.773',
    credit: 3,
  },
  {
    name: '컴퓨터구조특강',
    description:
      '본 교과목에서는 석·박사과정 학생들에게 CPU 구조, 캐쉬 설계, 메모리 관리 정책, 파이프라이닝, 버스 구조, 입출력 장치 등 컴퓨터 구조에 관한 전반적인 동향을 소개하고, 최근 발표된 논문에 대한 강독을 통해 새로이 소개되는 기술을 익힐 수 있게 한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.777',
    credit: 3,
  },
  {
    name: '컴퓨터네트워크특강',
    description:
      '지난 20년간 눈부시게 발전한 인터넷은 앞으로 Fundamental한 변혁을 겪을 것으로 예상된다. 본 강좌에서는 인터넷이 미래에 어떻게 진화할 것인지 조망하고 인터넷의 핵심장비인 차세대 라우터의 구현에 필요한 기술들을 살펴본다. 강의를 수강한 사람은 미래 인터넷의 진화방향, 차세대 라우터의 요구사항 및 기능을 고찰할 능력을 갖추며 차세대 라우터의 설계, 개발 능력을 보유할 것으로 기대한다. 나아가서 본 강의를 수강한 네트워크 전문가, 시스템 구현 전문가들이 참여하는 모험적인 연구, 개발조직이 자발적으로 태동할 것을 기대한다. 강의는 선정된 논문 및 앞으로 추가될 논문을 발표하고 토론하는 것을 중심으로 진행될 것이며 자생적인 그룹 프로젝트를 추진한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.778',
    credit: 3,
  },
  {
    name: '고급컴퓨터공학세미나',
    description:
      '본 과목은 집담회 형식의 세미나 과목으로 컴퓨터공학 대학원 수준의 다양한 연구 분야와 최근 동향을 소개한다.',
    year: '대학원',
    classification: '전공선택',
    code: '4190.781',
    credit: 3,
  },
  {
    name: '대학원논문연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: '4190.960',
    credit: 3,
  },
  {
    name: '정보시각화와 시각적분석',
    description:
      '사람들이 일반적으로 동의하는 시각적인 표현이 존재하지 않는 대량의 추상적인 데이터를 직관적으로 시각화하고 동적으로 제어할 수 있게 함으로써 사용자들의 인지능력의 향상을 꾀하는 정보 시각화에 대하여, 시지각 이론을 포함한 이론적 바탕에서 출발하여 데이터의 형태별 시각화 방법론, 인터액션 방법론, 디자인 스터디 방법론, 평가 방법론 등 다양한 기술적 배경을 실제 문제 해결을 통하여 학습한다. 더 나아가서, 정보시각화 기술에 기반하여 인터액티브한 시각적 인터페이스를 디자인하고 이를 통하여 전문가의 창의적 문제해결 능력을 극대화함으로써 인류가 직면한 실제 문제를 해결하려는 새로운 과학적 시도인 시각적 분석 기술도 학습한다. 특히 통계학, 기계학습, 데이터마이닝 등 데이터 과학 분야의 관련 기술들을 정보 시각화 시스템에 효과적으로 융합하는 기술적 방법론도 다양한 실례와 디자인 프로젝트를 통해 체득한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.000500',
    credit: 3,
  },
  {
    name: '확률 그래프 모델',
    description:
      '확률 그래프 모델은 확률 변수들 간의 조건 의존성을 그래프 형태로 나타낼 수 있는 통계 방법론으로, 대용량 변수들의 복잡한 상호관계도 조밀하게 표현할 수 있다. 근래 컴퓨터 비전, 자연어 처리, 로봇공학, 컴퓨터 시스템, 계산 생물학 등 인공지능과 연관된 다양한 실제 문제들에 성공적으로 활용되고 있다. 본 과목에서는 확률 그래프 모델에 필요한 이론, 원리, 알고리즘 등을 폭넓게 배우며, 특히 주요 주제로는, 베이지안 그래프와 마코프 랜덤 필드의 표현, 합-곱 알고리즘과 신뢰 전파 알고리즘 등을 통한 그래프 모델의 학습과 추론, 변분 분석과 표본화를 통한 근사 방법, 최대 마진 방법과 깊은 신경망 등의 최신 기계 학습 기법 등과 그들의 실제 적용 방법과 예시 등을 다룬다. 본 과목은 대학원생과 일부 고년차 학부생을 대상으로 한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.001300',
    credit: 3,
  },
  {
    name: '정보검색',
    description:
      '대용량 검색 엔진 플랫폼을 설계하고 구현하기 위한 핵심 기반 기술은 무엇일까? 대규모 문서/멀티미디어 데이터에서 어떻게 중요한 정보를 검색할 수 있을까? 본 과목에서는 검색 엔진의 주요 이론, 설계, 핵심 기술 구현을 설명한다. 주요 학습 주제로 검색 엔진 플랫폼 기술 (inverted index, 분산 인덱싱, 인덱스 압축), 텍스트의 통계적 특성(TF-IDF, weighted scoring), 정보 요구 표현, 문서 표현, 중요 검색 모델 (PageRank, vector space, Bayesian 검색), 검색 엔진 평가 방법 등이 있다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.001500',
    credit: 3,
  },
  {
    name: '대규모 데이터분석 특강',
    description:
      '수 페타 바이트에 달하는 대규모 데이터에서 어떻게 유용한 패턴과 이상 신호를 찾을 수 있을까? 대규모 데이터를 분석하는 분산 시스템, 플랫폼, 알고리즘은 어떻게 설계할 수 있을까? 소셜 네트워크, 웹, 통신, 생물학 등 다양한 분야에서 대규모 데이터가 생성되고 있으며 대규모 데이터를 분석하여 중요한 정보를 추출하는 것은 다양한 응용에 활용될 수 있는 매우 중요한 일이다. 본 과목에서는 대규모 데이터를 분석하기 위한 분석 시스템 설계 기법, 기반 기술과 핵심 알고리즘을 다룬다. 또한 설계한 시스템과 알고리즘을 이용하여 데이터에서 유용한 패턴과 이상 신호를 찾는 기법을 학습한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.001600',
    credit: 3,
  },
  {
    name: '계산이론',
    description:
      '계산이론은 컴퓨터공학의 기초학문이며, 중요한 문제에 대한 효율적인 알고리즘들을 소개하고, 그런 알고리즘의 복잡도 분석을 다룬다. 이 교과목에서는 먼저 알고리즘의 성능을 분석하는 기법, 특히 amortized analysis에 대해 배운다. 그리고, 계산이론 분야에서 중요한 알고리즘과 그 응용에 대해 배운다. 구체적으로, (스트링 매칭, 2차원 패턴 매칭, 근사 매칭, suffix trees, 데이터 압축 문제에 대한) 스트링 알고리즘과 bioinformatics에의 응용, (선택 문제, 다항식 확인 문제에 대한) randomized 알고리즘과 그 영향, (페이지 교체 문제, k 서버 문제에 대한) online 알고리즘과 금융문제(일방향 거래와 portfolio 선택 문제)에의 응용을 배운다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.002900',
    credit: 3,
  },
  {
    name: '데이터베이스시스템',
    description:
      '이 교과목에서는 고급 데이터베이스 시스템의 기반이 되는 주제로서 질의어 처리, 데이터베이스 회복, 병행제어, 데이터베이스 보안 및 무결성, 그리고 분산 데이타베이스를 다룬다. 또한 현재 제기되고 있는 문제로서 의사결정지원 시스템, 웹 데이터베이스, 멀티미디어 데이터베이스, 그리고 이동 데이터베이스도 다뤄질 것이다. 교과목을 통해 관련 연구논문들이 논의될 것이다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003000',
    credit: 3,
  },
  {
    name: '데이터압축',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003100',
    credit: 3,
  },
  {
    name: '멀티프로세서동기화',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003200',
    credit: 3,
  },
  {
    name: '모바일 및 유비쿼터스컴퓨팅',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003300',
    credit: 3,
  },
  {
    name: '무선네트워크프로토콜',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003400',
    credit: 3,
  },
  {
    name: '비정형데이터베이스시스템',
    description: `본 교과목은 대학원 과정 교과목인 고급데이터베이스 1의 후속 과정으로서 관계형 및 비관계형 데이터 모델에 기반한 데이터베이스 응용을 위한 핵심적 알고리즘과 규모확장적인 방법론을 다루며, 이들 기법을 시공간 데이터, 텍스트 데이터 그리고 NoSQL 등 다양하고 새로운 형태의 데이터에 대해 적용한다. 수강 학생들은 학사과정 데이터베이스와 고급데이터베이스 1의 수강 내용을 사전에 숙지하고 있어야 한다. 필수적 강의 주제들로는 공간 및 다차원 데이터베이스, 텍스트 데이터와 벡터 모델, 그래프 데이터베이스, NoSQL 데이터 모델과 키-밸류 스토어, Map-Reduce와 규모확장적 데이터 처리 등이 있다. 또한 담당 교수의 재량으로 선택할 수 있는 주제로는 대규모 클러스터링, 시계열 및 스트리밍 데이터, 과학 데이터베이스, 유사도 검색, 그리고 병렬 및 분산 데이터베이스 등이 있다.

추천 과제물: (1) DBMS 기능 구현, (2) 연구 중심 주제.

선수 교과목: (1) 자료구조, (2) 학사과정 데이터베이스, (3) 고급데이터베이스 1`,
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003500',
    credit: 3,
  },
  {
    name: '생물정보학을 위한 기계학습',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003600',
    credit: 3,
  },
  {
    name: '양자컴퓨팅',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003700',
    credit: 3,
  },
  {
    name: '온라인소셜미디어분석',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003800',
    credit: 3,
  },
  {
    name: '인공지능 및 빅데이터시스템',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.003900',
    credit: 3,
  },
  {
    name: '컴파일러최적화',
    description:
      '최적화 컴파일러 설계에 필요한 data flow analysis, register allocation, static single assignment form, 병렬화, 메모리 최적화, 루프 최적화 방법 등에 대하여 배운다. 이론적인 최적화 개념을 실제로 공개 소프트웨어 컴파일러(LLVM/clang)나 수업에서 개발한 컴파일러에 적용해 그 효과를 알아 본다. 이과목을 수강하려면 학부 컴파일러 수업에서 배운 컴파일러 구현에 관한 기본 지식이 필요하다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004000',
    credit: 3,
  },
  {
    name: '컴퓨터애니메이션',
    description:
      '본 교과목에서는 컴퓨터 애니메이션의 근간을 구성하는 수학적 요소와 알고리즘을 배운다. 구체적인 주제는 애니메이션의 역사, 회전 및 방향 표현, 키프레임 보간, 기구학 및 역기구학, 물리기반 시뮬레이션, 모션 캡쳐, 데이터기반 애니메이션, 유연체 모델링, 얼굴 애니메이션 등을 포함한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004100',
    credit: 3,
  },
  {
    name: '확률기반네트워크모델링',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004200',
    credit: 3,
  },
  {
    name: '객체지향시스템특강',
    description:
      '차세대 DBMS의 데이터 모델과 기능 등을 연구한다. RDBMS에서 OODBMS로의 변환 과정과 ODMG 표준 등을 포함한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004300',
    credit: 3,
  },
  {
    name: '인터넷보안특강',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004400',
    credit: 3,
  },
  {
    name: '컴퓨터시스템특강',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004500',
    credit: 3,
  },
  {
    name: '프로그래밍언어특강',
    description:
      '이 수업에서는 프로그래밍 언어의 스펙(Notation and concepts),디자인(Case studies of languages and features), 그리고 프로그램을 분석하는 방법에 대해서 공부한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004600',
    credit: 3,
  },
  {
    name: '그래픽스연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004800',
    credit: 3,
  },
  {
    name: '내장형시스템연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.004900',
    credit: 3,
  },
  {
    name: '데이터마이닝연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005000',
    credit: 3,
  },
  {
    name: '데이터베이스연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005100',
    credit: 3,
  },
  {
    name: '실시간시스템연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005200',
    credit: 3,
  },
  {
    name: '인간중심컴퓨팅연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005300',
    credit: 3,
  },
  {
    name: '인간컴퓨터상호작용연구',
    description:
      '본 교과목은 학부 인간컴퓨터상호작용(Introduction to Human-Computer Interaction) 과목의 상위 대학원 교과목으로서, HCI분야 연구 수행에 있어서 필수적인 HCI 모델, 이론, 프레임워크에 대해서 보다 깊이 있게 소개하고, HCI의 다양한 응용분야(Information Visualization, Mobile Interaction, Visual Analytics, Social Computing 등)에서 실제 문제 해결에 적용하는 방법론 및 기술을 숙지할 수 있는 기회를 제공한다.',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005400',
    credit: 3,
  },
  {
    name: '인공지능연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005500',
    credit: 3,
  },
  {
    name: '컴파일러최적화연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005600',
    credit: 3,
  },
  {
    name: '컴퓨터구조연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005700',
    credit: 3,
  },
  {
    name: '컴퓨터네트워크연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005800',
    credit: 3,
  },
  {
    name: '컴퓨터시스템연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.005900',
    credit: 3,
  },
  {
    name: '프로그래밍언어연구',
    description: '',
    year: '대학원',
    classification: '전공선택',
    code: 'M1522.006000',
    credit: 3,
  },
];

export const undergraduateCourseChangesData: CourseChange[] = [
  {
    year: 2020,
    description:
      '<h2>2020학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.002800 블록체인의 이해(Understanding Blockchains) 3-3-0</li></ul><p><br></p><h3>대체교과목 지정</h3><table><tbody><tr><th colspan="3"><div>폐지 교과목</div></th><th colspan="3"><div>대체 지정 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th></tr><tr><td><div>M1522.001100</div></td><td><div>3-3-0</div></td><td><div>컴퓨터시스템특강</div></td><td><div>M1522.001200</div></td><td><div>3-3-0</div></td><td><div>컴퓨터 신기술 특강</div></td></tr></tbody></table><p><br></p><h3>전공필수 해제 (2020학년도 입학자부터 적용) (전필 → 전선)</h3><ul><li>M1522.002400 소프트웨어 개발의 원리와 실습 (Principles and Practices of Software Development) 4-3-2</li></ul>',
  },
  {
    year: 2019,
    description:
      '<h2>2019학년도 2학기 시행 교과과정 변경</h2><h3>교과목 명칭, 교과목번호 및 학점 변경</h3><ul><li>(구) 4190.315 IT벤처창업개론 (IT Venture Creation) 2-2-0</li><li>(신) M1522.002700 IT창업개론(Introduction to IT Entrepreneurship) 3-3-0</li></ul><h3>교과목 폐지</h3><ul><li>4190.418A 웹정보시스템 (Web Enterprise Computing) 3-3-0</li></ul><p><br></p><h2>2019학년도 1학기 시행 교과과정 변경</h2><h3>학년,학기 변경</h3><ul><li>4190.101 이산수학 (Discrete Mathematics): 2학년 1학기 → 1학년 2학기</li></ul><h3>교과목 신설</h3><ul><li>M1522.002500 양자 컴퓨팅 및 정보의 기초 (Introduction to Quantum Computing and Information) 3-3-0</li></ul>',
  },
  {
    year: 2018,
    description:
      '<h2>2018학년도 2학기 시행 교과과정 변경</h2><h3>교과목 명칭, 교과목번호, 학점 및 이수시간 변경</h3><ul><li>(구) M1522.000100 소프트웨어 개발의 원리와 실제 (Principles and Practices of Software Development) 3-2-2</li><li>(신) M1522.002400 소프트웨어 개발의 원리와 실습 (Principles and Practices of Software Development) 4-3-2</li></ul><h3>전공필수 해제 (2019학년도 입학자부터 적용)</h3><ul><li>4190.309A 하드웨어시스템설계(Hardware System Design) 3-2-2</li></ul><p><br></p><h2>2018학년도 2학기 시행 교양 교과과정 변경</h2><h3>교과목 신설 (교양 『학문의 세계』 - 자연과 기술)</h3><ul><li>L0550.000300 인터넷 보안과 프라이버시 (Internet Security and Privacy) 3-3-0</li></ul><p><br></p><h2>2018학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.002300 인터넷 보안 (Internet Security) 3-3-0</li></ul><h3>교과목명 성적부여형태 변경</h3><table><tbody><tr><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점-강의-실습</div></th><th><div>변경 항목</div></th><th><div>변경 내역</div></th></tr><tr><td><div>4190.103A</div></td><td><div>프로그래밍연습</div></td><td><div>3-2-2</div></td><td><div>성적부여형태 변경</div></td><td><div>A~F → S/U</div></td></tr></tbody></table><p><br></p><h2>2018학년도 시행 교양 교과과정 변경</h2><h3>교과목 신설 (교양 『학문의 기초』 - 컴퓨터와 정보 활용)</h3><ul><li>L0444.000300 인공지능 입문 (Introduction to Artificial Intelligence) 3-2-2</li></ul>',
  },
  {
    year: 2017,
    description:
      '<h2>2017학년도 2학기 시행 교과과정 변경</h2><h3>교과목명칭 및 교과목번호 변경</h3><ul><li>(구) 4190.301 데이타베이스 (Database) 3-3-0</li><li>(신) M1522.001800 데이터베이스 (Database) 3-3-0</li><li>(구) 4190.302 데이타통신 (Data Communications) 3-3-0</li><li>(신) M1522.002100 데이터통신 (Data Communications) 3-3-0</li></ul><h3>동일교과목 지정</h3><table><tbody><tr><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>변경 항목</div></th><th><div>변경 교과목번호</div></th><th><div>변경 교과목명</div></th><th><div>비 고</div></th></tr><tr><td><div>4190.301</div></td><td><div>데이타베이스</div></td><td><div>국문명칭변경</div></td><td><div>M1522.001800</div></td><td><div>데이터베이스</div></td><td><div>Data의 한글표기 수정</div></td></tr><tr><td><div>4190.302</div></td><td><div>데이타통신</div></td><td><div>국문명칭변경</div></td><td><div>M1522.002100</div></td><td><div>데이터통신</div></td><td><div>Data의 한글표기 수정</div></td></tr></tbody></table><h3>교과목 폐지</h3><ul><li>400.314 인터넷윤리 (Internet Ethics) 2-2-0</li><li>4190.420 컴퓨터게임 (Computer Games) 3-3-0</li></ul><h3>대체교과목 지정</h3><table><tbody><tr><th colspan="3"><div>폐지 교과목</div></th><th colspan="3"><div>대체 지정 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th></tr><tr><td><div>4190.420</div></td><td><div>3-3-0</div></td><td><div>컴퓨터게임</div></td><td><div>4190.410</div></td><td><div>3-3-0</div></td><td><div>컴퓨터그래픽스</div></td></tr></tbody></table><p><br></p><h2>2017학년도 1학기 시행 교과과정 변경</h2><h3>교과목 폐지</h3><ul><li>4190.305A 하드웨어설계이론 (Principles of Hardware Design) 3-3-0</li><li>4190.401 VLSI회로(VLSI Circuits) 3-3-0</li></ul><h3>대체교과목 지정</h3><table><tbody><tr><th colspan="3"><div>폐지 교과목</div></th><th colspan="3"><div>대체 지정 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th></tr><tr><td><div>4190.305A</div></td><td><div>3-3-0</div></td><td><div>하드웨어설계이론</div></td><td><div>4190.309A</div></td><td><div>3-2-2</div></td><td><div>하드웨어시스템설계</div></td></tr><tr><td><div>4190.401</div></td><td><div>3-3-0</div></td><td><div>VLSI회로</div></td><td><div>4190.303C</div></td><td><div>3-3-0</div></td><td><div>임베디드시스템과 응용</div></td></tr></tbody></table><p><br></p><h2>2017학년도 시행 교양 교과과정 변경</h2><h3>교과목 신설 (교양 『학문의 기초』 - 컴퓨터와 정보 활용)</h3><ul><li>L0444.000200 컴퓨터과학적 사고와 실습 (Computational Thinking and Practice) 3-2-2</li></ul>',
  },
  {
    year: 2016,
    description:
      '<h2>2016학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.001200 컴퓨터 신기술 특강 (Topics in New Computer Technology) 3-3-0</li></ul><h3>교과목명칭 변경</h3><ul><li>(구) 4190.312C데이터마이닝과 정보검색 (Data Mining and Information Retrieval) 3-3-0</li><li>(신) M1522.001400 데이터마이닝 개론 (Introduction to Data Mining) 3-3-0</li></ul>',
  },
  {
    year: 2015,
    description:
      '<h2>2015학년도 2학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.001000 컴퓨터비전 (Computer Vision) 3-3-0</li><li>M1522.001100 컴퓨터시스템특강 (Topics in Computer Systems) 3-3-0</li></ul><p><br></p><h2>2015학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 4190.311A 프로젝트1(Project 1) 3-0-6</li><li>(신) M1522.000200 창의적통합설계1(Creative Integrated Design 1 ) 3-0-6</li><li>(구) 4190.413A 프로젝트2(Project 2) 3-0-6</li><li>(신) M1522.000300 창의적통합설계2(Creative Integrated Design 2) 3-0-6</li></ul><h3>교과목 학점 및 이수시간 변경</h3><ul><li>(구) 4190.309A 하드웨어시스템설계(Hardware System Design) 3-3-0</li><li>(신) 4190.309A 하드웨어시스템설계(Hardware System Design) 3-2-2</li><li>(구) 4190.201 논리설계(Logic Design) 3-3-0</li><li>(신) M1522.000700 논리설계(Logic Design) 4-3-2</li><li>(구) 4190.204 자료구조(Data Structures) 3-3-0</li><li>(신) M1522.000900 자료구조(Data Structures) 4-3-2</li><li>(구) 4190.203 시스템프로그래밍(System Programming) 3-3-0</li><li>(신) M1522.000800 시스템프로그래밍(System Programming) 4-3-2</li><li>(구) 4190.102A 컴퓨터프로그래밍(Computer Programming) 3-3-0</li><li>(신) M1522.000600 컴퓨터프로그래밍(Computer Programming) 4-3-2</li></ul><h3>교과목 신설</h3><ul><li>M1522.000100 소프트웨어 개발의 원리와 실제 (Principles and Practices of Software Development) 3-2-2</li></ul><h3>교과목 폐지</h3><ul><li>054.026 컴퓨터와 현대사회(Computers and Modern Society) 3-3-0</li><li>4190.202A 논리설계실험(Logic Design Lab.) 3-0-6</li><li>4190.205B 전기전자회로실험(Electrical and Electronics Circuit Lab.) 2-0-4</li><li>4190.314A 하드웨어시스템설계실험(Hardware System Design Lab) 3-0-6</li></ul><h3>동일교과목 및 대체교과목 지정</h3><table><tbody><tr><th colspan="3"><div>폐지 교과목</div></th><th colspan="3"><div>대체 지정 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th></tr><tr><td><div>4190.202A</div></td><td><div>3-0-6</div></td><td><div>논리설계실험</div></td><td><div>4190.309A</div></td><td><div>3-2-2</div></td><td><div>하드웨어시스템설계</div></td></tr><tr><td><div>4190.205B</div></td><td><div>2-0-4</div></td><td><div>전기전자회로실험</div></td><td><div>4190.309A</div></td><td><div>3-2-2</div></td><td><div>하드웨어시스템설계</div></td></tr><tr><td><div>4190.314A</div></td><td><div>3-0-6</div></td><td><div>하드웨어시스템설계실험</div></td><td><div>4190.309A</div></td><td><div>3-2-2</div></td><td><div>하드웨어시스템설계</div></td></tr></tbody></table><h3>전공필수 지정 (2015학년도 입학자부터 적용)</h3><ul><li>M1522.000800 시스템프로그래밍(System Programming) 4-3-2</li><li>4190.309A 하드웨어시스템설계(Hardware System Design) 3-2-2</li></ul><h3>전공필수 해제 (2015학년도 입학자부터 적용)</h3><ul><li>4190.210 프로그래밍의 원리(Principles of Programming) 3-2-2</li><li>4190.307 운영체제(Operating Systems) 3-3-0</li><li>4190.310 프로그래밍언어((Programming Language) 3-3-0</li></ul>',
  },
  {
    year: 2013,
    description:
      '<h2>2013학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 005.024, 정보화사회(Computer and Society), 3-3-0</li><li>(신) 005.024A, 컴퓨터와 현대사회(Computers and Modern Society), 3-3-0</li><li>(구) 4190.312B 데이터처리와 정보검색(Data Processing and Information Retrieval) 3-3-0</li><li>(신) 4190.312C 데이터마이닝과 정보검색(Data Mining and Information Retrieval)</li><li>(구) 4190.406A 이동컴퓨팅과 응용(Mobile Computing and Its Applications), 3-3-0</li><li>(신) 4190.406B 모바일 컴퓨팅과 응용(Mobile Computing and Its Applications), 3-3-0</li><li>(구) 4190.414 병렬처리(Introduction to Parallel Processing), 3-3-0</li><li>(신) 4190.414A 멀티코어 컴퓨팅(Multicore Computing), 3-3-0</li><li>(구) 4190.103 프로그래밍연습(Programming Practice), 2-1-2</li><li>(신) 4190.103A 프로그래밍연습(Programming Practice), 3-2-2</li></ul><h3>교과목 신설</h3><ul><li>4190.427 소셜 네트워크 분석 (Social Network Analysis) 3-3-0</li><li>4190.428 기계학습 개론 (Introduction to Machine Learning) 3-3-0</li><li>4190.429 영상처리(Image Processing) 3-3-0</li></ul><h3>교과목 폐지</h3><ul><li>4190.424 IT와금융공학의 융합(Convergence of IT and Finance Engineering)3－3－0</li></ul>',
  },
  {
    year: 2012,
    description:
      '<h2>2012학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 4190.102A 컴퓨터프로그래밍(Computer Programing) 3-0-6</li><li>(신) 4190.102A 컴퓨터프로그래밍(Computer Programing) 3-2-2</li></ul><h3>교과목 신설</h3><ul><li>027.013 컴퓨터과학이 여는 세계 (Computational Civilization), 3-3-0</li></ul>',
  },
  {
    year: 2011,
    description:
      '<h2>2011학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 4190.426 휴먼컴퓨터인터페이스(Human Computer Interface) 3-3-0</li><li>(신) 4190.426A 인간컴퓨터상호작용(Human-Computer Interaction) 3-3-0</li></ul><h3>교과목 폐지</h3><ul><li>4190.417 컴퓨터애니메이션(Computer Animation) 3-3-0</li></ul>',
  },
  // TODO: 원본처럼 연도별로 나누기?? 일단 UI가 2010이전은 모아서 보여주기에 합침
  {
    year: 2010,
    description: `<h2>2009학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>4190.315 IT벤처창업개론(IT Venture Creation) 2-2-0</li><li>4190.424 IT 와금융공학의 융합(Convergence of IT and Finance Engineering) 3-3-0</li><li>4190.425 컴퓨터엔지니어를 위한 기술영어작문(Technical Writing for Computer Engineers) 3-3-0</li><li>4190.426 휴먼컴퓨터인터페이스(Human Computer Interface) 3-3-0</li></ul><h3>교과목명칭 변경</h3><ul><li>(구) 4190.312A 화일구조(File Structures) 3-3-0</li><li>(신) 4190.312B 데이터처리와 정보검색(Data Processing and Information Retrieval) 3-3-0</li></ul><h3>교과목 폐지</h3><ul><li>4190.421A 정보통신개론(Introduction to Information Communication) 3-3-0</li></ul><h2>2008학년도 1학기 시행 교과과정 변경</h2><h3>교과목신설</h3><ul><li>4190.103 프로그래밍 연습(Programming Practice) 2-1-2</li><li>4190.422 IT-리더쉽 세미나(IT-leadership Seminar) 1-1-0</li><li>4190.423 컴퓨터융합응용(Computer Convergence Application) 3-3-0</li><li>400.314 인터넷윤리(Internet Ethics) 2-2-0</li></ul><h3>교과목명칭 변경</h3><ul><li>(구) 4190.305 스위칭이론(Switching Theory) 3-3-0</li><li>(신) 4190.305A 하드웨어 설계 이론(Principles of Hardware Design) 3-3-0</li><li>(구) 4190.418 E-비즈니스시스템(E-Business) 3-3-0</li><li>(신) 4190.418A 웹정보시스템(Wed Enterprise Computing) 3-3-0</li><li>(구) 4190.421 정보통신의 기초(Introduction to Information Communication) 3-3-0</li><li>(신) 4190.421A 정보통신개론(Introduction to Information Communication) 3-3-0</li></ul><h3>교과목 폐지</h3><ul><li>4190.419A 바이오컴퓨팅(Biocomputing) 3-3-0</li></ul><h2>2007학년도 1학기 시행 교과과정 변경</h2><h3>교과목영문명칭 변경</h3><ul><li>(구) 4190.206A* 전기전자회로(Micro Electronic Circuits) 3-3-0</li><li>(신) 4190.206A* 전기전자회로(Electrical and Electronic Circuits) 3-3-0</li></ul><h2>2006학년도 1학기 시행 교과과정 변경</h2><h3>교과목신설</h3><ul><li>4190.314 컴퓨터시스템실험(Computer System Lab.) 3-0-6</li><li>4190.420 바이오컴퓨팅(Biocomputing) 3-3-0</li><li>4190.421 정보통신의 기초(Introduction to Information Communication) 3-3-0</li></ul><h3>교과목명칭 변경</h3><ul><li>(구) 4190.205A 컴퓨터시스템설계실험(Computer System Design Lab.) 2-0-4</li><li>(신) 4190.205B 전기전자회로실험(Electrical and Electronics Circuit Lab.) 2-0-4</li><li>(구) 4190.406 신형컴퓨터시스템(Contemporary Computer Systems) 3-3-0</li><li>(신) 4190.406A 이동컴퓨팅과 응용(Mobile Computing and Its Applications)3-3-0</li><li>(구) 4190.419 생명공학과 컴퓨팅(Biotechnology and Computing) 3-3-0</li><li>(신) 4190.419A 바이오컴퓨팅(Biocomputing) 3-3-0</li></ul><h3>교과목학점 및 이수시간 변경</h3><ul><li>(구) 4190.311A 프로젝트1 (3-1-4)</li><li>(신) 4190.311A 프로젝트1 (3-0-6)</li><li>(구) 4190.413A 프로젝트2 (3-1-4)</li><li>(신) 4190.413A 프로젝트2 (3-0-6)</li><li>(구) 4190.202 논리설계실험 (2-0-4)</li><li>(신) 4190.202A 논리설계실험 (3-0-6)</li><li>(구) 4190.102A 컴퓨터프로그래밍 (3-2-2)</li><li>(신) 4190.102A 컴퓨터프로그래밍 (3-0-6)</li></ul><h2>2005학년도 1학기 시행 교과과정 변경</h2><h3>교과목신설</h3><p>4190.210* 프로그래밍의 원리(Principles of Programming) 3-2-2</p><h3>교과목명칭 변경</h3><ul><li>(구) 4190.206 전자회로(Electronic Circuits) 3-3-0</li><li>(신) 4190.206A* 전기전자회로(MicroElectronic Circuits) 3-3-0</li><li>(구) 4190.205 전기전자회로실험(Electrical and Electronic Circuits Lab.) 2-0-4</li><li>(신) 4190.205A 컴퓨터시스템설계실험(Computer System Design Lab.) 2-0-4</li><li>(구) 4190.312 화일처리 (File Processing) 3-3-0</li><li>(신) 4190.312A 화일구조 (File Structures) 3-3-0</li><li>(구) 4190.416 디지털신호처리개론 (Basic Digital Signal Processing) 3-3-0</li><li>(신) 4190.416A 디지털신호처리 (Basic Digital Signal Processing) 3-3-0</li><li>(구) 4190.303A 내장형시스템설계 및 구현(Embedded Systems Design and Implementation) 3-3-0</li><li>(신) 4190.303B 내장형시스템(Embedded Systems) 3-3-0</li></ul><h3>영문 교과목명칭 변경</h3><ul><li>(구) 4190.406 신형컴퓨터시스템 (Novel Computer Systems) 3-3-0</li><li>(신) 4190.406 신형컴퓨터시스템 (Contemporary Computer Systems) 3-3-0</li></ul><h3>2004학번부터 적용 전공필수교과목 지정</h3><ul><li>400.016* 컴퓨터의 기초(Fundamentals of Computer System) 2-2-0</li><li>4190.307* 운영체제(Operating Systems) 3-3-0</li><li>4190.308* 컴퓨터구조(Computer Architecture) 3-3-0</li><li>4190.310* 프로그래밍언어(Programming Language) 3-3-0</li><li>4190.407* 알고리즘(Algorithms) 3-3-0</li></ul><h3>2004학번부터 적용 전공필수해제</h3><ul><li>4190.203* 시스템프로그래밍(Systems Programming) 3-3-0</li></ul><h3>교과목폐지</h3><ul><li>4190.208 회로이론(Circuit Theory) 3-3-0</li></ul><h3>동일교과목 및 대체교과목 지정</h3><table><tbody><tr><th colspan="2"><div>대상교과목명</div></th><th colspan="2"><div>대체지정교과목명</div></th></tr><tr><td><div>교과목번호</div></td><td><div>교과목명</div></td><td><div>교과목번호</div></td><td><div>교과목명</div></td></tr><tr><td><div>4190.208</div></td><td><div>회로이론</div></td><td><div>4190.206A</div></td><td><div>전기전자회로</div></td></tr></tbody></table><h2>2000년도 수강신청시 유의사항</h2><ul><li>컴퓨터공학부 교과목은 컴퓨터공학부 교과과정에 따라서 개설됩니다.</li><li>컴퓨터공학부에서 반드시 이수하여야하는 007.045 통계학및실습(4학점-강의3-실습2)은 007.047 통계자료분석및실습(4학점-강의3-실습2)으로 변경되었습니다. 통계학및실습을 수강하려고 하는 학생은 통계자료분석및실습을 수강하면됩니다.</li><li>정보광장에 공대공통교과목(재료공학개론, 기계공학개론, 산업공학개론)의 대체 교과목이 882.303 컴퓨터구성론, 4190.308 컴퓨터구조로 표시되지만 이것은 전산과학과 학생들을 위한 대체교과목으로 컴퓨터공학과 학생들은 해당되지 않습니다.</li></ul><h2>2000학번이후 전공필수</h2><p>이 규정은 2000학번부터 적용됩니다. 99학번까지는 기존 전공필수가 적용됩니다.</p><ul><li>400.001 공학수학1 3-3-0</li><li>400.002 공학수학2 3-3-0</li><li>400.017 컴퓨터개론 3-3-0</li><li>4190.101 이산수학 3-3-0</li><li>4190.201 논리설계 3-3-0</li><li>4190.202 논리설계실험 2-0-4</li><li>4190.204 자료구조 3-3-0</li></ul><h2>95이전 학번에 대한 경과 규정</h2><p>95이전의 학번(95, 94, ...)은 다음 조건을 만족하면 130학점으로 졸업할 수 있습니다.</p><ul><li>1998학년도 1학기부터 한학기에 17학점을 이수하고,</li><li>교양 교과목과 전공 교과목을 96학번에 맞추어 이수한 경우</li></ul><p>만약, 1998학년도 2학기에 19학점을 들었는데, 1998학년도 2학기 교과목을 1999학년도 2학기에 재이수를 하여 1998학년도 2학기 학점이 17학점 이하가 되면 위의 조건을 만족하는 것으로 간주합니다.</p><h2>1999학년도 2학기 시행 교과과정 변경</h2><ul><li>공과대학 공동 교과목(전기전자회로실험1, 2, 회로이론1, 전자회로1, 컴퓨터구조 등)이 폐지됨에 따라 컴퓨터공학부에서 대체 교과목을 신설</li><li>컴퓨터실험1, 2는 교과목 내용을 반영하기 위해 명칭 변경</li><li>전자회로는 새로 전공필수로 지정되었으며, 전공필수인 전기전자회로실험과 동시에 수강해야 함 (재수강인 경우는 제외)</li><li>변경 후 교과목은 변경 전 교과목의 대체과목, 즉 동일한 교과목이므로 재수강할 때 변경 후 교과목을 수강하면 됩니다.</li></ul><p>(참고) 1999학년도 2학기부터 시행되는 교과과정은 변경된 교과목이 해당되는 학번부터 적용이 됩니다. 예를 들어, 전자회로는 2학년 2학기에 수강하도록 되어 있습니다. 따라서, 1999학년도 2학기에 2학년인 98학번부터 적용되는 것입니다. 그리고, 그 이후의 학번, 즉 99학번이후도 적용이 됩니다. 97이전 학번에게는 전자회로의 변경사항이 적용되지 않습니다. 나머지 교과목도 그렇게 생각하면 됩니다.</p><table><tbody><tr><th><div>학년-학기</div></th><th><div>변경 전</div></th><th><div>변경 후</div></th><th><div>적용시기</div></th><th><div>적용학번</div></th><th><div>비고</div></th></tr><tr><td><div>2-1</div></td><td><div>400.201 전기전자공학실험1 2-0-4</div></td><td><div>419.209 논리설계실험 2-0-4</div></td><td><div>'99.2학기</div></td><td><div>99학번 이후</div></td><td><div>신설, 전필</div></td></tr><tr><td><div>2-2</div></td><td><div>400.202 전기전자공학실험2 2-0-4</div></td><td><div>419.210 전기전자회로실험 2-0-4</div></td><td><div><br></div></td><td><div>98학번 이후</div></td><td><div>신설, 전필</div></td></tr><tr><td><div>2-1</div></td><td><div>400.205 회로이론1 3-3-0</div></td><td><div>419.211 회로이론 3-3-0</div></td><td><div><br></div></td><td><div>99학번 이후</div></td><td><div>신설, 전필</div></td></tr><tr><td><div>2-2</div></td><td><div>400.301 전자회로1 3-3-0</div></td><td><div>419.212 전자회로 3-3-0</div></td><td><div><br></div></td><td><div>98학번 이후</div></td><td><div>신설, 전필</div></td></tr><tr><td><div>2-2</div></td><td><div>419.301 컴퓨터실험1 2-0-4</div></td><td><div>419.311 컴퓨터시스템실습 2-0-4</div></td><td><div><br></div></td><td><div>98학번 이후</div></td><td><div>신설, 전필</div></td></tr><tr><td><div>3-1</div></td><td><div>400.305 컴퓨터구조 3-3-0</div></td><td><div>419.310 컴퓨터구조 3-3-0</div></td><td><div><br></div></td><td><div>98학번 이후</div></td><td><div>신설, 전필</div></td></tr><tr><td><div>3-2</div></td><td><div>419.302 컴퓨터실험2 2-0-4</div></td><td><div>419.312 컴퓨터이용설계실험 1-0-2</div></td><td><div><br></div></td><td><div>98학번 이후</div></td><td><div>신설, 전필</div></td></tr></tbody></table><h2>1999년이전 교과과정 변경 현황</h2><p>교과목마다 교과과정이 적용되는 학번이 다르므로 컴퓨터공학부 학생들은 이를 유념하여 전공과목을 수강하기 바랍니다. 학생들이 입학한 시점에서의 전공 필수 교과목은, 이후 이 교과목이 전공 선택으로 변경되었더라도 해당 학번 학생들은 전공 필수로 이수하여야 합니다 ("91학번 이후"는 91학번을 포함합니다).</p><table><tbody><tr><th><div>학년</div></th><th><div>교과목</div></th><th><div>변경전</div></th><th><div>변경후</div></th><th><div>적용시기</div></th><th><div>적용학번</div></th></tr><tr><td><div>3</div></td><td><div>전자회로2</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>93년 3월</div></td><td><div>91학번 이후</div></td></tr><tr><td><div>3</div></td><td><div>프로그래밍언어개론</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>96년 3월</div></td><td><div>94학번 이후</div></td></tr><tr><td><div>3</div></td><td><div>컴퓨터구조</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>″</div></td><td><div>94학번 이후</div></td></tr><tr><td><div>2</div></td><td><div>전자회로1</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>96년 9월</div></td><td><div>95학번 이후</div></td></tr><tr><td><div>2</div></td><td><div>시스템프로그래밍</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>″</div></td><td><div>95학번 이후</div></td></tr><tr><td><div>2</div></td><td><div>자료구조개론</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>″</div></td><td><div>95학번 이후</div></td></tr><tr><td><div>1</div></td><td><div>이산구조</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>″</div></td><td><div>96학번 이후</div></td></tr><tr><td><div>3</div></td><td><div>419.302* 컴퓨터실험2</div></td><td><div>3-1-4</div></td><td><div>2-0-4</div></td><td><div>'98.1학기</div></td><td><div>96학번 이후</div></td></tr><tr><td><div>3</div></td><td><div>419.423 설계프로젝트1</div></td><td><div>1-0-2</div></td><td><div>2-1-2</div></td><td><div>'99.1학기</div></td><td><div>97학번 이후</div></td></tr><tr><td><div>2</div></td><td><div>419.212 전자회로 3-3-0</div></td><td><div>전선</div></td><td><div>전필</div></td><td><div>'99.2학기</div></td><td><div>98학번 이후</div></td></tr><tr><td><div>3</div></td><td><div>419.312 컴퓨터이용설계실험 1-0-2</div></td><td><div>전필</div></td><td><div>전선</div></td><td><div>'99.2학기</div></td><td><div>98학번 이후</div></td></tr></tbody></table><h2>1999학년도 2학기 시행 교과과정 변경</h2><h3>교과목 폐지</h3><ul><li>419.202 컴퓨터공학개론 2-2-0</li><li>419.401 컴퓨터응용실험1 1-0-2</li><li>419.402 컴퓨터응용실험2 1-0-2</li><li>419.412 마이크로프로세서응용 3-3-0</li><li>419.413 컴퓨터이용설계 3-3-0</li><li>419.420 컴퓨터시스템설계 3-3-0</li><li>419.422 졸업논문 2-1-2</li></ul><p>컴퓨터공학과, 전산과학과, 컴퓨터공학부 대체교과목 표</p><table><tbody><tr><th><div>컴퓨터공학과</div></th><th><div>전산과학과</div></th><th><div>컴퓨터공학부</div></th></tr><tr><td><div><br></div></td><td><div>300.205 프로그래밍실습 3-2-2</div></td><td><div>400.017 컴퓨터개론 3-3-0</div></td></tr><tr><td><div>419.206 이산구조 3-3-0</div></td><td><div>300.239 이산수학 3-3-0</div></td><td><div>4190.101 이산수학 3-3-0</div></td></tr><tr><td><div>419.213 컴퓨터프로그래밍 4-3-2</div></td><td><div><br></div></td><td><div>4190.102 컴퓨터프로그래밍 2-0-4</div></td></tr><tr><td><div>419.205 논리설계 3-3-0</div></td><td><div>400.305 컴퓨터구조 3-3-0<br>(전산과학과 학생만 해당)</div></td><td><div>4190.201 논리설계 3-3-0</div></td></tr><tr><td><div>419.209 논리설계실험 2-0-4</div></td><td><div><br></div></td><td><div>4190.202 논리설계실험 2-0-4</div></td></tr><tr><td><div>419.203 시스템프로그래밍 3-3-0</div></td><td><div>882.302 컴퓨터시스템개론및실습 3-2-2</div></td><td><div>4190.203 시스템프로그래밍 3-3-0</div></td></tr><tr><td><div>419.304 자료구조개론 3-3-0</div></td><td><div>300.208 자료구조론 3-3-0</div></td><td><div>4190.204 자료구조 3-3-0</div></td></tr><tr><td><div>419.210 전기전자회로실험 2-0-4</div></td><td><div><br></div></td><td><div>4190.205 전기전자회로실험 2-0-4</div></td></tr><tr><td><div>419.212 전자회로 3-3-0</div></td><td><div><br></div></td><td><div>4190.206 전자회로 3-3-0</div></td></tr><tr><td><div>419.207 컴퓨터프로그래밍개론 3-3-0</div></td><td><div><br></div></td><td><div>4190.207 컴퓨터프로그래밍개론 3-3-0</div></td></tr><tr><td><div>419.211 회로이론 3-3-0</div></td><td><div><br></div></td><td><div>4190.208 회로이론 3-3-0</div></td></tr><tr><td><div>419.406 데이타베이스 3-3-0</div></td><td><div>882.405 데이타베이스개론 3-3-0</div></td><td><div>4190.301 데이타베이스 3-3-0</div></td></tr><tr><td><div>419.409 데이타통신 3-3-0</div></td><td><div><br></div></td><td><div>4190.302 데이타통신 3-3-0</div></td></tr><tr><td><div>419.307 마이크로컴퓨터 3-3-0</div></td><td><div><br></div></td><td><div>4190.303 마이크로프로세서응용 3-3-0</div></td></tr><tr><td><div><br></div></td><td><div>882.308 소형컴퓨터개론및실습 3-3-2</div></td><td><div>4190.304 소형컴퓨터개론 및 실습 3-2-2</div></td></tr><tr><td><div>419.419 스위칭이론 3-3-0</div></td><td><div><br></div></td><td><div>4190.305 스위칭이론 3-3-0</div></td></tr><tr><td><div>419.408 오토마타이론 3-3-0</div></td><td><div>882.305 오토마타이론 3-3-0</div></td><td><div>4190.306 오토마타이론 3-3-0</div></td></tr><tr><td><div>419.404 운영체계론 3-3-0</div></td><td><div>882.306 운영조직론 3-3-0</div></td><td><div>4190.307 운영체제 3-3-0</div></td></tr><tr><td><div>419.310 컴퓨터구조 3-3-0</div></td><td><div>882.303 컴퓨터구성론2 3-3-0</div></td><td><div>4190.308 컴퓨터구조 3-3-0</div></td></tr><tr><td><div>419.208 컴퓨터이용설계개론 3-3-0</div></td><td><div><br></div></td><td><div>4190.309 컴퓨터시스템설계 3-3-0</div></td></tr><tr><td><div>419.305 프로그래밍언어개론 3-3-0</div></td><td><div>882.304 프로그래밍언어론 3-3-0</div></td><td><div>4190.310 프로그래밍언어 3-3-0</div></td></tr><tr><td><div>419.423 설계프로젝트 1 2-1-2</div></td><td><div><br></div></td><td><div>4190.311 프로젝트 1 2-1-2</div></td></tr><tr><td><div>419.306 화일처리론 3-3-0</div></td><td><div><br></div></td><td><div>4190.312 화일처리 3-3-0</div></td></tr><tr><td><div>419.309 집적회로개론 3-3-0</div></td><td><div><br></div></td><td><div>4190.401 vlsi회로 3-3-0</div></td></tr><tr><td><div>419.411 소프트웨어공학 3-3-0</div></td><td><div>882.402 소프트웨어공학개론 3-3-0</div></td><td><div>4190.402 소프트웨어공학 3-3-0</div></td></tr><tr><td><div><br></div></td><td><div>882.406 소프트웨어응용 3-3-0</div></td><td><div>4190.403 소프트웨어응용 3-3-0</div></td></tr><tr><td><div><br></div></td><td><div>882.409 시스템설계프로젝트1 3-1-4</div></td><td><div>4190.404 시스템설계프로젝트1 3-1-4</div></td></tr><tr><td><div><br></div></td><td><div>882.410 시스템설계프로젝트2 3-1-4</div></td><td><div>4190.405 시스템설계프로젝트2 3-1-4</div></td></tr><tr><td><div>419.425 신형컴퓨터시스템개론 3-3-0</div></td><td><div><br></div></td><td><div>4190.406 신형컴퓨터시스템 3-3-0</div></td></tr><tr><td><div>419.407 알고리즘해석 3-3-0</div></td><td><div>882.307 컴퓨터알고리즘 3-3-0</div></td><td><div>4190.407 알고리즘 3-3-0</div></td></tr><tr><td><div>419.410 인공지능 3-3-0</div></td><td><div>882.401 인공지능개론 3-3-0</div></td><td><div>4190.408 인공지능 3-3-0</div></td></tr><tr><td><div>419.403 컴파일러구성 3-3-0</div></td><td><div>882.407 컴파일러설계 3-3-0</div></td><td><div>4190.409 컴파일러 3-3-0</div></td></tr><tr><td><div>419.308 컴퓨터그래픽 3-3-0</div></td><td><div>882.404 컴퓨터그래픽스 3-3-0</div></td><td><div>4190.410 컴퓨터그래픽스 3-3-0</div></td></tr><tr><td><div>419.405 컴퓨터망 3-3-0</div></td><td><div>882.403 네트웍개론 3-3-0</div></td><td><div>4190.411 컴퓨터네트워크 3-3-0</div></td></tr><tr><td><div><br></div></td><td><div>882.408 컴퓨터모델링 3-3-0</div></td><td><div>4190.412 컴퓨터모델링 3-3-0</div></td></tr><tr><td><div>419.424 설계프로젝트 2 2-1-2</div></td><td><div><br></div></td><td><div>4190.413 프로젝트 2 2-1-2</div></td></tr></tbody></table><p>(구)컴퓨터공학과 전공 교과목의 변경 및 대체지정 표</p><table><tbody><tr><th colspan="3"><div>기존교과목</div></th><th colspan="3"><div>변경 혹은 대체지정 교과목</div></th></tr><tr><td><div>교과목번호</div></td><td><div>교과목명</div></td><td><div>학점구조</div></td><td><div>교과목번호</div></td><td><div>교과목명</div></td><td><div>학점구조</div></td></tr><tr><td><div>400.201</div></td><td><div>전기전자공학실험 1</div></td><td><div>2-0-4</div></td><td><div>4190.202</div></td><td><div>논리설계실험</div></td><td><div>2-0-4</div></td></tr><tr><td><div>400.202</div></td><td><div>전기전자공학실험 2</div></td><td><div>2-0-4</div></td><td><div>4190.205</div></td><td><div>전기전자회로실험</div></td><td><div>2-0-4</div></td></tr><tr><td><div>400.205</div></td><td><div>회로이론 1</div></td><td><div>3-3-0</div></td><td><div>4190.208</div></td><td><div>회로이론</div></td><td><div>3-3-0</div></td></tr><tr><td><div>400.301</div></td><td><div>전자회로 1</div></td><td><div>3-3-0</div></td><td><div>4190.206</div></td><td><div>전자회로</div></td><td><div>3-3-0</div></td></tr><tr><td><div>400.305</div></td><td><div>컴퓨터구조</div></td><td><div>3-3-0</div></td><td><div>4190.308</div></td><td><div>컴퓨터구조</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.203</div></td><td><div>시스템프로그래밍</div></td><td><div>3-3-0</div></td><td><div>4190.203</div></td><td><div>시스템프로그래밍</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.205</div></td><td><div>논리설계</div></td><td><div>3-3-0</div></td><td><div>4190.201</div></td><td><div>논리설계</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.206</div></td><td><div>이산구조</div></td><td><div>3-3-0</div></td><td><div>4190.101</div></td><td><div>이산수학</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.207</div></td><td><div>컴퓨터프로그래밍개론</div></td><td><div>3-3-0</div></td><td><div>4190.207</div></td><td><div>컴퓨터프로그래밍개론</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.208</div></td><td><div>컴퓨터이용설계개론</div></td><td><div>3-3-0</div></td><td><div>4190.309</div></td><td><div>컴퓨터시스템설계</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.209</div></td><td><div>논리설계실험</div></td><td><div>2-0-4</div></td><td><div>4190.202</div></td><td><div>논리설계실험</div></td><td><div>2-0-4</div></td></tr><tr><td><div>419.210</div></td><td><div>전기전자회로실험</div></td><td><div>2-0-4</div></td><td><div>4190.205</div></td><td><div>전기전자회로실험</div></td><td><div>2-0-4</div></td></tr><tr><td><div>419.211</div></td><td><div>회로이론</div></td><td><div>3-3-0</div></td><td><div>4190.208</div></td><td><div>회로이론</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.212</div></td><td><div>전자회로</div></td><td><div>3-3-0</div></td><td><div>4190.206</div></td><td><div>전자회로</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.213</div></td><td><div>컴퓨터프로그래밍</div></td><td><div>4-3-2</div></td><td><div>4190.102A</div></td><td><div>컴퓨터프로그래밍</div></td><td><div>3-2-2</div></td></tr><tr><td><div>419.301</div></td><td><div>컴퓨터실험 1</div></td><td><div>2-0-4</div></td><td><div>4190.102A</div></td><td><div>컴퓨터프로그래밍</div></td><td><div>3-2-2</div></td></tr><tr><td><div>419.302</div></td><td><div>컴퓨터실험 2</div></td><td><div>2-0-4</div></td><td><div>4190.102A</div></td><td><div>컴퓨터프로그래밍</div></td><td><div>3-2-2</div></td></tr><tr><td><div>419.304</div></td><td><div>자료구조개론</div></td><td><div>3-3-0</div></td><td><div>4190.204</div></td><td><div>자료구조</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.305</div></td><td><div>프로그래밍언어개론</div></td><td><div>3-3-0</div></td><td><div>4190.310</div></td><td><div>프로그래밍언어</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.306</div></td><td><div>화일처리론</div></td><td><div>3-3-0</div></td><td><div>4190.312</div></td><td><div>화일처리</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.307</div></td><td><div>마이크로컴퓨터</div></td><td><div>3-3-0</div></td><td><div>4190.303A</div></td><td><div>내장형시스템설계및구현</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.308</div></td><td><div>컴퓨터그래픽</div></td><td><div>3-3-0</div></td><td><div>4190.410</div></td><td><div>컴퓨터그래픽스</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.309</div></td><td><div>집적회로개론</div></td><td><div>3-3-0</div></td><td><div>4190.401</div></td><td><div>vlsi회로</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.310</div></td><td><div>컴퓨터구조</div></td><td><div>3-3-0</div></td><td><div>4190.308</div></td><td><div>컴퓨터구조</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.311</div></td><td><div>컴퓨터시스템실습</div></td><td><div>2-0-4</div></td><td><div>4190.102A</div></td><td><div>컴퓨터프로그래밍</div></td><td><div>3-2-2</div></td></tr><tr><td><div>419.312</div></td><td><div>컴퓨터이용설계실험</div></td><td><div>1-0-2</div></td><td><div>4190.102A</div></td><td><div>컴퓨터프로그래밍</div></td><td><div>3-2-2</div></td></tr><tr><td><div>419.403</div></td><td><div>컴파일러구성</div></td><td><div>3-3-0</div></td><td><div>4190.409</div></td><td><div>컴파일러</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.404</div></td><td><div>운영체계론</div></td><td><div>3-3-0</div></td><td><div>4190.307</div></td><td><div>운영체제</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.405</div></td><td><div>컴퓨터망</div></td><td><div>3-3-0</div></td><td><div>4190.411</div></td><td><div>컴퓨터네트워크</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.406</div></td><td><div>데이타베이스</div></td><td><div>3-3-0</div></td><td><div>4190.301</div></td><td><div>데이타베이스</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.407</div></td><td><div>알고리즘해석</div></td><td><div>3-3-0</div></td><td><div>4190.407</div></td><td><div>알고리즘</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.408</div></td><td><div>오토마타이론</div></td><td><div>3-3-0</div></td><td><div>4190.306</div></td><td><div>오토마타이론</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.409</div></td><td><div>데이타통신</div></td><td><div>3-3-0</div></td><td><div>4190.302</div></td><td><div>데이타통신</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.410</div></td><td><div>인공지능</div></td><td><div>3-3-0</div></td><td><div>4190.408</div></td><td><div>인공지능</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.411</div></td><td><div>소프트웨어공학</div></td><td><div>3-3-0</div></td><td><div>4190.402</div></td><td><div>소프트웨어공학</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.419</div></td><td><div>스위칭이론</div></td><td><div>3-3-0</div></td><td><div>4190.305</div></td><td><div>스위칭이론</div></td><td><div>3-3-0</div></td></tr><tr><td><div>419.423</div></td><td><div>설계프로젝트 1</div></td><td><div>2-1-2</div></td><td><div>4190.311A</div></td><td><div>프로젝트 1</div></td><td><div>3-1-4</div></td></tr><tr><td><div>419.424</div></td><td><div>설계프로젝트 2</div></td><td><div>2-1-2</div></td><td><div>4190.413A</div></td><td><div>프로젝트 2</div></td><td><div>3-1-4</div></td></tr><tr><td><div>419.425</div></td><td><div>신형컴퓨터시스템개론</div></td><td><div>3-3-0</div></td><td><div>4190.406</div></td><td><div>신형컴퓨터시스템</div></td><td><div>3-3-0</div></td></tr></tbody></table><h2>(구)전산과학과에서 컴퓨터공학부로 소속을 변경한 경우 교과목이수규정</h2><ol><li>교양과목은 각 년도별 자연과학대학 이수규정을 따르며, 전공필수는 각 년도별 컴퓨터공학부의 이수규정을 따름. 전공선택 인정교과목은 다음과 같음.<table><tbody><tr><th><div>교과과정 기준학년도</div></th><th><div>전공선택 인정 교과목</div></th></tr><tr><td><div>①1997학년도</div></td><td><div>수학전공, 통계학전공, 컴퓨터공학부의 모든 교과목(수학과, 통계학과 개설의 전공탁색 교과목까지 포함)</div></td></tr><tr><td><div>②1998학년도</div></td><td><div>컴퓨터공학부의 모든 교과목과 학과장이 인정하는 교과목</div></td></tr><tr><td><div>③1999학년도</div></td><td><ol><li>공과대학 컴퓨터공학부 및 전기공학부의 전공교과목 중 학부장이 인정하는 교과목</li><li>전공탐색교과목 중 300.205(프로그래밍 실습)과 300.208(자료구조론)</li><li>※ 교양 제7영역의 과목 중 007.040(전산과학및실습)을 포함한 교과목은 전공으로 인정하지 않음.</li></ol></td></tr></tbody></table><table><tbody><tr><th><div>학번</div></th><th><div>전공선택 인정 교과목</div></th></tr><tr><td><div>97학번</div></td><td><div>①+②+③의 모든 교과목을 전공선택으로 인정함.</div></td></tr><tr><td><div>98학번</div></td><td><div>②+③의 모든 교과목을 전공선택으로 인정함.</div></td></tr><tr><td><div>99학번</div></td><td><div>③의 모든 교과목을 전공선택으로 인정함.</div></td></tr></tbody></table></li><li>다음의 자연과학대학 전산과학전공의 교과목을 이수한 경우에는 공과대학 컴퓨터공학부의 해당교과목을 이수한 것으로 인정함.<table><tbody><tr><th colspan="3"><div>전산과학전공 교과목</div></th><th colspan="3"><div>컴퓨터공학부 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점</div></th><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점</div></th></tr><tr><td><div>300.205</div></td><td><div>프로그래밍실습</div></td><td><div>3</div></td><td><div>400.017</div></td><td><div>컴퓨터개론</div></td><td><div>3</div></td></tr><tr><td><div>300.208</div></td><td><div>자료구조론</div></td><td><div>3</div></td><td><div>4190.204</div></td><td><div>자료구조</div></td><td><div>3</div></td></tr><tr><td><div>400.305</div></td><td><div>컴퓨터구조</div></td><td><div>3</div></td><td><div>4190.201</div></td><td><div>논리설계</div></td><td><div>3</div></td></tr><tr><td><div>300.239</div></td><td><div>이산수학</div></td><td><div>3</div></td><td><div>4190.101</div></td><td><div>이산수학</div></td><td><div>3</div></td></tr><tr><td><div>882.302</div></td><td><div>컴퓨터시스템개론및실습</div></td><td><div>3</div></td><td><div>4190.203</div></td><td><div>시스템프로그래밍</div></td><td><div>3</div></td></tr><tr><td><div>882.305</div></td><td><div>오토마타이론</div></td><td><div>3</div></td><td><div>4190.306</div></td><td><div>오토마타이론</div></td><td><div>3</div></td></tr><tr><td><div>882.307</div></td><td><div>컴퓨터알고리즘</div></td><td><div>3</div></td><td><div>4190.407</div></td><td><div>알고리즘</div></td><td><div>3</div></td></tr><tr><td><div>882.308</div></td><td><div>소형컴퓨터개론및실습</div></td><td><div>3</div></td><td><div>4190.304</div></td><td><div>소형컴퓨터개론및실습</div></td><td><div>3</div></td></tr><tr><td><div>882.401</div></td><td><div>인공지능개론</div></td><td><div>3</div></td><td><div>4190.408</div></td><td><div>인공지능</div></td><td><div>3</div></td></tr><tr><td><div>882.402</div></td><td><div>소프트웨어공학개론</div></td><td><div>3</div></td><td><div>4190.304</div></td><td><div>소프트웨어공학</div></td><td><div>3</div></td></tr><tr><td><div>882.403</div></td><td><div>네트웍개론</div></td><td><div>3</div></td><td><div>4190.411</div></td><td><div>컴퓨터네트워크</div></td><td><div>3</div></td></tr><tr><td><div>882.404</div></td><td><div>컴퓨터그래픽스</div></td><td><div>3</div></td><td><div>4190.410</div></td><td><div>컴퓨터그래픽스</div></td><td><div>3</div></td></tr><tr><td><div>882.405</div></td><td><div>데이타베이스개론</div></td><td><div>3</div></td><td><div>4190.301</div></td><td><div>데이타베이스</div></td><td><div>3</div></td></tr><tr><td><div>882.406</div></td><td><div>소프트웨어응용</div></td><td><div>3</div></td><td><div>4190.403</div></td><td><div>소프트웨어응용</div></td><td><div>3</div></td></tr><tr><td><div>882.407</div></td><td><div>컴파일러설계</div></td><td><div>3</div></td><td><div>4190.409</div></td><td><div>컴파일러</div></td><td><div>3</div></td></tr><tr><td><div>882.408</div></td><td><div>컴퓨터모델링</div></td><td><div>3</div></td><td><div>4190.412</div></td><td><div>컴퓨터모델링</div></td><td><div>3</div></td></tr><tr><td><div>882.409</div></td><td><div>시스템설계프로젝트1</div></td><td><div>3</div></td><td><div>4190.311A</div></td><td><div>프로젝트1</div></td><td><div>3</div></td></tr><tr><td><div>882.410</div></td><td><div>시스템설계프로젝트2</div></td><td><div>3</div></td><td><div>4190.413A</div></td><td><div>프로젝트2</div></td><td><div>3</div></td></tr></tbody></table></li><li>다음의 교과목을 이수한 경우에는 해당하는 공대공통 전공필수 교과목을 이수한 것으로 인정함.<table><tbody><tr><th colspan="3"><div>전산과학전공 혹은 컴퓨터공학부의 교과목</div></th><th colspan="3"><div>컴퓨터공학부 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점</div></th><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점</div></th></tr><tr><td><div>882.304</div></td><td><div>프로그래밍어론</div></td><td><div>3</div></td><td rowspan="2"><div>400.001</div></td><td rowspan="2"><div>공학수학1</div></td><td rowspan="2"><div>3</div></td></tr><tr><td><div>4190.310</div></td><td><div>프로그래밍언어</div></td><td><div>3</div></td></tr><tr><td><div>882.306</div></td><td><div>운영조직론</div></td><td><div>3</div></td><td rowspan="2"><div>400.002</div></td><td rowspan="2"><div>공학수학2</div></td><td rowspan="2"><div>3</div></td></tr><tr><td><div>4190.307</div></td><td><div>운영체제</div></td><td><div>3</div></td></tr><tr><td><div>882.303</div></td><td><div>컴퓨터구성론2</div></td><td><div>3</div></td><td rowspan="2"><div>400.013/015/019</div></td><td rowspan="2"><div>공대공통교과목</div></td><td rowspan="2"><div>3</div></td></tr><tr><td><div>4190.308</div></td><td><div>컴퓨터구조</div></td><td><div>3</div></td></tr></tbody></table></li><li>다음의 교과목을 이수한 경우에는 공과대학 컴퓨터공학부의 전공필수 교과목 중 논리설계실험을 이수한 것으로 인정함.<table><tbody><tr><th colspan="3"><div>이수 교과목</div></th><th colspan="3"><div>인정되는 컴퓨터공학부 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점</div></th><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>학점</div></th></tr><tr><td><div>4190.301</div></td><td><div>데이터베이스</div></td><td><div>3</div></td><td rowspan="7"><div>4190.202</div></td><td rowspan="7"><div>논리설계실험</div></td><td rowspan="7"><div>2</div></td></tr><tr><td><div>4190.402</div></td><td><div>소프트웨어공학</div></td><td><div>3</div></td></tr><tr><td><div>4190.408</div></td><td><div>인공지능</div></td><td><div>3</div></td></tr><tr><td><div>4190.409</div></td><td><div>컴파일러</div></td><td><div>3</div></td></tr><tr><td><div>4190.410</div></td><td><div>컴퓨터그래픽스</div></td><td><div>3</div></td></tr><tr><td><div>4190.411</div></td><td><div>컴퓨터네트워크</div></td><td><div>3</div></td></tr><tr><td><div>4190.412</div></td><td><div>컴퓨터모델링</div></td><td><div>3</div></td></tr></tbody></table></li></ol>`,
  },
];

export const graduateCourseChangesData: CourseChange[] = [
  {
    year: 2020,
    description:
      '<h2>2020학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.003900 인공지능 및 빅데이터시스템 (Artificial Intelligence and Big Data Systems) 3-3-0</li><li>M1522.003800 온라인소셜미디어분석 (Online Social Media Analysis) 3-3-0</li><li>M1522.003600 생물정보학을 위한 기계학습 (Machine learning in bioinformatics) 3-3-0</li><li>M1522.003700 양자컴퓨팅 (Quantum Computing) 3-3-0</li><li>M1522.003100 데이터압축 (Data Compression) 3-3-0</li><li>M1522.005900 컴퓨터시스템연구 (Studies in Computer Systems) 3-3-0</li><li>M1522.006000 프로그래밍언어연구 (Studies in Programming Languages) 3-3-0</li><li>M1522.005100 데이터베이스연구 (Studies in Database) 3-3-0</li><li>M1522.005000 데이터마이닝연구 (Studies in Data Mining) 3-3-0</li><li>M1522.004800 그래픽스연구 (Studies in Graphics) 3-3-0</li><li>M1522.005300 인간중심컴퓨팅연구 (Studies in Human-Centered Computing) 3-3-0</li><li>M1522.005800 컴퓨터네트워크연구 (Studies in Computer Networks) 3-3-0</li><li>M1522.005500 인공지능연구 (Studies in Artificial Intelligence) 3-3-0</li><li>M1522.005200 실시간시스템연구 (Studies in Real-Time Systems) 3-3-0</li><li>M1522.004900 내장형시스템연구 (Studies in Embedded Systems) 3-3-0</li><li>M1522.005700 컴퓨터구조연구 (Studies in Computer Architecture) 3-3-0</li><li>M1522.004700 계산이론연구 (Studies in Theory of Computation) 3-3-0</li></ul><p><br></p><h3>교과목 변경</h3><table><tbody><tr><td rowspan="2"><div><br></div></td><td colspan="2"><div><strong>교과목명</strong></div></td><td rowspan="2"><div><strong>변경내역</strong></div></td></tr><tr><td><div><strong>변경 전</strong></div></td><td><div><strong>변경 후</strong></div></td></tr><tr><td><div>1</div></td><td><div>4190.561 고급계산이론<br>(Advanced Theory in Computation)</div></td><td><div>M1522.002900 계산이론<br>(Theory of Computation)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>2</div></td><td><div>4190.570 고급컴파일러구성<br>(Advanced Compiler Construction)</div></td><td><div>M1522.004000 컴파일러최적화<br>(Compiler Optimizations)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>3</div></td><td><div>4190.571 고급컴퓨터구조<br>(Advanced Compiler Construction)</div></td><td><div>4190.571 고급컴퓨터구조<br>(Advanced Compiler Construction)</div></td><td><div>2군 교과목 해제, 개요변경</div></td></tr><tr><td><div>4</div></td><td><div>4190.574 고급프로그래밍언어<br>(Advanced Programming Languages)</div></td><td><div>M1522.004600 프로그래밍언어특강<br>(Topics in Programming Languages)</div></td><td><div>명칭변경, 개요변경, 2군 교과목 지정</div></td></tr><tr><td><div>5</div></td><td><div>4190.661 객체지향시스템<br>(Object-Oriented Systems)</div></td><td><div>M1522.004300 객체지향시스템특강<br>(Topics in Object-Oriented Systems)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>6</div></td><td><div>4190.662A 분산정보처리<br>(Distributed Information Processing)</div></td><td><div>(추후신설) 분산시스템<br>(Distributed Systems)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>7</div></td><td><div>4190.663A 고급애니매이션<br>(Advanced Animation)</div></td><td><div>M1522.004100 컴퓨터애니메이션<br>(Computer Animation)</div></td><td><div>명칭변경</div></td></tr><tr><td><div>8</div></td><td><div>4190.668A 디지털시스템설계방법론<br>(Digital Systems Design Methodology)</div></td><td><div>4190.668A 디지털시스템설계방법론<br>(Digital Systems Design Methodology)</div></td><td><div>개요변경</div></td></tr><tr><td><div>9</div></td><td><div>4190.671 시스템성능평가<br>(System Performance Evaluation)</div></td><td><div>M1522.004200 확률기반네트워크모델링<br>(Probability-based Network Modeling)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>10</div></td><td><div>4190.672 실시간시스템<br>(Real-Time Systems)</div></td><td><div>4190.672 실시간시스템<br>(Real-Time Systems)</div></td><td><div>개요변경</div></td></tr><tr><td><div>11</div></td><td><div>4190.683A 고급인간컴퓨터상호작용<br>(Advanced Human-Computer Interaction)</div></td><td><div>M1522.005400 인간컴퓨터상호작용연구<br>(Studies in Human-Computer Interaction)</div></td><td><div>명칭변경</div></td></tr><tr><td><div>12</div></td><td><div>4190.684 분산시스템<br>(Distributed Systems)</div></td><td><div>M1522.003200 멀티프로세서동기화<br>(Multiprocessor Synchronization)</div></td><td><div>명칭변경, 개요변경, 2군 교과목 해제</div></td></tr><tr><td><div>13</div></td><td><div>4190.685 데이터통신이해<br>(Understanding Data Communication)</div></td><td><div>M1522.003400 무선네트워크프로토콜<br>(Wireless Network Protocols)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>14</div></td><td><div>4190.765 데이터베이스특강<br>(Topics in Database)</div></td><td><div>4190.765 데이터베이스특강<br>(Topics in Database)</div></td><td><div>개요변경</div></td></tr><tr><td><div>15</div></td><td><div>4190.767 병렬처리특강<br>(Topics in Parallel Processing)</div></td><td><div>M1522.004500 컴퓨터시스템특강<br>(Topics in Computer Systems)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>16</div></td><td><div>4190.770 실시간시스템특강<br>(Topics in Real-Time Systems)</div></td><td><div>4190.770 실시간시스템특강<br>(Topics in Real-Time Systems)</div></td><td><div>개요변경</div></td></tr><tr><td><div>17</div></td><td><div>4190.775 컴파일러구성특강<br>(Topics in Compiler Construction)</div></td><td><div>M1522.005600 컴파일러최적화연구<br>(Studies in Compiler Optimizations)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>18</div></td><td><div>M1522.000400 고급네트워크보안<br>(Advanced Network Security)</div></td><td><div>M1522.004400 인터넷보안특강<br>(Topics in Internet Security)</div></td><td><div>명칭변경, 2군 교과목 지정</div></td></tr><tr><td><div>19</div></td><td><div>M1522.001900 고급데이터베이스 1<br>(Advanced Databases 1)</div></td><td><div>M1522.003000 데이터베이스시스템<br>(Database System)</div></td><td><div>명칭변경</div></td></tr><tr><td><div>20</div></td><td><div>M1522.002000 고급데이터베이스 2<br>(Advanced Databases 2)</div></td><td><div>M1522.003500 비정형데이터베이스시스템<br>(Non-relational Database System)</div></td><td><div>명칭변경, 개요변경</div></td></tr><tr><td><div>21</div></td><td><div>M1522.002600 고급모바일컴퓨팅<br>(Advanced Mobile Computing)</div></td><td><div>M1522.003300 모바일 및 유비쿼터스컴퓨팅<br>(Mobile and Ubiquitous Computing)</div></td><td><div>명칭변경</div></td></tr></tbody></table><h3>교과목 폐지</h3><ul><li>4190.665 컴퓨터이용설계 (Computer-Aided Design) 3-3-0</li><li>4190.764 대규모집적회로특강 (Topics in VLSI) 3-3-0</li><li>4190.774 인터넷특강 (Topics in Internet) 3-3-0</li><li>4190.776 컴퓨터공학특강 (Topics in Computer Engineering) 3-3-0</li><li>4190.779 컴퓨터응용특강 (Topics in Computer Applications) 3-3-0</li><li>M1522.002200 고급데이터통신 (Advanced Data Communication) 3-3-0</li></ul><p><br></p><h3>대체교과목 지정</h3><table><tbody><tr><th colspan="3"><div>폐지 교과목</div></th><th colspan="3"><div>대체 지정 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th></tr><tr><td><div>4190.665</div></td><td><div>3-3-0</div></td><td><div>컴퓨터이용설계</div></td><td><div>4190.668A</div></td><td><div>3-3-0</div></td><td><div>디지털시스템설계방법론</div></td></tr><tr><td><div>4190.764</div></td><td><div>3-3-0</div></td><td><div>대규모집적회로특강</div></td><td><div>4190.668A</div></td><td><div>3-3-0</div></td><td><div>디지털시스템설계방법론</div></td></tr><tr><td><div>4190.774</div></td><td><div>3-3-0</div></td><td><div>인터넷특강</div></td><td><div>4190.778</div></td><td><div>3-3-0</div></td><td><div>컴퓨터네트워크특강</div></td></tr><tr><td><div>4190.776</div></td><td><div>3-3-0</div></td><td><div>컴퓨터공학특강</div></td><td><div>4190.777</div></td><td><div>3-3-0</div></td><td><div>컴퓨터구조특강</div></td></tr><tr><td><div>4190.779</div></td><td><div>3-3-0</div></td><td><div>컴퓨터응용특강</div></td><td><div>M1522.004500</div></td><td><div>3-3-0</div></td><td><div>컴퓨터시스템특강</div></td></tr><tr><td><div>M1522.002200</div></td><td><div>3-3-0</div></td><td><div>고급데이터통신</div></td><td><div>M1522.003400</div></td><td><div>3-3-0</div></td><td><div>무선네트워크프로토콜</div></td></tr></tbody></table><p><br></p>',
  },
  {
    year: 2019,
    description:
      '<h2>2019학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.002600 고급모바일컴퓨팅 (Advanced Mobile Computing) 3-3-0</li></ul>',
  },
  {
    year: 2018,
    description: `<h2>2018학년도 2학기 시행 교과과정 변경</h2><h3>교과목 폐지</h3><ul><li>4190.573 고급컴퓨터설계 (Advanced Computer Design) 3-3-0</li><li>4190.670 병렬처리론 (Parallel Processing) 3-3-0</li><li>4190.677A 무선인터넷 (Wireless Internet) 3-3-0</li><li>4190.682A 컴퓨터보안특강 (Topics in Computer Systems Security) 3-3-0</li><li>4190.686 소프트웨어비용분석 (Software Cost Analysis) 3-3-0</li><li>4190.687 운영체제이해 (Understanding Operating Systems) 3-3-0</li><li>4190.688 프로그래밍언어이해 (Understanding Programming Languages) 3-3-0</li></ul><p><br></p><h3>대체교과목 지정</h3><table><tbody><tr><th colspan="3"><div>폐지 교과목</div></th><th colspan="3"><div>대체 지정 교과목</div></th></tr><tr><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th><th><div>교과목번호</div></th><th><div>학점-강의-실습</div></th><th><div>교과목명</div></th></tr><tr><td><div>4190.573</div></td><td><div>3-3-0</div></td><td><div>고급컴퓨터설계</div></td><td><div>4190.571<br>4190.669A<br>4190.672<br>4190.684</div></td><td><div>3-3-0</div></td><td><div>고급컴퓨터구조<br>고급내장형시스템<br>실시간시스템<br>분산시스템</div></td></tr><tr><td><div>4190.670</div></td><td><div>3-3-0</div></td><td><div>병렬처리론</div></td><td><div>4190.571<br>4190.669A<br>4190.672<br>4190.684</div></td><td><div>3-3-0</div></td><td><div>고급컴퓨터구조<br>고급내장형시스템<br>실시간시스템<br>분산시스템</div></td></tr><tr><td><div>4190.677A</div></td><td><div>3-3-0</div></td><td><div>무선인터넷</div></td><td><div>4190.572<br>4190.774<br>4190.778</div></td><td><div>3-3-0</div></td><td><div>고급컴퓨터네트워크<br>인터넷특강<br>컴퓨터네트워크특강</div></td></tr><tr><td><div>4190.682A</div></td><td><div>3-3-0</div></td><td><div>컴퓨터보안특강</div></td><td><div>M1522.000400</div></td><td><div>3-3-0</div></td><td><div>고급네트워크보안</div></td></tr><tr><td><div>4190.686</div></td><td><div>3-3-0</div></td><td><div>소프트웨어비용분석</div></td><td><div>4190.661</div></td><td><div>3-3-0</div></td><td><div>객체지향시스템</div></td></tr><tr><td><div>4190.687</div></td><td><div>3-3-0</div></td><td><div>운영체제이해</div></td><td><div>4190.568</div></td><td><div>3-3-0</div></td><td><div>고급운영체제</div></td></tr><tr><td><div>4190.688</div></td><td><div>3-3-0</div></td><td><div>프로그래밍언어이해</div></td><td><div>4190.574</div></td><td><div>3-3-0</div></td><td><div>고급프로그래밍언어</div></td></tr></tbody></table><p><br></p>`,
  },
  {
    year: 2017,
    description:
      '<h2>2017학년도 2학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.002000 고급데이터베이스 2 (Advanced Databases 2) 3-3-0</li></ul><h3>교과목명칭 및 교과목번호 변경</h3><ul><li>(구) 4190.564 고급데이타베이스 ( Advanced Database) 3-3-0</li><li>(신) M1522.001900 고급데이터베이스 1 (Advanced Databases 1) 3-3-0</li><li>(구) 4190.565 고급데이타통신 (Advanced Data Communication) 3-3-0</li><li>(신) M1522.002200 고급데이터통신 (Advanced Data Communication) 3-3-0</li></ul><h3>동일교과목 지정</h3><table><tbody><tr><th><div>교과목번호</div></th><th><div>교과목명</div></th><th><div>변경 항목</div></th><th><div>변경 교과목번호</div></th><th><div>변경 교과목명</div></th><th><div>비 고</div></th></tr><tr><td class="course-id"><div>4190.564</div></td><td><div>고급데이타베이스</div></td><td><div>국·영문 명칭변경</div></td><td class="course-id"><div>M1522.001900</div></td><td><div>고급데이터베이스 1</div></td><td><div><br></div></td></tr><tr><td class="course-id"><div>4190.565</div></td><td><div>고급데이타통신</div></td><td><div>국문 명칭변경</div></td><td class="course-id"><div>M1522.002200</div></td><td><div>고급데이터통신</div></td><td><div>Data의 한글표기 수정</div></td></tr></tbody></table><p><br></p>',
  },
  {
    year: 2016,
    description:
      '<h2>2016학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.001300 확률 그래프 모델(Probabilistic Graphical Models) 3-3-0</li><li>M1522.001500 정보검색 (Information Retrieval) 3-3-0</li><li>★M1522.001600 대규모 데이터분석 특강 (Topics in Big Data Analytics) 3-3-0</li></ul>',
  },
  {
    year: 2015,
    description:
      '<h2>2015학년도 1학기 시행 교과과정 변경</h2><h3>교과목 신설</h3><ul><li>M1522.000400 고급네트워크보안 (Advanced Network Security) 3-3-0</li><li>M1522.000500 정보시각화와 시각적분석 (Information Visualization and Visual Analytics) 3-3-0</li></ul>',
  },
  {
    year: 2011,
    description:
      '<h2>2011학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 4541.683 컴퓨터비젼(Computer Vision) 3-3-0</li><li>(신) 4541.683A 고급인간컴퓨터상호작용(Advanced Human-Computer Interaction) 3-3-0</li></ul><h2>2009학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 4541.766 데이터통신특강(Topics in Data Communication) 3-3-0</li><li>(신) 4541.685 데이터통신이해(Understanding Data Communication) 3-3-0</li><li>(구) 4541.769 소프트웨어공학특강(Topics in Software Engineering) 3-3-0</li><li>(신) 4541.686 소프트웨어 비용분석(Software Cost Analysis) 3-3-0</li><li>(구) 4541.772 운영체제특강(Topics in Operating Systems) 3-3-0</li><li>(신) 4541.687 운영체제이해(Understanding Operating Systems) 3-3-0</li><li>(구) 4541.780 프로그래밍언어특강(Topics in Programming Languages) 3-3-0</li><li>(신) 4541.687 프로그래밍언어이해(Understanding Programming Languages) 3-3-0</li></ul><h2>2008학년도 1학기 시행 교과과정 변경</h2><h3>교과목 폐지</h3><ul><li>4541.675 휴먼컴퓨터인터페이스(Human-Computer Interface) 3-3-0</li></ul><h2>2006학년도 1학기 시행 교과과정 변경</h2><h3>교과목명칭 변경</h3><ul><li>(구) 4541.662 결함허용시스템(Fault-Tolerant Systems) 3-3-0</li><li>(신) 4541.662A 분산정보처리(Distributed Information Processing) 3-3-0</li></ul><h3>교과목명 및 코드 변경</h3><ul><li>(구)★4541.768 분산시스템특강(Topics in Distributed Systems) 3-3-0</li><li>(신) 4541.684 분산시스템(Distributed Systems)</li></ul><h3>교과목폐지</h3><ul><li>4541.563 고급대규모집적회로(Advanced VLSI) 3-3-0</li><li>4541.566 고급소프트웨어공학(Advanced Software Engineering) 3-3-0</li><li>4541.567 고급알고리즘(Advanced Algorithms) 3-3-0</li><li>4541.674 이동통신망(Mobile Networks) 3-3-0</li></ul><h2>2005학년도 1학기 시행 교과과정 변경</h2><h3>교과목신설</h3><ul><li>★4541.781 고급컴퓨터공학세미나(Colloquium on Advanced Computer Engineering) 1-1-0</li></ul><h3>교과목명칭 변경</h3><ul><li>(구) 4541.677 인터넷소프트웨어 (Internet Software) 3-3-0</li><li>(신) 4541.677A 무선 인터넷 (Wireless Internet) 3-3-0</li><li>(구) 4541.669 마이크로프로세서응용 (Microprocessor Applications) 3-3-0</li><li>(신) 4541.669A 고급내장형시스템 (Advanced Embedded Systems) 3-3-0</li><li>(구) 4541.663 멀티미디어시스템 (Multimedia Systems) 3-3-0</li><li>(신)4541.663A 고급애니메이션 (Advanced Animation) 3-3-0</li><li>(구) 4541.664 운영체제응용 (Operating System Applications) 3-3-0</li><li>(신) 4541.664A 프로그램 분석 (Static Program Analysis) 3-3-0</li></ul><h3>2군 교과목 지정</h3><ul><li>★4541.683 컴퓨터비젼(Computer Vision) 3-3-0</li><li>★4541.764 대규모집적회로특강(Topics in VLSI) 3-3-0</li><li>★4541.766 데이터통신특강(Topics in Data Communication) 3-3-0</li><li>★4541.768 분산시스템특강(Topics in Distributed Systems) 3-3-0</li><li>★4541.769 소프트웨어공학특강(Topics in Software Engineering) 3-3-0</li><li>★4541.770 실시간시스템특강(Topics in Real-Time Systems) 3-3-0</li><li>★4541.771 알고리즘특강(Topics in Algorithms) 3-3-0</li><li>★4541.774 인터넷특강(Topics in Internet) 3-3-0</li><li>★4541.775 컴파일러구성특강(Topics in Compiler Construction) 3-3-0</li><li>★4541.776 컴퓨터공학특강(Topics in Computer Engineering) 3-3-0</li><li>★4541.777 컴퓨터구조특강(Topics in Computer Architecture) 3-3-0</li><li>★4541.778 컴퓨터네트워크특강(Topics in Computer Networks) 3-3-0</li><li>★4541.780 프로그래밍언어특강(Topics in Programming Languages) 3-3-0</li><li>★4541.781 고급컴퓨터공학세미나(Colloquium on Advanced Computer Engineering) 1-1-0</li></ul><h3>교과목폐지</h3><ul><li>4541.679 지능형에이전트(Intelligent Agents) 3-3-0</li></ul><p>컴퓨터공학과, 전산과학과, 컴퓨터공학부 대체교과목</p><table><tbody><tr><th><div>컴퓨터공학과</div></th><th><div>전산과학과</div></th><th><div>컴퓨터공학부</div></th><th><div>비고</div></th></tr><tr><td><div>419.617 객체지향시스템특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.501 객체지향시스템특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.522 계산이론특론 3-3-0</div></td><td><div>325.778 고급계산이론 3-3-0</div></td><td><div>4190.502 계산이론특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div><br></div></td><td><div>325.774 고속통신특론 3-3-0</div></td><td><div>4190.503 고속통신특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.507 컴퓨터그래픽특론 3-3-0</div></td><td><div>325.777 고급컴퓨터그래픽스 3-3-0</div></td><td><div>4190.504 그래픽스특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.502 대규모집적회로특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.505 대규모집적회로특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.516 데이타베이스관리특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.506 데이타베이스특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.506 데이타통신특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.507 데이타통신특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.505 마이크로프로세서응용특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.508 마이크로프로세서응용특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.619 멀티미디어특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.509 멀티미디어특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.515 소프트웨어공학특론 3-3-0</div></td><td><div><br></div></td><td><div>4190.510 소프트웨어공학특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.514 알고리즘특론 3-3-0</div></td><td><div>325.557 알고리즘이론 3-3-0</div></td><td><div>4190.511 알고리즘특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div><br></div></td><td><div><br></div></td><td><div>4190.512 암호학특론 3-3-0</div></td><td><div>신설</div></td></tr><tr><td><div>419.509 운영체계특론 3-3-0</div></td><td><div>325.553 고급운영조직론 3-3-0</div></td><td><div>4190.513 운영체제특론 3-3-0</div></td><td><div><br></div></td></tr><tr><td><div>419.618 인간-컴퓨터 인터페이스특론 3-3-0</div></td><td><div><br></div',
  },
];

/* 연구 */

export const researchGroupsData: ResearchGroups = {
  description:
    '세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터관련 주요 학회에서 국제학술지 편집위원, 국제학술회의 위원장, 기조연설자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.',
  groups: [
    {
      name: '그래픽스 및 사람 중심 컴퓨팅',
      id: 0,
      description:
        '<p><strong>사람 중심의 시각기반 컴퓨팅 기술</strong><br>​컴퓨터 그래픽스와 HCI 기술은 사람과 컴퓨터 간의 원활한 소통을 추구한다. 현대 사회의 수많은 복잡한 문제들이 적절한 시각화와 사람의 뛰어난 시각 인지 능력에 기대어 그 해결에 실마리를 찾아낼 수 있다. 사람 중심의 시각기반 컴퓨터 기술은 사람에게 편리한 컴퓨터, 컴퓨터 계산에 있어서 사람의 능력 활용, 궁극적으로는 사람과 컴퓨터의 협력을 추구한다. 보다 구체적으로는 형상 모델링, 다차원 정보 가시화, 영상처리/분석, 동작분석 및 합성, 대화형 아바타 제어, 지능형 가상 캐릭터, 사용자 인터페이스 디자인 및 정보시각화 연구 를 수행하고 있다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/EditingDynamicMotions.png?itok=Rnzfu9LI',
      labs: [
        { id: 17, name: '운동 연구실' },
        { id: 19, name: '인간 중심 컴퓨터 시스템 연구실' },
        { id: 23, name: '지능형 동작 연구실' },
        { id: 26, name: '컴퓨터 그래픽스 및 이미지 처리 연구실' },
        { id: 32, name: '휴먼-컴퓨터 인터액션 연구실' },
      ],
    },
    {
      name: '네트워크',
      id: 1,
      description:
        '<p>​<strong>미래 인터넷이 열어갈 소통과 교류의 미래 세상</strong><br>​인터넷, 무선 네트워크, 데이터 센터 네트워크, 온라인 소셜 네트워크를 포함한 모든 네트워크의 프로토콜과 알고리즘을 연구 개발하고 있다. 또한 인터넷 보안과 프라이버시 주제도 최근 연구하고 있다. 구체적으로, 인터넷의 구조 설계, 인공지능 기술의 네트워킹 최적화 적용, 네트워크 가상화 기술 개발, 이동/무선통신의 자원관리, IoT 통신 프로토콜 및 IoT 시스템 개발, 통신 트래픽 분석, 블록체인, 인터넷 인증, 프라이버시 보호 기술, 실내 측위 등 미래의 통신과 인터넷 서비스를 선도할 핵심기술 개발에 집중하고 있다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/7528792_s.jpg?itok=yMuzuuyF',
      labs: [
        { id: 14, name: '암호 및 프라이버시 연구실' },
        { id: 18, name: '이동 컴퓨팅 및 통신 연구실' },
        { id: 20, name: '인터넷 융합 및 보안 연구실' },
      ],
    },
    {
      name: '데이터베이스 및 빅데이터',
      id: 2,
      description:
        '<p>​<strong>빅데이터에서 가치를 추출하는 연구</strong><br>​본 연구 그룹은 빅데이터, 데이터베이스, 데이터 마이닝, 기계 학습 및 딥러닝에 관한 연구를 수행하고 있다. 주요 연구 주제로 기계 학습 성능 향상을 위한 DBMS Support, 다양한 데이터베이스 응용을 위한 데이터 관리 기법 및 저장 기법, 데이터 마이닝, 정보 검색, 추천 시스템, 자연어 처리, 딥러닝, 웹/소셜네트워크 등의 그래프 분석, 경량 및 자동 기계 학습, 금융 AI 등이 있다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/5648183_s.jpg?itok=w6kQFKfj',
      labs: [
        { id: 0, name: '데이터 마이닝 연구실' },
        { id: 1, name: '데이터베이스 시스템 연구실' },
        { id: 6, name: '빅데이터 분석 연구실' },
        { id: 22, name: '지능형 데이터 시스템 연구실' },
      ],
    },
    {
      name: '시스템 소프트웨어 및 분산시스템',
      id: 3,
      description:
        '<p>​<strong>빅데이터에서 가치를 추출하는 연구</strong><br>​본 연구 그룹은 빅데이터, 데이터베이스, 데이터 마이닝, 기계 학습 및 딥러닝에 관한 연구를 수행하고 있다. 주요 연구 주제로 기계 학습 성능 향상을 위한 DBMS Support, 다양한 데이터베이스 응용을 위한 데이터 관리 기법 및 저장 기법, 데이터 마이닝, 정보 검색, 추천 시스템, 자연어 처리, 딥러닝, 웹/소셜네트워크 등의 그래프 분석, 경량 및 자동 기계 학습, 금융 AI 등이 있다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/898646_s.jpg?itok=Kuw3oZgk',
      labs: [
        { id: 4, name: '분산시스템 연구실' },
        { id: 9, name: '소프트웨어 플랫폼 연구실' },
        { id: 11, name: '시스템 소프트웨어 및 구조 연구실' },
        { id: 24, name: '천둥 연구실' },
        { id: 27, name: '컴퓨터 시스템 및 플랫폼 연구실' },
      ],
    },
    {
      name: '이론 및 금융공학',
      id: 4,
      description:
        '<p>​<strong>이론과 실제가 만나는 연구</strong><br>​컴퓨터이론은 컴퓨터공학의 기초학문으로서 효율적인 알고리즘 개발, NP완전 개념, 현대 암호학 이론 등으로 컴퓨터공학 발전에 근본적인 기여를 하여 왔다. 우리 연구그룹에서는 기본적으로 효율적인 알고리즘 개발에 대해 연구한다. 특히, 빅데이터 분석 알고리즘, 멀티코어와 캐시 구조에 적합한 실용적인 알고리즘, 유전 알고리즘에 대한 연구를 수행하고 있고, 보안 및 금융공학 등 응용분야에 활용되는 연구를 하고 있다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/20080224114352%21Euclidean_algorithm_running_time_X_Y.png?itok=p4IqJvwi',
      labs: [
        { id: 25, name: '최적화 및 금융공학 연구실' },
        { id: 28, name: '컴퓨터이론 및 응용 연구실' },
      ],
    },
    {
      name: '인공지능',
      id: 5,
      description:
        '<p>​<strong>인간처럼 학습하는 컴퓨터</strong><br>​인공지능은 사람의 인지, 사고, 기억, 학습을 모사함으로써 효율적으로 문제를 해결하는 방식을 연구하는 컴퓨터공학의 한 분야이다. 현재 머신러닝이론, 컴퓨터 시각, 텍스트마이닝, 비디오분석, 추천 에이전트, 뇌신경망 분석, 생태계 모델링 등 다양한 이론 및 응용 연구를 수행하고 있다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/3d-robots-by-franz-steiner%20%2810%29.jpg?itok=fZljbcZq',
      labs: [
        { id: 2, name: '머신러닝 연구실' },
        { id: 3, name: '바이오지능 연구실' },
        { id: 5, name: '비주얼 컴퓨팅 연구실' },
        { id: 7, name: '생물정보 및 생명정보 연구실' },
        { id: 10, name: '시각 및 학습 연구실' },
        { id: 16, name: '언어 및 데이터지능 연구실' },
      ],
    },
    {
      name: '컴퓨터구조 및 임베디드 시스템',
      id: 6,
      description:
        '<p>​<strong>스마트 임베디드 시스템이 지배하는 미래</strong><br>​앞으로의 컴퓨팅은 책상위에 놓여 있는 PC에 그치지 않고, 스마트폰, 자동차, 항공기, 도로, 건물, 교량 등 우리 생활 곳곳에 내재되어 편리함과 안전함을 제공하게 된다. 이를 위해서는 컴퓨팅, 메모리, 배터리 용량이 제한되어 있는 임베디드 컴퓨터에 지능형 서비스를 최적화하여 구현하는 것이 핵심 기술이 된다. 임베디드 시스템 연구그룹은 컴퓨터 SW 뿐아니라, CPU 구조, 메모리 구조, 멀티코어 등의 컴퓨터 HW적 특성을 고려하여 최적화된 시스템 설계를 하는 다양한 연구를 진행하고 있다. 이러한 연구는 앞으로 더욱 각광 받게될 인공지능 기술이 우리 일상 생활 곳곳으로 내재화되는 것을 가능하게 할 것이다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/6686919_s.jpg?itok=o5-MFisf',
      labs: [
        { id: 12, name: '실시간 유비쿼터스 시스템 연구실' },
        { id: 13, name: '아키텍처 및 코드 최적화 연구실' },
        { id: 15, name: '양자정보 및 양자컴퓨팅 연구실' },
        { id: 21, name: '임베디드 시스템 연구실' },
        { id: 29, name: '컴퓨팅 메모리 구조 연구실' },
        { id: 30, name: '통합설계 및 병렬 처리 연구실' },
      ],
    },
    {
      name: '프로그래밍 시스템 및 SW공학',
      id: 7,
      description:
        '<p>​<strong>SW 원천기술, 즐거운 프로그래밍 신세계를 여는 핵심 엔진</strong><br>​소프트웨어의 현재 기술은 미개하다. 미래에는 지금과 같은 수준으로 소프트웨어가 만들어지지 않을 것이다. 소프트웨어 개발에 사용하는 언어는 나날이 상위의 수준으로 올라 갈 것이고, 소프트웨어 개발을 돕는 도구들은 엄밀한 논리의 정교한 지능을 가지고 프로그래머들을 편하게 할 것이다. 따라서 오류 없이 작동할 소프트웨어를 개발하는 비용은 나날이 줄어들 것이고, 소프트웨어 개발자는 밤샘하는 손기술의 고역에서 벗어나 크고 높은 논리의 기획자로 변모할 것이다. 우리는 이러한 미래를 가능하게 하는 연구를 진행한다. 프로그래밍 언어 이론 및 시스템 기술, 정적 분석 이론 및 응용 기술, 소프트웨어 개발 도구 기술, 자동 검증 기술 등을 연구한다.​</p>',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--research_group/caml_0.png?itok=i0epDoxv',
      labs: [
        { id: 8, name: '소프트웨어 원리 연구실' },
        { id: 31, name: '프로그래밍 연구실' },
      ],
    },
  ],
};

export const researchCentersData: ResearchCenter[] = [
  {
    id: 0,
    name: '컴퓨터 연구소',
    description:
      '<p>서울대학교 컴퓨터연구소는 국내 여러 대학 간의 공동 연구와 산학 협동 체제 구축을 통한 컴퓨터 관련 신기술 및 미래지향적인 컴퓨터 개발 능력의 확보와 전문 연구 인력의 양성을 목적으로 본교를 비롯한 전국 20여 개 대학의 컴퓨터 관련 학과가 참여한 가운데 1989년에 설립되었다. 컴퓨터분야 최첨단 기술의 연구 개발과 전국의 각 대학, 산업체 및 연구소 간의 상호 협력적 연구의 구심점 역할을 하고 있으며, 정보기술(IT)과 관련하여 고급 인력 양성과 계속교육 등을 통하여 국내 컴퓨터 산업의 성장에도 크게 기여하고 있다. 차세대 컴퓨터 개발을 위한 선진 기술의 토착화 및 세계적인 첨단 기술의 선도를 위해 컴퓨터공학 및 컴퓨터과학의 제 분야에 대한 연구를 수행하고 있다.​</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%B0%EA%B5%AC%EC%86%8C.jpg?itok=ZMrQExO0',
    websiteURL: 'https://ict.snu.ac.kr/',
  },
  {
    id: 1,
    name: '컴퓨터 미래 인재 양성 사업단',
    description:
      '<p>서울대학교 컴퓨터미래인재양성단(BK21)은 글로벌 리더형 고급 컴퓨터 인재를 육성하기 위한 교육 비전 아래, 혁신적이고 탁월한 학문 가치를 창출할 수 있는 인재를 체계적으로 양성하기 위한 목적으로 설립되었다. 우리 사업단은 서울대학교 공과대학 컴퓨터공학부의 교수, 대학원생 그리고 신진연구인력 등, 구성원을 위한 연구 역량 강화 프로그램을 운영하고 있으며, 학술논문발표, 신기술 개발 및 다양한 산학협력 등 우수한 성과를 바탕으로, 국내외 컴퓨터공학 및 컴퓨터과학 제 분야의 첨단기술을 선도하고 있다. 우리 사업단은 IT 산업의 원동력이 되는 최고급 소프트웨어 전문가, 미래 컴퓨터 기술을 선도할 창의적 차세대 연구자, 컴퓨터 신산업을 창출할 사업가를 지속적으로 양성하기 위하여, 폭넓고 유연한 인재양성 사업을 수행하고 있다.</p><p>■ 장학금 지원프로그램: 한국연구재단/BK21플러스사업/미래기반 창의인재양성 사업</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/bk.png?itok=dZ1PxwkX',
    websiteURL: 'https://bkcse.snu.ac.kr/', // 삭제된 주소인 것 같음
  },
  {
    id: 2,
    name: 'AI 연구원',
    description:
      '<p>​서울대학교 AI 연구원은 인공지능 및 딥러닝 관련 혁신 연구의 중심지로, 차세대 인공지능 기술 분야에서 세계를 이끄는 연구자들이 모여 대한민국과 전 세계의 과학·기술·경제 흐름을 바꾸는 획기적인 연구를 수행하는 것을 목표로 한다. 연구자들은 컴퓨터 비전, 음성 인식, 자연어 처리, 로봇 공학, 인공지능 비서, 인공 신경망, 머신러닝 소프트웨어 및 하드웨어, 대용량 병렬 처리, 분산 시스템, 컴퓨터 그래픽스, 확률 추론, 베이즈 통계, 통계 물리학, 정보 이론, 뉴로모픽 컴퓨팅, 뇌과학, 인지 과학 등 다양한 분야에서 활약하는 전문가들로 이루어져 있으며, 산·학·연이 서로 협력하여 센터의 중장기 비전을 실현하는 데에 힘쓰고 있다.​<br></p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/20210824_100327_0.png?itok=-wn7SKLk',
    websiteURL: 'https://aiis.snu.ac.kr:55568/',
  },
];

export const facultyList: SimpleFaculty[] = [
  {
    id: 0,
    name: '강유',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B0%95%EC%9C%A0.png?itok=MB8iS-5w',
    academicRank: '교수',
    phone: '(02) 880-7254',
    email: 'ukang@snu.ac.kr',
    labId: 0,
    labName: '데이터 마이닝 연구실',
    status: 'ACTIVE',
  },
  {
    id: 1,
    name: '권태경',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/_CID_image001_jpg_01D35F87_52DDAF00_CID_image001.jpg?itok=EqJJj0NN',
    academicRank: '교수',
    phone: '(02) 880-9105',
    email: 'tk@mmlab.snu.ac.kr',
    labId: 20,
    labName: '인터넷 융합 및 보안 연구실',
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: '김건희',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/GunheeKim-20150115.jpg?itok=mfClJ_bq',
    academicRank: '부교수',
    phone: '(02) 880-7300',
    email: 'gunhee@snu.ac.kr',
    labId: 10,
    labName: '시각 및 학습 연구실',
    status: 'ACTIVE',
  },
  {
    id: 3,
    name: '김선',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B9%80%EC%84%A0%EA%B5%90%EC%88%98%EB%8B%98_20171102.jpg?itok=v2fmuFHJ',
    academicRank: '교수',
    phone: '(02) 880-7280',
    email: 'sunkim.bioinfo@snu.ac.kr',
    labId: 7,
    labName: '생물정보 및 생명정보 연구실',
    status: 'ACTIVE',
  },
  {
    id: 4,
    name: '김지홍',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B9%80%EC%A7%80%ED%99%8D%20%EA%B5%90%EC%88%98%EB%8B%98_30_0.jpg?itok=J28d1qPE',
    academicRank: '교수',
    phone: '(02) 880-8792',
    email: 'kjihong@snu.ac.kr',
    labId: 21,
    labName: '임베디드 시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 5,
    name: '김진수',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%82%AC%EC%A7%84-%EB%B0%98%EB%AA%85%ED%95%A8.jpg?itok=beFMQWAP',
    academicRank: '교수(교무부학부장)',
    phone: '(02) 880-7302',
    email: 'jinsoo.kim@snu.ac.kr',
    labId: 11,
    labName: '시스템 소프트웨어 및 구조 연구실',
    status: 'ACTIVE',
  },
  {
    id: 6,
    name: '김태현',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B9%80%ED%83%9C%ED%98%84%EA%B5%90%EC%88%98%EB%8B%98.jpg?itok=KcXndMTI',
    academicRank: '부교수',
    phone: '(02) 880-1725',
    email: 'taehyun@snu.ac.kr',
    labId: 15,
    labName: '양자정보 및 양자컴퓨팅 연구실',
    status: 'ACTIVE',
  },
  {
    id: 7,
    name: '김형주',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B9%80%ED%98%95%EC%A3%BC%EA%B5%90%EC%88%98%EB%8B%98_20210208.jpg?itok=VWpdCb2h',
    academicRank: '교수',
    phone: '(02) 880-1826',
    email: 'hjk@snu.ac.kr',
    labId: 6,
    labName: '빅데이터 분석 연구실',
    status: 'ACTIVE',
  },
  {
    id: 8,
    name: '문병로',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EB%AC%B8%EB%B3%91%EB%A1%9C%20%EA%B5%90%EC%88%98%EB%8B%98_17_0.jpg?itok=Hdk36H05',
    academicRank: '교수',
    phone: '(02) 880-8793',
    email: 'moon@snu.ac.kr',
    labId: 25,
    labName: '최적화 및 금융공학 연구실',
    status: 'ACTIVE',
  },
  {
    id: 9,
    name: '문봉기',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/PROF.BONGKIMOON2.jpg?itok=irM2dneh',
    academicRank: '교수',
    phone: '(02) 880-1842',
    email: 'bkmoon@snu.ac.kr',
    labId: 1,
    labName: '데이터베이스 시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 10,
    name: '박근수',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/thumb_kpark.jpg?itok=hI49Mbtk',
    academicRank: '교수',
    phone: '(02) 880-8381',
    email: 'kpark@thoery.snu.ac.kr',
    labId: 28,
    labName: '컴퓨터이론 및 응용 연구실',
    status: 'ACTIVE',
  },
  {
    id: 11,
    name: '서진욱',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/_CID_ii_k0rwf03i0_CID_profile-fig-1.png?itok=Wl_uJGVz',
    academicRank: '교수',
    phone: '(02) 880-1761',
    email: 'jseo@snu.ac.kr',
    labId: 32,
    labName: '휴먼-컴퓨터 인터액션 연구실',
    status: 'ACTIVE',
  },
  {
    id: 12,
    name: '송용수',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/profile.jpeg?itok=fdlAU2Px',
    academicRank: '조교수',
    phone: '(02) 880-7314',
    email: 'y.song@snu.ac.kr',
    labId: 14,
    labName: '암호 및 프라이버시 연구실',
    status: 'ACTIVE',
  },
  {
    id: 13,
    name: '송현오',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%86%A1%ED%98%84%EC%98%A4%20%EA%B5%90%EC%88%98.png?itok=BpERbaxx',
    academicRank: '부교수',
    phone: '(02) 880-7272',
    email: 'hyunoh@snu.ac.kr',
    labId: 2,
    labName: '머신러닝 연구실',
    status: 'ACTIVE',
  },
  {
    id: 14,
    name: '신영길',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%8B%A0%EC%98%81%EA%B8%B8.jpg?itok=3gQ19Ca6',
    academicRank: '교수',
    phone: '(02) 880-6757',
    email: 'yshin@snu.ac.kr',
    labId: 26,
    labName: '컴퓨터 그래픽스 및 이미지 처리 연구실',
    status: 'ACTIVE',
  },
  {
    id: 15,
    name: '엄현상',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%97%84%ED%98%84%EC%83%81%20%EA%B5%90%EC%88%98%EB%8B%98_1%20%283%29_0.jpg?itok=38GFePpq',
    academicRank: '교수',
    phone: '(02) 880-6755',
    email: 'hseom@snu.ac.kr',
    labId: 4,
    labName: '분산시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 16,
    name: '버나드 에거',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EB%B2%84%EB%82%98%EB%93%9C%EC%97%90%EA%B1%B0_0.jpg?itok=GJRQE_dL',
    academicRank: '교수',
    phone: '(02) 880-1843',
    email: 'bernhard@snu.ac.kr',
    labId: 27,
    labName: '컴퓨터 시스템 및 플랫폼 연구실',
    status: 'ACTIVE',
  },
  {
    id: 17,
    name: '염헌영',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%97%BC%ED%97%8C%EC%98%81%20%20%EA%B5%90%EC%88%98%EB%8B%98_28%20%2811%29_0.jpg?itok=ENsd23cC',
    academicRank: '교수',
    phone: '(02) 880-5583',
    email: 'yeom@snu.ac.kr',
    labId: 4,
    labName: '분산시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 18,
    name: '원정담',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9B%90%EC%A0%95%EB%8B%B4%203x4_0.jpg?itok=V-QZUyQs',
    academicRank: '조교수',
    phone: '(02) 880-1846',
    email: 'nonaxis@snu.ac.kr',
    labId: 23,
    labName: '지능형 동작 연구실',
    status: 'ACTIVE',
  },
  {
    id: 19,
    name: '유승주',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9C%A0%EC%8A%B9%EC%A3%BC_%EA%B3%A0%ED%95%B4%EC%83%81%EB%8F%84_small.jpg?itok=WJvfYfE6',
    academicRank: '교수',
    phone: '(02) 880-9392',
    email: 'sungjoo.yoo@gmail.com',
    labId: 29,
    labName: '컴퓨팅 메모리 구조 연구실',
    status: 'ACTIVE',
  },
  {
    id: 20,
    name: '이광근',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/________-______.jpg?itok=3OAJgzKL',
    academicRank: '교수(학부장)',
    phone: '(02) 880-1857',
    email: 'kwang@ropas.snu.ac.kr',
    labId: 31,
    labName: '프로그래밍 연구실',
    status: 'ACTIVE',
  },
  {
    id: 21,
    name: '이상구',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/SGLee.jpg?itok=U1SZGpDF',
    academicRank: '교수',
    phone: '(02) 880-5357',
    email: 'sglee@snu.ac.kr',
    labId: 22,
    labName: '지능형 데이터 시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 22,
    name: '이영기',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/yk-photo.jpg?itok=RjHbuOmx',
    academicRank: '부교수',
    phone: '(02) 880-1726',
    email: 'youngkilee@snu.ac.kr',
    labId: 19,
    labName: '인간 중심 컴퓨터 시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 23,
    name: '이재욱',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9D%B4%EC%9E%AC%EC%9A%B1%20%EA%B5%90%EC%88%98%EB%8B%98.png?itok=Xf6pr9GB',
    academicRank: '교수',
    phone: '(02) 880-1834',
    email: 'jaewlee@snu.ac.kr',
    labId: 13,
    labName: '아키텍처 및 코드 최적화 연구실',
    status: 'ACTIVE',
  },
  {
    id: 24,
    name: '이재진',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9D%B4%EC%9E%AC%EC%A7%84_0.jpg?itok=XzA58-Gw',
    academicRank: '교수',
    phone: '(02) 880-1863',
    email: 'jaejin@snu.ac.kr',
    labId: 24,
    labName: '천둥 연구실',
    status: 'ACTIVE',
  },
  {
    id: 25,
    name: '이제희',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/jehee20210813.jpg?itok=VsuQmNU3',
    academicRank: '교수',
    phone: '(02) 880-1845',
    email: 'jaewlee@mrl.snu.ac.kr',
    labId: 17,
    labName: '운동 연구실',
    status: 'ACTIVE',
  },
  {
    id: 26,
    name: '이창건',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9D%B4%EC%B0%BD%EA%B1%B4_%ED%8C%9C%ED%94%8C%EB%A0%9B.jpg?itok=fPUQShUX',
    academicRank: '교수',
    phone: '(02) 880-1862',
    email: 'cglee@snu.ac.kr',
    labId: 12,
    labName: '실시간 유비쿼터스 시스템 연구실',
    status: 'ACTIVE',
  },
  {
    id: 27,
    name: '장병탁',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9E%A5%EB%B3%91%ED%83%81%20%EA%B5%90%EC%88%98%EB%8B%98_22.jpg?itok=zR9V6Z7Z',
    academicRank: '교수',
    phone: '(02) 880-7254',
    email: 'btzhang@bi.snu.ac.kr',
    labId: 3,
    labName: '바이오지능 연구실',
    status: 'ACTIVE',
  },
  {
    id: 28,
    name: '전병곤',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/bgchun_2021.jpg?itok=RbQi0Qx0',
    academicRank: '교수(학생.연구부학부장)',
    phone: '(02) 880-1928',
    email: 'bgchun@snu.ac.kr',
    labId: 9,
    labName: '소프트웨어 플랫폼 연구실',
    status: 'ACTIVE',
  },
  {
    id: 29,
    name: '전화숙',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%A0%84%ED%99%94%EC%88%99_0.jpg?itok=ATbB8R7d',
    academicRank: '교수',
    phone: '(02) 880-1839',
    email: 'wsjeon@snu.ac.kr',
    labId: 18,
    labName: '이동 컴퓨팅 및 통신 연구실',
    status: 'ACTIVE',
  },
  {
    id: 30,
    name: '주한별',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%A3%BC%ED%95%9C%EB%B3%84%EA%B5%90%EC%88%98%EB%8B%98.jpeg?itok=2SIfQOB0',
    academicRank: '조교수',
    phone: '(02) 880-7293',
    email: 'hbjoo@snu.ac.kr',
    labId: 5,
    labName: '비주얼 컴퓨팅 연구실',
    status: 'ACTIVE',
  },
  {
    id: 31,
    name: '하순회',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%ED%95%98%EC%88%9C%ED%9A%8C%20%EA%B5%90%EC%88%98%EB%8B%98%20%283%29_0.jpg?itok=_gzD3jsT',
    academicRank: '교수',
    phone: '(02) 880-8382',
    email: 'sha@iris.snu.ac.kr',
    labId: 30,
    labName: '통합설계 및 병렬 처리 연구실',
    status: 'ACTIVE',
  },
  {
    id: 32,
    name: '허충길',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/1.%20%ED%97%88%EC%B6%A9%EA%B8%B8%EA%B5%90%EC%88%98%EB%8B%9820191206.png?itok=V0Ictg_k',
    academicRank: '교수',
    phone: '(02) 880-7254',
    email: 'gil.hur@sf.snu.ac.kr',
    labId: 8,
    labName: '소프트웨어 원리 연구실',
    status: 'ACTIVE',
  },
  {
    id: 33,
    name: '황승원',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/2021.3%EC%9B%94%20%EB%B6%80%EC%9E%84%EC%98%88%EC%A0%95_%ED%99%A9%EC%8A%B9%EC%9B%90%20%EA%B5%90%EC%88%98%EB%8B%98.jpg?itok=V1eW61q1',
    academicRank: '교수',
    phone: '(02) 880-7316',
    email: 'seungwonh@snu.ac.kr',
    labId: 16,
    labName: '언어 및 데이터지능 연구실',
    status: 'ACTIVE',
  },
  {
    id: 34,
    name: '장석영',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9E%A5%EC%84%9D%EC%98%81%ED%8A%B9%EC%9E%84%EA%B5%90%EC%88%98.png?itok=Lp1vS9fa',
    academicRank: '특임교수',
    status: 'VISITING',
  },
];

// 팩스 넣어야되나싶어서 중간부터 안넣음 ^^,,,
export const faculties: Faculty[] = [
  {
    ...facultyList[0],
    office: '301동 502호',
    website: 'http://datalab.snu.ac.kr/~ukang',
    educations: `카네기멜론대학교 Computer Science Department 박사 (2012)
카네기멜론대학교 Information Technology 석사 (2009)
서울대학교 컴퓨터공학과 학사 (2003)`.split('\n'),
    researchAreas: `딥러닝, 기계 학습
그래프/텐서 분석
추천 시스템
금융 인공 지능`.split('\n'),
    careers: `2015.09. – 현재: 전임교수, 서울대학교 컴퓨터공학부
2013 – 2015.08.: 조교수, KAIST 전산학부
2012.07. – 2012.12.: Postdoctoral Fellow, Carnegie Mellon University
2004 – 2007: Researcher, Korea Telecom`.split('\n'),
  },
  {
    ...facultyList[1],
    office: '301동 503호',
    fax: '(02) 872-2045',
    website: 'http://mmlab.snu.ac.kr/~tk/',
    educations: `서울대학교 컴퓨터공학 박사 (2000)
서울대학교 컴퓨터공학 석사 (1995)
서울대학교 컴퓨터공학 학사 (1993)`.split('\n'),
    researchAreas: `Wireless networks: ad-hoc network, sensor network, multimedia streaming
Wireless technologies convergence
Mobile networks: mobility management, peer-to-peer mobility
Ubiquitous/mobile computing
Internet: active queue management, peer-to-peer`.split('\n'),
  },
  {
    ...facultyList[2],
    office: '302동 327호',
    website: 'http://vision.snu.ac.kr/',
    educations: `카네기멜론대학교 Computer Science Department 박사 (2013)
카네기멜론대학교 The Robotics Institute 석사 (2008)
한국과학기술원 기계공학 석사 (2001)
한국과학기술원 기계공학 학사 (1999)`.split('\n'),
    researchAreas: `Computer Vision, Machine Learning, Natural Language Processing`.split('\n'),
    careers: `2019.03. – 현재: 부교수, 서울대학교 컴퓨터공학부
2015 – 2019.02.: 조교수, 서울대학교 컴퓨터공학부
2013 – 2014: Disney Research, Postdoctoral Researcher
2011: Visiting Student, Computer Science Department, Stanford University
2009: Visiting Student, CSAIL, MIT
2008 – 2009: Research Intern, Honda Research Institute
2008: Intel/CMU Summer Fellow, Intel Research
2005 – 2006: Visiting Researcher, The Robotics Institute, Carnegie Mellon University
2001 – 2006: 연구원, 한국과학기술연구원 지능로봇연구센터`.split('\n'),
  },
  {
    ...facultyList[3],
    office: '301동 421호',
    website: 'http://biohealth.snu.ac.kr',
    educations: `아이오와대학교 컴퓨터과학 박사 (1997)
한국과학기술원 컴퓨터과학 석사 (1987)
서울대학교 계산통계학 학사 (1985)`.split('\n'),
    careers: `2014.09. – 현재: 교수, 서울대학교 컴퓨터공학부
2011 – 2014.08.: 부교수, 서울대학교 컴퓨터공학부
2011 – 현재: 서울대학교 생물정보연구소 소장
2009 – 2011: 미국 인디애나대학교 School of Informatics and Computing 학과장
2001 – 2011: 미국 인디애나대학교 School of Informatics and Computing 조교수, 부교수
1998 – 2001: 미국 듀퐁중앙연구소 선임 연구원`.split('\n'),
  },
  {
    ...facultyList[4],
    office: '302동 328호',
    website: 'http://cares.snu.ac.kr',
    educations: `워싱턴 대학교 전산과학 및 공학 박사 (1995)
워싱턴 대학교 전산과학 석사 (1988)
서울대학교 계산통계학과 학사(1986)`.split('\n'),
    researchAreas: `플래시 메모리 시스템/소프트웨어 최적화
스마트 디바이스 최적화
멀티프로세서 시스템/소프트웨어 최적화`.split('\n'),
    careers: `1995 – 1997: 선임연구원, Texas Instruments DSP R&D 연구소`.split('\n'),
  },
  {
    ...facultyList[5],
    office: '301동 504호',
    website: 'http://csl.snu.ac.kr/',
    educations: `서울대학교 컴퓨터공학 박사 (1999)
서울대학교 컴퓨터공학 석사 (1993)
서울대학교 컴퓨터공학 학사 (1991)`.split('\n'),
    researchAreas: `운영체제
스토리지 시스템
병렬 및 분산 컴퓨팅
내장형 시스템`.split('\n'),
    careers: `2018. 3. – 현재: 서울대학교 컴퓨터공학부 교수
2008. 9. – 2018. 2.:성균관대학교 컴퓨터공학과 교수
2002. 3. – 2008. 8.: KAIST 전산학부 부교수
1999. 9. – 2002. 2.: 한국전자통신연구원 (ETRI), 선임연구원`.split('\n'),
  },
  {
    ...facultyList[6],
    office: '301동 407호',
    fax: '(02) 886-7589',
    educations: `Massachusetts Institute of Technology (MIT) 물리학 박사 (2008)
서울대학교 제어계측 석사 (1997)
서울대학교 컴퓨터공학 학사 (1995)`.split('\n'),
    researchAreas: `Quantum cryptography
Quantum algorithms
Development of quantum computer system`.split('\n'),
    careers: `2018. 9. – 현재: 부교수, 서울대학교 컴퓨터공학부
2011 – 2018: Project Leader, SK텔레콤 Quantum Tech. Lab
2008 – 2011: Postdoctoral Researcher, Duke University Electrical and Computer Engineering
1997 – 2000: 강사 및 전임강사, 공군사관학교 전산통계학과`.split('\n'),
  },
  {
    ...facultyList[7],
    office: '301동 406호',
    fax: '(02) 882-0269',
    educations: `텍사스 대학교 오스틴 컴퓨터공학 박사 (1988)
텍사스 대학교 오스틴 컴퓨터공학 석사 (1985)
서울대학교 컴퓨터공학 학사 (1982)`.split('\n'),
    researchAreas: `온톨로지 변경 관리
태그 시각화
태그 추천`.split('\n'),
  },
  {
    ...facultyList[8],
    office: '302동 430호',
    fax: '(02) 871-4912',
    website: 'http://soar.snu.ac.kr/~moon/',
    educations: `펜실베이니아 주립 대학교 컴퓨터공학 박사 (1994)
한국과학기술원 컴퓨터공학부 석사 (1987)
서울대학교 컴퓨터공학 학사 (1985)`.split('\n'),
    researchAreas: `최적화 이론 및 응용
유전 알고리즘
금융 공학`.split('\n'),
  },
  {
    ...facultyList[9],
    office: '301동 402호',
    fax: '(02) 886-7589',
    website: 'http://dbs.snu.ac.kr/',
    educations: `메릴랜드대학교 칼리지 파크 컴퓨터과학 박사 (1996)
서울대학교 전자계산기공학과 석사 (1985)
서울대학교 전자계산기공학과 학사 (1983)`.split('\n'),
    researchAreas: `High performance database systems
Parallel and distributed databases
XML indexing and streaming
Spatio-temporal databases
`.split('\n'),
    careers: `2013 – 현재: 교수, 서울대학교 컴퓨터공학부
1997 – 2013: 조교수/부교수/정교수, University of Arizona, U.S.A.
2005 – 2010: 편집위원, IEEE Transactions on Knowledge and Data Engineering
1999 – 2003: CAREER Award, U.S. National Science Foundation
1985 – 1990: 연구원, 삼성전자 및 삼성종합기술원`.split('\n'),
  },
  {
    ...facultyList[10],
    office: '301동 405호',
    fax: '(02) 886-7589',
    website: 'http://theory.snu.ac.kr/~kpark/',
    educations: `컬럼비아 대학교 컴퓨터공학 박사 (1992)
서울대학교 컴퓨터공학 석사 (1985)
서울대학교 컴퓨터공학 학사 (1983)`.split('\n'),
    researchAreas: `바이오 알고리즘
암호학
웹 검색엔진`.split('\n'),
    careers: `2005: 프랑스 Marne-la-Vallee 대학교 방문교수
1995: 호주 Curtin 대학교 방문연구원
1991 – 1993: 영국 런던대학교 King's College 조교수`.split('\n'),
  },
  {
    ...facultyList[11],
    office: '302동 431호',
    website: 'http://hcil.snu.ac.kr/people/jinwook-seo',
    educations: `메릴랜드 대학교 컴퓨터공학 박사 (2005)
서울대학교 컴퓨터공학 석사 (1997)
서울대학교 계산통계학과 전산과학전공 학사 (1995)`.split('\n'),
    researchAreas: `Human-Computer Interaction, Interaction Design, User Interface Design
Information Visualization, Visual Analytics
Biomedical Informatics`.split('\n'),
    careers: `2009 – 현재: 전임교수, 서울대 컴퓨터공학부
2006 – 2008: 조교수, Children's Research Institute & George Washington University School of Medicine
2005 – 2006: 연구원, Children's Research Institute
1997 – 2000: 교관/전임강사, 공군사관학교, 전산통계학과`.split('\n'),
  },
  {
    ...facultyList[12],
    office: '301동 501호',
    website: 'https://yongsoosong.github.io/',
    educations: `서울대학교 수리과학부 박사 (2018)
서울대학교 수리과학부 학사 (2012)`.split('\n'),
    researchAreas: `Cryptography
Privacy
Security`.split('\n'),
    careers: `2021. 03. – 현재: 전임교수, 서울대학교 컴퓨터공학부
2019. 01. – 2021. 02.: Senior Researcher, Cryptography and Privacy Research Group, Microsoft Research Redmond
2018. 01. – 2018. 12.: Postdoctoral Researcher, Dept. of Computer Science and Engineering, UC San Diego`.split(
      '\n',
    ),
  },
  {
    ...facultyList[13],
    office: '302동 326호',
    website: 'https://mllab.snu.ac.kr/hyunoh/',
    educations: `University of California, Berkeley, Computer Science 박사 (2014)
University of California, Berkeley, Computer Science 석사 (2013)
Stanford University, Mechanical engineering 석사 (2008)
한양대학교 기계공학 학사 (2006)`.split('\n'),
    researchAreas: `Machine learning
Optimization
Robotics
Artificial intelligence`.split('\n'),
    careers: `2017.09. – 현재: 전임교수, 서울대학교 컴퓨터공학부
2016.07. – 2017.08.: Google Research (Research Scientist)
2014.11. – 2016.07.: Stanford University (Postdoctoral fellow)
2013: INRIA Grenoble (Visiting researcher)
2013: IBM Research (Research intern)`.split('\n'),
  },
  {
    ...facultyList[14],
    office: '302동 329호',
    educations: `서던 캘리포니아 대학교 컴퓨터공학 박사 (1989)
서울대학교 컴퓨터공학 석사 (1984)
서울대학교 컴퓨터공학 학사 (1981)`.split('\n'),
    researchAreas: `의료영상처리
3차원 모델링
증강현실
볼륨 가시화`.split('\n'),
    careers: `1992.03 – 현재: 서울대학교 컴퓨터공학부 교수
1990.03 – 1992.02: 경북대학교 전자계산학과 조교수`.split('\n'),
  },
  {
    ...facultyList[15],
    office: '302동 324호',
    website: 'http://meslab.snu.ac.kr/~hseom/',
    educations: `메릴랜드 대학교 전산 박사 (2003)
메릴랜드 대학교 전산 석사 (1996)
서울대학교 계산통계학과 학사 (1992)`.split('\n'),
    researchAreas: `운영체제 소프트웨어 스택과 스토리지 디바이스 간의 정보 차이 메우기
분산 데이터 처리 프레임웍에서 중복되는 계산이나 데이터 제거하기
데이터 손실을 방지할 수 있는 결함 내성 소프트웨어 디자인 및 구현하기`.split('\n'),
    careers: `2017.3. – 현재: 서울대학교 교수
2012 – 2017.2.: 서울대학교 부교수
2005 – 2005 – 2011: 서울대학교 조교수
2005 – 2003 – 2005: 삼성전자 정보통신총괄 책임연구원`.split('\n'),
  },
  {
    ...facultyList[16],
    office: '301동 403호',
    website: 'http://csap.snu.ac.kr/bernhard',
    educations: `서울대학교 박사 (2008)
스위스 연방 공과대학교 (ETH Zürich) 석사 (2002)
스위스 연방 공과대학교 (ETH Zürich) 학사`.split('\n'),
    researchAreas: `Architecture, operating system and compiler interaction for embedded systems
OS/Compiler-issues for portable heterogeneous multi-core architectures
Coarse-grained reconfigurable architectures and compilers
Virtualization techniques for multicores/manycores
GPU performance estimation`.split('\n'),
  },
  {
    ...facultyList[17],
    office: '302동 321호',
    website: 'http://arirang.snu.ac.kr/~yeom/',
    educations: `텍사스 A&M 대학교 전산 박사 (1992)
텍사스 A&M 대학교 전산 석사 (1986)
서울대학교 계산통계학과 학사 (1984)`.split('\n'),
    researchAreas: `운영체제 소프트웨어 스택과 스토리지 디바이스 간의 정보 차이 메우기
분산 데이터 처리 프레임웍에서 중복되는 계산이나 데이터 제거하기
데이터 손실을 방지할 수 있는 결함 내성 소프트웨어 디자인 및 구현하기
`.split('\n'),
    careers: `2004 – 현재: 서울대학교 교수
1993 – 2003: 서울대학교 조교수.부교수`.split('\n'),
  },
  {
    ...facultyList[18],
    office: '302동 330호',
    website: 'https://sites.google.com/view/jungdam',
    educations: `서울대학교 컴퓨터공학 박사 (2017)
서울대학교 컴퓨터공학 학사 (2011)`.split('\n'),
    researchAreas: `Computer Graphics
Machine Learning
Biomechnics
Robotics
Animation
Motion Analysis and Synthesis
Motion Simulation and Control
Simulated-based Creature Modeling`.split('\n'),
    careers: `2023. 03. - 현재: 전임교수, 서울대학교 컴퓨터공학부
2019 - 2023.02: Research Scientist, Meta (Facebook) AI, Pittsburgh
2017.09 - 2019: 연수 연구원, 서울대학교 컴퓨터 연구소
2013: Research Intern, Disney Research Los Angeles`.split('\n'),
  },
  {
    ...facultyList[19],
    office: '302동 427호',
    website: 'http://cmalab.snu.ac.kr/',
    educations: `서울대학교 전기공학부 박사 (2000)
서울대학교 전자공학과 석사 (1995)
서울대학교 전자공학과 학사 (1992)`.split('\n'),
    researchAreas:
      `Memory subsystem architectures and software/hardware design optimization methods for mobile and server systems`.split(
        '\n',
      ),
    careers: `2015 – 현재: 서울대학교 컴퓨터공학부 교수
2012 – 2015: 포항공과대학교 부교수
2008 – 2012: 포항공과대학교 조교수
2004 – 2008: 삼성전자 S.LSI 수석연구원
2002 – 2004: TIMA 연구소 연구원
2001 – 2002: 서울대학교 반도체공동연구소 연구원
2000 – 2001: TIMA 연구소 연구원`.split('\n'),
  },
  {
    ...facultyList[20],
    office: '302동 428호',
    website: 'http://ropas.snu.ac.kr/~kwang/',
    educations: `University of Illinois at Urbana-Champaign 컴퓨터과학 박사 (1993)
University of Illinois at Urbana-Champaign 컴퓨터과학 석사 (1990)
서울대학교 계산통계학 학사 (1987)`.split('\n'),
    researchAreas: `Static program analysis
Static analysis for safe softwares
Programming systems application of static analysis technology
HOT (higher-order & typed) programming system`.split('\n'),
    careers: `2008 – 2015: 센터장, 소프트웨어무결점 연구센터 (교과부/한국연구재단 선도연구센터)
1998 – 2003: 단장, 프로그램분석시스템 연구단 (과기부/과학재단 창의연구단)
1995 – 2003: 조교수/부교수, KAIST 전산학과
1993 – 1995: 정규연구원, SW Principles Research Dept, Bell Labs.
2016: Research Scientist, Facebook
방문교수, Stanford (2017), MIT(2012,2008), CMU(2008), 파리고등사범학교(ENS Paris)(2016, 2002)`.split(
      '\n',
    ),
  },
  {
    ...facultyList[21],
    office: '301동 404호',
    website: 'http://ids.snu.ac.kr/site/members/M_Sang-goo_Lee.html',
    educations: `노스웨스턴 대학교 컴퓨터과학 박사 (1990)
노스웨스턴 대학교 컴퓨터과학 석사 (1987)
서울대학교 계산통계학과 학사 (1985)`.split('\n'),
    researchAreas: `Exploiting Concept Networks for Personalized Information Retrieval
uKnow: Product Review Summarization
KKMA: Korean Morpheme Analyzer
LifeLogOn: Lifelog Ontology
User Context Aggregation for Context-Aware Recommendation`.split('\n'),
    careers: `1990 – 1992: 선임연구원,EDS Research & Dev.
1989 – 1990: 전임강사,Univ. of Minnesota
2002 – 현재: 회장,한국전자거래학회`.split('\n'),
  },
  {
    ...facultyList[22],
    office: '301동 413호',
    website: 'http://youngkilee.blogspot.com/',
    educations: `KAIST Computer Science 박사 (2012)
KAIST Computer Science 학사 (2004)`.split('\n'),
    researchAreas: `Mobile and Ubiquitous Computing
Human Behavior and Context Sensing
Embedded Machine Learning & Deep Learning Systems
Computational Social Science`.split('\n'),
    careers: `2018. 9. – 현재: 전임교수, 서울대학교 컴퓨터공학부
2013. 3. – 2018. 8.: Assistant Professor, Singapore Management University
2015. 6. – 현재: 겸직교수, KAIST 전산학과
2007. 4. – 2007. 6.: Research Intern, Microsoft Research Redmond
2006. 9. – 2007. 3.: Research Intern, Microsoft Research Asia`.split('\n'),
  },
  {
    ...facultyList[23],
    office: '301동 506호',
    website: 'https://iamjaelee.github.io/www/',
    educations: `MIT EECS (CS Division) 박사 (2009)
Stanford University EE 석사 (2002)
서울대학교 전기공학부 학사 (1999)`.split('\n'),
    researchAreas: `Computer Architecture and Systems
Parallel Programming
Compilers
Security`.split('\n'),
    careers: `2016.09. – 현재: 전임교수, 서울대학교 컴퓨터공학부
2011 – 2016.08.: 조교수, 성균관대학교 반도체시스템공학과
2011: Postdoctoral Research Associate, CS Department, Princeton University
2009 – 2011: Researcher and Engineer, Parakinetics, Inc. (Princeton, USA)
2002 – 2009: Research Assistant, MIT CSAIL
2008: Graduate Exchange Scholar, EECS Department, UC Berkeley
2006, 2007: Research Intern, Nokia Research Lab in Cambridge (NRCC)
2002: Engineering Intern, Nvidia Corp.`.split('\n'),
  },
  {
    ...facultyList[24],
    office: '301동 505호',
    website: 'https://sites.google.com/view/jaejinlee',
    educations: `일리노이 대학교 어배너-섐페인 컴퓨터공학 박사 (1999)
스탠퍼드 대학교 컴퓨터공학 석사 (1995)
서울대학교 물리학 학사 (1991)`.split('\n'),
    researchAreas: `Programming systems of heterogeneous machines (GPUs and FPGAs)
Parallelization and optimization of deep learning models (e.g., GPT-3) and frameworks (e.g., PyTorch)
Programming and simulation environments of quantum computers`.split('\n'),
    careers: `2010 – 현재: 교수, 서울대학교 컴퓨터공학부
2004 – 2010: 부교수, 서울대학교 컴퓨터공학부
2002 – 2004: 조교수, 서울대학교 컴퓨터공학부
2000 – 2002: 조교수, 미시간 주립대학교 컴퓨터공학과
1999 – 1999: 객원 강사, 일리노이 대학교 어배너-섐페인 컴퓨터과학과`.split('\n'),
  },
  {
    ...facultyList[25],
    office: '301동 325호',
    website: 'http://mrl.snu.ac.kr/~jehee/',
    educations: `카네기멜론대학교 Computer Science Department 박사 (2013)
카네기멜론대학교 The Robotics Institute 석사 (2008)
한국과학기술원 기계공학 석사 (2001)
한국과학기술원 기계공학 학사 (1999)`.split('\n'),
    researchAreas: `물리 기반 동작 제어
데이터 기반 동작 학습 및 생성
사실적인 인체 모델링
다양한 생물체 제어`.split('\n'),
    careers: `한국과학기술원 전산학 박사 (2000)
한국과학기술원 전산학 석사 (1995)
한국과학기술원 전산학 학사 (1993)`.split('\n'),
  },
  {
    ...facultyList[26],
    office: '301동 409호',
    website: 'http://rubis.snu.ac.kr/~cglee',
    educations: `서울대학교 컴퓨터공학 박사 (1998)
서울대학교 컴퓨터공학 석사 (1993)
서울대학교 컴퓨터공학 학사 (1991)`.split('\n'),
    researchAreas: `Real-Time and Embedded System Architecture
Real-Time Communications
QoS Management in Control Applications, Multimedia Systems, and Web Servers
Satellite and Mobile Communications
Wireless Sensor Networks
Real-Time Ubiquitous Systems`.split('\n'),
    careers:
      `During his study as a Ph.D. candidate, he was a member of the Real-Time research group at Seoul National University. He was also a visiting student to the University of Virginia from Jan. to Mar. 1996 to work with Prof. Son in the Computer Science Department. From March 1998 to Feburary 2000, we worked for LG Information & Communications Ltd. developing real-time software platform and UMTS signaling protocols for IMT-2000 mobile terminals. From March 2000 to July 2002, he was a Post Doctoral Research Associate in the Department of Computer Science at University of Illinois working with Prof. Sha. From August 2002 to August 2006, he was an assistant professor in the Department of Electrical and Computer Engineering, Ohio State University , Columbus, Ohio. He joined the School of Computer Science and Engineering, Seoul National University from September 2006.`.split(
        '\n',
      ),
  },
  {
    ...facultyList[27],
    office: '302동 323호',
    website: 'http://bi.snu.ac.kr/~btzhang/',
    educations: `본 라인 프리드리히 빌헬름 대학교 컴퓨터공학 (Informatik) 박사 (1992)
서울대학교 컴퓨터공학 석사 (1988)
서울대학교 컴퓨터공학 학사 (1986)`.split('\n'),
    researchAreas: `Computer Vision, Machine Learning, Natural Language Processing`.split('\n'),
    careers: `뇌정보처리 모델링에 의한 기계학습 기반 사용자 의도 예측기술
지능형 추천 서비스를 위한 인지기반 기계학습 및 추론 기술
기계학습 기반 멀티모달 복합 정보 추출 및 추천기술
모바일 라이프로그를 이용한 상황 문맥 상에서의 행동 파악 기술`.split('\n'),
  },
  {
    ...facultyList[28],
    office: '302동 322호',
    website: 'https://bgchun.github.io/',
    educations: `University of California, Berkeley, Computer Science 박사 (2007)
Stanford University, Computer Science 석사 (2002)
서울대학교 전자공학과 석사 (1996)
서울대학교 전자공학과 학사 (1994)`.split('\n'),
    researchAreas: `Machine learning systems
Big data analytics
Datacenter infrastructure / cloud computing
Operating systems`.split('\n'),
    careers: `2016: Facebook (Research Scientist)
2012 – 2013: Microsoft (Principal Scientist)
2011 – 2012: Yahoo!Research (Research Scientist)
2008 – 2011: Intel Labs Berkeley (Research Scientist)
2007 – 2008: International Computer Science Institute (Post-doctoral Researcher)`.split('\n'),
  },
  {
    ...facultyList[29],
    office: '302동 429호',
    website: 'http://mccl.snu.ac.kr/Members01.htm',
    educations: `서울대학교 컴퓨터공학 박사 (1989)
서울대학교 컴퓨터공학 석사 (1985)
서울대학교 컴퓨터공학 학사 (1983)`.split('\n'),
    researchAreas: `Resource management for wireless and mobile networks
Mobile networks including 3G/4G cellular systems, wireless PAN/LAN, MBWA
Mobile Internet over cellular systems
Network performance evaluation
Cognitive radio`.split('\n'),
  },
  {
    ...facultyList[30],
    office: '302동 324호',
    website: 'https://jhugestar.github.io/',
    educations: `카네기멜론대학교 The Robotics Institute 박사 (2018)
KAIST 전기 및 전자공학 석사 (2009)
KAIST 전산학 학사 (2007)`.split('\n'),
    researchAreas: `Computer Vision
Machine Learning
Graphics
Artificial intelligence`.split('\n'),
    careers: `2022. 03. – 현재: 전임교수, 서울대학교 컴퓨터공학부
2019 – 2022. 02.: Research Scientist, Facebook AI Research (FAIR), Menlo Park
2017: Research Intern, Facebook Reality Labs, Pittsburgh
2015: Research Intern, Disney Research Zurich
2009 – 2012: 연구원, ETRI`.split('\n'),
  },
  {
    ...facultyList[31],
    office: '301동 408호',
    website: 'http://peace.snu.ac.kr/sha/',
    educations: `캘리포니아 대학교 버클리 전기·컴퓨터공학 박사 (1992)
서울대학교 전자공학 석사 (1987)
서울대학교 전자공학 학사 (1985)`.split('\n'),
    researchAreas: `하드웨어-소프트웨어 통합설계 방법론
병렬 임베디드 시스템 설계
임베디드 시스템의 성능 측정 및 검증
임베디드 시스템 구조 최적화`.split('\n'),
  },
  {
    ...facultyList[32],
    office: '302동 426호',
    website: 'http://sf.snu.ac.kr/gil.hur',
    educations: `영국 케임브리지 대학교, 컴퓨터 과학 박사 (2010)
KAIST, 전산학 및 수학 학사 (2000)`.split('\n'),
    researchAreas: `Software Verification
Relaxed Memory Concurrency
Low-level Language Semantics
Automated & Interactive Theorem Proving`.split('\n'),
    careers: `2013 – 현재: 전임교수, 서울대학교 컴퓨터공학부
2012 – 2013: 박사후 연구원, Microsoft Research Cambridge, UK
2010 – 2012: 박사후 연구원, Max Planck Institute for Software Systems (MPI-SWS), Germany
2009 – 2010: 박사후 연구원, Laboratoire Preuves, Programmes et Systèmes (PPS), France`.split('\n'),
  },
  {
    ...facultyList[33],
    office: '301동 520호',
    website: 'https://seungwonh.github.io/',
    educations: `University of Illinois at Urbana-Champaign 컴퓨터과학 박사 (2005)
University of Illinois at Urbana-Champaign 컴퓨터과학 석사 (2000)
KAIST 전산학 학사 (1998)`.split('\n'),
    researchAreas: `Natural language understanding
Knowledge and data intelligence
Information retrieval and search engines`.split('\n'),
    careers: `2021.03. – 현재: 정교수, 서울대학교, 컴퓨터공학부
2015 – 2021.02.: 정교수, 연세대학교, 컴퓨터과학과
2005 – 2015: 조교수/영년직 부교수, 포스텍 컴퓨터공학과
2012 – 2013: 방문연구원, 마이크로소프트 연구소
2003, 2004: 연구인턴, 마이크로소프트 연구소
2000, 2002: 연구인턴, 버클리 국립 연구소`.split('\n'),
  },
];

export const emeritusFacultyList: SimpleEmiritusFaculty[] = [
  {
    id: 0,
    name: '고건',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B3%A0%EA%B1%B4%EA%B5%90%EC%88%98%EB%8B%98_0.JPG?itok=ViFOQxpn',
    academicRank: '명예교수',
  },
  {
    id: 1,
    name: '김명수',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B9%80%EB%AA%85%EC%88%98%20%EA%B5%90%EC%88%98%EB%8B%98_7_0.jpg?itok=cenRhzgQ',
    academicRank: '명예교수',
    email: 'mskim@snu.ac.kr',
  },
  {
    id: 2,
    name: '김영택',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/_%EB%AA%85%EC%98%88%EA%B5%90%EC%88%98_%EA%B9%80%EC%98%81%ED%83%9D.JPG?itok=iZj0e4na',
    academicRank: '명예교수',
  },
  {
    id: 3,
    name: '김종권',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EA%B9%80%EC%A2%85%EA%B6%8C%20%EA%B5%90%EC%88%98%EB%8B%98_3_0.jpg?itok=5VRTyj8Q',
    academicRank: '전직교수',
  },
  {
    id: 4,
    name: '김종상',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/_%EB%AA%85%EC%98%88%EA%B5%90%EC%88%98_%EA%B9%80%EC%A2%85%EC%83%81.JPG?itok=qEJ4RkAA',
    academicRank: '명예교수',
  },
  {
    id: 5,
    name: '러브트 이안 믁카이',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EB%AF%81%EC%B9%B4%EC%9D%B4_%ED%8C%9C%ED%94%8C%EB%A0%9B.jpg?itok=YF7t3o3w',
    academicRank: '전직교수',
  },
  {
    id: 6,
    name: '민상렬',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EB%AF%BC%EC%83%81%EB%A0%AC%20%EC%82%AC%EC%A7%84.jpg?itok=tP7iNY6c',
    academicRank: '전직교수',
  },
  {
    id: 7,
    name: '스리니바사 라오 사티',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%82%AC%ED%8B%B0%20%EA%B5%90%EC%88%98%EB%8B%98.jpg?itok=G4lPjZGI',
    academicRank: '전직교수',
  },
  {
    id: 8,
    name: '신현식',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%8B%A0%ED%98%84%EC%8B%9D%20%20%EA%B5%90%EC%88%98%EB%8B%98_8_0.jpg?itok=xBTNvrUM',
    academicRank: '명예교수',
    email: 'shinhs@snu.ac.kr',
  },
  {
    id: 9,
    name: '우치수',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9A%B0%EC%B9%98%EC%88%98%20%EA%B5%90%EC%88%98%EB%8B%98_2_0.jpg?itok=0gA50NU3',
    academicRank: '명예교수',
  },
  {
    id: 10,
    name: '유석인',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EB%B6%80_%EC%9C%A0%EC%84%9D%EC%9D%B8%EA%B5%90%EC%88%98%EB%8B%98%28%ED%95%99%EB%B6%80%ED%99%88%ED%94%BC%EB%8F%84%20%EA%B5%90%EC%B2%B4%29.jpg?itok=EOqPZkqo',
    academicRank: '명예교수',
    email: 'sukinyoo@snu.ac.kr',
  },
  {
    id: 11,
    name: '이석호',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/_%EB%AA%85%EC%98%88%EA%B5%90%EC%88%98_%EC%9D%B4%EC%84%9D%ED%98%B8_0.JPG?itok=xK9OUlQH',
    academicRank: '명예교수',
    email: 'shlee@snu.ac.kr',
  },
  {
    id: 12,
    name: '장래혁',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%9E%A5%EB%9E%98%ED%98%81_%ED%8C%9C%ED%94%8C%EB%A0%9B.jpg?itok=wr2Otbqp',
    academicRank: '전직교수',
  },
  {
    id: 13,
    name: '전주식',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%A0%84%EC%A3%BC%EC%8B%9D%20%EA%B5%90%EC%88%98%EB%8B%98_8_0.jpg?itok=BhXk9ZZJ',
    academicRank: '전직교수',
  },
  {
    id: 14,
    name: '조유근',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%A1%B0%EC%9C%A0%EA%B7%BC%20%20%EA%B5%90%EC%88%98%EB%8B%98_3.jpg?itok=SbQwYiiE',
    academicRank: '명예교수',
    email: 'ykcho@snu.ac.kr',
  },
  {
    id: 15,
    name: '최양희',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%EC%B5%9C%EC%96%91%ED%9D%AC%20%EA%B5%90%EC%88%98%EB%8B%98_1%20%283%29_0.jpg?itok=_Cx5BW6V',
    academicRank: '명예교수',
    email: 'yhchoi@snu.ac.kr',
  },
  {
    id: 16,
    name: '한상영',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/%ED%95%9C%EC%83%81%EC%98%81%20%EA%B5%90%EC%88%98%EB%8B%98_21_0.jpg?itok=oAU3XgvE',
    academicRank: '명예교수',
  },
  {
    id: 17,
    name: '황희융',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--professor/_%EB%AA%85%EC%98%88%EA%B5%90%EC%88%98_%ED%99%A9%ED%9D%AC%EC%9C%B5_0.JPG?itok=4SRtsnwG',
    academicRank: '명예교수',
  },
];

export const emeritusFaculties: EmiritusFaculty[] = [
  {
    ...emeritusFacultyList[0],
    educations: `버지니아대학교 컴퓨터과학과 박사
서울대학교 응용물리학과 학사`.split('\n'),
    startDate: '1983년 3월',
    endDate: '2011년 8월',
  },
  {
    ...emeritusFacultyList[1],
    website: ' http://3map.snu.ac.kr',
    educations: `퍼듀 대학교 컴퓨터공학 박사 (1988)
퍼듀 대학교 컴퓨터공학 석사 (1987)
퍼듀 대학교 응용수학 석사 (1985)
서울대학교 수학 석사 (1982)
서울대학교 수학교육 학사 (1980)`.split('\n'),
    researchAreas: `자유형상 기하학 모델을 위한 실시간 알고리즘
인체 모델링, 형상변형`.split('\n'),
    startDate: '1999년 3월',
    endDate: '2022년 8월',
  },
  {
    ...emeritusFacultyList[2],
    startDate: '1971년 5월',
    endDate: '2001년 2월',
    educations: `유타대학교 전자공학과 박사
콜로라도 주립대학교 전자공학과 석사
육군사관학교 응용화학과 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[3],
    startDate: '1991년 2월',
    endDate: '2021년 6월',
    educations: `일리노이 대학교 어배너-섐페인 컴퓨터공학 박사
조지아 공과대학교 Operation Research 석사
서울대학교 산업공학 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[4],
    startDate: '1968년 5월',
    endDate: '2003년 2월',
    educations: `서울대학교 전자공학과 박사
서울대학교 전자공학과 석사
서울대학교 전자공학과 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[5],
    startDate: '2005년 9월',
    endDate: '2015년 2월',
    educations: `브리스틀 대학교 컴퓨터공학 박사 (1976)
오스트레일리아 국립 대학교 순수수학 학사 (1971)`.split('\n'),
  },
  {
    ...emeritusFacultyList[6],
    startDate: '1992년 2월',
    endDate: '2020년 2월',
    educations: `워싱턴 대학교 컴퓨터공학 박사 (1989)
서울대학교 컴퓨터공학 석사 (1985)
서울대학교 컴퓨터공학 학사 (1983)`.split('\n'),
  },
  {
    ...emeritusFacultyList[7],
    startDate: '2009년 3월',
    endDate: '2021년 2월',
    educations: `첸나이 수리과학원 (IMSc) 이론 컴퓨터 과학 박사 (2002)
첸나이 수리과학원 (IMSc) 이론 컴퓨터 과학 석사 (1997)
와랑갈 이공대학교 (NITW) 컴퓨터공학 학사 (1995)`.split('\n'),
  },
  {
    ...emeritusFacultyList[8],
    startDate: '1986년 3월',
    endDate: '2016년 8월',
    educations: `텍사스 대학교 오스틴 컴퓨터공학 박사 (1985)
텍사스 대학교 오스틴 생체의학 석사
서울대학교 응용 물리학 학사
서던 일리노이 대학교 카본데일 생명과학 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[9],
    startDate: '1982년 9월',
    endDate: '2012년 2월',
    educations: `서울대학교 계산통계학과 박사
서울대학교 계산통계학과 석사
서울대학교 계산통계학과 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[10],
    startDate: '1985년 12월',
    endDate: '2017년 2월',
    educations: `미시간 대학교 전기·컴퓨터공학 박사 (1985)
리하이 대학교 전자공학 석사 (1980)
서울대학교 전자공학 학사 (1977)`.split('\n'),
  },
  {
    ...emeritusFacultyList[11],
    startDate: '1982년 3월',
    endDate: '2009년 2월',
    educations: `텍사스대학교 전산학과 박사
텍사스대학교 전산학과 석사
연세대 정치외교학과 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[12],
    startDate: '1997년 3월',
    endDate: '2014년 6월',
    educations: `서울대학교 제어계측공학 박사 (1996)
서울대학교 제어계측공학 석사 (1992)
서울대학교 제어계측공학 학사 (1989)`.split('\n'),
  },
  {
    ...emeritusFacultyList[13],
    startDate: '1985년 3월',
    endDate: '2015년 8월',
    educations: `유타 대학교 전자계산학 박사 (1982)
한국과학기술원 전자계산학 석사 (1976)
서울대학교 응용수학 학사 (1974)`.split('\n'),
  },
  {
    ...emeritusFacultyList[14],
    startDate: '1979년 4월',
    endDate: '2014년 8월',
    educations: `미네소타 대학교 컴퓨터공학 박사 (1978)
서울대학교 건축학 석사 (1973)
서울대학교 건축학 학사 (1971)`.split('\n'),
  },
  {
    ...emeritusFacultyList[15],
    startDate: '1991년 7월',
    endDate: '2020년 8월',
    educations: `ENST Paris 전산공학 박사 (1984)
한국과학기술원 전기공학부 석사 (1977)
서울대학교 전기공학부 학사 (1975)`.split('\n'),
  },
  {
    ...emeritusFacultyList[16],
    startDate: '1984년 3월',
    endDate: '2013년 8월',
    educations: `텍사스대학교 계산통계학과 박사
서울대학교 계산통계학과 석사
서울대학교 응용수학과 학사`.split('\n'),
  },
  {
    ...emeritusFacultyList[17],
    startDate: '1968년 2월',
    endDate: '1993년 3월',
    educations: `서울대학교 전기공학과 박사
서울대학교 전기공학과 석사
서울대학교 전기공학과 학사`.split('\n'),
  },
];

export const staffList: StaffList = {
  staffList: [
    {
      id: 0,
      name: '박지혜',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/KakaoTalk_20230109_143257675.jpg?itok=-qTVUJTk',
      role: '장학.전문연구요원',
      office: '301동 316호',
      phone: '(02) 880-7288',
      email: 'paji52@snu.ac.kr',
    },
    {
      id: 1,
      name: '손소연',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/%EC%86%90%EC%86%8C%EC%97%B0_0_0.jpg?itok=3Jobsn1N',
      role: '학부생 학사.수업.교과과정',
      office: '301동 316호',
      phone: '(02) 880-1850',
      email: 'soyeoun7@snu.ac.kr',
    },
    {
      id: 2,
      name: '우미숙',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/%EC%9A%B0%EB%AF%B8%EC%88%99.jpg?itok=8I4pjuDz',
      role: '학부생 학사.수업.교과과정',
      office: '301동 316호',
      phone: '(02) 880-6583',
      email: 'misuk@snu.ac.kr',
    },
    {
      id: 3,
      name: '이은주',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/%EC%9D%B4%EC%9D%80%EC%A3%BC%20%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg?itok=blvo3Hne',
      role: '학적, 학부 졸업/입시, 다전공',
      office: '301동 316호',
      phone: '(02) 880-1526',
      email: 'kate0911@snu.ac.kr',
    },
    {
      id: 4,
      name: '정재교',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/%EC%A0%95%EC%9E%AC%EA%B5%90%EC%8C%A4.png?itok=txBl4WNC',
      role: '대학원 학사.입시',
      office: '301동 316호',
      phone: '(02) 880-1827',
      email: 'jjk767@snu.ac.kr',
    },
    {
      id: 5,
      name: '차예지',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/%EC%B0%A8%EC%98%88%EC%A7%80%EC%83%98.jpg?itok=0aM0frPr',
      role: '외국인 교수 및 학생 지원',
      office: '301동 316호',
      phone: '(02) 880-7287',
      email: 'yejicdefg@snu.ac.kr',
    },
    {
      id: 6,
      name: '한민정',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--staff_member/%ED%95%9C%EB%AF%BC%EC%A0%95.png?itok=Qz-KA1Dx',
      role: '교원인사.일반서무.',
      office: '301동 316호',
      phone: '(02) 880-1527',
      email: 'alswjd@snu.ac.kr',
    },
  ],
};

export const staff: Staff[] = [
  {
    ...staffList.staffList[0],
    tasks: `학점인정인턴 프로그램(주전공/다전공 2Track)
연구처 업무
세미나실 예약
대학원 전문연구요원
동문회`.split('\n'),
  },
  {
    ...staffList.staffList[1],
    tasks: `교과과정 변경 (교과목 폐지 및 신설, 변경)
수업편성(교육과정, 수업시간 편성, 변경, 취소 등)
수강신청(변경, 취소, 확정, 재수강 등)
수업관리(분반, 합반, 폐강, 교수 책임시간, 타교출강 등)
성적관리(평가, 처리, 정정 등), 강의평가
학사경고, 학사제명, 학사유급, 유급제명`.split('\n'),
  },
  {
    ...staffList.staffList[2],
    tasks: `학부 업무 총괄
법인회계
자체직원 인사
교수회의
각종 위원회
시설관리`.split('\n'),
  },
  {
    ...staffList.staffList[3],
    tasks: `학부생 지도교수 배정
다전공(복수전공/부전공) 및 학사편입학, 전과
학적(등록/휴학/복학/퇴학/제적/복적/재입학)
학생회 및 동아리 관리
S-Card 발급 및 사용등록, 사물함 관리
학부 입시
학부 신입생 O/T
학부생 수료, 졸업사정 및 논문 관리`.split('\n'),
  },
  {
    ...staffList.staffList[4],
    tasks: `대학원 논문제출자격시험
대학원 논문심사
대학원 교과학점 통산인정
대학원 수료 사정
대학원 입시
대학원 신입생 O/T
대학원 연구실 현황 관리
전문연구요원`.split('\n'),
  },
  {
    ...staffList.staffList[5],
    tasks: `외국인 교수 및 학생 지원
국제협력(MOU, 학생교류프로그램-유학, 교환학생, 방문학생)
외국인 입시 및 장학금
10-10프로젝트
[세미나] DLS, Industry Seminar, Lunch Talk, 교수후보탐색세미나
교원 외부강의 관리 및 보고`.split('\n'),
  },
  {
    ...staffList.staffList[6],
    tasks: `일반 서무
네트워크(도메인, IP, 포트 관리 등)
교원 인사(신규채용, 연구년, 겸직, 승진, 겸무 등)
학부 홈페이지 및 메일링 운영`.split('\n'),
  },
];

export const tcl: TopConferenceList = {
  modifiedAt: '2023.04.17.',
  author: '한민정',
  conferenceList: [
    {
      id: 1,
      code: 'BKCSA001',
      abbreviation: 'AAAI',
      name: 'AAAI Conference on Artificial Intelligence ',
    },
    {
      id: 2,
      code: 'BKCSA002',
      abbreviation: 'CCS',
      name: 'ACM Conference on Computer and Communications Security ',
    },
    {
      id: 3,
      code: 'BKCSA003',
      abbreviation: 'CHI',
      name: 'ACM Conference on Human Factors in Computing Systems ',
    },
    {
      id: 4,
      code: 'BKCSA004',
      abbreviation: 'MobiCom',
      name: 'ACM International Conference on Mobile Computing and Networking',
    },
    {
      id: 5,
      code: 'BKCSA005',
      abbreviation: 'MM',
      name: 'ACM Multimedia Conference',
    },
    {
      id: 6,
      code: 'BKCSA006',
      abbreviation: 'SIGCOMM',
      name: 'ACM SIGCOMM Conference',
    },
    {
      id: 7,
      code: 'BKCSA007',
      abbreviation: 'SIGIR',
      name: 'ACM SIGIR Conference on Information Retrieval',
    },
    {
      id: 8,
      code: 'BKCSA008',
      abbreviation: 'KDD',
      name: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining',
    },
    {
      id: 9,
      code: 'BKCSA009',
      abbreviation: 'FSE',
      name: 'ACM SIGSOFT Symposium on the Foundations of Software Engineering ',
    },
    {
      id: 10,
      code: 'BKCSA010',
      abbreviation: 'SOSP',
      name: 'ACM Symposium on Operating Systems Principles ',
    },
    {
      id: 11,
      code: 'BKCSA011',
      abbreviation: 'STOC',
      name: 'ACM Symposium on Theory of Computing ',
    },
    {
      id: 12,
      code: 'BKCSA012',
      abbreviation: 'ACL',
      name: 'Annual Meeting of the Association for Computational Linguistics ',
    },
    {
      id: 13,
      code: 'BKCSA013',
      abbreviation: 'ASPLOS',
      name: 'Architectural Support for Programming Languages and Operating Systems',
    },
    {
      id: 14,
      code: 'BKCSA014',
      abbreviation: 'CVPR',
      name: 'Conference on Computer Vision and Pattern Recognition ',
    },
    {
      id: 15,
      code: 'BKCSA015',
      abbreviation: 'NIPS',
      name: 'Conference on Neural Information Processing Systems ',
    },
    {
      id: 16,
      code: 'BKCSA016',
      abbreviation: 'OOPSLA',
      name: 'Conference on Object-Oriented Programming, System, Languages, and Applications',
    },
    {
      id: 17,
      code: 'BKCSA017',
      abbreviation: 'INFOCOM',
      name: 'IEEE Conference on Computer Communications',
    },
    {
      id: 18,
      code: 'BKCSA018',
      abbreviation: 'HPCA',
      name: 'IEEE International Symposium on High-Performance Computer Architecture',
    },
    {
      id: 19,
      code: 'BKCSA019',
      abbreviation: 'RTSS',
      name: 'IEEE Real-Time Systems Symposium ',
    },
    {
      id: 20,
      code: 'BKCSA020',
      abbreviation: 'FOCS',
      name: 'IEEE Symposium on Foundations of Computer Science',
    },
    {
      id: 21,
      code: 'BKCSA021',
      abbreviation: 'S&P',
      name: 'IEEE Symposium on Security and Privacy',
    },
    {
      id: 22,
      code: 'BKCSA022',
      abbreviation: 'VIS',
      name: 'IEEE Visualization',
    },
    {
      id: 23,
      code: 'BKCSA023',
      abbreviation: 'MICRO',
      name: 'IEEE/ACM International Symposium on Microarchitecture',
    },
    {
      id: 24,
      code: 'BKCSA024',
      abbreviation: 'SIGGRAPH, SIGGRAPH-ASIA',
      name: 'ACM SIG International Conference on Computer Graphics and Interactive Techniques,ACM SIG International Conference on Computer Graphics and Interactive Techniques - Asia',
    },
    {
      id: 25,
      code: 'BKCSA025',
      abbreviation: 'ICCV',
      name: 'International Conference on Computer Vision ',
    },
    {
      id: 26,
      code: 'BKCSA026',
      abbreviation: 'CAV',
      name: 'International Conference on Computer-Aided Verification',
    },
    {
      id: 27,
      code: 'BKCSA027',
      abbreviation: 'ICML',
      name: 'International Conference on Machine Learning',
    },
    {
      id: 28,
      code: 'BKCSA028',
      abbreviation: 'SIGMOD',
      name: 'International Conference on Management of Data',
    },
    {
      id: 29,
      code: 'BKCSA029',
      abbreviation: 'ICSE',
      name: 'International Conference on Software Engineering ',
    },
    {
      id: 30,
      code: 'BKCSA030',
      abbreviation: 'EUROCRYPT',
      name: 'International Conference on the Theory and Applications of Cryptographic Techniques',
    },
    {
      id: 31,
      code: 'BKCSA031',
      abbreviation: 'VLDB/PVLDB',
      name: 'International Conference on Very Large Databases',
    },
    {
      id: 32,
      code: 'BKCSA032',
      abbreviation: 'CRYPTO',
      name: 'International Cryptology Conference',
    },
    {
      id: 33,
      code: 'BKCSA033',
      abbreviation: 'IJCAI',
      name: 'International Joint Conference on Artificial Intelligence ',
    },
    {
      id: 34,
      code: 'BKCSA034',
      abbreviation: 'ISCA',
      name: 'International Symposium on Computer Architecture ',
    },
    {
      id: 35,
      code: 'BKCSA035',
      abbreviation: 'WWW',
      name: 'International World Wide Web Conference ',
    },
    {
      id: 36,
      code: 'BKCSA036',
      abbreviation: 'PLDI',
      name: 'SIGPLAN Conference on Programming Language Design and Implementation',
    },
    {
      id: 37,
      code: 'BKCSA037',
      abbreviation: 'POPL',
      name: 'Symposium on Principles of Programming Languages ',
    },
    {
      id: 38,
      code: 'BKCSA038',
      abbreviation: 'NSDI',
      name: 'USENIX Symposium on Networked Systems Design and Implementation ',
    },
    {
      id: 39,
      code: 'BKCSA039',
      abbreviation: 'OSDI',
      name: 'USENIX Symposium on Operating Systems Design and Implementation ',
    },
    {
      id: 40,
      code: 'BKCSA040',
      abbreviation: 'CSCW',
      name: 'ACM Conference on Computer-Supported Cooperative Work',
    },
    {
      id: 41,
      code: 'BKCSA041',
      abbreviation: 'SenSys',
      name: 'ACM Conference on Embedded Networked Sensor Systems',
    },
    {
      id: 42,
      code: 'BKCSA042',
      abbreviation: 'CIKM',
      name: 'ACM Conference on Information and Knowledge Management',
    },
    {
      id: 43,
      code: 'BKCSA043',
      abbreviation: 'MobiSys',
      name: 'ACM International Conference on Mobile Systems, Application and Services',
    },
    {
      id: 44,
      code: 'BKCSA044',
      abbreviation: 'WSDM',
      name: 'ACM International Conference on Web Search and Data Mining',
    },
    {
      id: 45,
      code: 'BKCSA045',
      abbreviation: 'UbiComp',
      name: 'ACM International Joint Conference on Pervasive and Ubiquitous Computing',
    },
    {
      id: 46,
      code: 'BKCSA046',
      abbreviation: 'MobiHoc',
      name: 'ACM International Symposium on Mobile Ad Hoc Networking and Computing',
    },
    {
      id: 47,
      code: 'BKCSA047',
      abbreviation: 'SIGMETRICS',
      name: 'ACM SIGMETRICS International Conference on Measurement and Modeling of Computer Systems',
    },
    {
      id: 48,
      code: 'BKCSA048',
      abbreviation: 'PPoPP',
      name: 'ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming ',
    },
    {
      id: 49,
      code: 'BKCSA049',
      abbreviation: 'SPAA',
      name: 'ACM Symposium on Parallelism in Algorithms and Architectures',
    },
    {
      id: 50,
      code: 'BKCSA050',
      abbreviation: 'PODS',
      name: 'ACM Symposium on Principles of Database Systems',
    },
    {
      id: 51,
      code: 'BKCSA051',
      abbreviation: 'PODC',
      name: 'ACM Symposium on Principles of Distributed Computing',
    },
    {
      id: 52,
      code: 'BKCSA052',
      abbreviation: 'IPSN',
      name: 'ACM/IEEE Information Processing in Sensor Networks',
    },
    {
      id: 53,
      code: 'BKCSA053',
      abbreviation: 'SC',
      name: 'ACM/IEEE Internataional Conference for High Performance Computing, Networking, Storage, and Analysis',
    },
    {
      id: 54,
      code: 'BKCSA054',
      abbreviation: 'LICS',
      name: 'ACM/IEEE Symposium on Logic in Computer Science',
    },
    {
      id: 55,
      code: 'BKCSA055',
      abbreviation: 'SODA',
      name: 'ACM-SIAM Symposium on Discrete Algorithms',
    },
    {
      id: 56,
      code: 'BKCSA056',
      abbreviation: 'COLT',
      name: 'Annual Conference on Computational Learning Theory',
    },
    {
      id: 57,
      code: 'BKCSA057',
      abbreviation: 'UAI',
      name: 'Conference on Uncertainty in Artificial Intelligence',
    },
    {
      id: 58,
      code: 'BKCSA058',
      abbreviation: 'DAC',
      name: 'Design Automation Conference ',
    },
    {
      id: 59,
      code: 'BKCSA059',
      abbreviation: 'EMNLP',
      name: 'Empirical Methods in Natural Language Processing',
    },
    {
      id: 60,
      code: 'BKCSA060',
      abbreviation: 'ICDE',
      name: 'IEEE International Conference on Data Engineering',
    },
    {
      id: 61,
      code: 'BKCSA061',
      abbreviation: 'ICDM',
      name: 'IEEE International Conference on Data Mining',
    },
    {
      id: 62,
      code: 'BKCSA062',
      abbreviation: 'ICDCS',
      name: 'IEEE International Conference on Distributed Computing Systems ',
    },
    {
      id: 63,
      code: 'BKCSA063',
      abbreviation: 'PerCom',
      name: 'IEEE International Conference on Pervasive Computing and Communications',
    },
    {
      id: 64,
      code: 'BKCSA064',
      abbreviation: 'ASE',
      name: 'IEEE/ACM International Conference on Automated Software Engineering',
    },
    {
      id: 65,
      code: 'BKCSA065',
      abbreviation: 'ICCAD',
      name: 'IEEE/ACM International Conference on Computer-Aided Design',
    },
    {
      id: 66,
      code: 'BKCSA066',
      abbreviation: 'CoNEXT',
      name: 'International Conference on emerging Networking Experiments and Technologies',
    },
    {
      id: 67,
      code: 'BKCSA067',
      abbreviation: 'PACT',
      name: 'International Conference on Parallel Architectures and Compilation Techniques ',
    },
    {
      id: 68,
      code: 'BKCSA068',
      abbreviation: 'KR',
      name: 'International Conference on Principles of Knowledge Representation and Reasoning',
    },
    {
      id: 69,
      code: 'BKCSA069',
      abbreviation: 'ATC',
      name: 'USENIX Annual Technical Conference',
    },
    {
      id: 70,
      code: 'BKCSA070',
      abbreviation: 'FAST',
      name: 'USENIX Conference on File and Storage Technologies ',
    },
    {
      id: 71,
      code: 'BKCSA071',
      abbreviation: 'Security',
      name: 'USENIX Security Symposium ',
    },
    {
      id: 72,
      code: 'BKCSA077',
      abbreviation: 'ICS',
      name: 'ACM International Conference on Supercomputing',
    },
    {
      id: 73,
      code: 'BKCSA081',
      abbreviation: 'UIST',
      name: 'ACM Symposium on User Interface Software and Technology ',
    },
    {
      id: 74,
      code: 'BKCSA091',
      abbreviation: 'EuroSys',
      name: 'European Conference on Computer Systems ',
    },
    {
      id: 75,
      code: 'BKCSA092',
      abbreviation: 'ECCV',
      name: 'European Conference on Computer Vision ',
    },
    {
      id: 76,
      code: 'BKCSA102',
      abbreviation: 'HPDC',
      name: 'IEEE International Symposium on High Performance Distributed Computing',
    },
    {
      id: 77,
      code: 'BKCSA103',
      abbreviation: 'RTAS',
      name: 'IEEE Real-Time and Embedded Technology and Applications Symposium ',
    },
    {
      id: 78,
      code: 'BKCSA115',
      abbreviation: 'ICFP',
      name: 'International Conference on Functional Programming ',
    },
    {
      id: 79,
      code: 'BKCSA116',
      abbreviation: 'CODES',
      name: 'International Conference on Hardware/Software Codesign and System Synthesis',
    },
    {
      id: 80,
      code: 'BKCSA124',
      abbreviation: 'NDSS',
      name: 'Network and Distributed System Security Symposium ',
    },
    {
      id: 81,
      code: 'BKCSA141',
      abbreviation: 'ECRTS',
      name: 'Euromicro Conference on Real-Time Systems ',
    },
    {
      id: 82,
      code: 'BKCSA145',
      abbreviation: 'GECCO',
      name: 'Genetic and Evolutionary Computation Conference ',
    },
    {
      id: 83,
      code: 'BKCSA169',
      abbreviation: 'ISMB',
      name: 'Intelligent Systems for Molecular Biology ',
    },
    {
      id: 84,
      code: 'BKCSA179',
      abbreviation: 'MICCAI',
      name: 'International Conference on Medical Image Computing and Computer Assisted Interventions',
    },
    {
      id: 85,
      code: 'BKCSA186',
      abbreviation: 'RECOMB',
      name: 'Research in Computational Molecular Biology ',
    },
  ],
};

export const simpleResearchLabs: SimpleResearchLab[] = [
  {
    id: 0,
    name: '데이터 마이닝 연구실',
    professors: [
      {
        id: 0,
        name: '강유',
      },
    ],
    location: '301동 515호 / 518호 / 551-1호 / 551-3호',
    tel: '(02) 880-7263',
    acronym: 'DM',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/dmlab-poster-230313.pdf',
      youtube: 'https://youtu.be/Wy0I4EhTFHw',
    },
  },
  {
    id: 1,
    name: '데이터베이스 시스템 연구실',
    professors: [
      {
        id: 9,
        name: '문봉기',
      },
    ],
    location: '301동 418호 / 452-2호',
    tel: '(02) 880-6575',
    acronym: 'DBS',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2020Lab_bkmoon_%EB%AC%B8%EB%B4%89%EA%B8%B0%EA%B5%90%EC%88%98%EB%8B%98.pdf',
      youtube: null,
    },
  },
  {
    id: 2,
    name: '머신러닝 연구실',
    professors: [
      {
        id: 13,
        name: '송현오',
      },
    ],
    location: '302동 319호',
    tel: '',
    acronym: 'ML',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/ML_20220919.pdf',
      youtube: null,
    },
  },
  {
    id: 3,
    name: '바이오지능 연구실',
    professors: [
      {
        id: 27,
        name: '장병탁',
      },
    ],
    location: '302동 314-1호',
    tel: '(02) 880-1835',
    acronym: 'BI',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/x82_eaoLENg',
    },
  },
  {
    id: 4,
    name: '분산시스템 연구실',
    professors: [
      {
        id: 17,
        name: '염헌영',
      },
      {
        id: 15,
        name: '엄현상',
      },
    ],
    location: '302동 319호',
    tel: '(02) 880-9330',
    acronym: 'DCS',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/3rHDN1qknOA',
    },
  },
  {
    id: 5,
    name: '비주얼 컴퓨팅 연구실',
    professors: [
      {
        id: 30,
        name: '주한별',
      },
    ],
    location: '302동 310-1호',
    tel: '',
    acronym: 'VC',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2021Lab_HanbyulJoo_0.pdf',
      youtube: null,
    },
  },
  {
    id: 6,
    name: '빅데이터 분석 연구실',
    professors: [
      {
        id: 7,
        name: '김형주',
      },
    ],
    location: '301동 453호',
    tel: '(02) 880-1830',
    acronym: 'BDA',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/20210421Lab_hjk_%EA%B9%80%ED%98%95%EC%A3%BC.pdf',
      youtube: null,
    },
  },
  {
    id: 7,
    name: '생물정보 및 생명정보 연구실',
    professors: [
      {
        id: 3,
        name: '김선',
      },
    ],
    location: '301동 551-3호 / 554-2호 / 554-3호',
    tel: '',
    acronym: 'BHI',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/jjRKrlKktGo',
    },
  },
  {
    id: 8,
    name: '소프트웨어 원리 연구실',
    professors: [
      {
        id: 32,
        name: '허충길',
      },
    ],
    location: '302동 312-2호',
    tel: '(02) 880-1865',
    acronym: 'SF',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2020Lab_gil.hur_%ED%97%88%EC%B6%A9%EA%B8%B8%EA%B5%90%EC%88%98%EB%8B%98.pdf',
      youtube: 'https://youtu.be/517X3a5lH_E',
    },
  },
  {
    id: 9,
    name: '소프트웨어 플랫폼 연구실',
    professors: [
      {
        id: 28,
        name: '전병곤',
      },
    ],
    location: '302동 420호',
    tel: '02) 880-1611',
    acronym: 'SPL',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/20211014Lab_bgchun.pdf',
      youtube: 'https://youtu.be/ofiykDZaZBQ',
    },
  },
  {
    id: 10,
    name: '시각 및 학습 연구실',
    professors: [
      {
        id: 2,
        name: '김건희',
      },
    ],
    location: '302동 319호',
    tel: '(02) 880-7289',
    acronym: 'VL',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/R0OHd-_Nobg',
    },
  },
  {
    id: 11,
    name: '시스템 소프트웨어 및 구조 연구실',
    professors: [
      {
        id: 5,
        name: '김진수',
      },
    ],
    location: '301동 515호 / 516호 / 517호',
    tel: '(02) 880-7296',
    acronym: 'CSL',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2022_CSL_jinsoo_v2.pdf',
      youtube: null,
    },
  },
  {
    id: 12,
    name: '실시간 유비쿼터스 시스템 연구실',
    professors: [
      {
        id: 26,
        name: '이창건',
      },
    ],
    location: '301동 415호',
    tel: '(02) 880-2562',
    acronym: 'RUBIS',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/NKke8PNwoI8',
    },
  },
  {
    id: 13,
    name: '아키텍처 및 코드 최적화 연구실',
    professors: [
      {
        id: 23,
        name: '이재욱',
      },
    ],
    location: '301동 554-1호',
    tel: '(02) 880-1836',
    acronym: 'ARC',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2020Lab_jaewlee_%EC%9D%B4%EC%9E%AC%EC%9A%B1%EA%B5%90%EC%88%98%EB%8B%98.pdf',
      youtube: 'https://youtu.be/MaikqeWx12w',
    },
  },
  {
    id: 14,
    name: '암호 및 프라이버시 연구실',
    professors: [
      {
        id: 12,
        name: '송용수',
      },
    ],
    location: '301동 451-1호',
    tel: '',
    acronym: 'CNP',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2021Lab_y.song_%EC%86%A1%EC%9A%A9%EC%88%98.pdf',
      youtube: null,
    },
  },
  {
    id: 15,
    name: '양자정보 및 양자컴퓨팅 연구실',
    professors: [
      {
        id: 6,
        name: '김태현',
      },
    ],
    location: '301동 416호',
    tel: '(02) 880-4165',
    acronym: 'QUIQCL',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/hHcPfbZz7AI',
    },
  },
  {
    id: 16,
    name: '언어 및 데이터지능 연구실',
    professors: [
      {
        id: 33,
        name: '황승원',
      },
    ],
    location: '301동 516호 / 551-2호 / 554-1호',
    tel: '',
    acronym: 'LDI',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2021Lab_seungwonh_%ED%99%A9%EC%8A%B9%EC%9B%90%EA%B5%90%EC%88%98%EB%8B%98.pdf',
      youtube: null,
    },
  },
  {
    id: 17,
    name: '운동 연구실',
    professors: [
      {
        id: 25,
        name: '이제희',
      },
    ],
    location: '302동 312-1호',
    tel: '(02) 880-1864',
    acronym: 'MRL',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2021Lab_jehee_%EC%9D%B4%EC%A0%9C%ED%9D%AC.pdf',
      youtube: 'https://youtu.be/ZbpthRSWQ-c',
    },
  },
  {
    id: 18,
    name: '이동 컴퓨팅 및 통신 연구실',
    professors: [
      {
        id: 29,
        name: '전화숙',
      },
    ],
    location: '302동 313-1호',
    tel: '(02) 880-1841',
    acronym: 'MCCL',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/MCCL_20220919.pdf',
      youtube: null,
    },
  },
  {
    id: 19,
    name: '인간 중심 컴퓨터 시스템 연구실',
    professors: [
      {
        id: 22,
        name: '이영기',
      },
    ],
    location: '301동 412호',
    tel: '(02) 880-4165',
    acronym: 'HCS',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2021Lab_yonugkilee.pdf',
      youtube: 'https://youtu.be/e58ecslJUrY',
    },
  },
  {
    id: 20,
    name: '인터넷 융합 및 보안 연구실',
    professors: [
      {
        id: 1,
        name: '권태경',
      },
    ],
    location: '301동 551-1호 / 551-2호 / 554-1호 / 516호',
    tel: '',
    acronym: 'NCSL',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/bCLWYhurBuo',
    },
  },
  {
    id: 21,
    name: '임베디드 시스템 연구실',
    professors: [
      {
        id: 4,
        name: '김지홍',
      },
    ],
    location: '302동 315-2호',
    tel: '(02) 880-1861',
    acronym: 'CARES',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/uPrBi4mA9_s',
    },
  },
  {
    id: 22,
    name: '지능형 데이터 시스템 연구실',
    professors: [
      {
        id: 21,
        name: '이상구',
      },
    ],
    location: '301동 420호',
    tel: '(02) 880-1859',
    acronym: 'IDS',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/IDS%20Lab20220930.pdf',
      youtube: 'https://youtu.be/FFFOOI-V6Sc',
    },
  },
  {
    id: 23,
    name: '지능형 동작 연구실',
    professors: [
      {
        id: 18,
        name: '원정담',
      },
    ],
    location: '302동 312-1호',
    tel: '(02) 880-1864',
    acronym: '',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/_IMO.pdf',
      youtube: null,
    },
  },
  {
    id: 24,
    name: '천둥 연구실',
    professors: [
      {
        id: 24,
        name: '이재진',
      },
    ],
    location: '301동 515호',
    tel: '(02) 880-1837',
    acronym: 'TRG',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/xggyliOHUGQ',
    },
  },
  {
    id: 25,
    name: '최적화 및 금융공학 연구실',
    professors: [
      {
        id: 8,
        name: '문병로',
      },
    ],
    location: '302동 313-2호',
    tel: '(02) 880-1851',
    acronym: 'OPT',
    introductionMaterials: {
      pdf: null,
      youtube: null,
    },
  },
  {
    id: 26,
    name: '컴퓨터 그래픽스 및 이미지 처리 연구실',
    professors: [
      {
        id: 14,
        name: '신영길',
      },
    ],
    location: '302동 320호',
    tel: '(02) 880-1860',
    acronym: 'CGIP',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2021Lab_yshin_%EC%8B%A0%EC%98%81%EA%B8%B8.pdf',
      youtube: null,
    },
  },
  {
    id: 27,
    name: '컴퓨터 시스템 및 플랫폼 연구실',
    professors: [
      {
        id: 16,
        name: '버나드 에거',
      },
    ],
    location: '301동 419호',
    tel: '(02) 880-1819',
    acronym: 'CSAP',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/mJxZsoDETiw',
    },
  },
  {
    id: 28,
    name: '컴퓨터 이론 및 응용 연구실',
    professors: [
      {
        id: 10,
        name: '박근수',
      },
    ],
    location: '301동 414호',
    tel: '(02) 880-1828',
    acronym: 'CTA',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/NBGT3yXsQYg',
    },
  },
  {
    id: 29,
    name: '컴퓨팅 메모리 구조 연구실',
    professors: [
      {
        id: 19,
        name: '유승주',
      },
    ],
    location: '138동 313호',
    tel: '(02) 874-5296',
    acronym: 'CMA',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2020Lab_sungjoo.yoo_%EC%9C%A0%EC%8A%B9%EC%A3%BC%EA%B5%90%EC%88%98%EB%8B%98.pptx',
      youtube: null,
    },
  },
  {
    id: 30,
    name: '통합설계 및 병렬 처리 연구실',
    professors: [
      {
        id: 31,
        name: '하순회',
      },
    ],
    location: '301동 455-1호',
    tel: '(02) 880-7292',
    acronym: 'CAP',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2020Lab_sha_%ED%95%98%EC%88%9C%ED%9A%8C%EA%B5%90%EC%88%98%EB%8B%98.pdf',
      youtube: 'https://youtu.be/oCSR212S7DQ',
    },
  },
  {
    id: 31,
    name: '프로그래밍 연구실',
    professors: [
      {
        id: 20,
        name: '이광근',
      },
    ],
    location: '302동 312-2호',
    tel: '(02) 880-1865',
    acronym: 'ROPAS',
    introductionMaterials: {
      pdf: null,
      youtube: 'https://youtu.be/wDunxRTga_Q',
    },
  },
  {
    id: 32,
    name: '휴먼-컴퓨터 인터액션 연구실',
    professors: [
      {
        id: 11,
        name: '서진욱',
      },
    ],
    location: '302동 314-2호',
    tel: '(02) 880-7044',
    acronym: 'HCI',
    introductionMaterials: {
      pdf: 'https://cse.snu.ac.kr/sites/default/files/node--notice/2020Lab_jseo_%EC%84%9C%EC%A7%84%EC%9A%B1%EA%B5%90%EC%88%98%EB%8B%98.pdf',
      youtube: null,
    },
  },
];

export const getMockDegreeRequirements = async (): Promise<DegreeRequirements[]> => {
  return [
    {
      id: 1,
      year: 2023,
      attachment: {
        name: '2023학번 졸업 규정.pdf ',
        url: 'http://cse-dev-waffle.bacchus.io/sites/default/files/node--page/2023%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80830,
      },
    },
    {
      id: 2,
      year: 2022,
      attachment: {
        name: '2022학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2022%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80560,
      },
    },
    {
      id: 3,
      year: 2021,
      attachment: {
        name: '2021학번 졸업 규정.pdf ',
        url: 'https://cse.snu.ac.kr/sites/default/files/node--page/2021%ED%95%99%EB%B2%88%20%EC%A1%B8%EC%97%85%20%EA%B7%9C%EC%A0%95.pdf',
        bytes: 80630,
      },
    },
    {
      id: 4,
      year: 2020,
      attachment: {
        name: '2020학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 5,
      year: 2019,
      attachment: {
        name: '2019학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 6,
      year: 2018,
      attachment: {
        name: '2018학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 7,
      year: 2017,
      attachment: {
        name: '2017학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 8,
      year: 2016,
      attachment: {
        name: '2016학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 9,
      year: 2015,
      attachment: {
        name: '2015학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 10,
      year: 2014,
      attachment: {
        name: '2014학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 11,
      year: 2013,
      attachment: {
        name: '2013학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 12,
      year: 2012,
      attachment: {
        name: '2012학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 13,
      year: 2011,
      attachment: {
        name: '2011학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 14,
      year: 2010,
      attachment: {
        name: '2010학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 15,
      year: 2009,
      attachment: {
        name: '2009학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 16,
      year: 2008,
      attachment: {
        name: '2008학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 17,
      year: 2007,
      attachment: {
        name: '2007학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 18,
      year: 2006,
      attachment: {
        name: '2006학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 19,
      year: 2005,
      attachment: {
        name: '2005학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 20,
      year: 2004,
      attachment: {
        name: '2004학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 21,
      year: 2003,
      attachment: {
        name: '2003학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 22,
      year: 2002,
      attachment: {
        name: '2002학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 23,
      year: 2001,
      attachment: {
        name: '2001학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 24,
      year: 2000,
      attachment: {
        name: '2000학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 25,
      year: 1999,
      attachment: {
        name: '1999학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 26,
      year: 1998,
      attachment: {
        name: '1998학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 27,
      year: 1997,
      attachment: {
        name: '1997학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 28,
      year: 1996,
      attachment: {
        name: '1996학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 29,
      year: 1995,
      attachment: {
        name: '1995학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 30,
      year: 1994,
      attachment: {
        name: '1994학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 31,
      year: 1993,
      attachment: {
        name: '1993학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
    {
      id: 32,
      year: 1992,
      attachment: {
        name: '1992학번 졸업 규정.pdf ',
        url: '',
        bytes: 0,
      },
    },
  ];
};
