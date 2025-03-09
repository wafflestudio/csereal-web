import { lazy, Suspense } from 'react';

import { HTMLEditorProps } from '@/components/form/html/HTMLEditor';
import HTMLEditorFallback from '@/components/form/html/HTMLEditorFallback';

const HTMLEditor = lazy(() => import('./HTMLEditor'));

export default function LazyHTMLEditor(props: HTMLEditorProps) {
  return (
    <Suspense fallback={<HTMLEditorFallback />}>
      <HTMLEditor {...props} />
    </Suspense>
  );
}
