import { ContactResponse } from '@/types/contact';

import { getRequest } from '.';

const contactPath = '/contact';
export const getContact = () => getRequest(contactPath) as Promise<ContactResponse>;

export const getMockContact: typeof getContact = async () => {
  const contact = {
    mainImage:
      'https://cse.snu.ac.kr/sites/default/files/styles/scale-width-220/public/node--contact/301.jpg?itok=zbUgVCfd',
    address: '08826 서울특별시 관악구 관악로 1 (301동 316호)',
    location: `서울대학교 관악 301동[신공학관1]`,
    staffUrl: 'https://cse.snu.ac.kr/contact-us',
    fax: '(02) 886-7589',
    time: '평일 9:00 ~ 18:00 / 휴게시간: 12:00 ~ 13:00',
    emailList: [
      { name: '학부/대학원 입학 문의', email: 'ipsi@cse.snu.ac.kr' },
      { name: '외국인(글로벌전형) 입학 문의', email: 'admission@cse.snu.ac.kr' },
      { name: '채용정보 게시요청', email: 'bulletin@cse.snu.ac.kr' },
    ],
  };
  return contact;
};
