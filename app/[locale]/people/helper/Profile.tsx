import { Link } from '@/navigation';

import ProfileImage from './ProfileImage';

interface ProfileProps {
  office?: string;
  phone?: string;
  fax?: string;
  email?: string;
  website?: string;
  imageURL: string;
}

export default function Profile({ office, phone, fax, email, website, imageURL }: ProfileProps) {
  return (
    <div className="relative float-right h-[374px] w-[348px]">
      <ProfileImage imageURL={imageURL} />
      <div className="absolute bottom-0 left-0 z-10 h-[196px] w-64">
        <div className="absolute h-full w-full">
          <div className=" flex flex-col gap-[9px] bg-white p-5 text-sm font-medium text-neutral-600">
            <FacultyInfoWithSymbols symbol="distance" label={office} />
            <FacultyInfoWithSymbols symbol="phone_in_talk" label={phone} />
            <FacultyInfoWithSymbols symbol="print" label={fax} />
            <FacultyInfoWithSymbols
              symbol="mail"
              label={email}
              href={email ? `mailto:${email}` : undefined}
            />
            <FacultyInfoWithSymbols symbol="captive_portal" label={website} href={website} />
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

interface SymbolAndLabel {
  symbol: string;
  label?: string;
  href?: string;
}

const FacultyInfoWithSymbols = ({ symbol, label, href }: SymbolAndLabel) => {
  return (
    <div className="flex flex-row gap-[6px] break-all">
      <span className="material-symbols-rounded text-[20px] font-light">{symbol}</span>
      {href ? (
        <Link href={href} className="text-link hover:underline">
          {label}
        </Link>
      ) : (
        <p className="">{label?.length && 0 < label?.length ? label : '-'}</p>
      )}
    </div>
  );
};
