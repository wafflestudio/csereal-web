import { useTranslations } from 'next-intl';

// 예약 부분의 '301-417 (20석)'에서 괄호 부분이 작도록 처리합니다.
export default function NavLabel({ text }: { text: string }) {
  const t = useTranslations('Nav');

  const idx = text.indexOf('(');
  if (idx === -1) return t(text);

  return (
    <>
      {text.slice(0, idx)}
      <span className="text-xs leading-5 font-medium">{text.slice(idx)}</span>
    </>
  );
}
