import { MainContents } from '@/types/main';

export const getMockMainContents = async (): Promise<MainContents> => ({
  slides: [
    // isSlide === true인 새소식 중 최신 20개
    { id: 1, title: '제목', imageURL: '대표이미지 주소', description: '내용' },
    { id: 2, title: '제목', imageURL: '대표이미지 주소', description: '내용' },
    { id: 3, title: '제목', imageURL: '대표이미지 주소', description: '내용' },
  ],
  notices: {
    // 전체, 장학, 학부, 대학원 항목별로 최신 6개씩
    all: [
      { createdAt: '2021-08-18', title: '이제 진짜 자야 된다', id: 4 },
      { createdAt: '2021-08-19', title: '지금 자면 5시간', id: 5 },
      { createdAt: '2021-08-20', title: '내일 영어논문 보려면 와... 진짜 싫다', id: 8 },
      { createdAt: '2021-08-23', title: '휴학하고 싶다', id: 62 },
      {
        createdAt: '2021-08-23',
        title: '로그잉ㄴ 언제 해 rl 긴 문장 하나 더 만드러어ㅗㅂ알 ㅏ야',
        id: 45,
      },
      {
        createdAt: '2021-08-23',
        title: '살려줘요 긴 문장 말줄임 테스트ㅡㅡㅡㅡ으아아 왜 안 줄어',
        id: 496,
      },
    ],
    scholarship: [
      { id: 1, title: '장학 공지 제목', createdAt: '2021-08-18' },
      { id: 2, title: '공지 제목2', createdAt: '2021-08-18' },
      { id: 3, title: '공지 제목3', createdAt: '2021-08-18' },
    ],
    undergraduate: [
      { id: 1, title: '학부 공지 제목', createdAt: '2021-08-18' },
      { id: 2, title: '공지 제목2', createdAt: '2021-08-18' },
      { id: 3, title: '공지 제목3', createdAt: '2021-08-18' },
    ],
    graduate: [
      { id: 1, title: '대학우너 공지 제목', createdAt: '2021-08-18' },
      { id: 2, title: '공지 제목2', createdAt: '2021-08-18' },
      { id: 3, title: '공지 제목3', createdAt: '2021-08-18' },
    ],
  },
  importants: [
    // 공지, 새소식, 세미나 글들 중 하나. 개수는 아직 미정 -> 2개!
    { id: 1, title: '공지 제목', summary: '요약', category: 'notice' },
    { id: 2, title: '새소식 제목2', summary: '요약', category: 'news' },
  ],
});
