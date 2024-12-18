// useMediaQuery가 nextjs15부터 서버단에서 사용하면 에러가 발생해 use client 처리
// TODO: use client 제거
'use client';

import './suneditor-contents.css';

import { Autolinker } from 'autolinker';
import { CSSProperties, ReactNode } from 'react';

import ImageWithFallback from '@/components/common/ImageWithFallback';
import useResponsive from '@/utils/hooks/useResponsive';

interface TopRightComponent {
  type: 'component';
  content: ReactNode;
}

interface HTMLViewerProps {
  htmlContent: string;
  // 우측 상단 표시될 요소
  topRightContent?: TopRightImage | TopRightComponent;
  className?: string;
  style?: CSSProperties;
}

export default function HTMLViewer({
  htmlContent,
  topRightContent,
  className = '',
  style,
}: HTMLViewerProps) {
  // TODO: 서버에서 link 처리?
  // 400.XXX같은 값들이 링크 처리되는걸 막기 위해 tldMatches false처리
  const linkedHTML = Autolinker.link(htmlContent, { urls: { tldMatches: false } });

  return (
    <div className={`flow-root ${className}`}>
      {topRightContent?.type === 'image' && <TopRightImageContent {...topRightContent} />}
      {topRightContent?.type === 'component' && <TopRightComponent {...topRightContent} />}
      <div
        className="sun-editor-editable"
        dangerouslySetInnerHTML={{ __html: linkedHTML }}
        style={style}
      />
    </div>
  );
}

function TopRightComponent({ content }: TopRightComponent) {
  return <div className="relative float-right">{content}</div>;
}

type TopRightImage = {
  type: 'image';
  url: string;
  widthPX: number;
  heightPX: number;
  marginTopPx?: number;
  mobileFullWidth?: boolean;
};

function TopRightImageContent(props: TopRightImage) {
  const { isMobile } = useResponsive();
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
}
