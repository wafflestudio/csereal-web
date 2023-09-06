'use client';

import { useState } from 'react';

/**
 * @param callback submit 시에 실행하고자 하는 비동기 함수(버튼 클릭이나 폼 제출 event)
 * @param resetAfterSuccess 함수가 정상적으로 실행된 이후에 동일한 요청을 또 실행할 수 있도록 초기화(default = true)
 */
export default function useCallbackOnce(callback: Function, resetAfterSuccess: boolean = true) {
  const [pending, setPending] = useState<boolean>(false);

  return async (e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (pending) return;
    setPending(true);
    await callback(e);
    setPending(false);
  };
}
