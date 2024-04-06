'use client';

import useResponsive from '@/utils/hooks/useResponsive';

import ImageWithFallback from '../common/ImageWithFallback';

export type TopRightImage =
  | {
      type: 'image';
      url: string;
      widthPX: number;
      heightPX: number;
      marginTopPx?: number;
      mobileFullWidth?: boolean;
    }
  | {
      type: 'imageUnoptimized';
      url: string;
      widthPX: number;
    };

export default function TopRightImageContent(props: TopRightImage) {
  const { isMobile } = useResponsive();

  if (props.type === 'image') {
    const { url, widthPX: width, heightPX: height, marginTopPx: marginTop } = props;
    return (
      <div
        className="relative mb-7 w-full sm:float-right sm:ml-7 sm:w-auto"
        style={{
          width: isMobile && props.mobileFullWidth ? undefined : width,
          marginTop,
        }}
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
  } else {
    const { url, widthPX: width } = props;
    return (
      <div className="relative float-right mb-5 ml-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt="대표 이미지" className="object-contain" width={width} />
      </div>
    );
  }
}
