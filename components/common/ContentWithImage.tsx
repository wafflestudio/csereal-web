'use client';

import useResponsive from '@/utils/hooks/useResponsive';

import ImageWithFallback from './ImageWithFallback';
import HTMLViewer from '../editor/HTMLViewer';

interface ContentWithImageProps {
  imageURL?: string | null;
  content: string;
  containerClassName?: string;
}

export default function ContentWithImage({
  imageURL,
  content,
  containerClassName,
}: ContentWithImageProps) {
  const { screenType } = useResponsive();

  return (
    <div className={containerClassName}>
      {imageURL && (
        <div className="relative mb-7 aspect-[4/3] sm:hidden">
          <ImageWithFallback alt={`대표_이미지`} src={imageURL} className="object-contain" fill />
        </div>
      )}
      <HTMLViewer
        htmlContent={content}
        topRightContent={
          imageURL && screenType === 'desktop'
            ? { type: 'image', widthPX: 320, heightPX: 200, url: imageURL }
            : undefined
        }
      />
    </div>
  );
}
