import { headers } from 'next/headers';
import { CSSProperties } from 'react';

export const styleWithNonce = (style: CSSProperties) => {
  const nonce = headers().get('x-nonce') ?? undefined;
  return { nonce, style };
};
