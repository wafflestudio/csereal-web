import { getContact } from '@/apis/about';

import ContactEditPageContent from './ContactEditPageContent';

export default async function ContactEditPage() {
  const [koData, enData] = await Promise.all([getContact('ko'), getContact('en')]);

  return <ContactEditPageContent data={{ ko: koData, en: enData }} />;
}
