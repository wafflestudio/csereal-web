'use client';

export default function ErrorFallback({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="flex grow flex-col items-start justify-center p-12 text-base text-white">
      <p className="mb-4">
        {error.message} ({error.digest})
      </p>
      <button className="underline" onClick={() => location.reload()}>
        새로고침
      </button>
    </div>
  );
}
