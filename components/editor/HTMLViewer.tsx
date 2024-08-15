import './SunEditor/suneditor-contents.css';

import { Autolinker } from 'autolinker';
import { CSSProperties, ReactNode } from 'react';

import TopRightImageContent, { TopRightImage } from './TopRightImageContent';

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
