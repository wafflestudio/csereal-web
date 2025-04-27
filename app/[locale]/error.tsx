'use client';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const errorMessage = getReadableErrorMessage(error);

  return (
    <PageLayout titleType="big" hideNavbar={true}>
      <div className="flex flex-col items-start justify-center p-4 text-center">
        <h2 className="mb-4 text-2xl font-bold">불편을 드려 죄송합니다.</h2>
        <p className="mb-6">{errorMessage}</p>
        <p className="mb-6"></p>
        <button className="underline" onClick={() => reset()}>
          새로고침
        </button>
      </div>
    </PageLayout>
  );
}

function getReadableErrorMessage(error: Error): string {
  const errorMessage = error.message.toLowerCase();

  // 네트워크 관련 오류
  if (errorMessage.includes('econnrefused')) {
    return '서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.';
  }

  if (errorMessage.includes('etimedout') || errorMessage.includes('timeout')) {
    return '서버 응답 시간이 초과되었습니다. 네트워크 상태를 확인하고 다시 시도해주세요.';
  }

  if (errorMessage.includes('enotfound')) {
    return '서버 주소를 찾을 수 없습니다. 인터넷 연결을 확인해주세요.';
  }

  if (errorMessage.includes('econnreset')) {
    return '서버와의 연결이 끊어졌습니다. 다시 시도해주세요.';
  }

  // HTTP 상태 코드 관련 오류
  if (errorMessage.includes('status code 404') || errorMessage.includes('not found')) {
    return '요청하신 정보를 찾을 수 없습니다.';
  }

  if (errorMessage.includes('status code 403') || errorMessage.includes('forbidden')) {
    return '해당 페이지에 접근할 권한이 없습니다.';
  }

  if (errorMessage.includes('status code 401') || errorMessage.includes('unauthorized')) {
    return '로그인이 필요하거나 세션이 만료되었습니다.';
  }

  if (errorMessage.includes('status code 500') || errorMessage.includes('internal server error')) {
    return '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }

  if (errorMessage.includes('network') || errorMessage.includes('internet')) {
    return '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인해주세요.';
  }

  // 기본 메시지
  return '페이지를 불러오는 중 문제가 발생했습니다.';
}
