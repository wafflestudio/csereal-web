'use client';

import clsx from 'clsx';
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
      className={clsx(
        {
          // 메인화면 background.png에 CLS가 발생해 수동으로 처리
          absolute: props.fill,
        },
        props.className,
      )}
      alt={alt}
      {...useStyle((_style) => {
        Object.assign(_style, style);
      }, [])}
    />
  );
}
