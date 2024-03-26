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
  imageMarginTop?: number;
  growWidth?: boolean;
  imageClassName?: string;
  htmlViewerClassName?: string;
}

export default function ContentWithImage({
  imageURL,
  content,
  containerClassName,
  imageWidth,
  imageHeight,
  imageMarginBottom,
  imageMarginTop,
  growWidth = true,
  htmlViewerClassName,
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
            className={`${growWidth && 'w-full'} object-contain`}
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
                marginTopPx: imageMarginTop,
              }
            : undefined
        }
        className={htmlViewerClassName}
      />
    </div>
  );
}
