import { getContact } from '@/apis/about';
import { contact } from '@/utils/segmentNode';

import AboutEditPageContent from '../../AboutEditPageContent';

export default async function ContactEditPage() {
  const [koData, enData] = await Promise.all([getContact('ko'), getContact('en')]);

  return <AboutEditPageContent data={{ ko: koData, en: enData }} node={contact} />;
}
