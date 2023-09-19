import { MainContents } from '@/types/main';

export const getMockMainContents = async (): Promise<MainContents> => ({
  slides: [
    // isSlide === true인 새소식 중 최신 20개
    {
      id: 734,
      title: '제1회 진로 콘서트 개최',
      imageURL:
        'https://cse-dev-waffle.bacchus.io/api/v1/file/1694437217338_KakaoTalk_20230620_165839253.jpg',
      description:
        '컴퓨터공학부 제 1회 진로 콘서트가 2023년 6월 14일 오후 13시부터 14시까지 302동 105호에서 개최되었습니다. 본 학부 학부생들의 향후 진로에 대해 소개하는 시간으로 이번 진로콘서트의 주제는 대학원 진학과 학계 진로에 대한 내용으로 진행되었습니다. 연사로는 본 학부 출신인 컴퓨터공학부 원정담 교수님, KAIST AI대학원 신기정 교수님께서 강연을 맡아주셨으며, 사회는 컴퓨터공학부 강유 교수님께서 진행해 주셨습니다. 해당 행사에는 약 70명의 컴퓨터공학부 주전공생, 자유전공학부생, 다전공생들이 참석하여 대학원 진학의 필요성, 대학원 진학 및 학계 진로를 위해 무엇을 준비해야 하는 지 등에 대해 소개 및 질문하는 뜻깊은 시간이 되었습니다. ',
    },
    {
      id: 733,
      title: '컴퓨터공학부 학생과 “정” 나누기 행사 (관악산 소풍)',
      imageURL: 'https://cse-dev-waffle.bacchus.io/api/v1/file/1694437216488_20230519_110130.jpg',
      description:
        '우리 학부에서는 2023년 5월 19일, 화창한 봄날에 학생, 교수님들이 함께 관악산 소풍을 다녀오는 ‘정 나누기 행사(관악산 소풍)’를 개최하였습니다. 관악산 등반을 통해서 모두 같이 땀을 흘리며 학생들은 교수님들의 지극히 인간적인 면을 발견하고, 교수님들은 학생들과 추가적으로 소통하는 시간이었습니다. 교수님과 학생들은 건설환경종합연구소 앞 관악산 입구에서 출발하여 약 2~3시간 동안 등산하였고, 컴퓨터연구소(138동) 민상렬홀에서 모여서 점심식사를 같이 하며 자유롭게 얘기하는 시간을 가졌습니다. 정상까지 등반을 마친 학생들 중에서 추첨하여 아이패드 3대를 비롯한 다양한 경품들을 증정하는 특별한 시간도 가졌습니다. 이번 행사는 약 70여 명의 컴퓨터공학 주전공 학부생들과 10명의 교수님들께서 참석해주셨으며, 학생들과 교수님들께서 인간적인 정을 나누며 소통할 수 있는 의미 있는 행사였습니다.',
    },
    {
      id: 732,
      title: '제2회 리서치 페어(Research Fair) 개최',
      imageURL: 'https://cse-dev-waffle.bacchus.io/api/v1/file/1694437215620_5.jpg',
      description:
        '제2회 <Research Fair>, 우리 학부 대학원생 (석사·박사) 졸업연구논문 포스터 발표회가 2023년 6월 15일 오후 12시부터 2시까지 컴퓨터연구소 민상렬홀(서울대 138동)에서 개최되었습니다.  리서치 페어 (Research Fair)는 컴퓨터공학부 SNU 10-10 프로젝트 사업의 일환으로 2022년에 신설되었으며, 대학원 졸업 예정자들이 졸업연구논문을 포스터 발표하고 현장 피드백을 받을 수 있도록 기획된 행사입니다. 이번 행사는 2023년 8월 졸업예정자 34명(석사 15명, 박사 19명)의 자유로운 졸업연구논문 포스터 Q&A 시간을 기본으로, 조상연 삼성전자 부사장님의 키노트 강연과 케이터링 뷔페로 알차게 구성되었습니다. 포스터 발표한 졸업 예정자에게는, 학부 교수님 10분 및 외부 심사위원 2분의 심사 결과를 반영하여 우수포스터발표상 (석사 및 박사 각 1, 2, 3등)을 시상하였습니다.  이 날 참가한 100여 명의 주전공생, 자유전공학부생, 다전공생들에게는 우리 학부 대학원 연구자들의 다양하고 혁신적인 연구를 살펴보고 대학원 진학의 긍정적인 의미를 찾아가는 기회가 제공되었습니다',
    },
    {
      id: 731,
      title:
        '송현오 교수 연구진, 생성 모델의 이상 행동 탐지 기술 및 인공 신경망 깊이 압축 기술로 세계 선도',
      imageURL: 'https://cse-dev-waffle.bacchus.io/api/v1/file/1694437215001_1_0.jpeg',
      description:
        '효율적으로 최첨단 생성 모델의 이상 행동을 탐지하는 알고리즘 개발 ■ 인공신경망의 깊이를 압축하여 성능을 유지하면서 추론 속도를 가속화 송현오 교수 연구진이 생성 모델의 이상 행동 패턴을 사전에 파악하는 레드 팀 알고리즘 및 인공 신경망 깊이 압축 알고리즘을 개발하였다. 레드 팀 [1]: 대화 인공지능의 공격적인 답변과 같은 이상 행동을 이끌어내는 적대적 테스트 예시들을 구성하는 레드팀 알고리즘(BRT)를 개발하였다. BRT는 베이지안 최적화를 활용하여 주어진 유저 입력 집합에서 유저 입력을 선택 및 편집하여 효율적으로 적대적 테스트 예시들을 구성한다. 대화 인공지능, 텍스트 기반 이미지 생성 모델 등 다양한 생성 모델들에 대해 적은 비용으로 기존 연구보다 더 많고, 다양한 이상 행동을 탐지하는데 성공하였다. 본 연구 결과는 최첨단 생성 모델들의 이상 행동 패턴을 사전에 파악하고, 수정하는데 활용될 수 있다. 인공신경망 깊이 압축 [2]: 본 연구진은 인공신',
    },
    {
      id: 730,
      title: 'SNU CSE Faculty Openings Announcement (Spring 2023)',
      imageURL: '',
      description:
        'The Department of Computer Science and Engineering at Seoul National University is hiring three new faculty members. We are looking for individuals who have outstanding research capabilities and a passion for education across all areas of computer science and engineering, for the positions of tenure-track assistant professor, associate professor, and full professor. Applicants must have a doctoral degree at the time of application. The Department of Computer Science and Engineering at Seoul National University pursues world-class education and research. Currently, 35 professors work with over 400 undergraduate students and 350 graduate students, and we are continuously adding new professors to accommodate the growth of our undergraduate program. Currently, research and education are being conducted in all areas of computer science, including but not limited to algorithms, artificial intelligence, big data, bioinformatics, computational theory, computer systems, embedded systems, graphics, human-computer interaction, machine learning, networks, programming languages, software theory, system software, and vision. ◾ New hire targets: Three tenure-track assistant, associate, or full professors. ◾ Fields of recruitment: One each for computer networks or databases, all areas of computer science and engineering (for non-Koreans), and computer foundations. ◾ Application',
    },
    {
      id: 729,
      title: '제77회 전기 학위 수여식 졸업생 대표 연설자 장태준 학생 인터뷰',
      imageURL: '',
      description:
        '서울대학교 제77회 전기 학위 수여식에서 컴퓨터공학부 장태준 학생이 졸업생 대표 연사를 맡았습니다. 졸업생 대표 연설자는 각 단과대학에서 후보자를 추천하여 대학 본부에서 1명을 최종 선정하였습니다. 컴퓨터공학부에서는 자랑스러운 졸업생인 장태준 학생의 졸업연설 그리고 학부 생활에 대하여 인터뷰를 준비하여 진행하였으니 관심 있게 읽어주시기 바랍니다.   < 인터뷰 내용 > 1. 서울대학교 학위수여식 졸업생 연사 때 말씀해주신 ‘자신의 일상과 주변 사람들을 사랑하는 자세’가 대단히 본받음직한데, 이러한 긍정적인 태도를 갖기 위해 개인이 노력할 수 있는 점으로는 어떤 것이 있을까요? 제가 생각하는 개인적인 실천 방안은 당연하다고 느껴지는 것에 감사하는 것입니다.무엇인가 사랑하는 것은 항상, 자신을 사랑하는 것에서 시작하는 것 같습니다.자신에게 가장 당연한 것은 자신의 존재이니까요. “나를 소중하게 여길 줄 알아야, 다른 것들도 소중히 여길 수 있다.”는 진부한 말에 답이 있는 것 같습니다. :) 한편, 자신만큼 자신의 부족한 부분, 단점, 못난 에피소드를 잘 아는 사람이 없을 텐데,그것을 다 알면서도 자신을 사랑하는 것은 큰 노력이 필요하다고 생각합니다. 이때 가장 쉽게 할 수 있는 노력이 ‘나의 하루가 오늘도 어제처럼 시작할 수 있음에 대해 고민하고 감사하기’라고 생각합니다.자연스레, 당연한 것들에 감사할 수 있는 것 같습니다.“일상”이라는 단어는 그 자체로 당연하고 반복되는 느낌을 주는데,이 고민을 통해 그 속에 담긴 소중함을 느낀다면 좋을 것 같네요.  2. 힘든때에도 학업을 잘 이어가시고 대단한 학업적 성취를 거두셨는데(학부생 연구 경진대회 1위), 원하는 학업적 성과를 내거나 대학교에서의 공부에 어려움을 겪는 학우들에게 해 주실 수 있는 조언이 있을까요? 사실 객관적인 ',
    },
    {
      id: 728,
      title: '컴퓨터공학부 신입생을 위한 신입생 환영음악회',
      imageURL: 'https://cse-dev-waffle.bacchus.io/api/v1/file/1694437213000_1_0.jpg',
      description:
        '컴퓨터공학부 신입생의 입학을 축하하는 신입생 환영음악회 컴퓨터연구소와 컴퓨터공학부는 컴퓨터공학부 신입생의 입학을 진심으로 축하하는 의미에서 신입생 환영음악회를 2023년 2월 27일(월) 오후 4시에 개최하였습니다. 서울대학교 윤혜리 교수님(플루리스트), 주희성 교수님(피아니스트)을 비롯한 서울대학교 음악대학 재학생들의 세계적인 연주와 공연을 감상하며 뜻깊은 시간을 보냈습니다. 해당 행사에는 신입생과 가족분들을 포함하여 약 90명이 참석하였습니다.',
    },
    {
      id: 725,
      title: "전병곤 교수, 2022 대한민국 혁신창업상 'KAIST 총장상' 수상",
      imageURL: 'https://cse-dev-waffle.bacchus.io/api/v1/file/1694437211079_bgchun.jpg',
      description:
        '전병곤 교수가 창업한 프렌들리에이아이(FriendliAI)가 ‘2022 대한민국 혁신창업상 우수 혁신창업기업 공모전’에서 KAIST 총장상을 수상하였다. 프렌들리에이아이는 생성AI의 학습 및 서빙에 관한 기업들의 페인 포인트를 해결해주는 딥테크 기업으로, 우수한 AI플랫폼 기술력과 사업성에서 높은 평가를 받았다. AI 관련 기술이 없더라도 누구나 클라우드를 이용해서 생성AI를 개발하고 서빙할 수 있도록 AI모델 학습 및 서빙 서비스 ‘페리플로우(PeriFlow)’를 제공하고 있다. 프렌들리에이아이는 생성AI 시스템 관련 우수한 기술력을 기반으로 향후 생성 AI를 사용하는 더 많은 국내외 기업에 서비스를 제공할 계획이다. 최근에는 한국 AI 생태계를 혁신할 유망 스타트업을 선정하는 ‘코리아 AI 스타트업 100’에 선정된 바 있다. 대한민국 혁신창업',
    },
  ],
  notices: {
    // 전체, 장학, 학부, 대학원 항목별로 최신 6개씩
    all: [
      { createdAt: '2023-07-06', title: '2023학년도 2학기 창업학점제 신청 안내', id: 10911 },
      {
        createdAt: '2023-07-05',
        title: '고양문화재단 「2023 여름특강 아람문예아카데미」 프로그램 안내',
        id: 10910,
      },
      { createdAt: '2023-07-05', title: '기초교육원 제9회 휴먼튜브 영상 공모전 홍보', id: 10909 },
      {
        createdAt: '2023-07-05',
        title: '2023학년도 2학기 국내 타 대학 학점교류 신청 안내',
        id: 10908,
      },
      {
        createdAt: '2023-07-05',
        title: '전월세 안심계약 도움서비스 및 전세사기 피해 신청 안내',
        id: 10907,
      },
      {
        createdAt: '2023-07-05',
        title: '2023년 국가과학기술인력개발원 장애 대학(원)생 멘토링 참여자 모집 안내',
        id: 10906,
      },
    ],
    scholarship: [
      { id: 10882, title: '2023학년도 2학기 삼일장학회 장학생 추천', createdAt: '2023-06-28' },
      {
        id: 10881,
        title: '2023학년도 종근당고촌재단 무상기숙사 장학생 선발 안내',
        createdAt: '2023-06-28',
      },
      {
        id: 10879,
        title:
          'Call for Scholarship: Hyundai Motor Chung Mong-Koo Global Scholarship for Fall 2023',
        createdAt: '2023-06-28',
      },
      {
        id: 10878,
        title: 'Call for Scholarship: Samsung Global Hope Scholarship for Fall 2023',
        createdAt: '2023-06-23',
      },
      {
        id: 10868,
        title: '2023학년도 1학기 컴퓨터공학부 동문회 장학생 모집',
        createdAt: '2023-06-23',
      },
      {
        id: 10854,
        title: '2024학년도 1학기 개도국 대학 교원 지원 프로그램(SPF) 장학생 선발 안내(~7/7) ',
        createdAt: '2023-06-21',
      },
    ],
    undergraduate: [
      { createdAt: '2023-07-06', title: '2023학년도 2학기 창업학점제 신청 안내', id: 10911 },
      {
        createdAt: '2023-07-02',
        title:
          '2023학년도 하계 계절수업 교과목(타 학과(부) 전공 및 교양) 성적평가방법 선택제 신청 안내',
        id: 10886,
      },
      { createdAt: '2023-06-08', title: '컴퓨터공학부 제 1회 진로 콘서트 개최 안내', id: 10822 },
      {
        createdAt: '2023-07-05',
        title: '2023학년도 2학기 국내 타 대학 학점교류 신청 안내',
        id: 10908,
      },
      {
        createdAt: '2023-06-08',
        title: '2023학년도 2학기 학부생 연구 기회 프로그램 (UROP) 신청 안내',
        id: 10821,
      },
      {
        createdAt: '2023-06-05',
        title: '2023학년도 1학기 강의평가 실시 안내',
        id: 10816,
      },
    ],
    graduate: [
      { createdAt: '2023-07-06', title: '2023학년도 2학기 창업학점제 신청 안내', id: 10911 },
      {
        createdAt: '2023-07-05',
        title: '고양문화재단 「2023 여름특강 아람문예아카데미」 프로그램 안내',
        id: 10910,
      },
      { createdAt: '2023-07-05', title: '기초교육원 제9회 휴먼튜브 영상 공모전 홍보', id: 10909 },
      {
        createdAt: '2023-07-05',
        title: '2023학년도 2학기 국내 타 대학 학점교류 신청 안내',
        id: 10908,
      },
      {
        createdAt: '2023-07-05',
        title: '전월세 안심계약 도움서비스 및 전세사기 피해 신청 안내',
        id: 10907,
      },
      {
        createdAt: '2023-07-05',
        title: '2023년 국가과학기술인력개발원 장애 대학(원)생 멘토링 참여자 모집 안내',
        id: 10906,
      },
    ],
  },
  importants: [
    // 공지, 새소식, 세미나 글들 중 하나. 개수는 아직 미정 -> 2개!
    {
      description:
        '2023학년도 2학기 창업학점제 신청을 안내하오니 희망하는 학생들은 2023. 7. 14.(금)까지 신청하여 주시기 바랍니다.',
      title: '2023학년도 2학기 창업학점제 신청 안내',
      id: 10911,
      category: 'notice',
    },
    {
      description:
        '컴퓨터공학부 제 1회 진로 콘서트가 2023년 6월 14일 오후 13시부터 14시까지 302동 105호에서 개최되었습니다.',
      title: '제1회 진로 콘서트 개최',
      id: 734,
      category: 'news',
    },
  ],
});
