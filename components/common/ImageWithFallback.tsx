'use client';

import Image from 'next/image';
import React, { CSSProperties, useState } from 'react';

import SnuLogo from '@/public/image/SNU_Logo.svg';

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { ...rest } = props;
  const [error, setError] = useState(false);

  if (error || !props.src) {
    return (
      <div
        className={`flex items-center justify-center bg-neutral-100 ${
          props.fill && 'h-full w-full'
        }`}
        style={{ width: props.width, height: props.height }}
      >
        <SnuLogo className="fill-neutral-200" width="60" height="60" />
      </div>
    );
  }

  return (
    <Image
      {...rest}
      alt={rest.alt}
      // src에 가끔 공백문자등이 있는데 처리 안해주면 서버에서 400 에러가 뜸
      src={encodeURI(props.src)}
      onError={() => {
        setError(true);
      }}
    />
  );
}

// TODO: 더 나은 타입 선언 방법 찾기. next/images와 일치하는게 이상적
interface ImageWithFallbackProps {
  src: string | null | undefined;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;

  className?: string;
  sizes?: string;
  fill?: boolean | undefined;
  priority?: boolean | undefined;
  quality?: number;
  style?: CSSProperties;
}
