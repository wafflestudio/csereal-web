import { Link } from '@/navigation';

import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';

const staffPath = getPath(staff);

export default function LocationGuide() {
  return (
    <p className="text-md leading-[200%] mb-8">
      컴퓨터공학부는 서울대학교 관악 301동(신공학관1)에 있습니다.
      <br />
      주소: 08826 서울특별시 관악구 관악로 1 서울대학교 공과대학 컴퓨터공학부 행정실(301동 316호)
      <br />
      전화:{' '}
      <Link href={staffPath} className="text-link hover:underline">
        학부 연락처
      </Link>
    </p>
  );
}
