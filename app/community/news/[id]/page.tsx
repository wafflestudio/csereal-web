import HTMLViewer, { htmlMock1 } from '@/components/common/HTMLViewer';

export default function NewsPostPage() {
  return (
    <HTMLViewer
      htmlContent={htmlMock1}
      mainImage={{
        url: 'https://picsum.photos/801',
        width: 320,
        height: 240,
      }}
    />
  );
}
