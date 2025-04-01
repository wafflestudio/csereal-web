import { useEffect } from 'react';

const useConfirmTabClose = (isDirty: boolean) => {
  useEffect(() => {
    if (!isDirty) return;

    const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string }) => {
      event.preventDefault();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);
};

export default useConfirmTabClose;
