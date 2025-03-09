import { LANGUAGE, Language } from '@/types/language';
import { getKeys } from '@/utils/object';

export default function LanguagePicker({
  selected,
  onChange,
}: {
  selected: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div className="mb-9 flex gap-3">
      {getKeys(LANGUAGE).map((language) => (
        <span key={language}>
          <input
            id={language}
            type="radio"
            name="language"
            value={language}
            checked={selected === language}
            className="peer appearance-none"
            onChange={() => onChange(language)}
          />
          <label
            htmlFor={language}
            className="cursor-pointer pb-1 font-semibold text-neutral-300 peer-checked:border-b-2 peer-checked:border-b-neutral-800 peer-checked:text-neutral-800"
          >
            {LANGUAGE[language]}
          </label>
        </span>
      ))}
    </div>
  );
}
