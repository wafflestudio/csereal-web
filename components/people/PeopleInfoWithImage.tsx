import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { faculty, laboratories, staff } from '@/types/page';

import { getPath } from '@/utils/page';

export interface FacultyInfoWithImageProps {
  office?: string;
  phone?: string;
  fax?: string;
  email?: string;
  website?: string;
  imageURL: string;
}

export default function FacultyInfoWithImage({
  office,
  phone,
  fax,
  email,
  website,
  imageURL,
}: FacultyInfoWithImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  return (
    <div className="relative float-right w-[348px] h-[374px]">
      <div
        className="w-[186px] h-[248px] absolute top-0 right-0 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute w-full h-full z-20"
          style={{
            filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
          }}
        >
          <Image
            alt="대표 이미지"
            src={imageURL}
            fill
            className="w-full h-full object-cover "
            sizes="186px, 248px"
            style={{
              clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
            }}
          />
        </div>
        {isHovered && (
          <div className="relative h-full w-full">
            <div
              className="h-full w-full absolute bottom-[-17px] left-[-17px] "
              style={{
                background:
                  'repeating-linear-gradient(-45deg, white, white 5px, orange 5px, orange 6px)',
                clipPath: 'polygon(84.375% 0%, 100% 11.71875%, 100% 100%, 0% 100%, 0% 0%)',
              }}
            />
          </div>
        )}
      </div>
      <div className="w-64 h-[196px] absolute bottom-0 left-0 z-10">
        <div
          style={{
            filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
          }}
          className="w-full h-full absolute"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col text-neutral-600 font-noto font-medium text-sm gap-[9px] p-5 bg-white">
            {office && <FacultyInfoWithSymbols symbol="distance" content={office} />}
            {phone && <FacultyInfoWithSymbols symbol="phone_in_talk" content={phone} />}
            {fax && <FacultyInfoWithSymbols symbol="print" content={fax} />}
            {email && <FacultyInfoWithSymbols symbol="mail" content={email} />}
            {website && <FacultyInfoWithSymbols symbol="captive_portal" content={website} />}
          </div>
        </div>
        {isHovered && (
          <div className="relative h-full w-full z-[-1]">
            <div
              className="h-full w-full absolute bottom-[-17px] right-[-17px] "
              style={{
                background:
                  'repeating-linear-gradient(-45deg, white, white 5px, orange 5px, orange 6px)',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface FacultyInfoWithSymbols {
  symbol: string;
  content: string;
}

const FacultyInfoWithSymbols = ({ symbol, content }: FacultyInfoWithSymbols) => {
  return (
    <div className="flex flex-row break-all gap-[6px]">
      <span className="material-symbols-rounded text-[20px] font-light text-neutral-400">
        {symbol}
      </span>
      {symbol === 'mail' ? (
        <Link href={`mailto:${content}`} className="text-link hover:underline">
          {content}
        </Link>
      ) : symbol === 'captive_portal' ? (
        <Link href={content} className="text-link hover:underline">
          {content}
        </Link>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};
