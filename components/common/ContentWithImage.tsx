'use client';

import useResponsive from '@/utils/hooks/useResponsive';

import ImageWithFallback from './ImageWithFallback';
import HTMLViewer from '../editor/HTMLViewer';

interface ContentWithImageProps {
  imageURL?: string | null;
  content: string;
  containerClassName?: string;
  imageWidth: number;
  imageHeight: number;
  imageMarginBottom?: number;
}

export default function ContentWithImage({
  imageURL,
  content,
  containerClassName,
  imageWidth,
  imageHeight,
  imageMarginBottom,
}: ContentWithImageProps) {
  const { screenType } = useResponsive();

  return (
    <div className={containerClassName}>
      {screenType === 'mobile' && imageURL && (
        <div className="relative mb-7 w-full" style={{ marginBottom: imageMarginBottom }}>
          <ImageWithFallback
            alt={`대표_이미지`}
            src={imageURL}
            width={imageWidth}
            height={imageHeight}
            className="w-full object-contain"
          />
        </div>
      )}
      <HTMLViewer
        htmlContent={content}
        topRightContent={
          screenType === 'desktop' && imageURL
            ? {
                type: 'image',
                widthPX: imageWidth,
                heightPX: imageHeight,
                url: imageURL,
              }
            : undefined
        }
      />
    </div>
  );
}
