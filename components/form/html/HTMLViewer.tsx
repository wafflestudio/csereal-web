import './suneditor-contents.css';

import { Autolinker } from 'autolinker';
import parse, { DOMNode, Element } from 'html-react-parser';
import { ReactNode } from 'react';

import HTMLHydrator from '@/components/form/html/HTMLHydrator';
import TopRightImageContent, { TopRightImage } from '@/components/form/html/TopRightImage';

interface TopRightComponent {
  type: 'component';
  content: ReactNode;
}

interface HTMLViewerProps {
  htmlContent: string;
  // 우측 상단 표시될 요소
  topRightContent?: TopRightImage | TopRightComponent;
  wrapperClassName?: string;
  contentClassName?: string;
}

export default function HTMLViewer({
  htmlContent,
  topRightContent,
  wrapperClassName,
  contentClassName,
}: HTMLViewerProps) {
  // TODO: 서버에서 link 처리?
  // 400.XXX같은 값들이 링크 처리되는걸 막기 위해 tldMatches false처리
  const linkedHTML = Autolinker.link(htmlContent, { urls: { tldMatches: false } });

  const replace = (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      const { style, ...rest } = domNode.attribs;
      domNode.attribs = rest;
      domNode.attribs['data-style'] = style;
    }
    return domNode;
  };

  return (
    <div className={`flow-root ${wrapperClassName}`}>
      {topRightContent?.type === 'image' && <TopRightImageContent {...topRightContent} />}
      {topRightContent?.type === 'component' && (
        <div className="relative float-right">{topRightContent.content}</div>
      )}
      <div className={`sun-editor-editable ${contentClassName}`}>
        {parse(linkedHTML, { replace })}
        <HTMLHydrator />
      </div>
    </div>
  );
}
