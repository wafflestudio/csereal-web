'use client';

import useResponsive from '@/utils/hooks/useResponsive';

import ImageWithFallback from './ImageWithFallback';
import HTMLViewer from '../editor/HTMLViewer';

interface ContentWithImageProps {
  imageURL?: string | null;
  content: string;
  containerClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function ContentWithImage({
  imageURL,
  content,
  containerClassName,
  imageWidth,
  imageHeight,
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
            ? {
                type: 'image',
                widthPX: imageWidth ?? 320,
                heightPX: imageHeight ?? 200,
                url: imageURL,
              }
            : undefined
        }
      />
    </div>
  );
}
