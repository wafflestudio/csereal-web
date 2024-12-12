import NextImage, { getImageProps } from 'next/image';
import { ComponentProps } from 'react';

export default function Image(props: ComponentProps<typeof NextImage>) {
  const { props: nextProps } = getImageProps({ ...props });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style: _omit, alt, ...delegated } = nextProps;

  return <img {...delegated} alt={alt} />;
}
