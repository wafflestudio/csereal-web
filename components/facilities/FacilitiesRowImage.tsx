'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FacilitiesRowImage({ imageURL }: { imageURL: string }) {
  const [hover, setHover] = useState(false);
  const src = hover
    ? `/image/facilities/${imageURL}-color.png`
    : `/image/facilities/${imageURL}-original.png`;

  return (
    <div
      className="w-60 h-40 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image alt="대표 이미지" src={src} fill sizes="10rem" priority />
    </div>
  );
}
