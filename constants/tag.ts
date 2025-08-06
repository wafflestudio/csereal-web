export interface Tag {
  id: string; // 태그 식별자
  transKey: string; // 태그 표시 텍스트
}

export const NOTICE_TAGS: Tag[] = [
  { id: '수업', transKey: 'lecture' },
  { id: '장학', transKey: 'scholarship' },
  { id: '학사(학부)', transKey: 'undergraduate' },
  { id: '학사(대학원)', transKey: 'graduate' },
  { id: '다전공/전과', transKey: 'curriculumChange' },
  { id: '등록/복학/휴학/재입학', transKey: 'enrollmentStatus' },
  { id: '입학', transKey: 'admission' },
  { id: '졸업', transKey: 'graduation' },
  { id: '채용정보', transKey: 'recruitment' },
  { id: '교환학생/유학', transKey: 'exchange' },
  { id: '외부행사/프로그램', transKey: 'externalPrograms' },
  { id: '내부행사/프로그램', transKey: 'internalPrograms' },
  { id: 'international', transKey: 'international' },
];

export const NEWS_TAGS: Tag[] = [
  { id: '행사', transKey: 'event' },
  { id: '연구', transKey: 'research' },
  { id: '수상', transKey: 'award' },
  { id: '채용', transKey: 'recruitment' },
  { id: '칼럼', transKey: 'column' },
  { id: '강연', transKey: 'lecture' },
  { id: '교육', transKey: 'education' },
  { id: '인터뷰', transKey: 'interview' },
  { id: '진로', transKey: 'career' },
  { id: '과거 미분류', transKey: 'archive' },
];

export const SEARCH_TAGS: Tag[] = [
  { id: '소개', transKey: 'about' },
  { id: '소식', transKey: 'community' },
  { id: '구성원', transKey: 'people' },
  { id: '연구', transKey: 'research' },
  { id: '입학', transKey: 'admission' },
  { id: '학사 및 교과', transKey: 'academics' },
];
