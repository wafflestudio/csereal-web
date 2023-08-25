import { Club, Facilities } from '@/types/about';
import { Course } from '@/types/academics';

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
      '<p>​<a href="http://guardian.snucse.org">가디언</a>은 1999년 4월 30일에 창립된 서울대학교 보안 연구 동아리입니다.<br></p><p>가디언에서는 시스템, 웹, 네트워크, 모바일 등 다양한 분야에서 취약점을 찾고 공격과 방어 기법을 연구하며 해킹에 대한 열정을 펼치고 있습니다. 보안 분야의 진입장벽을 낮추기 위해 신입회원을 위한 교육을 진행하며, 개강총회와 종강총회에서 그동안 연구한 내용들을 발표하기도 합니다.<br>또한 DEF CON 등 다양한 보안 대회에 출전하는 등 활발한 활동을 진행하고 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>주로 3월에 신입회원을 모집하고 9월에도 비정기적으로 모집합니다.</p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>가디언은 전 세계의 내로라하는 해킹/보안 팀이 참가하는 해킹/보안 대회에서 꾸준히 좋은 성적을 내고 있다.<br>특히 2013년에는 전년보다 대회 참여 인원이 대폭 늘어 4월에 열린 PlaidCTF에서는 17위, 6월 예선과 8월 본선이 열린 DEFCON CTF에서는 보안 팀 Alternatives와 연합 참가하여 각각 17위(본선 진출), 8위를 차지했다.<br>이 밖에도 CodeGate, SECUINSIDE CTF, Ghost In The Shellcode 등 다양한 대회에 출전하여 실력을 쌓고 있다.</p><h3><strong>연락처</strong></h3><hr class="__se__solid"><p>이메일: snucsguard@gmail.com<br>홈페이지:&nbsp;<a href="http://guardian.snucse.org/">http://guardian.snucse.org</a></p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/%EA%B0%80%EB%94%94%EC%96%B8_%EB%A1%9C%EA%B3%A0.jpg?itok=Jk3PN69X',
  },
  {
    name: '바쿠스',
    engName: 'Bacchus',
    description:
      '<p><a href="http://bacchus.snucse.org/">바쿠스</a>는 서울대학교 컴퓨터공학부의 시스템 관리자 모임입니다.<br></p><p>바쿠스는 실습실 및 PC, 서버관리를 비롯해 다양한 서비스를 컴퓨터공학부 구성원에게 제공하는 일을 하고 있으며 이와 같은 일을 전문적이고 체계적으로 하기 위한 시스템 및 소프트웨어 연구 동아리입니다.<br>하나의 계정으로 실습실 PC 사용, 리눅스 서버 사용, 학부 커뮤니티 사이트 이용을 가능케 하는 통합 계정 서비스를 제공하고 있으며,&nbsp;<a href="http://www.snucse.org/">컴퓨터공학부 커뮤니티 사이트</a>를 개발, 관리 및 유지 보수하는 일도 담당하고 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>주로 3월, 9월에 신입회원을 모집하며, 신입회원은 수습기간 후 정회원으로 활동하게 됩니다.</p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>깃헙(<a href="https://github.com/bacchus-snu/">https://github.com/bacchus-snu/</a>) 에서 확인할 수 있습니다.</p><h3><strong>연락처</strong></h3><hr class="__se__solid"><p>이메일: contact@bacchus.snucse.org<br>홈페이지:&nbsp;<a href="https://bacchus.snucse.org/">https://bacchus.snucse.org</a></p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/bacchus_0.png?itok=1o1B-7or',
  },
  {
    name: '사커301',
    engName: 'Soccer301',
    description:
      '<p>2008년 결성된 학부 내 축구를 좋아하고 즐기는 학생들로 구성된 축구 동아리이다. 축구를 통한 체력 향상 및 친목 도모를 목표로 한다. 매주 주말 모여 훈련 및 친선경기를 하고 있으며 서울대 학내에서 열리는 총장배 구기대회, 공대 학장배 축구대회, 공대축제 축구대회 등 여러 대회에 꾸준히 참가해 좋은 성적을 내고 있다.<br></p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>상시 모집</p><h3><strong>대회 성적</strong></h3><hr class="__se__solid"><p>2009년 공대 학장배 3위<br>2013년 공대 축제 3위<br>2014년 공대 학장배 1위<br>2014년 공대 축제 1위</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/Soccer301_%EB%A1%9C%EA%B3%A0.jpg?itok=_wtIa-xW',
  },
  {
    name: '슈타인',
    engName: 'Stein',
    description:
      '<p>슈타인은 2012년 결성된 학부 내 경음악에 흥미와 소질이 있는 학생들로 구성된 밴드 동아리이다. 매년 신입 회원을 영입하여 기 단위로 운영되는 슈타인은 연중 수시로 합주를 하며 친목을 다지는 것을 목표로 한다.<br></p><p>주요 활동으로는 정기 공연 및 타 학교의 밴드들과의 교류 등이 있다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>매년 3월 중순경 가입신청을 받은 후, 오디션을 통해 선발한다.</p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>■ 17,18,19학번 활동중<br>■ 19학번 주1회 정기 연습<br>■ 3월 22일 타 동아리와 합동 공연<br>■ 신입들과의 회식</p><h3><strong>동아리 활동 계획</strong></h3><hr class="__se__solid"><p>■ 6월 28일 타 동아리와 합동 공연 예정<br>■ 7월 정기공연, 컴밤 공연 예정</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/Stein.PNG?itok=J8eVZbbZ',
  },
  {
    name: '스눕스',
    engName: 'SNUPS',
    description:
      '<p><a href="https://snups.org/">스눕스(SNUPS)</a>는 컴퓨터공학의 한 분야인 문제 해결 및 알고리즘을 공부하고 연구하는 동아리입니다.<br></p><p>다양한 난이도의 스터디를 통해 회원 개개인의 실력을 기르고 각종 온/오프라인 프로그래밍 대회에 참가하는 것이 주된 활동이며, 모든 서울대학교 학생이 참가할 수 있는 서울대학교 프로그래밍 경시대회(SNUPC)를 직접 준비 및 개최하고 있습니다.<br>매년 많은 회원들이 삼성 대학생 프로그래밍 경진대회(SCPC), 카카오 코드 페스티벌, Google Code Jam, Facebook Hacker Cup 등 여러 프로그래밍 대회에서 높은 성과를 거두고 있으며, 특히 최근 3년(2017~2019) 동안 SNUPS 회원들로 구성된 팀이 국제 대학생 프로그래밍 경시대회(ACM-ICPC) 국내 대회에서 대상을 차지하고 세계 대회에 출전해 메달을 획득한 바 있습니다.</p><p><br></p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>주로 3월 달에 신입생을 모집하며, 스눕스 구성원과의 개별 연락을 통해 상시 가입도 가능하다.</p><h3><strong>최근 동아리 활동 현황</strong></h3><hr class="__se__solid"><p>ipsc, icpc, 전국 대학생 프로그래밍동아리 연합 대회 등에 3인팀을 꾸려 출전하고 있으며, google code jam, facebook hacker cup나 기타 PS 대회에 스눕스 소속으로 개인출전하고 있다. 팀을 꾸릴 때는 SNUTOC(SNU Team Organization Contest) 등의 내부대회를 통해 실력과 분야에 맞는 팀원을 구성하여 출전하고 있다.</p><p>2019년 ACM-ICPC World Final 은메달 (7위)<br>2018년 ACM-ICPC World Final 은메달 (5위)<br>2017년 ACM-ICPC World Final 금메달 (3위)<br>2018년 ACM-ICPC Asia Taipei Regional Contest 3위<br>2017년 ACM-ICPC Asia Tsukuba Regional Contest 2위<br>2017년 ACM-ICPC Asia Hua-Lien Regional Contest 3위<br>2016년 ACM-ICPC Asia Nha Trang Regional Contest 1위<br>2016년 ACM-ICPC Asia Bangkok Regional Contest 5위<br>2016, 2017, 2018년 한국 대학생 프로그래밍 경시대회 대상 및 다수<br>2018년 UCPC 2등상 및 다수<br>2016, 2017, 2018년 SCPC 1등상 및 다수<br>2017년 LG CNS Code Monster 2등상 및 다수<br>2016년 LG CNS Code Monster 1등상 및 다수<br>2017, 2018년 카카오 코드 페스티벌 1등상 및 다수<br>2016, 2018년 Google Code Jam World Final 진출<br>2016, 2017, 2018년 Facebook Hacker Cup Final Round 진출<br>2017, 2018년 Code Festival Final Onsite 진출<br>2016년 Russian Code Cup Final Round 진출</p><h3><strong>연락처</strong></h3><hr class="__se__solid"><p>홈페이지:&nbsp;<a href="https://snups.org/">https://snups.org</a></p>',
  },
  {
    name: '와플스튜디오',
    engName: 'Waffle Studio',
    description:
      '<p>서울대학교 컴퓨터공학부 웹/앱 개발 동아리 와플스튜디오는 웹/앱 서비스 개발을 통해 개인의 개발 실력 향상을 도모합니다. 또한 회원 간의 친목을 추구하여 개발자 간의 커뮤니티 형성을 목적으로 합니다.</p><p>와플스튜디오에서는 프로젝트, 스터디, 코딩모임 등 개발과 관련된 다양한 활동들이 진행됩니다. 프로젝트를 통해 개발 결과물을 도출하고, 나아가 사람들에게 유용하고 실험적이며 재미있는 서비스로 기여합니다. 현재 본교 학생들을 대상으로 출시한 다양한 서비스를 운영하고 있으며 더하여 여러 신규 프로젝트가 진행되고 있습니다. 또한 매년 2학기 백엔드, 프론트엔드, 그리고 모바일 개발에 관한 세미나를 정기적으로 개최하고 있습니다.</p><p><br></p><h3>신입회원 모집 시기</h3><hr class="__se__solid"><p><strong>Rookies</strong></p><p>매년 2학기 준회원인 Rookies를 선발합니다. 이들은 세미나와 과제를 통과하면 정회원인 Programmers로 승격할 수 있는 자격을 얻습니다.</p><p><strong>Programmers &amp; Designers</strong></p><p>매년 1학기, 2학기 정회원인 Programmers와 Designers를 선발합니다. 이들은 선발과 동시에 정회원의 자격이 주어지며 프로젝트와 스터디 등 진행 중인 활동에 자유롭게 참여하고, 활동을 주도할 수 있습니다.</p><h3>동아리 활동 현황</h3><hr class="__se__solid"><p>​<a href="https://snutt.wafflestudio.com/">SNUTT</a>​</p><p>2012년에 서비스를 시작한 서울대학교 시간표 작성 서비스 SNUTT가 2021년 개편 작업을 거쳐 현재까지 안정적이고 편리한 서비스를 제공하고 있습니다. 깔끔한 UI와 다양한 필터를 이용해 강의를 검색하고 시간표를 만들 수 있습니다. 더하여 곧 강의평 기능도 추가될 예정입니다.</p><p>​<a href="https://siksha.wafflestudio.com/">식샤</a>​</p><p>2015년 초 기존 식단 어플리케이션들의 문제점을 보완하기 위해 개발되었고 2021년에 리뉴얼되었습니다. 날짜와 시간대별로 서울대학교 식단 상세정보뿐만 아니라 식당 운영시간과 위치정보를 제공합니다. 또한 식단 리뷰 기능까지 추가되어 식단에 대한 평가를 남기고 사진도 직접 올릴 수 있습니다.</p><p><strong>스누보드</strong></p><p>현재 학과별로 흩어져있는 서울대학교 과별 홈페이지를 하나의 모바일 플랫폼으로 통합한 서비스입니다. 원하는 학과와 태그별로 공지사항을 모아볼 수 있으며 새로운 글이 올라왔을 때 푸시 알림을 받아볼 수 있습니다. 구독(팔로우) 중인 공지사항 중에 필요한 내용을 검색하는 것도 가능합니다. 2021년 8월 초기 버전이 출시되었고, 꾸준한 업데이트가 진행되고 있습니다. 현재 앱스토어와 구글플레이스토어에서 다운로드 받을 수 있습니다.</p><p><strong>괌</strong></p><p>개발 프로젝트 팀을 만들어주고, 팀원간 소통을 가능하게 해주는 앱 서비스입니다. 2021년 9월 Google Store에 배포되었으며, 10월 현재 IT SNS로 거듭나기 위해 Version 2.0을 개발 중입니다.</p><h3>연락처</h3><hr class="__se__solid"><p>이메일: <a href="mailto:master@wafflestudio.com">master@wafflestudio.com</a>​</p>',
    imageURL: '',
  },
  {
    name: '유피넬',
    engName: 'UPNL',
    description:
      '<p><a href="https://upnl.org/">유피넬</a>은 컴퓨터공학부의 소프트웨어 개발 동아리입니다.</p><p>동아리원들이 모여 여러 프로젝트를 진행하고 유용한 소프트웨어를 만들어내는 것을 목표로 하며, 이를 위해 주기적으로 내부 워크샵과 아이디어 제안회 등 서로의 지식과 아이디어, 성과를 공유하는 자리를 가집니다. 여러 대의 서버를 보유하고 있어 동아리원들을 위한 소스 코드 관리 시스템과 위키를 직접 서비스하고 있으며, 서버가 필요한 게임이나 웹 서비스 등의 프로젝트도 진행할 수 있습니다. 그 외에도 몇 대의 PC와 다양한 개발 관련 기기 및 서적이 갖추어져 있습니다.</p><p>2019년 현재 (외부 기업의) 동아리 지원 프로그램에 소속되어 활동비 및 행사 지원과 현직 소프트웨어 개발자 멘토링 등의 도움을 받고 있습니다.</p><h3><strong>신입회원 모집 시기</strong></h3><hr class="__se__solid"><p>3월 중에 공개적으로 신입회원들을 모집하고 OT를 실시합니다. 개발 경험이 없는 신입회원들을 위해서 Git과 C#을 가르치는 세미나를 매년 진행하고 있습니다.</p><h3><strong>동아리 활동 현황</strong></h3><hr class="__se__solid"><p>2019년<br>■ 오브의마검사<br>■ 패러독스<br>2018년<br>■ 막고라<br>■ 눈을떠보니</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--student-club/upnllogo_0.png?itok=BJdQ6N6u',
  },
];

