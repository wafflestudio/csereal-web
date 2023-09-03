'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import SnuLogo from '@/public/image/SNU_Logo.svg';

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, ...rest } = props;
  const [error, setError] = useState(false);

  if (error || !props.src) {
    return (
      <div
        className="flex flex-1 justify-center items-center bg-neutral-100"
        style={{ width: props.width, height: props.height }}
      >
        <SnuLogo className="fill-neutral-300" />
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
  alt: string;
  src: string | null | undefined;
  className?: string;
  sizes?: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  priority?: boolean | undefined;
  loading?: 'eager' | 'lazy' | undefined;
}
