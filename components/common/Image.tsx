'use client';

// eslint-disable-next-line no-restricted-imports
import NextImage, { getImageProps } from 'next/image';
import { ComponentProps } from 'react';

import useStyle from '@/utils/hooks/useStyle';

export default function Image(props: ComponentProps<typeof NextImage>) {
  const { props: nextProps } = getImageProps({ ...props });

  const { style, alt, ...delegated } = nextProps;

  return (
    <img
      {...delegated}
      alt={alt}
      {...useStyle((_style) => {
        Object.assign(_style, style);
      }, [])}
    />
  );
}
