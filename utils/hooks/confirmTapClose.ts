import { useEffect } from 'react';

const useConfirmTabClose = (isDirty: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string }) => {
      if (isDirty) {
        event.preventDefault();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);
};

export default useConfirmTabClose;
