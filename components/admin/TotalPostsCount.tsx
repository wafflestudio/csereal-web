export default function TotalPostsCount({ count }: { count: number }) {
  return (
    <span className="block mt-[2.375rem] mb-3 ml-[1.5625rem] text-xs text-neutral-500 tracking-wide">
      총 {count}개의 게시물
    </span>
  );
}
