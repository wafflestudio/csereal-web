'use client';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import useResponsive from '@/utils/hooks/useResponsive';
import useStyle from '@/utils/hooks/useStyle';

export type TopRightImage = {
  type: 'image';
  url: string;
  widthPX: number;
  heightPX: number;
  marginTopPx?: number;
  mobileFullWidth?: boolean;
};

export default function TopRightImageContent(props: TopRightImage) {
  const { isMobile } = useResponsive();
  const { url, widthPX: width, heightPX: height, marginTopPx: marginTop } = props;

  return (
    <div
      className="relative mb-7 w-full sm:float-right sm:ml-7 sm:w-auto"
      {...useStyle(
        (style) => {
          style.width = isMobile && props.mobileFullWidth ? '' : `${width}px`;
          style.marginTop = `${marginTop}px`;
        },
        [isMobile, props.mobileFullWidth, marginTop],
      )}
    >
      <ImageWithFallback
        src={url}
        alt="대표 이미지"
        width={width}
        height={height}
        className="w-full object-contain"
        sizes={`${width}px`}
      />
    </div>
  );
}