export const facilities: Facilities = {
  facilitiesList: [
    {
      id: 0,
      name: `학부 행정실`,
      description: `<p>컴퓨터공학부 행정실에서는 학부생, 대학원생, 교수를 위한 다양한 행정 업무를 돕고 있다. 각 업무별 담당자는 <a href="https://cse.snu.ac.kr/sites/all/libraries/mediawiki/index.php?title=/people/staff_%ED%96%89%EC%A0%95%EC%8B%A4&action=edit&redlink=1">직원 목록</a>을 참조.</p>`,
      location: `301동 316호`,
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-landscape-crop/public/node--facility/admin.JPG?itok=-ilXd4wR',
    },
    {
      id: 1,
      name: 'S-Lab',
      description:
        '<p>S-Lab은 학생들이 학습, 개발, 토론 등 다양한 목적으로 사용할 수 있는 공간이다. 안쪽에는 중앙의 공간과 분리된 4개의 회의실이 있다. 고성능 PC와 Mac, 스마트 TV, 빔 프로젝터 등의 장비와 회의실을 갖추고 있다.</p>',
      location: '301동 315호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--facility/IMG_5546.jpg?itok=NvCi07VP',
    },
    {
      id: 2,
      name: '소프트웨어 실습실',
      description:
        '<p>소프트웨어와 관련된 실습 수업 시에 사용된다. 수업 시간이 아닌 경우에는 컴퓨터공학부 학생이라면 누구나 자유롭게 사용할 수 있다. 과거에는 "NT실"이라고 불리기도 했다.</p>',
      location: '302동 311-1호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--facility/1.%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%8B%A4%EC%8A%B5%EC%8B%A4.jpg?itok=SVfNrk8b',
    },
    {
      id: 3,
      name: '하드웨어 실습실',
      description:
        '<p>하드웨어 관련 실습 수업에 사용된다. 오실로스코프, 직류 전원 공급기, 함수 발생기, 멀티미터, Intel Core i7 PC 등의 장비와 각종 공구를 이용할 수 있다. 논리설계나 하드웨어시스템설계 등의 수업을 수강하는 학생들은 이곳에서 많은 시간을 보내게 된다.</p>',
      location: '302동 310-2호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--facility/hw_lab_0.jpg?itok=P53mcJL5',
    },
    {
      id: 3,
      name: '해동학술정보실',
      description:
        '<p><a href="http://haedong.snu.ac.kr/">해동학술정보실</a>은 전기공학부와 컴퓨터공학부 학생들을 위한 도서관이다. 정기 간행물 및 논문을 열람하거나 대여할 수 있다. 조용한 환경에서 공부할 수 있는 230석 규모의 열람실이 딸려 있다.</p>',
      location: '310동 312호 ',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--facility/haedong_0.JPG?itok=O_2aXCK2',
    },
    {
      id: 4,
      name: '학생 공간 및 동아리 방',
      description:
        '<p>과방은 학부생들의 주 생활 공간이다. 끊임없이 나오는 과제를 해치우는데 사용되는 수십 대의 Intel Core i7 PC가 구비되어 있으며, 오랫동안 컴퓨터를 하느라 편할 날이 없는 학생들의 눈·목·손목 등의 휴식을 위한 편의 시설도 마련되어 있다. 학생들이 기증하거나 잠시 빌려준 각종 서적·만화책·보드 게임 등이 있어 공부뿐만 아니라 여가도 즐길 줄 아는 학생들을 위한 환경이 조성되어 있다.</p>',
      location: '301동 315호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-landscape-crop/public/node--facility/301%EB%8F%99%20314%ED%98%B8%20%EA%B3%BC%EB%B0%A9.jpg?itok=p36Nt-sl',
    },
    {
      id: 5,
      name: '세미나실',
      description:
        '<p>세미나실은 301동과 302동에 있다. 컴퓨터공학부 대학원생들이 온라인예약하여 사용할 수 있다.</p>',
      location:
        '301동 417호, 301동 521호(MALDIVES), 301동 551-4호(HAWAII), 302동 308호, 302동 309-1호, 302동 309-2호, 302동 309-3호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--facility/302%EB%8F%99309-1%ED%98%B8_20190301.jpg?itok=dww7DhCf',
    },
    {
      id: 5,
      name: '서버실',
      description:
        '<p>컴퓨터공학부의 실습 서버, 통합계정 서버, 프린터 서버 등 각종 서버 및 워크스테이션을 관리하는 곳이다. 학부 서버는 학생 동아리인 <a href="https://cse.snu.ac.kr/sites/all/libraries/mediawiki/index.php?title=/student-club/%EB%B0%94%EC%BF%A0%EC%8A%A4&action=edit&redlink=1">바쿠스<a/>에서 관리하고 있다.</p>',
      location: '302동 310-2호',
      imageURL:
        'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--facility/%EC%84%9C%EB%B2%84%EC%8B%A4.JPG?itok=_7gF4r5h',
    },
  ],
};

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

