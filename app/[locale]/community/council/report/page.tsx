import { CouncilReport, getCouncilReportList } from '@/apis/v2/council/report';
import NaviBarClose from '@/assets/NaviBar_Close.svg';
import Image from '@/components/common/Image';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilReportList } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { useDayjs } from '@/utils/hooks/useDayjs';
import { getPath } from '@/utils/page';

export const dynamic = 'force-dynamic';

const path = getPath(councilReportList);

export default async function CouncilReportList() {
  const { reports } = await getCouncilReportList();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-wrap gap-[10px]">
        {reports.map((report) => (
          <Tile key={report.id} {...report} />
        ))}
      </div>
      <LoginVisible role={['ROLE_COUNCIL', 'ROLE_STAFF']}>
        <div className="mt-[40px] flex justify-end">
          <Link href={`${path}/create`}>
            <button
              type="button"
              className="ml-4 h-[2.1875rem] rounded-[0.0625rem] bg-neutral-800 px-3 text-md font-semibold leading-loose tracking-wider text-white enabled:hover:bg-neutral-500 disabled:opacity-30"
            >
              새 게시글
            </button>
          </Link>
        </div>
      </LoginVisible>
    </PageLayout>
  );
}

const Tile = ({ id, title, sequence, name, createdAt, imageURL }: CouncilReport) => {
  const href = `${path}/${id}`;
  const formatDate = useDayjs();

  const tileSize = 212;
  const tileSizeTailwind = 'h-[212px] w-[212px]';

  return (
    <Link className={`group relative block ${tileSizeTailwind}`} href={href}>
      <Image
        src={imageURL}
        alt=""
        className={`${tileSizeTailwind} object-cover`}
        width={tileSize}
        height={tileSize}
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between border border-neutral-200 bg-neutral-100 px-[12px] py-[16px] opacity-0 transition-opacity group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
        <div className="text-sm font-normal text-neutral-500">
          <p>
            제 {sequence}대 학생회 {name}
          </p>
          <p>{formatDate ? formatDate({ date: createdAt, format: 'simple' }) : ''}</p>
          <NaviBarClose className="absolute bottom-[16px] right-[12.5px]" />
        </div>
      </div>
    </Link>
  );
};
