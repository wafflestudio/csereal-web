import Link from 'next/link';
import { useEffect, useState } from 'react';

import PeopleImageWithAnimation from './PeopleImageWithAnimation';

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
  return (
    <div className="relative float-right w-[348px] h-[374px]">
      <PeopleImageWithAnimation imageURL={imageURL} />
      <div className="w-64 h-[196px] absolute bottom-0 left-0 z-10">
        <div
          style={{
            filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.15))',
          }}
          className="w-full h-full absolute"
        >
          <div className="flex flex-col text-neutral-600 font-noto font-medium text-sm gap-[9px] p-5 bg-white">
            {office && <FacultyInfoWithSymbols symbol="distance" content={office} />}
            {phone && <FacultyInfoWithSymbols symbol="phone_in_talk" content={phone} />}
            {fax && <FacultyInfoWithSymbols symbol="print" content={fax} />}
            {email && <FacultyInfoWithSymbols symbol="mail" content={email} />}
            {website && <FacultyInfoWithSymbols symbol="captive_portal" content={website} />}
          </div>
        </div>
        <div className="relative h-full w-full z-[-1]">
          <div
            className="h-full w-full absolute bottom-[-17px] right-[-17px] animate-fadeIn"
            style={{
              background:
                'repeating-linear-gradient(-45deg, white, white 5px, orange 5px, orange 6px)',
            }}
          />
        </div>
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
