import { Direction } from '@/types/directions';

import { getRequest } from './fetchAPI';

const directionsPath = '/directions';

export const getDirections = () => getRequest(directionsPath) as Promise<Direction[]>;

export const getDirectionsMock = () => DIRECTIONS_MOCK;

const DIRECTIONS_MOCK: Direction[] = [
  {
    name: '대중교통',
    engName: 'public-transit',
    description: `<div>
<h3>대중교통으로 오는 방법</h3>
  <section>
    <h4>지하철 2호선 낙성대역</h4>
    <p>
      낙성대역 4번 출구로 나와 직진, 주유소에서 좌회전하여 제과점 앞 정류장에서 마을버스
      관악02를 타고 신공학관에서 내립니다.
    </p>
  </section>
  <section>
    <h4>지하철 2호선 서울대입구역</h4>
    <p>
      서울대입구역 3번 출구로 나와 관악구청 방향으로 직진하여 학교 셔틀 버스나 시내버스 5511
      또는 5513을 타고 신공학관에서 내립니다. 신공학관행 셔틀버스는 앙침 8시부터 10시까지
      15분 간격으로 월요일부터 금요일까지 운행합니다.
    </p>
  </section>
</div>`,
  },
  { name: '승용차', engName: 'car', description: '승용차로 오는 방법 어쩌고' },
  { name: '지방 및 해외', engName: 'far-away', description: '지방 및 해외에서 오는 방법 어쩌고' },
];
