import ShortCutBox from '@/components/main/ShortCutBox';

import { facultyRecruitment, notice, topConferenceList } from '@/types/page';

import { getPath } from '@/utils/page';

const tclPath = getPath(topConferenceList);
const facultyRecruitmentPath = getPath(facultyRecruitment);
const undergraduateNoticePath = getPath(notice) + '?tag=학부';

export default function MainPage() {
  return (
    <div>
      <ShortCutBox title={topConferenceList.name} href={tclPath} />
      <ShortCutBox title={facultyRecruitment.name} href={facultyRecruitmentPath} />
      <ShortCutBox title={'학부 ' + notice.name} href={undergraduateNoticePath} />
    </div>
  );
}
