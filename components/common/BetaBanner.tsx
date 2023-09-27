export default function BetaBanner() {
  return (
    <div className="h-20 bg-neutral-100 border-b border-neutral-150 flex items-center gap-[18.63rem]">
      <div>
        <div className="pl-[13.5rem] flex items-center gap-[.19rem]">
          <div className="rounded-full border border-main-orange w-[.625rem] h-[.625rem] mr-[.63rem]" />
          <p className="text-neutral-900 font-noto text-base font-medium">
            컴퓨터공학부 홈페이지 리뉴얼 베타 테스트
          </p>
        </div>
        <p className="ml-[15rem] text-[#999] font-noto text-[.6875rem]">
          버그 제보 및 각종 피드백은 구글폼에서 가능합니다. 많은 참여 부탁드립니다!
        </p>
        <div />
      </div>
      <a className="text-sm text-main-orange" href="https://forms.gle/wiLUvBXWs4Ytw2jn7">
        구글 폼 바로가기<span className="material-symbols-outlined text-sm">chevron_right</span>
      </a>
    </div>
  );
}
