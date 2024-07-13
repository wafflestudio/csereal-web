export default function BasicRadioInput({
  value,
  label,
  name,
  checked,
  onChange,
}: {
  value: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex cursor-pointer gap-1 text-md font-medium tracking-wide">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className="h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border-2 border-neutral-300 checked:border-[3px] checked:border-white checked:bg-main-orange checked:shadow-[0_0_0_1.3px_#ff6914] hover:border-main-orange checked:hover:border-white"
        onChange={(e) => onChange(e.target.value)}
      />
      {label}
    </label>
  );
}
