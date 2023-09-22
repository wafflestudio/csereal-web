/* eslint-disable @next/next/no-img-element */

import Autolinker from 'autolinker';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { ReactNode } from 'react';

import './common/suneditor.custom.css';

type TopRightImage =
  | {
      type: 'image';
      url: string;
      // px 단위
      width: number;
      // px 단위
      height: number;
    }
  | {
      type: 'imageUnoptimized';
      url: string;
      width: number;
    };

interface TopRightComponent {
  type: 'component';
  content: ReactNode;
}

interface HTMLViewerProps {
  htmlContent: string;
  // 우측 상단 표시될 요소
  topRightContent?: TopRightImage | TopRightComponent;
  margin?: string;
}

export default function HTMLViewer({ htmlContent, topRightContent, margin = '' }: HTMLViewerProps) {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  const linkedHTML = Autolinker.link(sanitizedHTML);

  return (
    <div className={`flow-root ${margin} `}>
      {(topRightContent?.type === 'image' || topRightContent?.type === 'imageUnoptimized') && (
        <TopRightImageContent {...topRightContent} />
      )}
      {topRightContent?.type === 'component' && <TopRightComponent {...topRightContent} />}
      <div
        className="sun-editor-editable [&_strong]:font-noto [&_h1]:font-noto [&_h2]:font-noto [&_h3]:font-noto"
        dangerouslySetInnerHTML={{ __html: linkedHTML }}
      />
    </div>
  );
}

function TopRightImageContent(props: TopRightImage) {
  if (props.type === 'image') {
    const { url, width, height } = props;
    return (
      <div className="relative float-right ml-[28px] mb-[28px]" style={{ width, height }}>
        <Image
          src={url}
          alt="대표 이미지"
          priority
          fill
          className="object-contain"
          sizes={`${width}px`}
        />
      </div>
    );
  } else {
    const { url, width } = props;
    return (
      <div className="relative float-right ml-[28px] mb-[20px]">
        <img src={url} alt="대표 이미지" className="object-contain" width={width} />
      </div>
    );
  }
}

function TopRightComponent({ content }: TopRightComponent) {
  return <div className="relative float-right">{content}</div>;
}
