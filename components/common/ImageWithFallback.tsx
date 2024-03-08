'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import SnuLogo from '@/public/image/SNU_Logo.svg';

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { ...rest } = props;
  const [error, setError] = useState(false);

  if (error || !props.src) {
    return (
      <div
        className={`flex flex-1 items-center justify-center bg-neutral-100 ${
          props.fill && 'h-full w-full'
        }`}
        style={{ width: props.width, height: props.height }}
      >
        <SnuLogo className="fill-neutral-300" width="45" height="47" />
      </div>
    );
  }

  return (
    <Image
      {...rest}
      alt={rest.alt}
      src={props.src}
      onError={() => {
        setError(true);
      }}
    />
  );
}

interface ImageWithFallbackProps {
  src: string | null | undefined;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;

  className?: string;
  sizes?: string;
  fill?: boolean | undefined;
  priority?: boolean | undefined;
}
