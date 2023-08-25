import { Club, Facilities } from '@/types/about';

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
