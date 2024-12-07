import { getContact } from '@/apis/v1/about/contact';
import { contact } from '@/utils/segmentNode';

import AboutEditor from '../../components/AboutEditor';

export default async function ContactEditPage() {
  const [koData, enData] = await Promise.all([getContact('ko'), getContact('en')]);

  return <AboutEditor data={{ ko: koData, en: enData }} node={contact} />;
}
