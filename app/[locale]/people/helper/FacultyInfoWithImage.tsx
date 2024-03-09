import { Link } from '@/navigation';

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
    <div className="relative float-right h-[374px] w-[348px]">
      <PeopleImageWithAnimation imageURL={imageURL} />
      <div className="absolute bottom-0 left-0 z-10 h-[196px] w-64">
        <div className="absolute h-full w-full">
          <div className=" flex flex-col gap-[9px] bg-white p-5 text-sm font-medium text-neutral-600">
            {office && <FacultyInfoWithSymbols symbol="distance" content={office} />}
            {phone && <FacultyInfoWithSymbols symbol="phone_in_talk" content={phone} />}
            {fax && <FacultyInfoWithSymbols symbol="print" content={fax} />}
            {email && <FacultyInfoWithSymbols symbol="mail" content={email} />}
            {website && <FacultyInfoWithSymbols symbol="captive_portal" content={website} />}
          </div>
        </div>
        <div className="relative z-[-1] h-full w-full">
          <div
            className="absolute bottom-[-8px] right-[-17px] h-full w-full animate-fadeIn"
            style={{
              background:
                'repeating-linear-gradient(-45deg, transparent, transparent 5px, #E9390B 5px, #E9390B 6px)',
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
    <div className="flex flex-row gap-[6px] break-all">
      <span className="material-symbols-rounded text-[20px] font-light">{symbol}</span>
      {symbol === 'mail' ? (
        <Link href={`mailto:${content}`} className="text-link hover:underline">
          {content}
        </Link>
      ) : symbol === 'captive_portal' ? (
        <Link href={content} className="text-link hover:underline">
          {content}
        </Link>
      ) : (
        <p className="">{content}</p>
      )}
    </div>
  );
};
