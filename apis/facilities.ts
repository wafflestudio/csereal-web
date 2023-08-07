import { getRequest } from '.';

export const getMockFacilities = async () => {
  const facilitiesList = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `${index + 1}번째 시설`,
    description: `컴퓨터공학부 행정실에서는 학부생, 대학원생, 교수를 위한 다양한 행정 업무를 돕고 있다. 각 업무별 담당자는 직원 목록을 참조.`,
    location: `301동 316호`,
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-landscape-crop/public/node--facility/admin.JPG?itok=-ilXd4wR',
  }));
  return {
    facilitiesList,
  };
};
