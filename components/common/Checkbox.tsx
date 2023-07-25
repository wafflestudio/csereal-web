interface CheckboxProps {
  checked?: boolean;
  tag: string;
}

export default function Checkbox({ tag }: CheckboxProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="material-symbols-rounded text-lg">check_box</span>
      <label htmlFor={tag} className="font-yoon text-xs">
        {tag}
      </label>
      <input type="checkbox" id={tag} name="tag" value={tag} className="appearance-none" />
    </div>
  );
}
