'use client';

import { useState } from 'react';

import { errorToast } from '@/components/common/toast';

export default function useCallbackOnce(callback: Function, reset: boolean = true) {
  const [requesting, setRequesting] = useState<boolean>(false);

  return async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    if (requesting) return;
    try {
      setRequesting(true);
      await callback(e);
      if (reset) setRequesting(false);
    } catch (e) {
      setRequesting(false);
      if (e instanceof Error) {
        errorToast(e.message);
      } else {
        throw e;
      }
    }
  };
}
