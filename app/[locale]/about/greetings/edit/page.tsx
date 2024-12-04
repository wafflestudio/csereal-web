import { getGreetings } from '@/apis/v1/about/greetings';
import { greetings } from '@/utils/segmentNode';

import AboutEditor from '../../components/AboutEditor';

export default async function GreetingsEditPage() {
  const [koData, enData] = await Promise.all([getGreetings('ko'), getGreetings('en')]);

  return <AboutEditor data={{ ko: koData, en: enData }} node={greetings} />;
}
