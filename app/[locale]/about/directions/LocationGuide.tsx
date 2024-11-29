import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';

const staffPath = getPath(staff);

export default function LocationGuide() {
  const t = useTranslations('Footer');
  const tContent = useTranslations('Content');

  return (
    <p className="mb-8 text-md leading-[200%]">
      컴퓨터공학부는 서울대학교 관악 301동(신공학관1)에 있습니다.
      <br />
      {tContent('주소')}: {t('address')}
      <br />
      {tContent('전화')}:{' '}
      <Link href={staffPath} className="text-link hover:underline">
        학부 연락처
      </Link>
    </p>
  );
}
