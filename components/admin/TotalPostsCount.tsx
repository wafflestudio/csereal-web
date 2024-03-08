export default function TotalPostsCount({ count }: { count: number }) {
  return (
    <span className="mb-3 ml-[1.5625rem] mt-[2.375rem] block text-xs tracking-wide text-neutral-500">
      총 {count}개의 게시물
    </span>
  );
}
