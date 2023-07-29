interface NoticeListProps {}

const NoticeMock = {
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내',
  date: '2023/07/11',
};

const noticeListMock = {
  pin: [NoticeMock, NoticeMock, NoticeMock, NoticeMock, NoticeMock, NoticeMock],
  general: [
    NoticeMock,
    NoticeMock,
    NoticeMock,
    NoticeMock,
    NoticeMock,
    NoticeMock,
    NoticeMock,
    NoticeMock,
    NoticeMock,
  ],
};

export default function NoticeList({}: NoticeListProps) {
  return (
    <div className="mt-3 mx-2.5 text-xs">
      <h5 className="h-[40px] pl-[50px] flex font-yoon border-b border-neutral-300 items-center">
        <span className="w-[570px]">제목</span>
        <span className="w-[200px]">날짜</span>
      </h5>
      <ul className="">
        {noticeListMock.pin.map((notice, i) => (
          <NoticeListRow notice={notice} isPinned={true} idx={i} key={i} />
        ))}
        {noticeListMock.general.map((notice, i) => (
          <NoticeListRow
            notice={notice}
            isPinned={false}
            idx={noticeListMock.pin.length + i}
            key={noticeListMock.pin.length + i}
          />
        ))}
      </ul>
    </div>
  );
}

interface NoticeListRowProps {
  notice: { title: string; date: string };
  isPinned: boolean;
  idx: number;
}

function NoticeListRow({ notice, isPinned, idx }: NoticeListRowProps) {
  const bgColor = idx % 2 ? 'bg-white' : 'bg-neutral-100';
  const fontWeight = isPinned ? 'font-bold' : 'font-normal';

  return (
    <li className={`flex items-center h-[40px] ${bgColor} ${fontWeight}`}>
      <span className="w-[50px] text-center">{isPinned && 'pin'}</span>
      <span className="w-[570px]">{notice.title}</span>
      <span className="w-[200px]">{notice.date}</span>
    </li>
  );
}
