import { getGreetings } from '@/apis/about';
import { greetings } from '@/utils/segmentNode';

import AboutEditPageContent from '../../AboutEditPageContent';

export default async function GreetingsEditPage() {
  const [koData, enData] = await Promise.all([getGreetings('ko'), getGreetings('en')]);

  return <AboutEditPageContent data={{ ko: koData, en: enData }} node={greetings} />;
}
