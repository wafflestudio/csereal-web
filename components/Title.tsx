'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import './Title.css';

interface TitleProps {
  location: string;
  title: string;
}

export default function Title({ location, title }: TitleProps) {
  const [newWidth, setNewWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const titleRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setNewWidth(node.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    if (newWidth && containerRef.current) {
      containerRef.current.style.width = `${newWidth + 51}px`;
    }
  }, [newWidth]);

  return (
    <div ref={containerRef} className="w-fit min-w-[350px] max-w-[600px]">
      <div className="flex gap-2 mb-2">
        <div className="w-fit text-sm">{location}</div>
        <Node />
      </div>
      <h3 ref={titleRef} className="text-xl inline font-bold mr-[51px] break-keep bg-orange-dark">
        {title}
      </h3>
    </div>
  );
}

function Node() {
  return (
    <div className="flex grow items-center node">
      <div className="border border-orange rounded-full w-2.5 h-2.5" />
      <div className="grow h-0 border-t border-orange" />
      <div className="diag w-[52px] h-0 rotate-45 translate-y-[18.3px] -translate-x-[7.8px] border-t border-orange"></div>
    </div>
  );
}
