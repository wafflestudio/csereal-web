import { putRequest } from '@/apis';
// import { getRequest } from '@/apis';
// import { FETCH_TAG_INTRO } from '@/constants/network';

// export const getCouncilIntro = () =>
//   getRequest<{ description: string; imageURL: string }>('v2/council/intro', undefined, {
//     next: { tags: [FETCH_TAG_INTRO] },
//   });

export const getCouncilIntro = async () => mockData;

export const putOverview = (formData: FormData) =>
  putRequest('/v2/council/intro', { body: formData, jsessionID: true });

const mockData = {
  description:
    '안녕하세요! 연결되는 생각, 도약의 물결 제37대 컴퓨터공학부 학생회 FLOW입니다. 안녕하세요! 연결되는 생각, 도약의 물결 제37대 컴퓨터공학부 학생회 FLOW입니다. 안녕하세요! 연결되는 생각, 도약의 물결 제37대 컴퓨터공학부 학생회 FLOW입니다. 안녕하세요! 연결되는 생각, 도약의 물결 제37대 컴퓨터공학부 학생회 FLOW입니다. 안녕하세요! 연결되는 생각, 도약의 물결 제37대 컴퓨터공학부 학생회 FLOW입니다.',
  imageURL: '',
};
