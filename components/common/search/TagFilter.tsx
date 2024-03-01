import Checkbox from '../Checkbox';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  disabled: boolean;
  searchTags: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, disabled, searchTags }: TagFilterProps) {
  const toggleCheck = (tag: string, isChecked: boolean) => {
    isChecked
      ? searchTags([...selectedTags, tag])
      : searchTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div>
      <h5 className="mb-3 mr-6 text-md font-bold whitespace-nowrap tracking-wide">태그</h5>
      <div className={`flex flex-wrap gap-x-7 gap-y-2.5 pl-2.5`}>
        {tags.map((tag) => (
          <Checkbox
            key={tag}
            label={tag}
            isChecked={selectedTags.includes(tag)}
            toggleCheck={toggleCheck}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
