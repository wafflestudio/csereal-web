import HTMLViewer, { htmlMock1 } from '@/components/common/HTMLViewer';

export default function NewsPostPage() {
  return (
    <HTMLViewer
      htmlContent={htmlMock1}
      mainImage={{
        url: 'https://picsum.photos/800',
        width: 320,
        height: 200,
      }}
    />
  );
}
