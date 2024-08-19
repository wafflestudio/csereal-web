import { getResearchLabs } from '@/apis/research';

import GroupCreatePageContent from './GroupCreatePageContent';

export default async function GroupCreatePage() {
  const [koLabs, enLabs] = await Promise.all([getResearchLabs('ko'), getResearchLabs('en')]);

  return <GroupCreatePageContent labs={{ ko: koLabs, en: enLabs }} />;
}
