import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  value: string;
  name: string;
  label?: string;
  options?: RegisterOptions;
}

export default function Radio({ name, value, label = name, options }: Props) {
  const { register } = useFormContext();

  return (
    <label className="flex cursor-pointer gap-1 text-md font-medium tracking-wide">
      <input
        type="radio"
        className="h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border-2 border-neutral-300 checked:border-[3px] checked:border-white checked:bg-main-orange checked:shadow-[0_0_0_1.3px_#ff6914] hover:border-main-orange checked:hover:border-white"
        {...register(name, options)}
        value={value}
      />
      {label}
    </label>
  );
}
