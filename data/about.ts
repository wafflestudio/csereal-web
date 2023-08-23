import { readFile } from 'fs/promises';

import { Overview } from '@/types/about';

export const getMockOverview = async (): Promise<Overview> => {
  return {
    description: await readFile('data/htmls/overViewDescription.txt', { encoding: 'utf-8' }),
    imageURL:
      'https://cse.snu.ac.kr/sites/default/files/styles/medium-larger/public/node--page/301302.jpg?itok=96k1IsL0',
    attachment: {
      name: 'CSE_Brochure.pdf',
      url: 'https://cse.snu.ac.kr/sites/default/files/node--page/CSE_Brochure.pdf',
      byte: 2815000000000,
    },
  };
};
