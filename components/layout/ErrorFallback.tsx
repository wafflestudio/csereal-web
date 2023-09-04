'use client';

export default function ErrorFallback({ error }: { error: any }) {
  return (
    <div className="flex flex-col items-start mx-[3.75rem] mt-3">
      <p className="mb-4">문제가 발생했습니다 :(</p>
      <i>{error.message}</i>
      <i className="mb-4">digest: {error.digest ?? '없음'}</i>
      <button className="underline" onClick={() => location.reload()}>
        새로고침
      </button>
    </div>
  );
}
