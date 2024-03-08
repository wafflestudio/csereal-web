'use client';

import { useReducer } from 'react';

import HTMLViewer from '../editor/HTMLViewer';

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isExpanded, toggleExpand] = useReducer((x) => !x, false);

  return (
    <div className="overflow-hidden rounded border-b border-neutral-200 bg-[#efefef]">
      <h4
        className="flex cursor-pointer items-center gap-1 bg-neutral-100 px-4 py-[6px]"
        onClick={toggleExpand}
      >
        <span className="material-symbols-outlined text-[36px] font-light text-main-orange">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
        <span className="font-medium tracking-[0.02em]">{title}</span>
      </h4>
      {isExpanded && (
        <div className="m-5 bg-white">
          <HTMLViewer htmlContent={content} />
        </div>
      )}
    </div>
  );
}
