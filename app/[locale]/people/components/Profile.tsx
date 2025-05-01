import ProfileImage from '@/app/[locale]/people/components/ProfileImage';

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
    <div className="relative mb-8 sm:float-right">
      <ProfileImage imageURL={imageURL} />

      <div className="mt-5 flex flex-col gap-[9px] bg-white text-sm font-medium text-neutral-600">
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
  );
}

interface SymbolAndLabel {
  symbol: string;
  label?: string;
  href?: string;
}

const FacultyInfoWithSymbols = ({ symbol, label, href }: SymbolAndLabel) => {
  return (
    <div className="flex items-center gap-[6px] break-all">
      <span className="material-symbols-rounded text-[20px] font-light">{symbol}</span>
      {href ? (
        // 외부링크 a태그 사용, 새창에서 열리도록 target="_blank" 추가
        <a
          target="_blank"
          href={href}
          className="text-link hover:underline"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <p>{label?.length && 0 < label?.length ? label : '-'}</p>
      )}
    </div>
  );
};
