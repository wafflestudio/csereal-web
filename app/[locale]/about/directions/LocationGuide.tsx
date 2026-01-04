import { useTranslations } from 'next-intl';

import { staff } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

const staffPath = getPath(staff);

export default function LocationGuide() {
  const t = useTranslations('Page.about.directions');

  return (
    <p className="mb-8 text-md leading-[200%]">
      {t('description')}
      <br />
      {t('address')}: {t('addressValue')}
      <br />
      {t('contact')}:{' '}
      <Link href={staffPath} className="text-link hover:underline">
        학부 연락처
      </Link>
    </p>
  );
}
