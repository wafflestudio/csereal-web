import { Autolinker } from 'autolinker';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

import './common/suneditor-contents.css';

type TopRightImage =
  | {
      type: 'image';
      url: string;
      widthPX: number;
      heightPX: number;
    }
  | {
      type: 'imageUnoptimized';
      url: string;
      widthPX: number;
    };

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
  // TODO: 서버에서 link 처리
  const linkedHTML = Autolinker.link(htmlContent);

  return (
    <div className={`flow-root ${className} `}>
      {(topRightContent?.type === 'image' || topRightContent?.type === 'imageUnoptimized') && (
        <TopRightImageContent {...topRightContent} />
      )}
      {topRightContent?.type === 'component' && <TopRightComponent {...topRightContent} />}
      <div
        className="sun-editor-editable"
        dangerouslySetInnerHTML={{ __html: linkedHTML }}
        style={style}
      />
    </div>
  );
}

function TopRightImageContent(props: TopRightImage) {
  if (props.type === 'image') {
    const { url, widthPX: width, heightPX: height } = props;
    return (
      <div className="relative float-right mb-[28px] ml-[28px]" style={{ width, height }}>
        <Image src={url} alt="대표 이미지" fill className="object-contain" sizes={`${width}px`} />
      </div>
    );
  } else {
    const { url, widthPX: width } = props;
    return (
      <div className="relative float-right mb-[20px] ml-[28px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt="대표 이미지" className="object-contain" width={width} />
      </div>
    );
  }
}

function TopRightComponent({ content }: TopRightComponent) {
  return <div className="relative float-right">{content}</div>;
}