export const undergraduateGuideData = `<div>
<h3>수강신청</h3>
<ol className="list-decimal">
  <li>
    수강 신청 수강 신청은 1학기 (당해 연도 1월 또는 2월 중) 2학기 (당해 연도 7월 또는 8월
    중)
  </li>
  <li>수강 변경은 매 학기 수업 주수 1주 이내 (6학점 이내)</li>
  <li>수강 취소는 수업 주수 2/4선 이내</li>
  <li>
    수강 신청 학점 (학기 당)은 18학점 이내
    <ol className="list-[lower-alpha]">
      <li>직전 2개 학기 평점 평균이 3.3 이상일 때 21학점까지 신청할 수 있음</li>
      <li>
        직전 학기 학사 경고 (한 학기 성적 평점 평균이 1.7에 미달되거나 3 교과목 이상
        또는 6학점 이상이 'F')를 받은 경우는 학기당 15학점까지만 수강 신청 가능
      </li>
    </ol>
  </li>
</ol>
<div>
  <h4>수강에 관한 내규</h4>
  <p>
    유사 과목 목록에 따라 중복 수강을 금지한다. (2004학번부터 적용) 컴퓨터공학부에 개설된
    과목을 타과의 유사 과목으로 대체 금지. 단, 타과 과목이 컴퓨터공학부 과목보다 심화된
    과목의 경우 예외 인정.
  </p>
</div>

<div>
  <h4>타과과의 유사 교과목 목록</h4>
</div>

<div>
  <h3>휴학</h3>
  <ol className="list-decimal">
    <li>휴학 신청은 등록 기간 또는 수업 주수 2/4선 (8주) 이내</li>
    <li>휴학원의 유효 기간은 1년이며, 계속 휴학하고자 할 경우에는 휴학원을 다시 제출</li>
    <li>휴학 기간은 총 6학기</li>
    <li>복학원 제출은 등록 기간 2주 전에 신청</li>
  </ol>
</div>

<div>
  <h3>졸업</h3>
  <ol className="list-decimal">
    <li>
      이수 학점은 130학점 이상 (1996학번부터)
      <ul className="list-disc">
        <li>
          교양 과목
          <ul className="list-disc">
            <li>(1996학번 ~ 2001학번) 36학점 이상</li>
            <li>(2002학번 ~ 2004학번) 37학점 이상</li>
            <li>(2005학번 ~ 2008학번) 54(55)학점 이상</li>
            <li>(2009학번) 55(56)학점 이상</li>
            <li>(2010학번) 56학점 이상</li>
            <li>(2011학번 ~ 2012학번) 53학점 이상</li>
            <li>(2013학번) 47학점 이상 / 사회성 교과목군, 창의성 교과목군 별도 이수</li>
            <li>
              (2014학번 ~ 2015학번) 44학점 이상 / 사회성 교과목군, 창의성 교과목군 별도 이수
            </li>
          </ul>
        </li>
        <li>
          전공 과목
          <ul className="list-disc">
            <li>(1996학번 ~ 2007학번) 51학점 이상</li>
            <li>(2008학번 ~ 2010학번) 60학점 이상</li>
            <li>(2011학번 ~ 2015학번) 63학점 이상</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>전공 및 전체 이수 학점 평점 평균 2.0 이상</li>
  </ol>
</div>

<div>
  <h3>복수전공</h3>
  <ol>
    <li>소속 전공 과정을 포함하여 2개 이상의 전공 과정을 이수함</li>
    <li>
      상호 가능한 대학으로 하며, 지원 자격은 3개 정규학기 이상 이수하고 36학점 이상 취득한
      재학생(복학예정자 포함)으로 성적 평점평균이 2.7이상인 자
    </li>
    <li>
      이수 규정 (2004학년도 1학기부터 시행)
      <ul>
        <li>
          ~2007학번까지
          <ul>
            <li>
              컴퓨터공학부 전공필수 포함하여 51학점 이상 이수하여야 함 (컴퓨터공학부 주전공
              학번과 동일한 이수규정)
            </li>
            <li>
              공대공통교과목(산업공학개론, 전기공학개론, 재료공학개론, 기계공학개론) 중 한
              과목(3학점)을 이수하여야 함.
            </li>
          </ul>
        </li>
        <li>
          2008학번 이후
          <ul>
            <li>
              컴퓨터공학부 전공필수 포함하여 39학점 이상 이수하여야 함 (컴퓨터공학부 주전공
              학번과 전공필수가 동일함)
            </li>
            <li>
              공대공통교과목(산업공학개론, 전기공학개론, 재료공학개론, 기계공학개론 등)
              이수하지 않아도 됨.
            </li>
          </ul>
        </li>
        <li>
          복수전공 이수자는 해당 학부에서 정한 전공 교과목 학점을 이수하여야 하며, 각 전공에
          중복되는 교과목은 아래의 경우를 제외하고는 이중으로 인정하지 아니한다.
          <ul>
            <li>
              복수전공 이수 시 소속 학과(부)와 복수전공 학과(부)의 교과과정에서 전공과목으로
              공통 인정하는 과목(단과대학 내 공통과목 포함)은 9학점까지, 소속 학과(부)와
              복수전공 학과(부)의 교과과정에서 공통 인정하는 타 학과(부)의 과목(단과대학
              내의 공통과목 포함)은 3학점까지 전공학점의 이수로 중복하여 인정할 수 있다.
            </li>
            <li>
              학점인정은 본인의 의사에 따라 인정 받아야 할 필요가 있는 쪽으로 학점 수를
              계산하며, 특정한 하나의 과목이 주전공, 복수전공, 부전공, 연합전공, 연계전공,
              학생설계전공 간에 공통적으로 필수과목인 경우에는 한번 이수한 것으로 각 전공의
              필수를 충족한 것으로 본다.
            </li>
            <li>
              과목을 중복으로 인정한 경우에도 학생이 이수한 총 학점 수의 산정에는 이중으로
              계산하지 아니한다.
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</div>

<div>
  <h3>부전공</h3>
  <ol>
    <li>
      이수 규정
      <ul>
        <li>
          ~2007학번까지
          <ul>
            <li>컴퓨터공학부 전공필수 포함하여 24학점 이상 이수하여야 함</li>
            <li>전공필수: 자료구조, 시스템프로그래밍, 컴퓨터구조</li>
            <li>전공선택: 컴퓨터공학부 전공교과목 중 선택</li>
          </ul>
        </li>
        <li>
          2008학번 이후
          <ul>
            <li>컴퓨터공학부 전공필수 포함하여 21학점 이상 이수하여야 함</li>
            <li>전공필수: 자료구조, 시스템프로그래밍, 컴퓨터구조</li>
            <li>전공선택: 컴퓨터공학부 전공교과목 중 선택</li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</div>

<div>
  <h3>전과(부) 신청</h3>
  <ol>
    <li>
      전과(부) 선발기준
      <ul>
        <li>
          전과(부)의 전출ㆍ입 인원은 대학별로 정한 학과별 학년 정원의 100분의 20 이내로 하며
          전출 및 전입자 선발 기준은 대학장이 따로 정한다. 단, 약학대학 전입 인원은 편입학
          인원을 포함하여 약학대학 입학정원을 초과할 수 없다.
        </li>
      </ul>
    </li>
    <li>
      신청자격 및 허용범위
      <ol>
        <li>
          신청 자격
          <ul>
            <li>
              매 학년도말 현재 4개 학기 이상 등록하고 2학년 수료학점(66학점) 이상을 취득한
              자로서 3학년 수료학점(98학점)에 미만이 되는 자, 다만 의과대학 및 수의과대학
              학생의 경우에는 예과과정 등록학기 및 이수학점을 합산하여 지원할 수 있으며,
              약학대학은 2학년 수료학점을 계절학기 포함한 66학점을 적용한다.
            </li>
            <li>전과(부) 지원시의 취득학점이며, 계절학기 이수 중인 학점은 제외</li>
          </ul>
        </li>
        <li>
          허용범위 및 제한
          <ul>
            <li>사범계는 사범계 각 학과(부) 상호간에만 허용한다.</li>
            <li>
              사범계 이외의 학과(부)는 사범계 이외의 각 학과(부) 상호간에만 허용한다. 다만,
              의학계, 수의학계 및 간호학계로의 전과(부)는 허용하지 아니한다.
            </li>
            <li> 전공을 예약하고 입학한 자(편입학자 포함)는 전과(부) 불가</li>
            <li>
              지원 학과(부)는 1개 학과(부)로 제한한다. (이중으로 지원할 경우 지원 학과(부)
              모두를 취소)
            </li>
          </ul>
        </li>
      </ol>
    </li>
    <li>지원서 기간:매년 1월 중순</li>
  </ol>
</div>
</div>`;

export const courseData1: Course = {
  id: 0,
  name: '소프트웨어 개발의 원리와 실습',
  classification: '교양',
  code: 'M2177.004300',
  credit: 4,
  year: '1학년',
  description:
    '개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다. 개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다. 개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다.',
};

export const courseData2: Course = {
  id: 0,
  name: '소프트웨어 개발의 원리와 실습',
  classification: '전공선택',
  code: 'M2177.004300',
  credit: 4,
  year: '2학년',
  description:
    '개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다.',
};

export const courseData3: Course = {
  id: 0,
  name: '소프트웨어 개발의 원리와 실습',
  classification: '교양',
  code: 'M2177.004300',
  credit: 3,
  year: '3학년',
  description:
    '개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다.',
};

export const courseData4: Course = {
  id: 0,
  name: '소프트웨',
  classification: '전공필수',
  code: 'M2177.004300',
  credit: 2,
  year: '4학년',
  description:
    '개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다.',
};

export const courseChangesData = [
  2020, 2019, 2018, 2017, 2016, 2015, 2013, 2012, 2011, 2010, 2009, 2008,
].map((year) => ({
  year,
  description: `${year}학년도 1학기 시행 교과과정 변경`,
}));
