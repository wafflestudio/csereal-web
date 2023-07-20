'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LuChevronRight } from 'react-icons/lu';
import './Title.css';

interface TitleProps {
  location: string[];
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
      containerRef.current.style.width = `${newWidth}px`;
    }
  }, [newWidth]);

  return (
    <div className="w-fit min-w-[350px]">
      <div className="flex gap-2 mb-2">
        <Location location={location} />
        <Node />
      </div>
      <div ref={containerRef} className="max-w-[550px] mr-[51px]">
        <h3 ref={titleRef} className="text-xl inline font-bold break-keep">
          {title}
        </h3>
      </div>
    </div>
  );
}

function Location({ location }: { location: string[] }) {
  return (
    <div className="flex items-center w-fit text-sm">
      {location.map((loca, i) => {
        return (
          <span key={loca} className="flex items-center">
            {loca}
            {i === location.length - 1 ? null : <LuChevronRight />}
          </span>
        );
      })}
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
