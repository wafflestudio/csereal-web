'use client';

import { useState } from 'react';

import Image from '@/components/common/Image';
import SnuLogo from '@/public/image/SNU_Logo.svg';
import useStyle from '@/utils/hooks/useStyle';

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { ...rest } = props;
  const [error, setError] = useState(false);
  const { ref } = useStyle<HTMLDivElement>(
    (style) => {
      style.width = `${props.width}px`;
      style.height = `${props.height}px`;
    },
    [props.width, props.height],
  );

  if (error || !props.src) {
    return (
      <div
        className={`flex items-center justify-center bg-neutral-100 ${
          props.fill && 'h-full w-full'
        }`}
        ref={ref}
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
}
