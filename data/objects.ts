import { readFileSync } from 'fs';

import { Club, Direction, Facilities } from '@/types/about';
import { Course } from '@/types/academics';
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
  ResearchLab,
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
    imageURL: '',
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
      id: 0,
      name: `학부 행정실`,
      description: `<p>컴퓨터공학부 행정실에서는 학부생, 대학원생, 교수를 위한 다양한 행정 업무를 돕고 있다. 각 업무별 담당자는 <a href="/people/staff">직원 목록</a>을 참조.</p>`,
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

export const directions: Direction[] = [
  {
    name: '대중교통',
    engName: 'public-transit',
    description: `<p><strong>지하철 2호선 낙성대역</strong><br></p><p>낙성대역 4번 출구로 나와 직진, 주유소에서 좌회전하여 제과점 앞 정류장에서 마을버스 관악02를 타고 제2공학관에서 내립니다.</p><p><br></p><p><strong>지하철 2호선 서울대입구역</strong></p><p>서울대입구역 3번 출구로 나와 관악구청 방향으로 직진하여 학교 셔틀 버스나 시내버스 5511 또는 5513을 타고 제2공학관에서 내립니다. 제2공학관행 셔틀 버스는 아침 8시부터 10시까지 15분 간격으로 월요일부터 금요일까지 운행됩니다.</p><p><br></p><p><strong>지하철 2호선 신림역</strong></p><p>신림역 3번 출구에서 나와 시내버스 5516을 타고 제2공학관에서 하차합니다.</p><p><br></p><p><strong>지하철 신림경전철 관악산역</strong><br></p><p>관악산역 1번 출구로 나와 직진, 관악산입구.관악아트홀.중앙도서관 정류장에서 5511 또는 5516 시내버스를 타고 제2공학관에서 내립니다.</p><p><br></p><p><strong>서울대학교 정문 경유 버스</strong></p><p>서울대학교 정문을 경유하는 버스를 이용해서 정문에 내린 후 교내순환 셔틀버스, 시내버스 5511 또는 5513을 타고 제2공학관으로 갈 수 있습니다.</p><table style="margin: 1em 0px; border-collapse: collapse; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><tbody><tr><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>버스 번호</div></th><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>종점</div></th><th style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(236, 236, 236); text-align: center;"><div>경유지</div></th></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>5517</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>시흥벽산APT ↔ 중앙대</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대, 노량진</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>6511</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 구로동</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>신대방역, 신도림역</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>6512</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 구로동</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대입구역, 신림역, 영등포</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>6513</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 철산동</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>신림역, 대방역, 영등포</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>750A, 750B</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 덕은동</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>관악구청, 상도터널, 서울역, 신촌, 수색역</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>5528</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>가산동 ↔ 사당동</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>금천경찰서, 신림사거리, 서울대, 낙성대</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>6514</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 양천</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>신림역, 대방역, 영등포역, 당산역</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>501</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 종로2가</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>상도동, 신용산, 서울역</div></td></tr><tr><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>6003</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>서울대 ↔ 인천공항</div></td><td style="border: 1px solid rgb(153, 153, 153); padding: 0.25em 0.5em; background-color: rgb(252, 252, 252);"><div>대림역, 목동역, 88체육관, 김포공항</div></td></tr></tbody></table>`,
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

/* 연구 */

export const researchGroupsData: ResearchGroups = {
  description:
    '세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터관련 주요 학회에서 국제학술지 편집위원, 국제학술회의 위원장, 기조연설자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.',
  groups: [
    {
      name: '그래픽스 및 사람 중심 컴퓨팅',
      id: 0,
      description:
        '<p><strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">사람 중심의 시각기반 컴퓨팅 기술</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">컴퓨터 그래픽스와 HCI 기술은 사람과 컴퓨터 간의 원활한 소통을 추구한다. 현대 사회의 수많은 복잡한 문제들이 적절한 시각화와 사람의 뛰어난 시각 인지 능력에 기대어 그 해결에 실마리를 찾아낼 수 있다. 사람 중심의 시각기반 컴퓨터 기술은 사람에게 편리한 컴퓨터, 컴퓨터 계산에 있어서 사람의 능력 활용, 궁극적으로는 사람과 컴퓨터의 협력을 추구한다. 보다 구체적으로는 형상 모델링, 다차원 정보 가시화, 영상처리/분석, 동작분석 및 합성, 대화형 아바타 제어, 지능형 가상 캐릭터, 사용자 인터페이스 디자인 및 정보시각화 연구 를 수행하고 있다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">미래 인터넷이 열어갈 소통과 교류의 미래 세상</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">인터넷, 무선 네트워크, 데이터 센터 네트워크, 온라인 소셜 네트워크를 포함한 모든 네트워크의 프로토콜과 알고리즘을 연구 개발하고 있다. 또한 인터넷 보안과 프라이버시 주제도 최근 연구하고 있다. 구체적으로, 인터넷의 구조 설계, 인공지능 기술의 네트워킹 최적화 적용, 네트워크 가상화 기술 개발, 이동/무선통신의 자원관리, IoT 통신 프로토콜 및 IoT 시스템 개발, 통신 트래픽 분석, 블록체인, 인터넷 인증, 프라이버시 보호 기술, 실내 측위 등 미래의 통신과 인터넷 서비스를 선도할 핵심기술 개발에 집중하고 있다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">빅데이터에서 가치를 추출하는 연구</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">본 연구 그룹은 빅데이터, 데이터베이스, 데이터 마이닝, 기계 학습 및 딥러닝에 관한 연구를 수행하고 있다. 주요 연구 주제로 기계 학습 성능 향상을 위한 DBMS Support, 다양한 데이터베이스 응용을 위한 데이터 관리 기법 및 저장 기법, 데이터 마이닝, 정보 검색, 추천 시스템, 자연어 처리, 딥러닝, 웹/소셜네트워크 등의 그래프 분석, 경량 및 자동 기계 학습, 금융 AI 등이 있다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">전 지구적인 서비스를 가능하게 하는 핵심 소프트웨어</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">페이스북, 인스타그램, 유튜브, 카카오톡, 네이버 등 적게는 수천만명에서 많게는 수억명 이상이 사용하는 서비스를 가능하게 하는 핵심 경쟁력은 시스템 소프트웨어 기술이다. 시스템 소프트웨어는 최신의 하드웨어 상에서 각종 서비스들이 더 빠르고, 에너지를 덜 소모하며, 예상치 못한 오류나 외부로부터의 침입, 공격으로부터 더 신뢰성있고 안전하게 수행되도록 지원한다. 구체적으로는 단일 시스템의 하드웨어 자원 관리를 담당하는 운영체제 기술과 각종 서비스들을 손쉽게 개발할 수 있도록 지원해 주는 컴파일러 및 소프트웨어 플랫폼 기술, 사용자 수의 증가에 따른 확장성 문제를 해결하기 위한 분산/병렬시스템 기술, 인공지능 및 빅데이터 시스템 등에 관한 연구를 포함한다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">이론과 실제가 만나는 연구</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">컴퓨터이론은 컴퓨터공학의 기초학문으로서 효율적인 알고리즘 개발, NP완전 개념, 현대 암호학 이론 등으로 컴퓨터공학 발전에 근본적인 기여를 하여 왔다. 우리 연구그룹에서는 기본적으로 효율적인 알고리즘 개발에 대해 연구한다. 특히, 빅데이터 분석 알고리즘, 멀티코어와 캐시 구조에 적합한 실용적인 알고리즘, 유전 알고리즘에 대한 연구를 수행하고 있고, 보안 및 금융공학 등 응용분야에 활용되는 연구를 하고 있다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">인간처럼 학습하는 컴퓨터</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">인공지능은 사람의 인지, 사고, 기억, 학습을 모사함으로써 효율적으로 문제를 해결하는 방식을 연구하는 컴퓨터공학의 한 분야이다. 현재 머신러닝이론, 컴퓨터 시각, 텍스트마이닝, 비디오분석, 추천 에이전트, 뇌신경망 분석, 생태계 모델링 등 다양한 이론 및 응용 연구를 수행하고 있다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">스마트 임베디드 시스템이 지배하는 미래</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">앞으로의 컴퓨팅은 책상위에 놓여 있는 PC에 그치지 않고, 스마트폰, 자동차, 항공기, 도로, 건물, 교량 등 우리 생활 곳곳에 내재되어 편리함과 안전함을 제공하게 된다. 이를 위해서는 컴퓨팅, 메모리, 배터리 용량이 제한되어 있는 임베디드 컴퓨터에 지능형 서비스를 최적화하여 구현하는 것이 핵심 기술이 된다. 임베디드 시스템 연구그룹은 컴퓨터 SW 뿐아니라, CPU 구조, 메모리 구조, 멀티코어 등의 컴퓨터 HW적 특성을 고려하여 최적화된 시스템 설계를 하는 다양한 연구를 진행하고 있다. 이러한 연구는 앞으로 더욱 각광 받게될 인공지능 기술이 우리 일상 생활 곳곳으로 내재화되는 것을 가능하게 할 것이다.</span>​</p>',
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
        '<p>​<strong style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">SW 원천기술, 즐거운 프로그래밍 신세계를 여는 핵심 엔진</strong><br style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">소프트웨어의 현재 기술은 미개하다. 미래에는 지금과 같은 수준으로 소프트웨어가 만들어지지 않을 것이다. 소프트웨어 개발에 사용하는 언어는 나날이 상위의 수준으로 올라 갈 것이고, 소프트웨어 개발을 돕는 도구들은 엄밀한 논리의 정교한 지능을 가지고 프로그래머들을 편하게 할 것이다. 따라서 오류 없이 작동할 소프트웨어를 개발하는 비용은 나날이 줄어들 것이고, 소프트웨어 개발자는 밤샘하는 손기술의 고역에서 벗어나 크고 높은 논리의 기획자로 변모할 것이다. 우리는 이러한 미래를 가능하게 하는 연구를 진행한다. 프로그래밍 언어 이론 및 시스템 기술, 정적 분석 이론 및 응용 기술, 소프트웨어 개발 도구 기술, 자동 검증 기술 등을 연구한다.</span>​</p>',
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
      '<p><span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">서울대학교 컴퓨터연구소는 국내 여러 대학 간의 공동 연구와 산학 협동 체제 구축을 통한 컴퓨터 관련 신기술 및 미래지향적인 컴퓨터 개발 능력의 확보와 전문 연구 인력의 양성을 목적으로 본교를 비롯한 전국 20여 개 대학의 컴퓨터 관련 학과가 참여한 가운데 1989년에 설립되었다. 컴퓨터분야 최첨단 기술의 연구 개발과 전국의 각 대학, 산업체 및 연구소 간의 상호 협력적 연구의 구심점 역할을 하고 있으며, 정보기술(IT)과 관련하여 고급 인력 양성과 계속교육 등을 통하여 국내 컴퓨터 산업의 성장에도 크게 기여하고 있다. 차세대 컴퓨터 개발을 위한 선진 기술의 토착화 및 세계적인 첨단 기술의 선도를 위해 컴퓨터공학 및 컴퓨터과학의 제 분야에 대한 연구를 수행하고 있다.</span>​</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%B0%EA%B5%AC%EC%86%8C.jpg?itok=ZMrQExO0',
    websiteURL: 'https://ict.snu.ac.kr/',
  },
  {
    id: 1,
    name: '컴퓨터 미래 인재 양성 사업단',
    description:
      '<p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">서울대학교 컴퓨터미래인재양성단(BK21)은 글로벌 리더형 고급 컴퓨터 인재를 육성하기 위한 교육 비전 아래, 혁신적이고 탁월한 학문 가치를 창출할 수 있는 인재를 체계적으로 양성하기 위한 목적으로 설립되었다. 우리 사업단은 서울대학교 공과대학 컴퓨터공학부의 교수, 대학원생 그리고 신진연구인력 등, 구성원을 위한 연구 역량 강화 프로그램을 운영하고 있으며, 학술논문발표, 신기술 개발 및 다양한 산학협력 등 우수한 성과를 바탕으로, 국내외 컴퓨터공학 및 컴퓨터과학 제 분야의 첨단기술을 선도하고 있다. 우리 사업단은 IT 산업의 원동력이 되는 최고급 소프트웨어 전문가, 미래 컴퓨터 기술을 선도할 창의적 차세대 연구자, 컴퓨터 신산업을 창출할 사업가를 지속적으로 양성하기 위하여, 폭넓고 유연한 인재양성 사업을 수행하고 있다.</p><p style="margin: 1em 0px; color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">■ 장학금 지원프로그램: 한국연구재단/BK21플러스사업/미래기반 창의인재양성 사업</p>',
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-large/public/node--research_center/bk.png?itok=dZ1PxwkX',
    websiteURL: 'https://bkcse.snu.ac.kr/', // 삭제된 주소인 것 같음
  },
  {
    id: 2,
    name: 'AI 연구원',
    description:
      '<p>​<span style="color: rgb(51, 51, 51); font-family: Arial, Verdana, Helvetica, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">서울대학교 AI 연구원은 인공지능 및 딥러닝 관련 혁신 연구의 중심지로, 차세대 인공지능 기술 분야에서 세계를 이끄는 연구자들이 모여 대한민국과 전 세계의 과학·기술·경제 흐름을 바꾸는 획기적인 연구를 수행하는 것을 목표로 한다. 연구자들은 컴퓨터 비전, 음성 인식, 자연어 처리, 로봇 공학, 인공지능 비서, 인공 신경망, 머신러닝 소프트웨어 및 하드웨어, 대용량 병렬 처리, 분산 시스템, 컴퓨터 그래픽스, 확률 추론, 베이즈 통계, 통계 물리학, 정보 이론, 뉴로모픽 컴퓨팅, 뇌과학, 인지 과학 등 다양한 분야에서 활약하는 전문가들로 이루어져 있으며, 산·학·연이 서로 협력하여 센터의 중장기 비전을 실현하는 데에 힘쓰고 있다.</span>​<br></p>',
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
      imageURL: '',
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
      abbreviation: 'SIGGRAPH,SIGGRAPH-ASIA',
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

export const researchLabs: ResearchLab[] = [
  {
    ...simpleResearchLabs[0],
    description: readFileSync('data/htmls/lab0Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://datalab.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[1],
    description: readFileSync('data/htmls/lab1Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://dbs.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[2],
    description: readFileSync('data/htmls/lab2Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mllab.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[3],
    description: readFileSync('data/htmls/lab3Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://bi.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[4],
    description: readFileSync('data/htmls/lab4Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://dcslab.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[5],
    description: readFileSync('data/htmls/lab5Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://jhugestar.github.io/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[6],
    description: readFileSync('data/htmls/lab6Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://bda.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[7],
    description: readFileSync('data/htmls/lab7Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://biohealth.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[8],
    description: readFileSync('data/htmls/lab8Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://sf.snu.ac.kr/',
    group: '프로그래밍 시스템 및 SW공학',
  },
  {
    ...simpleResearchLabs[9],
    description: readFileSync('data/htmls/lab9Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://spl.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[10],
    description: readFileSync('data/htmls/lab10Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://vision.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[11],
    description: readFileSync('data/htmls/lab11Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://csl.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[12],
    description: readFileSync('data/htmls/lab12Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://rubis.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[13],
    description: readFileSync('data/htmls/lab13Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://arc.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[14],
    description: readFileSync('data/htmls/lab14Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://yongsoosong.github.io/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[15],
    description: readFileSync('data/htmls/lab15Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://quiqcl.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[16],
    description: readFileSync('data/htmls/lab16Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://seungwonh.github.io/ldi.html',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[17],
    description: readFileSync('data/htmls/lab17Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mrl.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[18],
    description: readFileSync('data/htmls/lab18Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mccl.snu.ac.kr/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[19],
    description: readFileSync('data/htmls/lab19Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://hcs.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[20],
    description: readFileSync('data/htmls/lab20Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mmlab.snu.ac.kr/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[21],
    description: readFileSync('data/htmls/lab21Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://davinci.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[22],
    description: readFileSync('data/htmls/lab22Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://ids.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[23],
    description: readFileSync('data/htmls/lab23Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://imo.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[24],
    description: readFileSync('data/htmls/lab24Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://aces.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[25],
    description: readFileSync('data/htmls/lab25Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://soar.snu.ac.kr/',
    group: '이론 및 금융공학',
  },
  {
    ...simpleResearchLabs[26],
    description: readFileSync('data/htmls/lab26Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://cglab.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[27],
    description: readFileSync('data/htmls/lab27Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://csap.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[28],
    description: readFileSync('data/htmls/lab28Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://theory.snu.ac.kr/',
    group: '이론 및 금융공학',
  },
  {
    ...simpleResearchLabs[29],
    description: readFileSync('data/htmls/lab29Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://cmalab.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드 시스템',
  },
  {
    ...simpleResearchLabs[30],
    description: readFileSync('data/htmls/lab30Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://iris.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드 시스템',
  },
  {
    ...simpleResearchLabs[31],
    description: readFileSync('data/htmls/lab31Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://ropas.snu.ac.kr/',
    group: '프로그래밍 시스템 및 SW공학',
  },
  {
    ...simpleResearchLabs[32],
    description: readFileSync('data/htmls/lab32Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://hcil.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
];
