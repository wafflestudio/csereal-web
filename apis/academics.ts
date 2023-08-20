import { Guide } from '@/types/academics';

import { getRequest } from '.';

export const getUndergraduateGuide = () =>
  getRequest('/academics/undergraduate/guide') as Promise<Guide>;

export const getUndergraduateGuideMock: typeof getUndergraduateGuide = async () => ({
  description: mock,
});

const mock = `수강 신청
수강 신청은 1학기 (당해 연도 1월 또는 2월 중), 2학기 (당해 연도 7월 또는 8월 중)
수강 변경은 매 학기 수업 주수 1주 이내 (6학점 이내)
수강 취소는 수업 주수 2/4선 이내
수강 신청 학점 (학기 당)은 18학점 이내
직전 2개 학기 평점 평균이 3.3 이상일 때 21학점까지 신청할 수 있음
직전 학기 학사 경고 (한 학기 성적 평점 평균이 1.7에 미달되거나 3 교과목 이상 또는 6학점 이상이 'F')를 받은 경우는 학기당 15학점까지만 수강 신청 가능
수강에 관한 내규
유사 과목 목록에 따라 중복 수강을 금지한다. (2004학번부터 적용) 컴퓨터공학부에 개설된 과목을 타과의 유사 과목으로 대체 금지. 단, 타과 과목이 컴퓨터공학부 과목보다 심화된 과목의 경우 예외 인정.`;
